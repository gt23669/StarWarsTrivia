window.onload = function () {
    console.log("JavaScript is working!");

    // var xmlString = "<person id='100'><name>Paul</name><age>20</age></person>";
    // var jsonString = '{ "id": 100,"name": "Paul", "age":20}';

    // console.log(jsonString);

    // var jsonObject = JSON.parse(jsonString);

    // console.log(jsonObject);

    //get put post remove
    // var url = "https://api.github.com/users/gt23669";

    // var catagories = ["films", "people", "planets", "species", "starships", "vehicles"]


    var currentClass = "";
    function makeRequest(className) {
        var url = "https://swapi.co/api/" + className + "/";
        url = url + getRandomNum(className);
        var req = new XMLHttpRequest();

        currentClass = className;
        req.addEventListener("load", APIHandler);
        req.open("GET", url);
        req.send();


    }
    function getRandomNum(className) { //We need to know which numbers are broken
        var num;
        switch (className) {
            case "films":
                num = Math.floor(Math.random(8));
                break;
            case "people":
                num = Math.floor(Math.random(88));
                break;
            case "planets":
                num = Math.floor(Math.random(62));
                break;
            case "species":
                num = Math.floor(Math.random(38));
                break;
            case "starships":
                num = Math.floor(Math.random(38));
                break;
            case "vehicles":
                num = Math.floor(Math.random(40));
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

        LoadAPI(APIObject);

    }

    function LoadAPI(APIObject) {
        var objectContainer = document.getElementById("objectContainer");
        console.log(APIObject);

        var num = 0;
        var question;
        switch (currentClass) {
            case "films":
                num = Math.floor(Math.random(8));
                switch (num) {
                    //random questions inside nested switch based on currentclass
                    case 1:
                        question = "It is a period of civil war. Rebel spaceships, striking from a hidden base," +
                            " have won their first victory against the evil Galactic Empire. During the battle," +
                            " Rebel spies managed to steal secret plans to the Empire's ultimate weapon," +
                            " the DEATH STAR, an armored space station with enough power to destroy an entire planet." +
                            " Pursued by the Empire's sinister agents, Princess Leia races home aboard her starship," +
                            " custodian of the stolen plans that can save her people and restore freedom to the galaxy....";
                        break;
                    case 2:
                        question = "There is unrest in the Galactic Senate. Several thousand solar systems have declared their intentions" +
                            " to leave the Republic. This separatist movement, under the leadership of the mysterious Count Dooku," +
                            " has made it difficult for the limited number of Jedi Knights to maintain peace and order in the galaxy." +
                            " Senator Amidala, the former Queen of Naboo, is returning to the Galactic Senate to vote on the critical" +
                            " issue of creating an ARMY OF THE REPUBLIC to assist the overwhelmed Jedi....";
                        break;
                    case 3:
                        question = "Turmoil has engulfed the Galactic Republic." +
                            " The taxation of trade routes to outlying star systems is in dispute." +
                            " Hoping to resolve the matter with a blockade of deadly battleships," +
                            " the greedy Trade Federation has stopped all shipping to the small planet of Naboo." +
                            " While the Congress of the Republic endlessly debates this alarming chain of events," +
                            " the Supreme Chancellor has secretly dispatched two Jedi Knights, the guardians of peace and justice in the galaxy," +
                            " to settle the conflict....";
                        break;
                    case 4:
                        question = "War! The Republic is crumbling under attacks by the ruthless Sith Lord," +
                            " Count Dooku. There are heroes on both sides. Evil is everywhere. In a stunning move, the fiendish droid leader," +
                            " General Grievous, has swept into the Republic capital and kidnapped Chancellor Palpatine," +
                            " leader of the Galactic Senate. As the Separatist Droid Army attempts to flee the besieged capital with their valuable hostage," +
                            " two Jedi Knights lead a desperate mission to rescue the captive Chancellor....";
                        break;
                    case 5:
                        question = " Luke Skywalker has returned to his home planet of Tatooine in an attempt to rescue his friend Han Solo" +
                            " from the clutches of the vile gangster Jabba the Hutt. Little does Luke know that the GALACTIC EMPIRE has secretly begun" +
                            " construction on a new armored space station even more powerful than the first dreaded Death Star. When completed," +
                            " this ultimate weapon will spell certain doom for the small band of rebels struggling to restore freedom to the galaxy...";
                        break;
                    case 6:
                        question = "It is a dark time for the Rebellion. Although the Death Star has been destroyed," +
                            " Imperial troops have driven the Rebel forces from their hidden base and pursued them across the galaxy." +
                            " Evading the dreaded Imperial Starfleet, a group of freedom fighters led by Luke Skywalker has established a new" +
                            " secret base on the remote ice world of Hoth. The evil lord Darth Vader, obsessed with finding young Skywalker," +
                            " has dispatched thousands of remote probes into the far reaches of space....";
                        break;
                    case 7:
                        question = "Luke Skywalker has vanished. In his absence, the sinister FIRST ORDER has risen from the ashes of the Empire"
                        " and will not rest until Skywalker, the last Jedi, has been destroyed. With the support of the REPUBLIC,"
                        " General Leia Organa leads a brave RESISTANCE. She is desperate to find her brother Luke and gain his help"
                        " in restoring peace and justice to the galaxy. Leia has sent her most daring pilot on a secret mission to Jakku,"
                        " where an old ally has discovered a clue to Luke's whereabouts....";
                        break;

                }
                break;
            case "people":
                num = Math.floor(Math.random(88));
                switch (num) {

                }
                break;
            case "planets":
                num = Math.floor(Math.random(62));
                switch (num) {

                }
                break;
            case "species":
                num = Math.floor(Math.random(38));
                switch (num) {

                }
                break;
            case "starships":
                num = Math.floor(Math.random(38));
                switch (num) {

                }
                break;
            case "vehicles":
                num = Math.floor(Math.random(40));
                switch (num) {

                }
                break;

        }

        var newDiv = document.createElement("div");
        var newSpan = document.createElement("span");

        newSpan.textContent = repo.name;

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

}