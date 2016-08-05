# How to add tests

* Update `./src/.stylelintrc.json` with your new rules
* Run npm run build to generate `./index.js`
* Create your test file named after the scss-lint your you are adding a stylelint rule for
* Copy the code from one of the other tests into your test new file
* Update the test so you have .scss code that will produce lint you want to test for
* Add a console.log statement within the checkResult function in the test file passing `result` to the log statement. e.g. `console.log(result)`
* Look for warnings it generates
* Copy expected text to test file
* Escape quotes in your expected error text
* Run tests again and refine until they pass
* Update `t.plan(2)` to the number of tests you have
