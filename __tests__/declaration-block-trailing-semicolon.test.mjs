import { beforeEach, describe, it } from 'node:test';
import assert from 'node:assert/strict';

import stylelint from 'stylelint';

import config from '../index.js';

describe('flags warnings with declaration-block-trailing-semicolon lint', () => {
	const invalidScss = (
`.test-selector { color: #fff }
.test-selector { background: #000; color: #fff }
.test-selector { @include foo }
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
		assert.equal(result.results[0].warnings.length, 5);
	});

	it('correct warning text', () => {
		assert.deepEqual(
			result.results[0].warnings.map((w) => w.text),
			[
				'Expected newline after ";" (@stylistic/declaration-block-semicolon-newline-after)',
        'Expected a trailing semicolon (@stylistic/declaration-block-trailing-semicolon)',
        'Expected a trailing semicolon (@stylistic/declaration-block-trailing-semicolon)',
        'Expected a trailing semicolon (@stylistic/declaration-block-trailing-semicolon)',
        'Expected no more than 1 declaration (declaration-block-single-line-max-declarations)'
			],
		);
	});

	it('correct rule flagged', () => {
		assert.deepEqual(
			result.results[0].warnings.map((w) => w.rule),
			[
				'@stylistic/declaration-block-semicolon-newline-after',
        '@stylistic/declaration-block-trailing-semicolon',
        '@stylistic/declaration-block-trailing-semicolon',
        '@stylistic/declaration-block-trailing-semicolon',
        'declaration-block-single-line-max-declarations'
			],
		);
	});
});
