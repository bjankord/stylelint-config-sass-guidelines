import { beforeEach, describe, it } from 'node:test';
import assert from 'node:assert/strict';

import stylelint from 'stylelint';

import config from '../index.js';

describe('flags warnings with property spelling', () => {
	const invalidScss = (
`.property-spelling {
  diplay: none; // "display" is spelled incorrectly
  heigth: 100%; // "height" is spelled incorrectly
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
		assert.equal(result.results[0].warnings.length, 2);
	});

	it('correct warning text', () => {
		assert.deepEqual(
			result.results[0].warnings.map((w) => w.text),
			[
				'Unexpected unknown property "diplay" (property-no-unknown)',
        'Unexpected unknown property "heigth" (property-no-unknown)'
			],
		);
	});

	it('correct rule flagged', () => {
		assert.deepEqual(
			result.results[0].warnings.map((w) => w.rule),
			[
				'property-no-unknown',
        'property-no-unknown',
			],
		);
	});
});
