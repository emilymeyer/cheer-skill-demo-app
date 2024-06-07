component displayName="Athete" {
    property string firstName;
    property string lastName;

    remote void function save(numeric id, string firstName, string lastName, standingTumbling, flyerSkills, baseSkills){
    
        queryExecute("
            INSERT INTO athlete (first_name, last_name)
            VALUES (?, ?);
        ",
        [firstName, lastName],
        {datasource="cheer_skills",result: "insertResult"});
        
        location("../athletes/add.cfm?athleteId=#insertResult.generatedKey#", "false", "301");
    }

    query function getAthleteById(numeric athleteId) {
        return queryExecute("
            SELECT first_name, last_name FROM athlete
            WHERE id = ?;
        ",
        [athleteId],
        {datasource="cheer_skills"});

    }

    function saveAthleteSkills(athleteId, skills) {
        
        queryExecute("
            INSERT INTO athlete_skills (athlete_id, skill_id)
            VALUES (?, ?);
        ",
        [athleteId, skillId],
        {datasource="cheer_skills",result: "insertResult"});
    }
}