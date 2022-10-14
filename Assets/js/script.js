

var recipeSelectedFlag = false;
var drinkSelectedFlag = false;
const spoonApiKey="97810753c767475a85ce44389acb3b8e"


async function getRecipeAPIdata(recipeUrl) {
    // console.log(" >>>>>>  inside getRecipeAPIdata  >>>>>>>>>>>>>>>");
        const response = await fetch(recipeUrl);
        const recipeData = await response.json();
        //
        gatherRecipe(recipeData);
        displayrecipeforSelection();
        // saveLocalStorage(); 
    };

async function getDrinkAPIdata(drinkUrl) {
    // console.log(" >>>>>>  inside getDrinkAPIdata  >>>>>>>>>>>>>>>");
        const response = await fetch(drinkUrl);
        const drinkData = await response.json();
       
        gatherRecipe(drinkData);
        displayrecipeforSelection();
        // saveLocalStorage(); 
    };

function setRecipeCriteria() {
    var foodInput = $("#foodInput").val()
    const spoonApiUrl = "https://api.spoonacular.com/recipes/complexSearch?titleMatch=%recipeCriteria%&number=50";
    var recipeUrl = spoonApiUrl.replace("%recipeCriteria%", foodInput);
    getRecipeAPIdata(recipeUrl)
    .then(response => {
        console.log('yay from getRecipeAPIdata');
    })
    .catch(error => {
        console.log('error!');
        console.error(error);
    });
};

function setDrinkCriteria() {
    
const cocktailRandomUrl = "www.thecocktaildb.com/api/json/v1/1/random.php"  ;
const cocktailNameUrl = "www.thecocktaildb.com/api/json/v1/1/search.php?s=%drinkName%";
    
};

function initDocument() {
    
};


// this is setup when document is finished loading
$(document).ready(function() {
    // console.log("document ready  >>>>>>>>>>>>>>>>>>>>>>");
        // initialize Document
        initDocument();
    });
    
    // wait for user Input
$("#recipe").on("click", function (event) {
// console.log(" >>>>>>>>>click event happened >>>>>>>>>>>>>");
event.preventDefault();
// console.log ("event=>", event);

    if (event.target !== event.currentTarget) {
        if (event.target.localName === "button") {

            if (event.target.id == "recipeSubmitBtn") 
            {
            // console.log("entering Submit Button");
            locationFromLS = false;
            setRecipeCriteria();  
            };

};

};

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
                    locationFromLS = false;
                    setDrinkCriteria();  
                };
            
            };
    
        };