import { beforeEach, describe, it } from 'node:test';
import assert from 'node:assert/strict';

import stylelint from 'stylelint';

import config from '../index.js';

describe('flags warnings with selector format', () => {
	const invalidScss = (
`.Foo {
  color: #f00;
}

.fooBar {
  color: #f00;
}

.fooBar5 {
  color: #f00;
}

.foo-Bar {
  color: #f00;
}

.foo-Bar---baz {
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
				'Selector should be written in lowercase with hyphens (selector-class-pattern)',
        'Selector should be written in lowercase with hyphens (selector-class-pattern)',
        'Selector should be written in lowercase with hyphens (selector-class-pattern)',
        'Selector should be written in lowercase with hyphens (selector-class-pattern)',
        'Selector should be written in lowercase with hyphens (selector-class-pattern)',
			],
		);
	});

	it('correct rule flagged', () => {
		assert.deepEqual(
			result.results[0].warnings.map((w) => w.rule),
			[
				'selector-class-pattern',
        'selector-class-pattern',
        'selector-class-pattern',
        'selector-class-pattern',
        'selector-class-pattern',
			],
		);
	});
});
