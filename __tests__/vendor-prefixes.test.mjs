import { beforeEach, describe, it } from 'node:test';
import assert from 'node:assert/strict';

import stylelint from 'stylelint';

import config from '../index.js';

describe('flags warnings with vendor prefixes', () => {
	const invalidScss = (
`@-webkit-keyframes anim {
  0% {
    opacity: 0;
  }
}

::-moz-placeholder {
  color: #f00;
}

.property-prefix {
  -webkit-transition: none;
}

.value-prefix {
  display: -webkit-flex;
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
		assert.equal(result.results[0].warnings.length, 4);
	});

	it('correct warning text', () => {
		assert.deepEqual(
			result.results[0].warnings.map((w) => w.text),
			[
				'Unexpected vendor-prefixed at-rule "@-webkit-keyframes" (at-rule-no-vendor-prefix)',
        'Unexpected vendor-prefix "-webkit-transition" (property-no-vendor-prefix)',
        'Unexpected vendor-prefix "::-moz-placeholder" (selector-no-vendor-prefix)',
        'Unexpected vendor-prefix "-webkit-flex" (value-no-vendor-prefix)',
			],
		);
	});

	it('correct rule flagged', () => {
		assert.deepEqual(
			result.results[0].warnings.map((w) => w.rule),
			[
				'at-rule-no-vendor-prefix',
        'property-no-vendor-prefix',
        'selector-no-vendor-prefix',
        'value-no-vendor-prefix',
			],
		);
	});
});
