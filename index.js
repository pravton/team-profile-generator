const inquirer = require('inquirer');
const Employee = require('./lib/Employee');

const promptManager = () => {
    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the Team Manager?',
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log(`   The name cannot be empty, Please enter a name!`);
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter the employee ID of the Team Manager?',
            validate: idInput => {
                if(!isNaN(idInput)) {
                    return true;
                } else {
                    console.log(`   Please enter a valid ID!`);
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter the email address of the Manager?',
            validate: emailInput => {
                if(emailInput && (emailInput.includes('@' && '.'))) {
                    return true;
                } else {
                    console.log(`   Please enter a valid email address!`);
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'office',
            message: 'Enter the office number of the Manager?',
            validate: officeInput => {
                if(!isNaN(officeInput)) {
                    return true;
                } else {
                    console.log(`   Please enter a valid phone number without any spaces or hyphen!`);
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'addTeamMember',
            message: 'Which type of team member would you like to add?',
            choices: ['Engineer', 'Intern', 'I do not want to add any more team members'],
        }
    ])
    .then(answers => {
        if(answers.addTeamMember === 'Engineer') {
            return promptEngineer(answers);
        } else if (answers.addTeamMember === 'Intern') {
            return promptIntern(answers);
        } else {
            return answers;
        }
    });
};

const promptEngineer = (teamData) => {
    // creates a new array of engineers
    if (!teamData.engineers) {
        teamData.engineers = [];
    }
    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the Engineer?',
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log(`   The name cannot be empty, Please enter a name!`);
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter the employee ID of the Engineer?',
            validate: idInput => {
                if(!isNaN(idInput)) {
                    return true;
                } else {
                    console.log(`   Please enter a valid ID!`);
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter the email address of the Engineer?',
            validate: emailInput => {
                if(emailInput && (emailInput.includes('@' && '.'))) {
                    return true;
                } else {
                    console.log(`   Please enter a valid email address!`);
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter the github username of the Engineer.',
            validate: githubInput => {
                if(githubInput) {
                    return true;
                } else {
                    console.log(`   Please enter a valid username!`);
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'addTeamMember',
            message: 'Which type of team member would you like to add?',
            choices: ['Engineer', 'Intern', 'I do not want to add any more team members'],
        }
    ])
    .then(engineerData => {
        teamData.engineers.push(engineerData);
        if(engineerData.addTeamMember === 'Engineer') {
            return promptEngineer(teamData);
        } else if (engineerData.addTeamMember === 'Intern') {
            return promptIntern(teamData);
        } else {
            return teamData;
        }
    });
};

const promptIntern = (teamData) => {
    // creates a new array of engineers
    if (!teamData.interns) {
        teamData.interns = [];
    }
    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the Intern?',
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log(`   The name cannot be empty, Please enter a name!`);
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter the employee ID of the Intern?',
            validate: idInput => {
                if(!isNaN(idInput)) {
                    return true;
                } else {
                    console.log(`   Please enter a valid ID!`);
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter the email address of the Intern?',
            validate: emailInput => {
                if(emailInput && (emailInput.includes('@' && '.'))) {
                    return true;
                } else {
                    console.log(`   Please enter a valid email address!`);
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "What is the name of the Intern's school?",
            validate: githubInput => {
                if(githubInput) {
                    return true;
                } else {
                    console.log(`   Please enter a valid username!`);
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'addTeamMember',
            message: 'Which type of team member would you like to add?',
            choices: ['Engineer', 'Intern', 'I do not want to add any more team members'],
        }
    ])
    .then(internData => {
        teamData.interns.push(internData);
        if(internData.addTeamMember === 'Engineer') {
            return internData(teamData);
        } else if (internData.addTeamMember === 'Intern') {
            return promptIntern(teamData);
        } else {
            return teamData;
        }
    });
};


promptManager()
    .then(data => {
        console.log(data);
    });