# cheer-skill-demo-app
A demo app to accompany my presentation "Introducing the Page Object Pattern in CodeCeptJS"

# Getting Started
## I want to run the tests
Alrighty. This app runs in a docker container using CommandBox. So make sure you have those installed. Then

* Clone the repo: git@github.com:emilymeyer/cheer-skill-demo-app.git
* Navigate to the app
* Run setup.sh

## That's nice, I just want to look at the code:

* You can find all of the test case code in `ui_tests/tests`
* The page object will be in `ui_tests/pages`
* The Tumbling and Flyer fragments will be in `ui_tests/fragments`

## Running the Tests
### Run One File:
`npx codeceptjs run tests/${file name goes here}`

### Run a folder:
`npx codeceptjs run tests`

### Run everything:
`npx codeceptjs run`

# Page Objects

# The Tests:
The presentation covers the contents of the ui_tests folder. Each step of the refactoring has its own file in `ui_tests/tests`
* `ui_tests/tests/Test_AthleteForm.js`
This is the first pass at automating the add athlete form The code is spaghetti-like
  
* `ui_tests/tests/Test_AthleteForm2.js` The AthleteForm page object is introduced at `ui_tests/pages/AthleteForm,js`. The test cases are refactored to use variables in the page object instead of hard-coding the css selectors
  
* `ui_tests/tests/Test_AthleteForm3.js` Functions `fillAthleteName(first, last)` and `submit()` added to `ui_tests/pages/AthleteForm,js`. The functions replace repeated code in both test cases.

* `ui_tests/tests/Test_AthleteForm4.js` Hard-coded skill id's are removed from the test and added to the Flyer (`ui_tests/fragments/Flyer.js`) and Tumbling (`ui_tests/fragments/Tumbling.js`) page fragments as appropriate. In AthleteForm.js, there are new variables for the standing tumbling and flyer skills multi-select fields. The test uses the skill names and the new multi-select field variables.

* `ui_tests/tests/Test_AthleteForm5.js` Replaced `I.selectOption` with `athleteForm.enterStandingTumbling` and `athleteForm.enterFlyerSkills()` to complete the refactoring.
