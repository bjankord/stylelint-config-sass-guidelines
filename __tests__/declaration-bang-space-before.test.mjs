import { beforeEach, describe, it } from 'node:test';
import assert from 'node:assert/strict';

import stylelint from 'stylelint';

import config from '../index.js';

describe('flags warnings with declaration-bang-space-before lint', () => {
	const invalidScss = (
`.test-selector { color: #fff!important; }
.test-selector { color: #fff  !important; }
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
				'Expected single space before "!" (@stylistic/declaration-bang-space-before)',
				'Expected single space before "!" (@stylistic/declaration-bang-space-before)',
			],
		);
	});

	it('correct rule flagged', () => {
		assert.deepEqual(
			result.results[0].warnings.map((w) => w.rule),
			[
				'@stylistic/declaration-bang-space-before',
				'@stylistic/declaration-bang-space-before',
			],
		);
	});
});
