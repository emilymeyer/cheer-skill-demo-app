Feature('Add athlete form');

const { I, athleteForm } = inject();

Scenario('Add beginner athlete', ({ I }) => {
    I.amOnPage('/athletes/add.cfm');

    athleteForm.fillAthleteName("Eric", "Rockman");
    athleteForm.submit();

    //Now we can add assertions
}).tag('@round-3');

Scenario('Add flyer with level 1 tumbling', ({ I }) => {
    I.amOnPage('/athletes/add.cfm');

    athleteForm.fillAthleteName("Emily", "Meyer");

    I.selectOption(athleteForm.standingTumbling, ["1", "2", "3", "4"]);
    I.selectOption(athleteForm.flyerSkills, ["14", "16", "21"]);
    athleteForm.submit();

    I.say("Assert('Refactoring is fun)");
}).tag('@round-3');