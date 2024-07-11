import { beforeEach, describe, it } from 'node:test';
import assert from 'node:assert/strict';

import stylelint from 'stylelint';

import config from '../index.js';

describe('flags warnings with selector-pseudo-element-colon-notation lint', () => {
	const invalidScss = (
`p:before {
  content: '>';
}

p::hover {
  color: #f00;
}
`);

	let result;

	beforeEach(async () => {
		result = await stylelint.lint({
			code: invalidScss,
			config,
		});
	});

	it('did error', () => {
		assert.equal(result.errored, true);
	});

	it('flags warnings', () => {
		assert.equal(result.results[0].warnings.length, 2);
	});

	it('correct warning text', () => {
		assert.deepEqual(
			result.results[0].warnings.map((w) => w.text),
			[
				'Expected double colon pseudo-element notation (selector-pseudo-element-colon-notation)',
        'Unexpected unknown pseudo-element selector "::hover" (selector-pseudo-element-no-unknown)'
			],
		);
	});

	it('correct rule flagged', () => {
		assert.deepEqual(
			result.results[0].warnings.map((w) => w.rule),
			[
				'selector-pseudo-element-colon-notation',
        'selector-pseudo-element-no-unknown',
			],
		);
	});
});

describe('does not flag warnings with valid selector-pseudo-element-colon-notation lint', () => {
	const validScss = (
`a::before {
  content: '>';
}

a:hover {
  color: #f00;
}`);

	let result;

	beforeEach(async () => {
		result = await stylelint.lint({
			code: validScss,
			config,
		});
	});

	it('did not error', () => {
		assert.equal(result.errored, false);
	});

	it('does not flag warnings', () => {
		assert.equal(result.results[0].warnings.length, 0);
	});
});
