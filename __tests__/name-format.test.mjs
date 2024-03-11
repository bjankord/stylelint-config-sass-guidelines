import { beforeEach, describe, it } from 'node:test';
import assert from 'node:assert/strict';

import stylelint from 'stylelint';

import config from '../index.js';

describe('flags warnings with invalid name format', () => {
	const invalidScss = (
`@function calculationFunction($some-number, $another-number) {
  @return $some-number + $another-number;
}

@mixin myMixin() {
  color: #fff;
}

$myVar: 10px;

%placeHolder {
  color: #f00;
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
				'Expected @function name to match specified pattern (scss/at-function-pattern)',
        'Expected $ variable name to match specified pattern (scss/dollar-variable-pattern)',
        'Expected %-placeholder "%placeHolder" to match specified pattern (scss/percent-placeholder-pattern)',
			],
		);
	});

	it('correct rule flagged', () => {
		assert.deepEqual(
			result.results[0].warnings.map((w) => w.rule),
			[
				'scss/at-function-pattern',
        'scss/dollar-variable-pattern',
        'scss/percent-placeholder-pattern',
			],
		);
	});
});
