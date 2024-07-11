import { beforeEach, describe, it } from 'node:test';
import assert from 'node:assert/strict';

import stylelint from 'stylelint';

import config from '../index.js';

describe('flags warnings with declaration-bang-space-after lint', () => {
	const invalidScss = (
`.test-selector { color: #fff ! important; }
.test-selector { color: #fff! important; }
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
		assert.equal(result.results[0].warnings.length, 3);
	});

	it('correct warning text', () => {
		assert.deepEqual(
			result.results[0].warnings.map((w) => w.text),
			[
        'Unexpected whitespace after "!" (@stylistic/declaration-bang-space-after)',
        'Unexpected whitespace after "!" (@stylistic/declaration-bang-space-after)',
        'Expected single space before "!" (@stylistic/declaration-bang-space-before)'
			],
		);
	});

	it('correct rule flagged', () => {
		assert.deepEqual(
			result.results[0].warnings.map((w) => w.rule),
			[
				'@stylistic/declaration-bang-space-after',
				'@stylistic/declaration-bang-space-after',
				'@stylistic/declaration-bang-space-before',
			],
		);
	});
});

describe('does not flag warnings with valid declaration-bang-space-after', () => {
	const validScss = (
`.test-selector {
  color: #000 !important;
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
