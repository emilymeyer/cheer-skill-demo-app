Feature('Proof of Concept');

Scenario('open my website', ({ I }) => {
    I.amOnPage('/');
    I.wait(1);
    I.see("Athlete Skill Tracker");

    I.amOnPage('/athletes/add.cfm');
    I.wait(5);
});