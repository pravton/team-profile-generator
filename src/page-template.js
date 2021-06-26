const generateTeamCards = (teamArray) => {
    let contact = "";
    let icon = "";
    let membersCards = "";

    for(let i = 0; i < teamArray.length; i++) {
        if(teamArray[i].role === 'Manager') {
            contact = `<li id="emp-contact" class="box mb-3 p-2" >Office Number : <span id="emp-contact" class="value-text"><a href="tel:${teamArray[i].office}">${teamArray[i].office}</span> </li>`;
            icon = `<i class="fas fa-mug-hot"></i>`;
        } else if (teamArray[i].role === 'Engineer') {
            contact = `<li id="emp-contact" class="box mb-3 p-2" >GitHub : <span id="emp-contact" class="value-text">${teamArray[i].github}</span> </li>`;
            icon = `<i class="fas fa-glasses"></i>`;
        } else if (teamArray[i].role === 'Intern') {
            contact = `<li id="emp-contact" class="box mb-3 p-2" >School : <span id="emp-contact" class="value-text">${teamArray[i].school}</span> </li>`;
            icon = `<i class="fas fa-user-graduate"></i>`;
        }

        membersCards += `
            <div class="column transparent is-half-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd">
                <div class="card opacity-full">
                    <div class="card-header is-flex-direction-column py-3 px-5">
                        <h3 id="employee-name" class="is-5">${teamArray[i].name}</h3>
                        <h4 id="employee-role">${icon}&nbsp; ${teamArray[i].role}</h4>
                    </div>
                    <div class="card-body">
                        <ul class="card-body-content">
                            <li  class="box mb-3 p-2 opacity-full">ID : <span id="id-number" class="value-text"><a href="mailto:${teamArray[i].id}"> ${teamArray[i].id}</span></li>
                            <li  class="box mb-3 p-2">Email : <span id="email" class="value-text"> ${teamArray[i].email}</span> </li>
                            ${contact}
                        </ul>
                    </div>
                </div>  
            </div>`
    }

    return membersCards;
}

const templateStructure = (teamData) => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
    <link rel="stylesheet" href="./style.css">
    <title>Team Profile Generator</title>
</head>
<body>
    <!-- Header Section -->
    <header class="container w-80 is-flex is-justify-content-center py-5">
        <div class="header-container p-4 is-flex is-justify-content-center">
            <h1 class="title is-1">My Team</h1>
        </div>
    </header>
    <!-- Main Section --> 
    <main>
        <div class="container w-80">
            <div class="columns is-flex-wrap-wrap my-3">
                ${generateTeamCards(teamData)}
            </div>    
        </div>
    </main>
</body>
</html>
    `
};

module.exports = templateStructure;