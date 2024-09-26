const { I } = inject();

module.exports = {
    addAthleteForm: "#add-athlete-form",
    firstNameField: "#firstName",
    lastNameField: "#lastName",

    standingTumbling: "#standingTumbling",
    flyerSkills: "#flyerSkills",

    tumblingSkills: {
        forwardRoll: "1",
        backwardRoll: "2",
        cartwheel: "3",
        roundOff: "4",
        frontWalkover: "5",
        backWalkover: "6"
            //and so on...
    },

    stuntSkills: {
        heelStretch: "14",
        lib: "16",
        extensionLib: "21"
            //and so on...
    },

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
        I.waitForVisible(this.addAthleteForm);
    }
}