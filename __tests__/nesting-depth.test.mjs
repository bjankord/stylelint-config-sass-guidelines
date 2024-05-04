import { beforeEach, describe, it } from 'node:test';
import assert from 'node:assert/strict';

import stylelint from 'stylelint';

import config from '../index.js';

describe('flags warnings with nesting depth', () => {
	const invalidScss = (
`.one {
  .two {
    background-color: #c0ffee;

    @media (min-width: 420px) {
      background-color: #bada55;
    }

    @include mixin() {
      background-color: #ba2;
    }

    .three {
      .four {
        color: #f00;
      }
    }
  }
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
				'Expected nesting depth to be no more than 1 (max-nesting-depth)',
        'Expected nesting depth to be no more than 1 (max-nesting-depth)',
        'Expected ".four" to have no more than 3 compound selectors (selector-max-compound-selectors)',
			],
		);
	});

	it('correct rule flagged', () => {
		assert.deepEqual(
			result.results[0].warnings.map((w) => w.rule),
			[
				'max-nesting-depth',
        'max-nesting-depth',
        'selector-max-compound-selectors',
			],
		);
	});
});
