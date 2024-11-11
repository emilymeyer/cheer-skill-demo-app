Feature('Add athlete form');

const { I, athleteForm } = inject();

Scenario('Add beginner athlete', ({ I }) => {
    I.amOnPage('/athletes/add.cfm');
    I.wait(3);

    athleteForm.fillAthleteName("Eric", "Rockman");
    athleteForm.submit();

    //Now we can add assertions
});

Scenario('Add flyer with level 1 tumbling', ({ I }) => {
    I.amOnPage('/athletes/add.cfm');
    I.wait(5);

    athleteForm.fillAthleteName("Emily", "Meyer");

    I.selectOption(athleteForm.standingTumbling, ["1", "2", "3", "4"]);
    I.selectOption(athleteForm.flyerSkills, ["14", "16", "21"]);
    I.wait(3);

    athleteForm.submit();

    I.say("Assert('Refactoring is fun)");
});