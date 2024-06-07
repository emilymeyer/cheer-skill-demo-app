Feature('Add athlete form');

Scenario('Add athlete with no skills', ({ I }) => {
    I.amOnPage('/athletes/add.cfm');
    I.wait(1);

    I.fillField("#firstName", "Eric");
    I.fillField("#lastName", "Rockman"); //IYKYK
    I.click("#add-athlete-button");
    I.waitForVisible("#add-athlete-form");
});

Scenario('Add flyer with level 1 tumbling', ({ I }) => {
    I.amOnPage('/athletes/add.cfm');
    I.wait(1);

    I.fillField("#firstName", "Emily");
    I.fillField("#lastName", "Meyer");
    I.selectOption("#standingTumbling", ["1", "2", "3", "4", "5", "6"]);
    I.selectOption("#flyerSkills", ["14", "16", "21"]);

    I.click("#add-athlete-button");
    I.waitForVisible("#add-athlete-form");
});