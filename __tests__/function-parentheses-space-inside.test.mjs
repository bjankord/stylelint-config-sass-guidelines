import { beforeEach, describe, it } from 'node:test';
import assert from 'node:assert/strict';

import stylelint from 'stylelint';

import config from '../index.js';

describe('flags warnings with function-parentheses-space-inside lint', () => {
	const invalidScss = (
`.test-selector { transform: translate( 1, 1 ); }
.test-selector { transform: translate(1, 1 ); }
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
				'Unexpected whitespace after "(" (@stylistic/function-parentheses-space-inside)',
        'Unexpected whitespace before ")" (@stylistic/function-parentheses-space-inside)',
        'Unexpected whitespace before ")" (@stylistic/function-parentheses-space-inside)'
			],
		);
	});

	it('correct rule flagged', () => {
		assert.deepEqual(
			result.results[0].warnings.map((w) => w.rule),
			[
				'@stylistic/function-parentheses-space-inside',
        '@stylistic/function-parentheses-space-inside',
        '@stylistic/function-parentheses-space-inside'
			],
		);
	});
});
