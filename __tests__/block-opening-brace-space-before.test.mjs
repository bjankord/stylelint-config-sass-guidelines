import { beforeEach, describe, it } from 'node:test';
import assert from 'node:assert/strict';

import stylelint from 'stylelint';

import config from '../index.js';

describe('flags warnings with block-opening-brace-space-before lint', () => {
	const invalidScss = (
`.test-selector{ color: #fff; }

.test-selector
{ color: #fff; }
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
				'Expected single space before "{" (@stylistic/block-opening-brace-space-before)',
				'Expected single space before "{" (@stylistic/block-opening-brace-space-before)',
			],
		);
	});

	it('correct rule flagged', () => {
		assert.deepEqual(
			result.results[0].warnings.map((w) => w.rule),
			[
				'@stylistic/block-opening-brace-space-before',
				'@stylistic/block-opening-brace-space-before',
			],
		);
	});
});
