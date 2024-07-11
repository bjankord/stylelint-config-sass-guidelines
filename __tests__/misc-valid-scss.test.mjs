import { beforeEach, describe, it } from 'node:test';
import assert from 'node:assert/strict';

import stylelint from 'stylelint';

import config from '../index.js';

describe('does not error or warn on valid scss', () => {
	const invalidScss = (
`// DeclarationOrder test
// scss-lint:disable NestingDepth
.declarationorder {
  @extend %error;
  @include message-box();

  color: #f00;

  p {
    color: #f00;
  }
}
// scss-lint:enable NestingDepth

// ElsePlacement test
$width: auto;

.elseplacement {
  @if $width == 'auto' {
    width: $width;
  } @else {
    display: inline-block;
    width: $width;
  }
}

// EmptyLineBetweenBlocks test
// scss-lint:disable NestingDepth
p {
  margin: 0;

  em {
    color: #f00;
  }
}

a {
  color: #f00;
}
// scss-lint:enable NestingDepth


// NameFormat Mixins test
// Mixins should be declared with all lowercase letters and hyphens instead of underscores.

@mixin my-mixin() {
  color: #fff;
}

// Private Naming Convention test
// Enforces that functions, mixins, and variables that follow the private naming convention (default to underscore-prefixed, e.g. $_foo) are defined and used within the same file.

$_foo: #f00;

figure {
  color: $_foo;
}

// SpaceAroundOperator test
.spacearoundoperator {
  margin: 5px + 10px;
  padding: 5px + 10px;
}

// Each loop test
.button {
  @each $key, $value in $colors {
    &-#{$key} {
      background-color: $value;
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

	it('did not error', () => {
    // console.log('result.results[0].warnings', result.results[0].warnings);
		assert.equal(result.errored, false);
	});

	it('flags no warnings', () => {
		assert.equal(result.results[0].warnings.length, 0);
	});
});
