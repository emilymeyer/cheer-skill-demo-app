Feature("Landing Page");

Scenario('I can see the landing page title', ({ I }) => {
    I.amOnPage("");
    I.wait(10);
    I.say("HI CFSUMMIT");
    I.see("Athlete Skill Tracker");
    I.see("Gym: CF Allstars");

    I.click("Teams");
    I.waitInUrl("#", 5);
});