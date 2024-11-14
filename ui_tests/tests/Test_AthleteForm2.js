Feature('Add athlete form');

const { I, athleteForm } = inject();

Scenario('Add beginner athlete', ({ I }) => {
    I.amOnPage('/athletes/add.cfm');

    I.fillField(athleteForm.firstNameField, "Eric");
    I.fillField(athleteForm.lastNameField, "Rockman");

    I.click(athleteForm.submitButton);
    I.waitForVisible(athleteForm.addAthleteForm);

    //Now we can add assertions
}).tag('@round-2');

Scenario('Add flyer with level 1 tumbling', ({ I }) => {
    I.amOnPage('/athletes/add.cfm');

    I.fillField(athleteForm.firstNameField, "Emily");
    I.fillField(athleteForm.lastNameField, "Meyer");

    I.selectOption(athleteForm.standingTumbling, ["1", "2", "3", "4"]);
    I.selectOption(athleteForm.flyerSkills, ["14", "16", "21"]);

    I.click(athleteForm.submitButton);
    I.waitForVisible(athleteForm.addAthleteForm);

    I.say("Assert('Refactoring is fun)");
}).tag('@round-2');