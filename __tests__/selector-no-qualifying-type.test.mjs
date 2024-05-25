import { beforeEach, describe, it } from 'node:test';
import assert from 'node:assert/strict';

import stylelint from 'stylelint';

import config from '../index.js';

describe('flags warnings with selector-no-qualifying-type lint', () => {
	const invalidScss = (
`div#thing {
  color: #f00;
}

ul.list {
  color: #f00;
}

ul li.item {
  color: #f00;
}

a[href='place'] {
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
		assert.equal(result.results[0].warnings.length, 5);
	});

	it('correct warning text', () => {
		assert.deepEqual(
			result.results[0].warnings.map((w) => w.text),
			[
				'Expected "div#thing" to have no more than 0 ID selectors (selector-max-id)',
        'Unexpected qualifying type selector "div#thing" (selector-no-qualifying-type)',
        'Unexpected qualifying type selector "ul.list" (selector-no-qualifying-type)',
        'Unexpected qualifying type selector "li.item" (selector-no-qualifying-type)',
        'Unexpected qualifying type selector "a[href=\'place\']" (selector-no-qualifying-type)'
			],
		);
	});

	it('correct rule flagged', () => {
		assert.deepEqual(
			result.results[0].warnings.map((w) => w.rule),
			[
				'selector-max-id',
        'selector-no-qualifying-type',
        'selector-no-qualifying-type',
        'selector-no-qualifying-type',
        'selector-no-qualifying-type',
			],
		);
	});
});
