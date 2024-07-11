import { beforeEach, describe, it } from 'node:test';
import assert from 'node:assert/strict';

import stylelint from 'stylelint';

import config from '../index.js';

describe('flags warnings with media-feature-parentheses-space-inside lint', () => {
	const invalidScss = (`@media ( max-width: 300px ) {
  .test-selector {
    color: #fff;
  }
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
				'Unexpected whitespace after "(" (@stylistic/media-feature-parentheses-space-inside)',
        'Unexpected whitespace before ")" (@stylistic/media-feature-parentheses-space-inside)'
			],
		);
	});

	it('correct rule flagged', () => {
		assert.deepEqual(
			result.results[0].warnings.map((w) => w.rule),
			[
				'@stylistic/media-feature-parentheses-space-inside',
        '@stylistic/media-feature-parentheses-space-inside'
			],
		);
	});
});

describe('does not flag warnings with valid media-feature-parentheses-space-inside', () => {
	const validScss = (
`@media (max-width: 300px) {
  .media-parens {
    margin: 0;
  }
}
`);

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
