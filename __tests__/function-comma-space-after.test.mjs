import { beforeEach, describe, it } from 'node:test';
import assert from 'node:assert/strict';

import stylelint from 'stylelint';

import config from '../index.js';

describe('flags warnings with function-comma-space-after lint', () => {
	const invalidScss = (
`.test-selector { transform: translate(1,1); }
.test-selector { transform: translate(1 ,1); }
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
				'Expected single space after "," in a single-line function (@stylistic/function-comma-space-after)',
				'Expected single space after "," in a single-line function (@stylistic/function-comma-space-after)'
			],
		);
	});

	it('correct rule flagged', () => {
		assert.deepEqual(
			result.results[0].warnings.map((w) => w.rule),
			[
				'@stylistic/function-comma-space-after',
				'@stylistic/function-comma-space-after'
			],
		);
	});
});

describe('does not flag warnings with valid function-comma-space-after', () => {
	const validScss = (
`.test-selector {
  @include box-shadow(0 2px 2px rgba(0, 0, 0, 0.2));
  color: rgba(0, 0, 0, 0.1); 
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
