<!DOCTYPE html>
<cfscript>
    param athleteId=0;
    athleteService = createObject("data.athlete");
    skillService   = createObject("data.skill");
    athleteInfo    = athleteService.getAthleteById(athleteId);
    tumblingSkills = skillService.getSkillsByType(1);
    flyerSkills    = skillService.getSkillsByType(2);
    baseSkills     = skillService.getSkillsByType(3);
</cfscript>

<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <title>Bare - Start Bootstrap Template</title>
        <!-- Favicon-->
        <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
        <!-- Core theme CSS (includes Bootstrap)-->
        <link href="../css/styles.css" rel="stylesheet" />
    </head>
    <cfoutput>
    <div class="container-fluid">
    <form action="../data/athlete.cfc?method=save" method="POST">
        <div class="form-group">
            <label for="firstName">First name</label>
            <input type="text" class="form-control" id="firstName" name="firstName" placeholder="Athlete first name" value="#athleteInfo.first_name#">
        </div>
        <div class="form-group">
            <label for="lastName">Last name</label>
            <input type="text" class="form-control" id="lastName" name="lastName" placeholder="Athlete last name" value="#athleteInfo.last_name#">
        </div>
        <div class="form-group">
            <label for="standingTumbling">Standing Tumbling</label>
            <select multiple class="form-control" id="standingTumbling" name="standingTumbling">
                <cfloop array="#tumblingSkills#" item="skill">
                    <option value="#skill.id#">Level #skill.level# - #skill.name#</option>
                </cfloop>
            </select>
        </div>
        <div class="form-group">
            <label for="flyerSkills">Flyer Skills</label>
            <select multiple class="form-control" id="flyerSkills" name="flyerSkills">
                <cfloop array="#flyerSkills#" item="skill">
                    <option value="#skill.id#">Level #skill.level# - #skill.name#</option>
                </cfloop>
            </select>
        </div>
        <div class="form-group">
            <label for="baseSkills">Base Skills</label>
            <select multiple class="form-control" id="baseSkills" name="baseSkills">
                <cfloop array="#baseSkills#" item="skill">
                    <option value="#skill.id#">Level #skill.level# - #skill.name#</option>
                </cfloop>
            </select>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    </div>
    </cfoutput>
    </body>
    </html>