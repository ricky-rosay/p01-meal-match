var recipeData = [];
var drinkData = [];

var recipeSelectedFlag = false;
var drinkSelectedFlag = false;
var mealMatch = {
    recipeid: 0,
    drinkid: 0
};

let isRandom = false;
const spoonApiKey="97810753c767475a85ce44389acb3b8e";
const imranApiKey="561cea46f3664faa9a4dd071c85d058f";
const rickyApiKey="ceb76db1877f401aa6963a7bd800b499";

// const drinkUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php"

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

    console.log("recipeData", recipeData);

    $("#recipeName").text(recipeData.title);
    
    let imageAttr = {
        src: recipeData.image,
        alt: "An image of the %recipeName% recipe".replace("%recipeName%", recipeData.title)
    };
    // console.log(imageAttr);
    $("#recipeImage").attr(imageAttr);

    for (let i = 0; i < recipeData.extendedIngredients.length; i++) {
        let ingredient = recipeData.extendedIngredients[i].original;

        let liEl = "<li>" + ingredient + "</li>";
        $("#recipeIngredients").append(liEl);
    };
    $("#recipeInstructions").text(recipeData.instructions); 
};

// The following function renders items in a list as <li> elements
function displayDrinkData(drinkData) {
    console.log(" >>> inside displayDrinkData >>>>>>>>>>>>");

    let drinkName = drinkData.drinks[0].strDrink;
    $("#drinkName").text(drinkName)
    
    let imageAttr = {
        src: drinkData.drinks[0].strImageSource,
        alt: "An image of the %drinkName% beverage".replace("%drinkName%", drinkName)
    };

    if (drinkData.drinks[0].strImageSource === null) {
        imageAttr.src = drinkData.drinks[0].strDrinkThumb;
    };

    $("#drinkImage").attr(imageAttr);

    for (let i = 1; i < 16; i++) {
        if (drinkData.drinks[0][`strIngredient${i}`] !== null) {
            let ingredient = drinkData.drinks[0][`strIngredient${i}`];
            let measure = drinkData.drinks[0][`strMeasure${i}`];
            let line = measure + " " + ingredient;
            let liEl = "<li>" + line + "</li>";
            $("#drinkIngredients").append(liEl);
        };
    };

    $("#drinkInstructions").text(drinkData.drinks[0].strInstructions);
};

function setRecipeCriteria(recipeID) {
    console.log(" >>>>>>  setRecipeCriteria  >>>>>>>>>>>>>>>");
    // get recipe ID from localStorage
    // var recipeId=715573;
    const spoonApiUrl = "https://api.spoonacular.com/recipes/%RECIPEID%/information?includeNutrition=false&apiKey=%APIKEY%";
    // const spoonApiUrl = "https://api.spoonacular.com/recipes/%recipeID%/card?apiKey=%APIKEY%";
    // var recipeUrl = spoonApiUrl.replace("%RECIPEID%", recipeID).replace("%APIKEY%", spoonApiKey);
    // var recipeUrl = spoonApiUrl.replace("%RECIPEID%", recipeID).replace("%APIKEY%", imranApiKey);
    var recipeUrl = spoonApiUrl.replace("%RECIPEID%", recipeID).replace("%APIKEY%", rickyApiKey);
    console.log(recipeUrl);
    getRecipeAPIdata(recipeUrl)
    // .then(response => {
    //     console.log('yay from getRecipeAPIdata');
    // })
    .catch(error => {
        console.log('error!');
        console.error(error)
    });
};


function setDrinkCriteria(drinkID) {
console.log(" >>>>>>  setDrinkCriteria  >>>>>>>>>>>>>>>");

    // let drinkID=17175;
    const cocktailUrl = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=%drinkID%";
    var drinkUrl = cocktailUrl.replace("%drinkID%", drinkID);


    getDrinkAPIdata(drinkUrl)
    // .then(response => {
    //     console.log('yay from setDrinkCriteria');
    // })
    .catch(error => {
        console.log('error!');
        console.error(error)
    });
    
};

function initDocument() {
console.log(" >>>>>>  initDocument  >>>>>>>>>>>>>>>");
    let matchedLS = JSON.parse(localStorage.getItem("matchedPair")) || [];
    console.log("matchedLS", matchedLS);
    // let matchedPair = {    
    //     recipeID : 715573,
    //     drinkID : 11050
    //     };
    // matchedPair = matchedLS;

    // maybe hide the lists and selection box at bottom until needed
    setRecipeCriteria(matchedLS.recipeID);
    // displayRecipeData(recipes);
    setDrinkCriteria(matchedLS.drinkID);
    // displayDrinkData(cocktails);
};

// this is setup when document is finished loading
$(document).ready(function() {
console.log("document ready  >>>>>>>>>>>>>>>>>>>>>>");
    // initialize Document
    initDocument();
});
