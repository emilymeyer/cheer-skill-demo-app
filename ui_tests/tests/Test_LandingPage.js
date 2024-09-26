Feature("Landing Page");

Before(({ I }) => {
    I.say("Future me needs time to arrange things on screen");
    I.wait(20);
    I.say("All done, enjoy!");
});

Scenario('I can see the landing page title', ({ I }) => {
    I.amOnPage("");
    I.wait(10);
    I.say("HI CFSUMMIT");
    I.see("Athlete Skill Tracker");
    I.see("Gym: CF Allstars");

    I.click("Teams");
    I.waitInUrl("#", 5);
});