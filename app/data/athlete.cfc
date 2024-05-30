component displayName="Athete" {
    property string firstName;
    property string lastName;

    remote void function save(string firstName, string lastName){
        queryExecute("
            INSERT INTO athlete (first_name, last_name)
            VALUES (?, ?);
        ",
        [firstName, lastName],
        {datasource="cheer_skills"});

        location("../athletes/add.cfm", "false", "301");
    }

    query function getAthleteById(numeric athleteId) {
        return queryExecute("
            SELECT first_name, last_name FROM athlete
            WHERE id = ?;
        ",
        [athleteId],
        {datasource="cheer_skills"});

    }
}