import { beforeEach, describe, it } from 'node:test';
import assert from 'node:assert/strict';

import stylelint from 'stylelint';

import config from '../index.js';

describe('flags warnings with invalid scss/dollar-variable-pattern lint', () => {
	const invalidScss = (
`$myVar: 10px;
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
        'Expected $ variable name to match specified pattern (scss/dollar-variable-pattern)',
			],
		);
	});

	it('correct rule flagged', () => {
		assert.deepEqual(
			result.results[0].warnings.map((w) => w.rule),
			[
        'scss/dollar-variable-pattern',
			],
		);
	});
});

describe('does not flag warnings with valid scss/dollar-variable-pattern lint', () => {
	const validScss = (
`$my-var: 10px;

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
