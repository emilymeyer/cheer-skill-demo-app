Feature('Add athlete form');

const { I, athleteForm, tumbling, flyer } = inject();

Scenario('Add beginner athlete', ({ I }) => {
    I.amOnPage('/athletes/add.cfm');

    athleteForm.fillAthleteName("Eric", "Rockman");
    athleteForm.submit();

    //Now we can add assertions
}).tag('round-5').tag('@fully-refactored');

Scenario('Add flyer with level 1 tumbling', ({ I }) => {
    I.amOnPage('/athletes/add.cfm');

    //The athlete’s tumbling skills
    var testTumblingSkills = [
        //tumbling.forwardRoll,
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
    athleteForm.enterStandingTumbling(testTumblingSkills);
    athleteForm.enterFlyerSkills(testFlyerSkills);
    athleteForm.submit();

    I.say("Assert('Refactoring is fun)");
}).tag('round-5').tag('@fully-refactored');