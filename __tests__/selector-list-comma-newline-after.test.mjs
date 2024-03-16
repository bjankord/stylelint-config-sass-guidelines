import { beforeEach, describe, it } from 'node:test';
import assert from 'node:assert/strict';

import stylelint from 'stylelint';

import config from '../index.js';

describe('flags warnings with selector-list-comma-newline-after lint', () => {
	const invalidScss = (
`a, b {
  color: #fff;
}

a
, b {
  color: #000;
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
				'Expected newline after "," (@stylistic/selector-list-comma-newline-after)',
        'Expected newline after "," (@stylistic/selector-list-comma-newline-after)'
			],
		);
	});

	it('correct rule flagged', () => {
		assert.deepEqual(
			result.results[0].warnings.map((w) => w.rule),
			[
				'@stylistic/selector-list-comma-newline-after',
				'@stylistic/selector-list-comma-newline-after'
			],
		);
	});
});
