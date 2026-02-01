import { beforeEach, describe, it } from 'node:test';
import assert from 'node:assert/strict';

import stylelint from 'stylelint';

import config from '../index.js';

describe('flags warnings with scss/at-function-pattern lint', () => {
	const invalidScss = (
`@function calculationFunction($some-number, $another-number) {
  @return $some-number + $another-number;
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
		assert.equal(result.results[0].warnings.length, 1);
	});

	it('correct warning text', () => {
		assert.deepEqual(
			result.results[0].warnings.map((w) => w.text),
			[
			  'Expected "calculationFunction" to match pattern "^[a-z]+([a-z0-9-]+[a-z0-9]+)?$" (scss/at-function-pattern)',
			],
		);
	});

	it('correct rule flagged', () => {
		assert.deepEqual(
			result.results[0].warnings.map((w) => w.rule),
			[
				'scss/at-function-pattern',
			],
		);
	});
});

describe('does not flag warnings with valid scss/at-function-pattern', () => {
	const validScss = (
`@function calculation-function($some-number, $another-number) {
  @return $some-number + $another-number;
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
