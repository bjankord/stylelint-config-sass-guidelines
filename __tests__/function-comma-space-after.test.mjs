import { beforeEach, describe, it } from 'node:test';
import assert from 'node:assert/strict';

import stylelint from 'stylelint';

import config from '../index.js';

describe('flags warnings with function-comma-space-after lint', () => {
	const invalidScss = (
`.test-selector { transform: translate(1,1); }
.test-selector { transform: translate(1 ,1); }
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
				'Expected single space after "," in a single-line function (@stylistic/function-comma-space-after)',
				'Expected single space after "," in a single-line function (@stylistic/function-comma-space-after)'
			],
		);
	});

	it('correct rule flagged', () => {
		assert.deepEqual(
			result.results[0].warnings.map((w) => w.rule),
			[
				'@stylistic/function-comma-space-after',
				'@stylistic/function-comma-space-after'
			],
		);
	});
});
