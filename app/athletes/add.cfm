<!DOCTYPE html>
<cfscript>
    // param athleteId=0;
    // athleteService = createObject("data.athlete");
    skillService   = createObject("data.skill");
    // athleteInfo    = athleteService.getAthleteById(athleteId);
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
        <title>CFCamp Allstars - Munich</title>
        <!-- Favicon-->
        <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
        <!-- Core theme CSS (includes Bootstrap)-->
        <link href="../css/styles.css" rel="stylesheet" />
    </head>
    <!-- Responsive navbar-->
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
                <a class="navbar-brand" href="#">Gym: CF Allstars</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item"><a class="nav-link active" aria-current="page" href="#">🎀 Athletes</a></li>
                        <li class="nav-item"><a class="nav-link" href="#">🥇 Teams</a></li>
                        <li class="nav-item"><a class="nav-link" htef="#">🙆‍♀️ Staff</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    <cfoutput>
    <div class="container-fluid athlete-form-container">
        <div class="text-center">
            <h1>📣 Add Athlete 📣</h1>
        </div>
        <form id="add-athlete-form" action="../data/athlete.cfc?method=save" method="POST">
            <div class="form-group">
                <label for="firstName">First name</label>
                <input id="firstName" type="text" class="form-control" name="firstName" placeholder="Athlete first name" >
            </div>
            <div class="form-group">
                <label for="lastName">Last name</label>
                <input id="lastName" type="text" class="form-control" name="lastName" placeholder="Athlete last name" >
            </div>
            <div class="form-group">
                <label for="standingTumbling">Standing Tumbling</label>
                <select id="standingTumbling" multiple size="8" class="form-control" name="standingTumbling">
                    <cfloop array="#tumblingSkills#" item="skill">
                        <option value="#skill.id#">Level #skill.level# - #skill.name#</option>
                    </cfloop>
                </select>
            </div>
            <div class="form-group">
                <label for="flyerSkills">Flyer Skills</label>
                <select id="flyerSkills" multiple size="8" class="form-control" id="flyerSkills" name="flyerSkills">
                    <cfloop array="#flyerSkills#" item="skill">
                        <option value="#skill.id#">Level #skill.level# - #skill.name#</option>
                    </cfloop>
                </select>
            </div>
            <div class="form-group">
                <label for="baseSkills">Base Skills</label>
                <select multiple size="4" class="form-control" id="baseSkills" name="baseSkills">
                    <cfloop array="#baseSkills#" item="skill">
                        <option value="#skill.id#">Level #skill.level# - #skill.name#</option>
                    </cfloop>
                </select>
            </div>
            
            <button id="add-athlete-button" type="submit" class="btn btn-primary">Submit</button>   
        </form>
    </div>
    </cfoutput>
    </body>
    </html>