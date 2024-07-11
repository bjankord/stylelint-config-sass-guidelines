import { beforeEach, describe, it } from 'node:test';
import assert from 'node:assert/strict';

import stylelint from 'stylelint';

import config from '../index.js';

describe('flags warnings with selector-class-pattern lint', () => {
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

describe('does not flag warnings with valid selector-class-pattern', () => {
	const validScss = (
`.selector-format {
  color: #f00;
}

.foo {
  color: #f00;
}

.foo5 {
  color: #f00;
}

.foo-5 {
  color: #f00;
}

.foo--5 {
  color: #f00;
}

.foo-bar {
  color: #f00;
}

.foo--bar {
  color: #f00;
}

.foo-bar-5 {
  color: #f00;
}

.foo-bar-baz {
  color: #f00;
}

.foo-bar--baz {
  color: #f00;
}

.foo-bar-baz--qux {
  color: #f00;
}

.foo-bar--baz--qux {
  color: #f00;
}

.foo--bar--baz--qux {
  color: #f00;
}

.u-hidden {
  color: #f00;
}

.u-class-name {
  color: #f00;
}

.is-stateclass {
  color: #f00;
}

.has-state-class {
  color: #f00;
}

.js-dependantclass {
  color: #f00;
}

.namespace-u-text-center {
  color: #f00;
}

.namespace-u-sm-size11of12 {
  color: #f00;
}

.u-foobar17 {
  color: #f00;
}

.u-16by9 {
  color: #f00;
}

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
