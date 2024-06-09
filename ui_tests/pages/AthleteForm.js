const { I } = inject();

module.exports = {
    addAthleteForm: "#add-athlete-form",
    firstNameField: "#firstName",
    lastNameField: "#lastName",
    submitButton: "#add-athlete-button",

    fillAthleteName: function(firstName, lastName) {
        I.fillField(this.firstNameField, firstName);
        I.fillField(this.lastNameField, lastName)
    },

    enterStandingTumbling: function(tumblingSkills) {
        I.selectOption("#standingTumbling", tumblingSkills);
    },

    enterFlyerSkills: function(flyerSkills) {
        I.selectOption("#flyerSkills", flyerSkills);
    },

    submit: function() {
        I.click(this.submitButton);
        I.waitForVisible("#add-athlete-form");
    }
}