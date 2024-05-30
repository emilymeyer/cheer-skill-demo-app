component displayName="Skill" {

    array function getSkillsByType(skillTypeId) {
        var skills = [];
        var skillsOfType = queryExecute("
            SELECT id, skill_name, skill_level FROM skill
            WHERE skill_type_id = ?;
        ",
        [skillTypeId],
        {datasource="cheer_skills"});

        for (row in skillsOfType) {
            skills.append(
                {"id": row.id, "name": row.skill_name, "level": row.skill_level}
            );
        }

        return skills;
    }
}