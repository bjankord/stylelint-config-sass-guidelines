import { beforeEach, describe, it } from 'node:test';
import assert from 'node:assert/strict';

import stylelint from 'stylelint';

import config from '../index.js';

describe('flags warnings with declaration-block-single-line-max-declarations lint', () => {
	const invalidScss = (`
.test-selector { color: #fff; top: 0; }

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
        'Expected newline after ";" (@stylistic/declaration-block-semicolon-newline-after)',
        'Expected no more than 1 declaration (declaration-block-single-line-max-declarations)'
			],
		);
	});

	it('correct rule flagged', () => {
		assert.deepEqual(
			result.results[0].warnings.map((w) => w.rule),
			[
        '@stylistic/declaration-block-semicolon-newline-after',
        'declaration-block-single-line-max-declarations'
			],
		);
	});
});

describe('does not flag warnings with valid declaration-block-single-line-max-declarations', () => {
	const validScss = (
`.test-selector { color: #000; }
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
