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
// function game(className, ident) {
//     var currentClass = this.className;
//     var ident = ident;


    var test = 0;
    var used = [[], [], [], [], [], []];
    // className = "films";
    function makeRequest(className, ident) {
        // console.log(el.className);
        var url = "https://swapi.co/api/" + className + "/";
        url = url + getRandomNum(className);
        var req = new XMLHttpRequest();


        req.addEventListener("load", APIHandler);
        req.open("GET", url);
        req.send();

        var elem = document.getElementById('dummy');//we need to make the id of each a tag more specific
        elem.parentNode.removeChild(elem);

        console.log(el);
    }
    makeRequest(currentClass);


    // makeRequest(className);

    function getRandomNum(className) { //We need to know which numbers are broken
        var num;
        switch (className) {
            case "films":
                num = Math.floor(Math.random() * 7 + 1);
                break;
            case "people":
                num = Math.floor(Math.random() * 87 + 1);
                if (num == 17) {
                    num++;
                }
                break;
            case "planets":
                num = Math.floor(Math.random() * 61 + 1);
                break;
            case "species":
                num = Math.floor(Math.random() * 37 + 1);
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
                do {

                    for (var i = 0; i < 7; i++) {
                        if (used[0][i] == id) {
                            id = Math.floor(Math.random() * 7 + 1);
                            goodCheck = false;
                            break;
                        } else {
                            goodCheck = true;
                        }
                    }
                } while (!goodCheck);
                switch (id) {
                    //random questions inside nested switch based on currentclass
                    case 1:
                        used[0][0] = APIObject.episode_id;
                        question = APIObject.opening_crawl;
                        break;
                    case 2:
                        used[0][1] = APIObject.episode_id;
                        question = APIObject.opening_crawl;
                        break;
                    case 3:
                        used[0][2] = APIObject.episode_id;
                        question = APIObject.opening_crawl;
                        break;
                    case 4:
                        used[0][3] = APIObject.episode_id;
                        question = APIObject.opening_crawl;
                        break;
                    case 5:
                        used[0][4] = APIObject.episode_id;
                        question = APIObject.opening_crawl;
                        break;
                    case 6:
                        used[0][5] = APIObject.episode_id;
                        question = APIObject.opening_crawl;
                        break;
                    case 7:
                        used[0][6] = APIObject.episode_id;
                        question = APIObject.opening_crawl;
                        break;

                }
                break;
            case "people":
                var num = Math.floor(Math.random());
                switch (num) {
                    case 1:

                        break;

                    case 2:

                        break;

                    case 3:

                        break;

                    case 4:

                        break;

                    case 5:

                        break;




                }
                break;
            case "planets":
                switch (num) {

                }
                break;
            case "species":
                switch (num) {

                }
                break;
            case "starships":
                switch (num) {

                }
                break;
            case "vehicles":
                switch (num) {

                }
                break;

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