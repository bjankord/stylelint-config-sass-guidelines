import { beforeEach, describe, it } from 'node:test';
import assert from 'node:assert/strict';

import stylelint from 'stylelint';

import config from '../index.js';

describe('flags warnings with scss/at-import-partial-extension-disallowed-list lint', () => {
	const invalidScss = (
  `@import 'foo/_bar.scss';
@import '_bar.scss';
@import '_bar';
@import 'bar.scss';
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
		assert.equal(result.results[0].warnings.length, 6);
	});

	it('correct warning text', () => {
		assert.deepEqual(
			result.results[0].warnings.map((w) => w.text),
			[
				'Unexpected extension ".scss" in imported partial name (scss/at-import-partial-extension-disallowed-list)',
        'Unexpected extension ".scss" in imported partial name (scss/at-import-partial-extension-disallowed-list)',
        'Unexpected extension ".scss" in imported partial name (scss/at-import-partial-extension-disallowed-list)',
        'Unexpected leading underscore in imported partial name (scss/load-no-partial-leading-underscore)',
        'Unexpected leading underscore in imported partial name (scss/load-no-partial-leading-underscore)',
        'Unexpected leading underscore in imported partial name (scss/load-no-partial-leading-underscore)',
			],
		);
	});

	it('correct rule flagged', () => {
		assert.deepEqual(
			result.results[0].warnings.map((w) => w.rule),
			[
        'scss/at-import-partial-extension-disallowed-list',
        'scss/at-import-partial-extension-disallowed-list',
        'scss/at-import-partial-extension-disallowed-list',
        'scss/load-no-partial-leading-underscore',
        'scss/load-no-partial-leading-underscore',
        'scss/load-no-partial-leading-underscore',
			],
		);
	});
});

describe('does not flag warnings with valid scss/at-import-partial-extension-disallowed-list lint', () => {
	const validScss = (
`@import 'foo/bar';
@import 'bar';
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
