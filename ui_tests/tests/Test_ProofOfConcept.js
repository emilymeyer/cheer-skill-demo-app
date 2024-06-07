Feature('Proof of Concept');

xScenario('Open the add athlete form', ({ I }) => {
    I.amOnPage('/');
    I.wait(1);
    I.see("Athlete Skill Tracker");

    I.amOnPage('/athletes/add.cfm');
    I.wait(5);
});