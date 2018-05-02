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
    var catagories =[];
    var catNum;

    makeRequest();
    function makeRequest(){
        catagories = ["films","people","planets","species","starships","vehicles"]
        for(var i = 0;i<catagories.length;i++){
            var url = "https://swapi.co/api/" + catagories[0] + "/";
            var req = new XMLHttpRequest();
            req.addEventListener("load", APIHandler);
            req.open("GET", url);
            req.send();
        }

    }


    var APIObject;


    function APIHandler() {
        var responseText = this.responseText;
        // console.log("URL response is: "+responseText);
        APIObject = JSON.parse(responseText);
        console.log(APIObject.length);

        LoadAPI(APIObject);

    }

    function LoadAPI(APIObject) {
        var objectContainer = document.getElementById("objectContainer");

            var repo = Object.assign({}, APIObject); 

            console.log(APIObject);
            switch(APIObject.count){
                case 7://films
                for(var i = 0;i<APIObject.results.length;i++){
                    console.log(APIObject.results[i].title);
                }

                break;

                case 87:

                break;
                
                case 61:

                break;

                case 37:

                break;

                case 37:

                break;

                case 39:

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