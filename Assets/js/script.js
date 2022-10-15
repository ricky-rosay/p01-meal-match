var recipeData = [];
var drinkData = [];

var recipeSelectedFlag = false;
var drinkSelectedFlag = false;
let isRandom = false;
const spoonApiKey="97810753c767475a85ce44389acb3b8e"


async function getRecipeAPIdata(recipeUrl) {
    // console.log(" >>>>>>  inside getRecipeAPIdata  >>>>>>>>>>>>>>>");
        const response = await fetch(recipeUrl);
        const jsonRecipeList = await response.json();
        return jsonRecipeList;
    };

async function getDrinkAPIdata(drinkUrl) {
    // console.log(" >>>>>>  inside getDrinkAPIdata  >>>>>>>>>>>>>>>");
        const response = await fetch(drinkUrl);
        const drinkData = await response.json();
        return drinkData;
    };

// The following function renders items in a list as <li> elements
function displayRecipeSearchError() {
    console.log(" >>> inside displayRecipeSearchError >>>>>>>>>>>>");
    // Clear historyList element(s) 
    $("#recipeList").empty();
    console.log("recipe list items cleared from screen");
    $("#recipeList").text("Could not complete search. Try another name.");
};

// The following function renders items in a list as <li> elements
function renderRecipeList(data) {
    console.log(" >>> inside renderRecipeList >>>>>>>>>>>>");
    // Clear historyList element(s) 
    $("#recipeList").empty();
    console.log("recipe list items cleared from screen");
  
    // Render a new li for each history item
    data.forEach(function(item,index){ 

        let btnNbr = index + 1;
        // create li as a button
        let liEl = $("<li><button id=\"btn" + btnNbr + "\" type=\"button\" class=\"btn btn-secondary btn-lg btn-block\"></button></li>");
        // append to list element  
        $("#recipeList").append(liEl);
        // add data atribute and text
        let btnId = "#btn" + btnNbr;
        $(btnId).attr("data-index", index).attr("data-recipeID", item.id);
        $(btnId).text(item.title);
        console.log("add ", btnId, " => ", item.location);
      
    });
};

function setRecipeCriteria() {
    // console.log(" >>>>>>  setRecipeCriteria  >>>>>>>>>>>>>>>");

    var foodInput = $("#foodInput").val();
    const spoonApiUrl = "https://api.spoonacular.com/recipes/complexSearch?titleMatch=%recipeCriteria%&number=50&apiKey=%APIKEY%";
    var recipeUrl = spoonApiUrl.replace("%recipeCriteria%", foodInput).replace("%APIKEY%", spoonApiKey);
    getRecipeAPIdata(recipeUrl)
    .then(response => {
        recipeData = response;
        // console.log("recipeData====>");
        // console.log(recipeData);
        
        renderRecipeList(response);
        console.log('yay from getRecipeAPIdata');
    })
    .catch(error => {
        displayRecipeSearchError();
        console.log('error!');
        console.error(error);
    });
};

function setDrinkCriteria() {

const cocktailRandomUrl = "www.thecocktaildb.com/api/json/v1/1/random.php"  ;
const cocktailNameUrl = "www.thecocktaildb.com/api/json/v1/1/search.php?s=%drinkName%";
var recipeUrl = spoonApiUrl.replace("%recipeCriteria%", foodInput);
getRecipeAPIdata(drinkUrl)
.then(response => {
    gatherDrink(drinkData);
    displayDrinkforSelection();
    console.log('yay from getDrinkAPIdata');
})
.catch(error => {
    console.log('error!');
    console.error(error);
});
    
};

function initDocument() {
    
};


// this is setup when document is finished loading
$(document).ready(function() {
    console.log("document ready  >>>>>>>>>>>>>>>>>>>>>>");
        // initialize Document
        initDocument();
});
    
    // wait for user Input
$("#foodBtn").on("click", function (event) {
console.log(" >>>>>>>>>click event happened >>>>>>>>>>>>>");
event.preventDefault();
console.log ("event=>", event);

    // if (event.target !== event.currentTarget) {
    //     if (event.target.localName === "button") {

    //         if (event.target.id == "recipeSubmitBtn") 
    //         {
            console.log("entering Submit Button");
            // locationFromLS = false;
            setRecipeCriteria();  
    //         };

    //     };

    // };
});

    // wait for user Input
$("#drink").on("click", function (event) {
// console.log(" >>>>>>>>>click event happened >>>>>>>>>>>>>");
    event.preventDefault();
    // console.log ("event=>", event);

    if (event.target !== event.currentTarget) {
    // console.log ("event target localName=>", event.target.localName);
        // console.log ("event target id=>", event.target.id);
        if (event.target.localName === "button") {

            if (event.target.id == "drinkSubmitBtn") 
            {
                // console.log("entering Submit Button");
                // locationFromLS = false;
                isRandom = false;
                setDrinkCriteriaFromSearch();  
            };
        
        };

    };
});

    // wait for user Input
$("#randomBtn").on("click", function (event) {
// console.log(" >>>>>>>>>click event happened >>>>>>>>>>>>>");
    event.preventDefault();
    // console.log ("event=>", event);

    if (event.target !== event.currentTarget) {
    // console.log ("event target localName=>", event.target.localName);
        // console.log ("event target id=>", event.target.id);
        if (event.target.localName === "button") {

            if (event.target.id == "drinkSubmitBtn") 
            {
                // console.log("entering Submit Button");
                isRandom = true;
                setRandomDrinkCriteria();  
            };
        
        };

    };
});