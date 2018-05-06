// window.onload = function () {
//     console.log("JavaScript is working!");

//     // var el = document.getElementById("test");
//     // el.addEventListener("click", game, false);

//     document.addEventListener('click', function (event) {
//         if (event.target.id == "test") {
//             console.log("hit");
//         }
//     }, false);
// }

// var catagories = ["films", "people", "planets", "species", "starships", "vehicles"]
var test = 0;
var used = [[], [], [], [], [], []];
var answers = [[], [], [], [], [], []];
var currentClass;
// className = "films";
function makeRequest(className, ident) {
    // console.log(el.className);
    var url = "https://swapi.co/api/" + className + "/";
    url = url + getRandomNum(className);
    var req = new XMLHttpRequest();

    currentClass = className;
    req.addEventListener("load", APIHandler);
    req.open("GET", url);
    req.send();
    console.log(url);

    // var elem = document.getElementById(ident);//we need to make the id of each a tag more specific
    // elem.parentNode.removeChild(elem);

}


// makeRequest(className);


// makeRequest(className);

function getRandomNum(className) { //We need to know which numbers are broken
    var num;
    var goodCheck = false;
    switch (className) {
        case "films":
            num = Math.floor(Math.random() * 7 + 1);
            switch (num) {
                case 1:
                    num = 4;
                    break;
                case 2:
                    num = 5;
                    break;
                case 3:
                    num = 6;
                    break;
                case 4:
                    num = 1;
                    break;
                case 5:
                    num = 2;
                    break;
                case 6:
                    num = 3;
                    break;
                case 7:
                    num = 7;
                    break;
            }
            do {

                for (var i = 0; i < 7; i++) {
                    if (used[0][i] === num) {
                        num = Math.floor(Math.random() * 7 + 1);
                        goodCheck = false;
                        break;
                    } else {
                        goodCheck = true;
                    }
                }
            } while (!goodCheck);
            break;
        case "people":
            // num = Math.floor(Math.random() * 87 + 1);
            num = Math.floor(Math.random() * 5 + 1);
            if (num == 17) {
                num++;
            }
            break;
        case "planets":
            num = Math.floor(Math.random() * 61 + 1);
            break;
        case "species":
            // num = Math.floor(Math.random() * 37 + 1);
            num = Math.floor(Math.random() * 5 + 1);
            break;
        case "starships":
            num = Math.floor(Math.random() * 37 + 1);
            break;
        case "vehicles":
            num = Math.floor(Math.random() * 39 + 1);
            break;
    }
    return num;

}
var APIObject;


function APIHandler() {
    var responseText = this.responseText;
    // console.log("URL response is: "+responseText);
    APIObject = JSON.parse(responseText);
    // console.log(APIObject.length);
    console.log()
    LoadAPI(APIObject);

}

function LoadAPI(APIObject) {
    var objectContainer = document.getElementById("objectContainer");
    console.log(APIObject);




    var question;
    switch (currentClass) {
        case "films":
            var goodCheck = false;
            var id = APIObject.episode_id;
            switch (id) {
                case 1:
                    id = 4;
                    break;
                case 2:
                    id = 5;
                    break;
                case 3:
                    id = 6;
                    break;
                case 4:
                    id = 1;
                    break;
                case 5:
                    id = 2;
                    break;
                case 6:
                    id = 3;
                    break;
                case 7:
                    id = 7;
                    break;
            }
            switch (id) {
                //random questions inside nested switch based on currentclass
                case 1:
                    used[0][0] = id;
                    answers[0][0] = APIObject.title;
                    question = APIObject.opening_crawl;
                    break;
                case 2:
                    used[0][1] = id;
                    answers[0][1] = APIObject.title
                    question = APIObject.opening_crawl;
                    break;
                case 3:
                    used[0][2] = id;
                    answers[0][2] = APIObject.title
                    question = APIObject.opening_crawl;
                    break;
                case 4:
                    used[0][3] = id;
                    answers[0][3] = APIObject.title
                    question = APIObject.opening_crawl;
                    break;
                case 5:
                    used[0][4] = id;
                    used[0][4] = APIObject.title
                    question = APIObject.opening_crawl;
                    break;
                case 6:
                    used[0][5] = id;
                    answers[0][5] = APIObject.title
                    question = APIObject.opening_crawl;
                    break;
                case 7:
                    used[0][6] = id;
                    answers[0][6] = APIObject.title
                    question = APIObject.opening_crawl;
                    break;

            }
            break;
        case "people":
            var num = Math.floor(Math.random() * 5 + 1);
            switch (num) {
                case 1:
                    var randNum = Math.floor(Math.random() * 2 + 1)
                    switch (randNum) {
                        case 1:
                            question = "Gets hand removed by father and kisses sister."
                            break;
                        case 2:
                            question = "Father dies and lives with his Uncle and Aunt on a desent planet."
                            break;
                    }
                    break;
                case 2:
                    var randNum = Math.floor(Math.random() * 2 + 1)
                    switch (randNum) {
                        case 1:
                            question = "Knows 6,000,000 forms of communication."
                            break;
                        case 2:
                            quetion = "Gets arm removed during a mission with friend. replaces it with one off a dead body"
                            break;
                    }
                    break;
                case 3:
                    var randNum = Math.floor(Math.random() * 3 + 1)
                    switch (randNum) {
                        case 1:
                            question = "The most known droid in the entire franchise."
                            break;
                        case 2:
                            question = "Saves his master more times than any other character in the franchise."
                            break;
                        case 3:
                            question = "The only droid who did not get his memeory wiped during any war."
                            break;
                    }
                    break;
                case 4:
                    var randNum = Math.floor(Math.random() * 5 + 1)
                    switch (randNum) {
                        case 1:
                            question = "'His deeds will not be forgiven until he merits.'"
                            break;
                        case 2:
                            question = "Destroys an entire planet in order to prove a point."
                            break;
                        case 3:
                            question = "Had a secret apprentice who would be used to take out anybody and anything standing in his way."
                            break;
                        case 4:
                            question = "Get almost every limb replaced with rombotic parts."
                            break;
                        case 5:
                            question = "Nearly murders his son."
                            break;
                    }
                    break;
                case 5:
                    var randNum = Math.floor(Math.random() * 3 + 1)
                    switch (randNum) {
                        case 1:
                            question = "Falls in love with a smuggler."
                            break;
                        case 2:
                            question = "Mother dies whie giving birth to her."
                            break;
                        case 3:
                            question = "Husband would be alive if son wasn't an a*******"
                            break;
                    }
                    break;

            }
            break;
        // case "planets":
        //     switch (num) {

        //     }
        // break;
        case "species":
            switch (APIObject.name) {
                case "Human":
                    used[2][0] = APIObject.name;
                    answers[2][0] = APIObject.name;
                    question = "This species is classified as a mammal and lives an average life of 120 earth years.";
                    break;

                case "Droid":
                    used[2][0] = APIObject.name;
                    answers[2][0] = APIObject.name;
                    question = "This species is classified as a artificial robot and has an indefinite life span(Debatable).";
                    break;

                case "Wookiee":
                    used[2][0] = APIObject.name;
                    answers[2][0] = APIObject.name;
                    question = "This species is classified as a mammal and lives an average life of 400 earth years.";
                    break;

                case "Rodian":
                    used[2][0] = APIObject.name;
                    answers[2][0] = APIObject.name;
                    question = "This species is classified as a sentient reptile and has an unknown average life span.";
                    break;

                case "Hutt":
                    used[2][0] = APIObject.name;
                    answers[2][0] = APIObject.name;
                    question = "This species is classified as a gastropod and lives an average life of 1000 earth years.";
                    break;


            }
            break;
        // case "starships":
        //     switch (num) {

        //     }
        //     break;
        // case "vehicles":
        //     switch (num) {

        //     }
        //     break;

    }

    var newDiv = document.createElement("div");
    var newSpan = document.createElement("span");

    newSpan.textContent = question;

    newDiv.appendChild(newSpan);
    objectContainer.appendChild(newDiv);

}

var userForm = document.getElementById("usernameForm");

    // userForm.onsubmit = function(){

    //     var username = userForm["username"].value;
    //     console.log(username);

    //     makeRequest();

    //     return false;
    // };

// }

//people
// case 1:
// var randNum = Math.floor(Math.random()*2+1)
// switch (randNum){
// case 1:
// question = "Gets hand removed by father and kisses sister."
// break;
// case 2:
// question = "Father dies and lives with his Uncle and Aunt on a desent planet."
// break;
// }

// case 2:
// var randNum = Math.floor(Math.random()*2+1)
// switch (randNum){
// case 1:
// question = "Knows 6,000,000 forms of communication."
// break;
// case 2:
// quetion = "Gets arm removed during a mission with friend. replaces it with one off a dead body"
// }

// case 3:
// var randNum = Math.floor(Math.random()*3+1)
// switch (randNum){
// case 1:
// question = "The most known droid in the entire franchise."
// break;
// case 2: 
// question = "Saves his master more times than any other character in the franchise."
// break;
// case 3:
// question = "The only droid who did not get his memeory wiped during any war."
// break;
// }

// case 4:
// var randNum = Math.floor(Math.random()*5+1)
// switch (randNum){
// case 1:
// question = "'His deeds will not be forgiven until he merits.'"
// break;
// case 2:
// question = "Destroys an entire planet in order to prove a point."
// break;
// case 3:
// question = "Had a secret apprentice who would be used to take out anybody and anything standing in his way."
// break;
// case 4:
// question = "Get almost every limb replaced with rombotic parts."
// break:
// case 5:
// question = "Nearly murders his son."
// break;
// }

// case 5:
// var randNum = Math.floor(Math.random()*3+1)
// switch (randNum){
// case 1:
// question = "Falls in love with a smuggler."
// break;
// case 2:
// question = "Mother dies whie giving birth to her."
// break;
// case 3:
// question = "Husband would be alive if son wasn't an a*******"
// }