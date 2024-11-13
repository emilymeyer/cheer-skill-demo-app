# cheer-skill-demo-app
A demo app to accompany my presentation "Introducing the Page Object Pattern in CodeCeptJS"

# The Goods:
The presentation covers the contents of the ui_tests folder. Each step of the refactoring has its own file in `ui_tests/tests`
* `ui_tests/tests/Test_AthleteForm.js`
  This is the first pass at automating the add athlete form The code is spaghetti-like
  
* `ui_tests/tests/Test_AthleteForm2.js` The AthleteForm page object is introduced. The test cases are refactored to use variables in the page object instead of hard-coding the css selectors
* `ui_tests/tests/Test_AthleteForm3.js` First functions are added to the page object `fillAthleteName(first, last)` and `submit()`. The functions replace code in the test file
* `ui_tests/tests/Test_AthleteForm4.js` 
