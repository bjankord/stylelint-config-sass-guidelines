# How to release

This project is hosted on NPM.  You can see it [here][npm-url].

Releasing the project requires these steps:

* Decide if you are releasing a major, minor, or patch version
* Do not modify the version number in package.json or create a GitHub release.
* Use the [release scripts][release-scripts-url] to create a new major, minor, or patch release.
  * This will update the version in package.json.
  * This will also create a git tag for the release.
* Navigate to the GitHub [project release][github-release-url] page and add the version number to release
* Add the CHANGELOG notes to the associated release.



[npm-url]: https://www.npmjs.com/package/stylelint-config-sass-guidelines
[release-scripts-url]: https://github.com/bjankord/stylelint-config-sass-guidelines/blob/main/package.json#L48-L50
[github-release-url]: https://github.com/bjankord/stylelint-config-sass-guidelines/releases
