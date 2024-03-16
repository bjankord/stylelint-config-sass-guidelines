# How to add tests

* Create your test file named after the scss lint your you are adding a stylelint rule for. For example, `__tests___/color-hex-case.test.mjs`
* Copy the code from one of the other tests into your test new file
* Update the test so you have SCSS code that will produce lint you want to test for
* Look for warnings it generates
* Copy expected text to test file
* Run tests again and refine until they pass
