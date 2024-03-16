import { beforeEach, describe, it } from 'node:test';
import assert from 'node:assert/strict';

import stylelint from 'stylelint';

import config from '../index.js';

describe('flags warnings with scss/load-no-partial-leading-underscore lint', () => {
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
