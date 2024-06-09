Feature('Add athlete form');

const { I, athleteForm, tumbling, flyer } = inject();

Scenario('Add athlete with no skills', ({ I }) => {
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
        tumbling.roundOff,
        tumbling.frontWalkover,
        tumbling.backWalkover
    ];

    var testFlyerSkills = [
        flyer.heelStretch,
        flyer.lib,
        flyer.extensionLib
    ];

    I.amOnPage('/athletes/add.cfm');
    I.wait(3);

    athleteForm.fillAthleteName("Emily", "Meyer");
    I.wait(1);
    athleteForm.enterStandingTumbling(testTumblingSkills);
    I.wait(1);
    athleteForm.enterFlyerSkills(testFlyerSkills);
    I.wait(2);
    athleteForm.submit();

    //ASSERTION TIME WOOOOOOO
});