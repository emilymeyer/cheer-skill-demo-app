Feature('Add athlete form');

const { I, athleteForm, tumbling, flyer } = inject();

Scenario('Add beginner athlete', ({ I }) => {
    I.amOnPage('/athletes/add.cfm');
    I.wait(3);

    athleteForm.fillAthleteName("Eric", "Rockman");
    athleteForm.submit();

    //Now we can add assertions
});

Scenario('Add flyer with level 1 tumbling', ({ I }) => {
    var testTumblingSkills = [
        tumbling.forwardRoll,
        tumbling.backwardRoll,
        tumbling.cartwheel,
        tumbling.roundOff
    ];

    var testFlyerSkills = [
        flyer.heelStretch,
        flyer.lib,
        flyer.extensionLib
    ];

    I.amOnPage('/athletes/add.cfm');
    I.wait(3);

    athleteForm.fillAthleteName("Emily", "Meyer");
    athleteForm.enterStandingTumbling(testTumblingSkills);
    athleteForm.enterFlyerSkills(testFlyerSkills);
    athleteForm.submit();
});