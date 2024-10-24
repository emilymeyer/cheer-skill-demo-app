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

    I.fillField("#firstName", "Emily");
    I.fillField("#lastName", "Meyer");
    I.wait(3);

    I.selectOption("#standingTumbling", ["1", "2", "3", "4"]);
    I.selectOption("#flyerSkills", ["14", "16", "21"]);
    I.wait(3);

    I.click("#add-athlete-button");
    I.waitForVisible("#add-athlete-form");

    I.say("Assert('Refactoring is fun)");
});