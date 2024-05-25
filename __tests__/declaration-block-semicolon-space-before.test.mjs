import { beforeEach, describe, it } from 'node:test';
import assert from 'node:assert/strict';

import stylelint from 'stylelint';

import config from '../index.js';

describe('flags warnings with declaration-block-semicolon-space-before lint', () => {
	const invalidScss = (`.test-selector { color: #fff ; }`);

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
				'Unexpected whitespace before ";" (@stylistic/declaration-block-semicolon-space-before)',
        'Unexpected missing end-of-source newline (@stylistic/no-missing-end-of-source-newline)'
			],
		);
	});

	it('correct rule flagged', () => {
		assert.deepEqual(
			result.results[0].warnings.map((w) => w.rule),
			[
				'@stylistic/declaration-block-semicolon-space-before',
        '@stylistic/no-missing-end-of-source-newline'
			],
		);
	});
});
