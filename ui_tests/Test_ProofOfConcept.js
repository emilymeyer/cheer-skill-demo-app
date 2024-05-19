Feature('Proof of Concept');

Scenario('open my website', ({ I }) => {
    I.amOnPage('/');
    I.see("Athlete Skill Tracker");
});