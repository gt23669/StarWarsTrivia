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
        switch (currentClass) {
            case "films":
                num = Math.floor(Math.random(8));
                switch (num) {
                    //random questions inside nested switch based on currentclass
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