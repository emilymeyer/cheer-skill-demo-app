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

    //The athlete’s tumbling skills
    var testTumblingSkills = [
        athleteForm.tumbling.forwardRoll,
        athleteForm.tumbling.backwardRoll,
        athleteForm.tumbling.cartwheel,
        athleteForm.tumbling.roundOff
    ];

    //The athlete’s tumbling skills
    var testFlyerSkills = [
        athleteForm.stuntSkills.lib,
        athleteForm.stuntSkills.extensionLib
    ];

    athleteForm.fillAthleteName("Emily", "Meyer");
    I.selectOption(athleteForm.tumblingSkills, testTumblingSkills);
    I.selectOption(athleteForm.flyerSkills, testFlyerSkills);

    athleteForm.submit();

    I.say("Assert('Refactoring is fun)");
});