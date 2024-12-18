Feature('Add athlete form');

const { I, athleteForm, tumbling, flyer } = inject();

Scenario('Add beginner athlete', ({ I }) => {
    I.amOnPage('/athletes/add.cfm');

    athleteForm.fillAthleteName("Eric", "Rockman");
    athleteForm.submit();

    //Now we can add assertions
}).tag('@round-4');

Scenario('Add flyer with level 1 tumbling', ({ I }) => {
    I.amOnPage('/athletes/add.cfm');

    //The athlete’s tumbling skills
    var testTumblingSkills = [
        tumbling.forwardRoll,
        tumbling.backwardRoll,
        tumbling.cartwheel,
        tumbling.roundOff
    ];

    //The athlete’s tumbling skills
    var testFlyerSkills = [
        flyer.lib,
        flyer.extensionLib
    ];

    athleteForm.fillAthleteName("Emily", "Meyer");
    I.selectOption(athleteForm.standingTumbling, testTumblingSkills);
    I.selectOption(athleteForm.flyerSkills, testFlyerSkills);
    athleteForm.submit();

    I.say("Assert('Refactoring is fun)");
}).tag('@round-4');