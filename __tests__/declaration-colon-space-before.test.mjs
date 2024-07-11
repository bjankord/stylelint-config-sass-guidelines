import { beforeEach, describe, it } from 'node:test';
import assert from 'node:assert/strict';

import stylelint from 'stylelint';

import config from '../index.js';

describe('flags warnings with declaration-colon-space-before lint', () => {
	const invalidScss = (
`.test-selector {
  color : #fff;
}

.test-selector {
  color :#fff;
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
		assert.equal(result.results[0].warnings.length, 3);
	});

	it('correct warning text', () => {
		assert.deepEqual(
			result.results[0].warnings.map((w) => w.text),
			[
				'Expected single space after ":" with a single-line declaration (@stylistic/declaration-colon-space-after)',
        'Unexpected whitespace before ":" (@stylistic/declaration-colon-space-before)',
        'Unexpected whitespace before ":" (@stylistic/declaration-colon-space-before)'
			],
		);
	});

	it('correct rule flagged', () => {
		assert.deepEqual(
			result.results[0].warnings.map((w) => w.rule),
			[
				'@stylistic/declaration-colon-space-after',
        '@stylistic/declaration-colon-space-before',
        '@stylistic/declaration-colon-space-before'
			],
		);
	});
});

describe('does not flag warnings with valid declaration-colon-space-before', () => {
	const validScss = (
`.test-selector { color: #fff; }
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