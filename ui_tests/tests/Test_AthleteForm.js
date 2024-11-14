Feature('Add athlete form');

const { I, athleteForm } = inject();

Scenario('Add beginner athlete', ({ I }) => {
    I.amOnPage('/athletes/add.cfm');

    I.fillField("#firstName", "Emily");
    I.fillField("#lastName", "Meyer");

    I.click("#add-athlete-button");
    I.waitForVisible("#add-athlete-form");

    //Now we can add assertions
}).tag('@round-1').tag('@pre-refactoring');

Scenario('Add flyer with level 1 tumbling', ({ I }) => {
    I.amOnPage('/athletes/add.cfm');

    I.fillField("#firstName", "Emily");
    I.fillField("#lastName", "Meyer");

    I.selectOption("#standingTumbling", ["1", "2", "3", "4"]);
    I.selectOption("#flyerSkills", ["14", "16", "21"]);

    I.click("#add-athlete-button");
    I.waitForVisible("#add-athlete-form");

    I.say("Assert('Refactoring is fun)");
}).tag('@round-1').tag('@pre-refactoring');