window.onload = function () {
    console.log("JavaScript is working!");

    // var xmlString = "<person id='100'><name>Paul</name><age>20</age></person>";
    // var jsonString = '{ "id": 100,"name": "Paul", "age":20}';

    // console.log(jsonString);

    // var jsonObject = JSON.parse(jsonString);

    // console.log(jsonObject);

    //get put post remove
    // var url = "https://api.github.com/users/gt23669";
    // var url = "http https://swapi.co/api/" + catagory[i] + "/"+catNum;
    var catagories = ["films", "people", "planets", "species", "starships", "vehicles"]
    var catNum;
    var answerARR;
    var req = new XMLHttpRequest();
    var index = 0;

    makeRequest();
    function makeRequest() {
 
   

            var url = "https://swapi.co/api/"+catagories[index]+"/";
            // var req = new XMLHttpRequest();
            req.addEventListener("load", APIHandler);
            req.open("GET", url);
            req.send();


    }
    function nextRequest(url) {
        this.url = url;
        // var reqNext = req;
        req.addEventListener("load", nextAPIHandler);
        req.open("GET", url);
        req.send();



    }
    var APINextObject;
    function nextAPIHandler() {
        console.log("nextrequest hit");
        var responseText = this.responseText;
        APIObject = JSON.parse(responseText);
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

        var repo = Object.assign({}, APIObject);

        console.log(APIObject);
        var count = 0;
        switch (APIObject.count) {
            case 7://films
                // for (var i = 0; i < APIObject.count; i++) {
                //     // console.log(APIObject.results[i].title);
                // }
                if (APIObject.next != null) {
                    console.log("films next not null")
                    for (var i = 0; i < APIObject.results.length; i++) {
                        console.log(count + " " + APIObject.results[i].name);
                    }
                    var url = APIObject.next;
                    console.log(APIObject.next);
                    nextRequest(url);
                }
                break;
            case 87://people
            
                if (APIObject.next != null) {
                    console.log("people next not null")

                        for (var i = 0; i < APIObject.results.length; i++) {
                            console.log(count + " " + APIObject.results[i].name);
                        }
                        var url = APIObject.next;
                        console.log(APIObject.next);
                        nextRequest(url);
                }
                break;

            case 61://planets
                // for (var i = 0; i < APIObject.count; i++) {
                //     // console.log(APIObject.results[i].name);
                // }
                if (APIObject.next != null) {
                    console.log("planets next not null")
                    for (var i = 0; i < APIObject.results.length; i++) {
                        console.log(count + " " + APIObject.results[i].name);
                    }
                    var url = APIObject.next;
                    console.log(APIObject.next);
                    nextRequest(url);
                }
                break;

            case 37:
                //species
                // console.log(APIObject.results[0].hasOwnProperty('people'));
                if ('people' in APIObject.results[0]) {
                    console.log("people property in species");
                    if (APIObject.next != null) {
                        console.log("species next not null")
                        for (var i = 0; i < APIObject.results.length; i++) {
                            console.log(count + " " + APIObject.results[i].name);
                        }
                        var url = APIObject.next;
                        console.log(APIObject.next);
                        nextRequest(url);
                    }
                }
                // for (var i = 0; i < APIObject.count; i++) {
                //     // console.log(APIObject.results[i].name);
                // }
                //starships
                // console.log(APIObject.results[0].hasOwnProperty('pilots'));
                if ('pilots' in APIObject.results[0]) {
                    console.log("pilots property in starships");
                    if (APIObject.next != null) {
                        console.log("pilots next not null")
                        for (var i = 0; i < APIObject.results.length; i++) {
                            console.log(count + " " + APIObject.results[i].name);
                        }
                        var url = APIObject.next;
                        console.log(APIObject.next);
                        nextRequest(url);
                    }
                }
                // for (var i = 0; i < APIObject.count; i++) {
                //     // console.log(APIObject.results[i].name);
                // }
                break;
            case 39://vehicals
                // for (var i = 0; i < APIObject.count; i++) {
                //     // console.log(APIObject.results[i].name);
                // }
                if (APIObject.next != null) {
                    console.log("vehicals next not null")
                    for (var i = 0; i < APIObject.results.length; i++) {
                        console.log(count + " " + APIObject.results[i].name);
                    }
                    var url = APIObject.next;
                    console.log(APIObject.next);
                    nextRequest(url);
                }
                break;

            default:
                console.log("Hit default case");
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