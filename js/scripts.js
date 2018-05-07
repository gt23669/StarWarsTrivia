window.onload = function () {
    // eraseCookie("username");
    // eraseCookie("score");
    // eraseCookie("username=daniel"); 
    // eraseCookie("visits");
   
    highScore = readCookie("highscore");
    if (highScore == null || highScore == undefined) {
        highScore == 0;
    }
    checkCookie();


}
function checkCookie() {
    var username = readCookie("username");
    if (username != "" && username != null && username != undefined) {
        alert("Welcome back " + username);
    } else {
        console.log("else hit");
    }
}


function createCookie(cname, cvalue, cdays) {
    if (cdays) {
        var date = new Date();
        date.setTime(date.getTime() + (cdays * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    } else {
        var expires = "";
    }

    document.cookie = cname + " = " + cvalue + expires + "; path=/";

    console.log(document.cookie);
    readCookie(cname);
}

function readCookie(cname) {
    var ReadcName = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(ReadcName) == 0) return c.substring(ReadcName.length, c.length);
    }
    return null;
    var cookieArr = document.cookie.split(';');
    for (var i = 0; i < cookieArr.length; i++) {
        var cookieSplit = cookieArr[i];
        while (cookieSplit.charAt(0) == ' ') {
            cookieSplit = cookieSplit.substring(1, cookieSplit.length);
        }
        if (cookieSplit.indexOf(ReadcName) == 0) {
            // console.log(cookieSplit);
            return cookieSplit.substring(ReadcName.length, cookieSplit.length);
        }
    }
    console.log("no cookie");
    return "";
}

function eraseCookie(name) {
    createCookie(name, "", -1);
}

var numInputs = 0;

function continueCSS() {
    document.getElementById("Score").innerHTML = "Score: " + currentScore + " Highscore: " + highScore;
    var x = document.getElementById("input").children.answer;

    if (numInputs === 0 && x.value != readCookie("username")) {
        createCookie("username", x.value, 30);
    }

    if (numInputs === 0 && document.cookie == null) {
        createCookie("username", x.value, 30);
        // createCookie("highscore",highScore,30);
    }

    //  console.log("text field value: "+x.value);
    // console.log("text field id: "+x.id);
    // if(x.id == "answer"){
    //     setCookie("username",x.value, 30);

    numInputs++;

    if (numInputs === 1) {
        document.querySelector("link[href='css/title.css']").href = "css/tables.css";
        document.getElementById("intro").innerHTML = "Choose a category and point value.";
        document.getElementById("inputType").innerHTML = "answer:";
        x.value = "";
    } else if (numInputs > 1 && numInputs < 31) {
        checkAnswer(x);
        document.querySelector("link[href='css/questions.css']").href = "css/tables.css";
        document.getElementById("intro").innerHTML = "Choose a category and point value.";
        x.value = "";

    } else if (numInputs === 31) {
        GameOver();
    }

    // if(numInputs == 5){
    //     GameOver();
    // }

}
function checkAnswer(element) {

    var answer = element.value;
    if (answer == answers[subX][subY]) {
        console.log("That was right");
        currentScore = currentScore + possPoints;
        console.log(currentScore);
        document.getElementById("Score").innerHTML = "Score: " + currentScore + " Highscore: " + highScore;
    } else {
        currentScore = currentScore - possPoints;
        console.log("Sorry that is wrong");
        //Sorry that was wrong. No points.
    }

    console.log(answer);
}

function GameOver() {

    if(currentScore>highScore){
        createCookie("highscore", currentScore, 30);
        highScore = currentScore;
        document.getElementById("Score").innerHTML = "Score: " + currentScore + " Highscore: " + highScore;
        
    }else{
        alert("Thanks for playing!!!");
    }
    console.log(document.cookie);
    document.querySelector("link[href='css/tables.css']").href = "css/gameOver.css";
    // document.getElementById("intro").innerHTML = "High Score:" + document.cookie;
    document.getElementById("intro").innerHTML = "HighScore is: "+highScore;


}

// var catagories = ["films", "people", "planets", "species", "starships", "vehicles"]
var test = 0;
var used = [[], [], [], [], [], []];
var answers = [[], [], [], [], [], []];
var currentClass;
// var highScore;
var currentScore = 0;
var possPoints = 0;
var subX;
var subY;
// className = "films";
function makeRequest(className, ident) {
    possPoints = document.getElementById(ident).innerHTML;
    possPoints = parseInt(possPoints);
    // console.log("Posspoints: "+(possPoints));
    // console.log(el.className);
    document.querySelector("link[href='css/tables.css']").href = "css/questions.css";
    var url = "https://swapi.co/api/" + className + "/";
    url = url + getRandomNum(className);
    var req = new XMLHttpRequest();

    currentClass = className;
    req.addEventListener("load", APIHandler);
    req.open("GET", url);
    req.send();
    console.log(url);

    var elem = document.getElementById(ident);//we need to make the id of each a tag more specific
    elem.parentNode.removeChild(elem);

    // checkAnswer();
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
            do {

                for (var i = 0; i < 5; i++) {
                    if (used[1][i] == num) {
                        num = Math.floor(Math.random() * 5 + 1);
                        goodCheck = false;
                        break;
                    } else {
                        goodCheck = true;
                    }
                }
            } while (!goodCheck);
            break;
        case "planets":
            // num = Math.floor(Math.random() * 61 + 1);
            num = Math.floor(Math.random() * 5 + 1);
            do {
                for (var i = 0; i < 5; i++) {
                    if (used[2][i] == num) {
                        num = Math.floor(Math.random() * 5 + 1);
                        goodCheck = false;
                        break;
                    } else {
                        goodCheck = true;
                    }
                }
            } while (!goodCheck);
            break;
        case "species":
            // num = Math.floor(Math.random() * 37 + 1);
            num = Math.floor(Math.random() * 5 + 1);
            do {
                for (var i = 0; i < 5; i++) {
                    if (used[3][i] == num) {
                        num = Math.floor(Math.random() * 5 + 1);
                        goodCheck = false;
                        break;
                    } else {
                        goodCheck = true;
                    }
                }
            } while (!goodCheck);
            break;
            break;
        case "starships":
            // num = Math.floor(Math.random() * 37 + 1);
            num = Math.floor(Math.random() * 5 + 1);
            do {
                for (var i = 0; i < 5; i++) {
                    if (used[4][i] == num) {
                        num = Math.floor(Math.random() * 5 + 1);
                        // num = parseInt(num);
                        goodCheck = false;
                        break;
                    } else {
                        goodCheck = true;
                    }
                }
            } while (!goodCheck);

            switch (num) {
                case 1:
                    num = 2;
                    break;
                case 2:
                    num = 3;
                    break;
                case 3:
                    num = 5;
                    break;
                case 4:
                    num = 9;
                    break;
                case 5:
                    num = 10;
                    break;
            }
            break;
        case "vehicles":
            num = Math.floor(Math.random() * 5 + 1);
            do {
                for (var i = 0; i < 5; i++) {
                    if (used[5][i] == num) {
                        num = Math.floor(Math.random() * 5 + 1);
                        // num = parseInt(num);
                        goodCheck = false;
                        break;
                    } else {
                        goodCheck = true;
                    }
                }
            } while (!goodCheck);
            switch (num) {
                case 1:
                    num = 4;
                    break;
                case 2:
                    num = 6;
                    break;
                case 3:
                    num = 7;
                    break;
                case 4:
                    num = 8;
                    break;
                case 5:
                    num = 14;
                    break;
            }
            // num = Math.floor(Math.random() * 39 + 1);
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
    // var objectContainer = document.getElementById("objectContainer");
    var introContainer = document.getElementById("intro");
    // console.log(APIObject);




    var question;
    switch (currentClass) {
        case "films":
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
                    console.log(APIObject.title);
                    subX = 0;
                    subY = 0;
                    question = APIObject.opening_crawl;
                    break;
                case 2:
                    used[0][1] = id;
                    answers[0][1] = APIObject.title
                    console.log(APIObject.title);
                    subX = 0;
                    subY = 1;
                    question = APIObject.opening_crawl;
                    break;
                case 3:
                    used[0][2] = id;
                    answers[0][2] = APIObject.title
                    console.log(APIObject.title);
                    subX = 0;
                    subY = 2;
                    question = APIObject.opening_crawl;
                    break;
                case 4:
                    used[0][3] = id;
                    answers[0][3] = APIObject.title
                    console.log(APIObject.title);
                    subX = 0;
                    subY = 3;
                    question = APIObject.opening_crawl;
                    break;
                case 5:
                    used[0][4] = id;
                    answers[0][4] = APIObject.title
                    console.log(APIObject.title);
                    subX = 0;
                    subY = 4;
                    question = APIObject.opening_crawl;
                    break;
                case 6:
                    used[0][5] = id;
                    answers[0][5] = APIObject.title
                    console.log(APIObject.title);
                    subX = 0;
                    subY = 5;
                    question = APIObject.opening_crawl;
                    break;
                case 7:
                    used[0][6] = id;
                    answers[0][6] = APIObject.title
                    console.log(APIObject.title);
                    subX = 0;
                    subY = 6;
                    question = APIObject.opening_crawl;
                    break;

            }
            break;
        case "people":
            // var num = Math.floor(Math.random() * 5 + 1);
            // do {

            //     for (var i = 0; i < 5; i++) {
            //         if (used[1][i] == APIObject.name) {
            //             // num = Math.floor(Math.random() * 5 + 1);
            //             goodCheck = false;
            //             break;
            //         } else {
            //             goodCheck = true;
            //         }
            //     }
            // } while (!goodCheck);
            switch (APIObject.name) {
                case "Luke Skywalker":
                    used[1][0] = 1;
                    answers[1][0] = APIObject.name;
                    console.log(APIObject.name);
                    console.log("answer is: " + answers[1][0]);
                    console.log("Object name is: " + APIObject.name);
                    console.log(APIObject.url);
                    subX = 1;
                    subY = 0;
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
                case "C-3PO":
                    used[1][1] = 2;
                    answers[1][1] = APIObject.name;
                    console.log(APIObject.name);
                    console.log("answer is: " + answers[1][1]);
                    console.log("Object name is: " + APIObject.name);
                    console.log(APIObject.url);
                    subX = 1;
                    subY = 1;
                    var randNum = Math.floor(Math.random() * 2 + 1)
                    switch (randNum) {
                        case 1:
                            question = "Knows 6,000,000 forms of communication."
                            break;
                        case 2:
                            question = "Gets arm removed during a mission with friend. replaces it with one off a dead body"
                            break;
                    }
                    break;
                case "R2-D2":
                    used[1][2] = 3;
                    answers[1][2] = APIObject.name;
                    console.log(APIObject.name);
                    console.log("answer is: " + answers[1][2]);
                    console.log("Object name is: " + APIObject.name);
                    console.log(APIObject.url);
                    subX = 1;
                    subY = 2;
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
                case "Darth Vader":
                    used[1][3] = 4;
                    answers[1][3] = APIObject.name;
                    console.log(APIObject.name);
                    console.log("answer is: " + answers[1][3]);
                    console.log("Object name is: " + APIObject.name);
                    console.log(APIObject.url);
                    subX = 1;
                    subY = 3;
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
                case "Leia Organa":
                    used[1][4] = 5;
                    answers[1][4] = APIObject.name;
                    console.log(APIObject.name);
                    console.log("answer is: " + answers[1][4]);
                    console.log("Object name is: " + APIObject.name);
                    console.log(APIObject.url);
                    subX = 1;
                    subY = 4;
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
        case "planets":

            switch (APIObject.name) {
                case "Tatooine":
                    used[2][0] = APIObject.url.substr(APIObject.url.length - 2, 1);
                    answers[2][0] = APIObject.name;
                    console.log(APIObject.name);
                    console.log("answer is: " + answers[2][0]);
                    console.log("Object name is: " + APIObject.name);
                    subX = 2;
                    subY = 0;
                    question = "Homeworld to Anakin and Luke Skywalker.";
                    break;
                case "Alderaan":
                    used[2][1] = APIObject.url.substr(APIObject.url.length - 2, 1);
                    answers[2][1] = APIObject.name;
                    console.log(APIObject.name);
                    console.log("answer is: " + answers[2][1]);
                    console.log("Object name is: " + APIObject.name);
                    subX = 2;
                    subY = 1;
                    question = "First planet destroyed with the DeathStar.";
                    break;
                case "Yavin IV":
                    used[2][2] = APIObject.url.substr(APIObject.url.length - 2, 1);
                    answers[2][2] = APIObject.name;
                    console.log(APIObject.name);
                    console.log("answer is: " + answers[2][2]);
                    console.log("Object name is: " + APIObject.name);
                    subX = 2;
                    subY = 2;
                    question = "Home of the rebal base that later deployed an assult on the DeathStar.";
                    break;
                case "Hoth":
                    used[2][3] = APIObject.url.substr(APIObject.url.length - 2, 1);
                    answers[2][3] = APIObject.name;
                    console.log(APIObject.name);
                    console.log("answer is: " + answers[2][3]);
                    console.log("Object name is: " + APIObject.name);
                    subX = 2;
                    subY = 3;
                    question = "Icy planet that hosted the battle between the Galactic Empire and the Alliance.";
                    break;
                case "Dagobah":
                    used[2][4] = APIObject.url.substr(APIObject.url.length - 2, 1);
                    answers[2][4] = APIObject.name;
                    console.log(APIObject.name);
                    console.log("answer is: " + answers[2][4]);
                    console.log("Object name is: " + APIObject.name);
                    subX = 2;
                    subY = 4;
                    question = "Luke Skywalker, under Jedi Master Yoda, received his advanced training in the ways of the force on this planet.";
                    break;

            }
            break;
        case "species":
            switch (APIObject.name) {
                case "Human":
                    used[3][0] = APIObject.url.substr(APIObject.url.length - 2, 1);
                    answers[3][0] = APIObject.name;
                    console.log(APIObject.name);
                    console.log("answer is: " + answers[3][0]);
                    console.log("Object name is: " + APIObject.name);
                    subX = 3;
                    subY = 0;
                    question = "This species is classified as a mammal and lives an average life of 120 earth years.";
                    break;

                case "Droid":
                    used[3][1] = APIObject.url.substr(APIObject.url.length - 2, 1);
                    answers[3][1] = APIObject.name;
                    console.log(APIObject.name);
                    console.log("answer is: " + answers[3][1]);
                    console.log("Object name is: " + APIObject.name);
                    subX = 3;
                    subY = 1;
                    question = "This species is classified as a artificial robot and has an indefinite life span(Debatable).";
                    break;

                case "Wookiee":
                    used[3][2] = APIObject.url.substr(APIObject.url.length - 2, 1);
                    answers[3][2] = APIObject.name;
                    console.log(APIObject.name);
                    console.log("answer is: " + answers[3][2]);
                    console.log("Object name is: " + APIObject.name);
                    subX = 3;
                    subY = 2;
                    question = "This species is classified as a mammal and lives an average life of 400 earth years.";
                    break;

                case "Rodian":
                    used[3][3] = APIObject.url.substr(APIObject.url.length - 2, 1);
                    answers[3][3] = APIObject.name;
                    console.log(APIObject.name);
                    console.log("answer is: " + answers[3][3]);
                    console.log("Object name is: " + APIObject.name);
                    subX = 3;
                    subY = 3;
                    question = "This species is classified as a sentient reptile and has an unknown average life span.";
                    break;

                case "Hutt":
                    used[3][4] = APIObject.url.substr(APIObject.url.length - 2, 1);
                    answers[3][4] = APIObject.name;
                    console.log(APIObject.name);
                    console.log("answer is: " + answers[3][4]);
                    console.log("Object name is: " + APIObject.name);
                    subX = 3;
                    subY = 4;
                    question = "This species is classified as a gastropod and lives an average life of 1000 earth years.";
                    break;


            }
            break;
        case "starships":
            switch (APIObject.name) {
                case "CR90 corvette":
                    used[4][0] = "1";
                    answers[4][0] = APIObject.name;
                    console.log(APIObject.name);
                    console.log("answer is: " + answers[4][0]);
                    console.log("Object name is: " + APIObject.name);
                    subX = 4;
                    subY = 0;
                    question = "Also known as Alderaan cruisers, Corellian corvettes, or blockade runners.";
                    break;
                case "Star Destroyer":
                    used[4][1] = "2";
                    answers[4][1] = APIObject.name;
                    console.log(APIObject.name);
                    console.log("answer is: " + answers[4][1]);
                    console.log("Object name is: " + APIObject.name);
                    subX = 4;
                    subY = 1;
                    question = "A dagger-shaped type of capital ship that was used by the Galactic Republic, Empire, and First Order.";
                    break;
                case "Sentinel-class landing craft":
                    used[4][2] = "3";
                    answers[4][2] = APIObject.name;
                    console.log(APIObject.name);
                    console.log("answer is: " + answers[4][2]);
                    console.log("Object name is: " + APIObject.name);
                    subX = 4;
                    subY = 2;
                    question = "Also known as an Imperial landing craft, this was a large-scale troop transport utilized by the Galactic Empire.";
                    break;
                case "Death Star":
                    used[4][3] = "4";
                    answers[4][3] = APIObject.name;
                    console.log(APIObject.name);
                    console.log("answer is: " + answers[4][3]);
                    console.log("Object name is: " + APIObject.name);
                    subX = 4;
                    subY = 3;
                    question = "Gargantuan space station armed with a planet destroying superlaser. ";
                    break;
                case "Millennium Falcon":
                    used[4][4] = "5";
                    answers[4][4] = APIObject.name;
                    console.log(APIObject.name);
                    console.log("answer is: " + answers[4][4]);
                    console.log("Object name is: " + APIObject.name);
                    subX = 4;
                    subY = 4;
                    question = "Original designation YT-1300 492727ZED, used by a pair of smugglers.";
                    break;


            }
            break;
        case "vehicles":
            switch (APIObject.name) {
                case "Sand Crawler":
                    used[5][0] = "1";
                    answers[5][0] = APIObject.name
                    console.log(APIObject.name);
                    console.log("answer is: " + answers[5][0]);
                    console.log("Object name is: " + APIObject.name);
                    subX = 5;
                    subY = 0;
                    question = "Huge mobile fortresses which could be seen on the deserts of Tatooine. Used by the Jawas.";
                    break;
                case "T-16 skyhopper":
                    used[5][1] = "2";
                    answers[5][1] = APIObject.name
                    console.log(APIObject.name);
                    console.log("answer is: " + answers[5][1]);
                    console.log("Object name is: " + APIObject.name);
                    subX = 5;
                    subY = 1;
                    question = "Personal repulsorlift airspeeders. Luke Skywalker owned one on Tatooine prior to the Battle of Yavin.";
                    break;
                case "X-34 landspeeder":
                    used[5][2] = "3";
                    answers[5][2] = APIObject.name
                    console.log(APIObject.name);
                    console.log("answer is: " + answers[5][2]);
                    console.log("Object name is: " + APIObject.name);
                    subX = 5;
                    subY = 2;
                    question = "These vehicles hovered up to a meter off the ground, fitted with powerful repulsorlift engines and lacked any combat capability.";
                    break;
                case "TIE/LN starfighter":
                    used[5][3] = "4";
                    answers[5][3] = APIObject.name
                    console.log(APIObject.name);
                    console.log("answer is: " + answers[5][3]);
                    console.log("Object name is: " + APIObject.name);
                    subX = 5;
                    subY = 3;
                    question = "Standard Imperial starfighter seen in massive numbers.";
                    break;
                case "Snowspeeder":
                    used[5][4] = "5";
                    answers[5][4] = APIObject.name
                    console.log(APIObject.name);
                    console.log("answer is: " + answers[5][4]);
                    console.log("Object name is: " + APIObject.name);
                    subX = 5;
                    subY = 4;
                    question = "With two heavy forward-facing laser cannons and a harpoon cannon,These vehicles were modified to fly on the icy planet hoth during the Battle of Hoth.";
                    break;

            }
            break;

    }

    // var newDiv = document.createElement("div");
    // var newSpan = document.createElement("span");

    // newSpan.textContent = question;

    // newDiv.appendChild(newSpan);
    // objectContainer.appendChild(newDiv);
    introContainer.innerHTML = question;
    // try {

    // } catch (error) {
    //     console.log("intro container caught exception");

    // }

}



// }

