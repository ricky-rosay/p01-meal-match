var recipeData = [];
var drinkData = [];

var recipeSelectedFlag = false;
var drinkSelectedFlag = false;
var mealMatch = {
    recipeid: 0,
    drinkid: 0
}
let isRandom = false;
const spoonApiKey="97810753c767475a85ce44389acb3b8e";

// test variables
let recipeImg = document.getElementById('recipe-img1');
let drinkId=715573;


async function getRecipeAPIdata(recipeUrl) {
    // console.log(" >>>>>>  inside getRecipeAPIdata  >>>>>>>>>>>>>>>");
    const response = await fetch(recipeUrl);
    const jsonRecipe = await response.json();
    
    displayRecipeData(jsonRecipe); 

};

async function getDrinkAPIdata(drinkUrl) {
// console.log(" >>>>>>  inside getDrinkAPIdata  >>>>>>>>>>>>>>>");
    const response = await fetch(drinkUrl);
    const jsonDrink = await response.json();
    displayDrinkData(jsonDrink);



};

// The following function renders items in a list as <li> elements
function displayRecipeData(recipeData) {
    console.log(" >>> inside displayRecipeSearchError >>>>>>>>>>>>");
    // Clear historyList element(s) 
    // $("#recipeList").empty();
    // console.log("recipe list items cleared from screen");
    // $("#recipeList").text("Could not complete search. Try another name.");
    // console.log("recipeData");
    // console.log(recipeData);
    recipeImg.src = recipeData.url;
};

// The following function renders items in a list as <li> elements
function displayDrinkData(drinkData) {
    console.log(" >>> inside displayDrinkData >>>>>>>>>>>>");
    // Clear historyList element(s) 
    // $("#recipeList").empty();
    // console.log("recipe list items cleared from screen");
    // $("#recipeList").text("Could not complete search. Try another name.");
    console.log("drinkData");
    console.log(drinkData);
    // $("#drink-img1").attr("src", drinks[0].strImageSource);

    // newImg.src = recipeData.url;
};
// The following function renders items in a list as <li> elements
function displayRecipeSearchError() {
    console.log(" >>> inside displayRecipeSearchError >>>>>>>>>>>>");
    // Clear historyList element(s) 
    // $("#recipeList").empty();
    // console.log("recipe list items cleared from screen");
    // $("#recipeList").text("Could not complete search. Try another name.");
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
    console.log(" >>>>>>  setRecipeCriteria  >>>>>>>>>>>>>>>");

    // var foodInput = $("#foodInput").val();
    // teesting purposes
    // var foodInput = "lasagna";
    // const spoonApiUrl = "https://api.spoonacular.com/recipes/complexSearch?titleMatch=%recipeCriteria%&number=50&apiKey=%APIKEY%";
    
    // get recipe ID from localStorage
    var recipeId=715573;
    // const spoonApiUrl = "https://api.spoonacular.com/recipes/%recipeId%/information?includeNutrition=true&apiKey=%APIKEY%";
    const spoonApiUrl = "https://api.spoonacular.com/recipes/%recipeId%/card?apiKey=%APIKEY%";
    var recipeUrl = spoonApiUrl.replace("%recipeId%", recipeId).replace("%APIKEY%", spoonApiKey);
    getRecipeAPIdata(recipeUrl)
    .then(response => {
        // recipeData = response;
        // console.log("recipeData====>");
        // console.log(recipeData);
        
        // renderRecipeList(response);
        console.log('yay from getRecipeAPIdata');
    })
    .catch(error => {
        displayRecipeSearchError();
        console.log('error!');
        console.error(error)
    });
};


function setDrinkCriteria() {
console.log(" >>>>>>  setDrinkCriteria  >>>>>>>>>>>>>>>");

// let drinkId=715573;
// const cocktailUrl = "www.thecocktaildb.com/api/json/v1/1/lookup.php?i=%drinkId%";
// var drinkUrl = cocktailUrl.replace("%drinkId%", drinkId);
const drinkUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php"
getDrinkAPIdata(drinkUrl)
.then(response => {
    // gatherDrink(drinkData);
    // displayDrinkforSelection();
    console.log('yay from setDrinkCriteria');
})
.catch(error => {
    console.log('error!');
    console.error(error)
});
    
};

function initDocument() {
console.log(" >>>>>>  initDocument  >>>>>>>>>>>>>>>");

// grab local storage matchedPair
// call food api with id
// call drink api with id
//display food
//display drink

// maybe hide the lists and selection box at bottom until needed


setRecipeCriteria();
setDrinkCriteria();
    
};


// this is setup when document is finished loading
$(document).ready(function() {
console.log("document ready  >>>>>>>>>>>>>>>>>>>>>>");
    // initialize Document
    initDocument();
});
    
// wait for user Input
$("#returnBtn").on("click", function (event) {
console.log(" >>>>>>>>>click event from drinkListArea happened >>>>>>>>>>>>>");
event.preventDefault();
console.log ("event=>", event);

// got back to select page
    // displayDrinkforSelection();  

});

    // wait for user Input
$("#saveBtn").on("click", function (event) {
console.log(" >>>>>>>>>click event happened >>>>>>>>>>>>>");
event.preventDefault();
console.log ("event=>", event);

// add to food/drink history in local storage
    // isRandom = true;
    // setRandomDrinkCriteria();  

});