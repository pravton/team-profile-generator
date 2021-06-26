const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const templateStructure = require('./src/page-template');
const {writeFile, copyFile} = require('./src/generate-page');

//Team Array
const teamMebers = [];

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
        const teamMember = new Manager(answers.name, answers.id, answers.email, answers.office);
        teamMebers.push(teamMember);
        if(answers.addTeamMember === 'Engineer') {
            return promptEngineer();
        } else if (answers.addTeamMember === 'Intern') {
            return promptIntern();
        } else {
            return teamMebers;
        }
    });
};

const promptEngineer = () => {
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
        const teamMember = new Engineer(engineerData.name, engineerData.id, engineerData.email, engineerData.github);
        teamMebers.push(teamMember);
        if(engineerData.addTeamMember === 'Engineer') {
            return promptEngineer();
        } else if (engineerData.addTeamMember === 'Intern') {
            return promptIntern();
        } else {
            return teamMebers;
        }
    });
};

const promptIntern = () => {
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
        const teamMember = new Intern(internData.name, internData.id, internData.email, internData.school);
        teamMebers.push(teamMember);
        if(internData.addTeamMember === 'Engineer') {
            return promptEngineer();
        } else if (internData.addTeamMember === 'Intern') {
            return promptIntern();
        } else {
            return teamMebers;
        }
    });
};


promptManager()
    .then(data => {
       return templateStructure(data);
    })
    .then(generatedContent => {
        return writeFile(generatedContent)
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
        return copyFile();
    })
    .then(copyFileResponse => {
        console.log(copyFileResponse);
    })
    .catch(err => {
        console.log(err)
    });