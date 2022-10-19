// flags to check for match
let matched = {
    recipe : false,
    drink : false
};
// matched ids for localStorage
let matchedLS = {
    recipeID : 0,
    drinkID : 0
};
// random flags
let random = {
    recipe : false,
    drink : false
};
const spoonApiKey="97810753c767475a85ce44389acb3b8e";
const imranApiKey="561cea46f3664faa9a4dd071c85d058f";
const rickyApiKey="ceb76db1877f401aa6963a7bd800b499";
// displayRecipeList(recipeList);
// displayRecipeList(recipe);
var options = {credentials: "same-origin"}
async function getRecipeAPIdata(recipeUrl) {
    // console.log(" >>>>>>  inside getRecipeAPIdata  >>>>>>>>>>>>>>>");
    const response = await fetch(recipeUrl,options);
    const jsonRecipe = await response.json();
    
    displayRecipeList(jsonRecipe); 
};

async function getRecipeID(recipeUrl) {
    // console.log(" >>>>>>  inside getRecipeAPIdata  >>>>>>>>>>>>>>>");
    const response = await fetch(recipeUrl,options);
    const jsonRecipe = await response.json();
    
    displayRecipeModal(jsonRecipe); 
};

async function getDrinkAPIdata(drinkUrl) {
    // console.log(" >>>>>>  inside getDrinkAPIdata  >>>>>>>>>>>>>>>");
    const response = await fetch(drinkUrl,options);
    const jsonDrink = await response.json();
    
    displayDrinkList(jsonDrink);
};

async function getDrinkID(drinkUrl) {
    // console.log(" >>>>>>  inside getDrinkAPIdata  >>>>>>>>>>>>>>>");
    const response = await fetch(drinkUrl,options);
    const jsonDrink = await response.json();
    
    displayDrinkModal(jsonDrink);
};

function displayRecipeList(recipeData) {
    console.log(" >>> inside displayRecipeList >>>>>>>>>>>>");

// Clear recipeList element(s)
    $("#recipeList").empty();

    // Render a new li for each recipe item
    for (let i = 0; i < recipeData.results.length; i++) {
        let btnNbr = i + 1;
        // create li as a button
        let recipeTitle = recipeData.results[i].title;
        let recipeID = recipeData.results[i].id;
        // console.log(i, "=>", recipeTitle, "< btn#=>", btnNbr);
        let liEl = `<li><button id="recipeChoice${btnNbr}" data-id="${recipeID}" class="button">${recipeTitle}</button></li>`;
        // append to list element
        $("#recipeList").append(liEl); 
    };
};

function displayDrinkList(drinkData) {
    console.log(" >>> inside displayDrinkList >>>>>>>>>>>>");

    // console.log("drinkData", drinkData);
    // console.log("drinkData", drinkData.drinks);

// Clear drinkList element(s)
    $("#drinkList").empty();

    // Render a new li for each recipe item
    for (let i = 0; i < drinkData.drinks.length; i++) {
        let btnNbr = i + 1;
        // create li as a button
        let drinkTitle = drinkData.drinks[i].strDrink;
        let drinkID = drinkData.drinks[i].idDrink;

        let liEl = `<li><button id="drinkChoice${btnNbr}" data-id="${drinkID}" class="button">${drinkTitle}</button></li>`;
        // append to list element
        $("#drinkList").append(liEl); 
    };
};

//get recipe list that matches with the Name
function displayRecipeModal(recipeData) {
console.log(" >>> inside displayRecipeModal >>>>>>>>>>>>");
console.log("recipeData", recipeData);

$("#recipeModal").addClass("is-active");
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

//get recipe list that matches with the Name
function displayDrinkModal(drinkData) {
console.log(" >>> inside displayRecipeModal >>>>>>>>>>>>");
    $("#drinkModal").addClass("is-active");

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
            let line = (measure + " " + ingredient).replace("null", "");
            let liEl = "<li>" + line + "</li>";
            $("#drinkIngredients").append(liEl);
        };
    };

    $("#drinkInstructions").text(drinkData.drinks[0].strInstructions);
};

function setRecipeCriteriaFromSearch() {
// console.log(" >>>>>>  inside setRecipeCriteriaFromSearch  >>>>>>>>>>>>>");
    let recipeQuery = $("#recipeQuery").val().replace(" ", "%20");

    const spoonApiUrl = "https://api.spoonacular.com/recipes/complexSearch?query=%RECIPEQUERY%&number=25&apiKey=%APIKEY%";
    // var recipeUrl = spoonApiUrl.replace("%RECIPEQUERY%", recipeQuery).replace("%APIKEY%", spoonApiKey);
    var recipeUrl = spoonApiUrl.replace("%RECIPEQUERY%", recipeQuery).replace("%APIKEY%", rickyApiKey);
    // var recipeUrl = spoonApiUrl.replace("%RECIPEQUERY%", recipeQuery).replace("%APIKEY%", imranApiKey);
    console.log(recipeUrl);
    getRecipeAPIdata(recipeUrl)
    // .then(response => {
    //     console.log('yay from setRecipeCriteriaFromSearch');
    // })
    .catch(error => {
        console.log('error!');
        console.error(error)
    });
};

function setDrinkCriteriaFromSearch() {
// console.log(" >>>>>>  inside setDrinkCriteriaFromSearch  >>>>>>>>>>>>>");
    let drinkQuery = $("#drinkQuery").val().replace(" ", "%20");
    console.log("query", drinkQuery);
    const cocktailUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=%DRINKQUERY%";
    var drinkUrl = cocktailUrl.replace("%DRINKQUERY%", drinkQuery);
    console.log(drinkUrl);
    getDrinkAPIdata(drinkUrl)
    // .then(response => {
    //     console.log('yay from setDrinkCriteriaFromSearch');
    // })
    .catch(error => {
        console.log('error!');
        console.error(error)
    });
};

function setRandomDrinkCriteria() {
// console.log(" >>>>>>  inside setRecipeCriteriaFromSearch  >>>>>>>>>>>>>");
     const drinkUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php"
    getDrinkAPIdata(drinkUrl)
    // then(response => {
    //     console.log('yay from setRandomDrinkCriteria');
    // })
    .catch(error => {
        console.log('error!');
        console.error(error)
    });
};

// getRandomcocktail();
//eventlisteners
// searchBtn.addEventListener('click', getRecipeList);
// wait for user Input
$("#searchRecipeBtn").on("click", function (event) {
    // console.log(" >>>>>>>>>click event happened >>>>>>>>>>>>>");
    event.preventDefault();
    // console.log ("event=>", event);
    // console.log ("event target localName=>", event.target.localName);
    // console.log ("event target id=>", event.target.id);
    // console.log("entering Submit Button");

    matched.recipe = false;
    random.recipe = false;
    setRecipeCriteriaFromSearch();
});

$("#searchDrinkBtn").on("click", function (event) {
    // console.log(" >>>>>>>>>click event happened >>>>>>>>>>>>>");
    event.preventDefault();
    // console.log ("event=>", event);
    // console.log ("event target localName=>", event.target.localName);
    // console.log ("event target id=>", event.target.id);
    matched.drink = false;
    random.drink = false;
    setDrinkCriteriaFromSearch();
});

$("#randomDrinkBtn").on("click", function (event) {
    // console.log(" >>>>>>>>>click event happened >>>>>>>>>>>>>");
    event.preventDefault();
    // console.log ("event=>", event);
    // console.log ("event target localName=>", event.target.localName);
    // console.log ("event target id=>", event.target.id);
    matched.drink = false;
    random.drink = true;
    setRandomDrinkCriteria();
});

$("#recipeList").on("click", function (event) {
    // console.log(" >>>>>>>>>click event happened >>>>>>>>>>>>>");
    event.preventDefault();
    // console.log ("event=>", event);
    // console.log ("event target localName=>", event.target.localName);
    // console.log ("event target id=>", event.target.id);
    recipeListBtn = event.target.id;
    $("#recipeList button").removeClass("is-danger");
    $("#" + event.target.id).addClass("is-danger");
    matched.recipe = true;
    matchedLS.recipeID = $("#" + event.target.id).data("id");
    // console.log("button data-id", matchedLS.recipeID );

    const spoonApiUrl = "https://api.spoonacular.com/recipes/%RECIPEID%/information?includeNutrition=false&apiKey=%APIKEY%";
    //    var recipeUrl = spoonApiUrl.replace("%RECIPEID%", recipeID).replace("%APIKEY%", spoonApiKey);
    //    var recipeUrl = spoonApiUrl.replace("%RECIPEID%", recipeID).replace("%APIKEY%", imranApiKey);
       var recipeUrl = spoonApiUrl.replace("%RECIPEID%", matchedLS.recipeID).replace("%APIKEY%", rickyApiKey);
    //    console.log(recipeUrl);
    getRecipeID(recipeUrl)
        .catch(error => {
            console.log('error in getRecipeID!');
            console.error(error)
    });
// displayRecipeModal(recipeID)
});

$("#drinkList").on("click", function (event) {
    // console.log(" >>>>>>>>>click event happened >>>>>>>>>>>>>");
    event.preventDefault();
    // console.log ("event=>", event);
    // console.log ("event target localName=>", event.target.localName);
    // console.log ("event target id=>", event.target.id);
    $("#drinkList button").removeClass("is-danger");
    $("#" + event.target.id).addClass("is-danger");
    matched.drink = true;
    matchedLS.drinkID = $("#" + event.target.id).data("id");
    // console.log("button data-id", matchedLS.drinkID );
    const cocktailUrl = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=%DRINKID%";
    var drinkUrl = cocktailUrl.replace("%DRINKID%", matchedLS.drinkID);
    //    console.log(drinkUrl);
    getDrinkID(drinkUrl)
        .catch(error => {
            console.log('error in getDrinkID!');
            console.error(error)
    });
});

$("#recipeModalBkg").on("click", function (event) {
    // console.log(" >>>>>>>>>click event happened >>>>>>>>>>>>>");
    event.preventDefault();
    // console.log ("event=>", event);
    // console.log ("event target localName=>", event.target.localName);
    // console.log ("event target id=>", event.target.id);
    $("#recipeModal").removeClass("is-active");
// displayRecipeModal(recipeID)
});

$("#drinkModalBkg").on("click", function (event) {
    // console.log(" >>>>>>>>>click event happened >>>>>>>>>>>>>");
    event.preventDefault();
    // console.log ("event=>", event);
    // console.log ("event target localName=>", event.target.localName);
    // console.log ("event target id=>", event.target.id);
    $("#drinkModal").removeClass("is-active");
// displayRecipeModal(recipeID)
});

$("#matchBtn").on("click", function (event) {
    // console.log(" >>>>>>>>>click event happened >>>>>>>>>>>>>");
    // event.preventDefault();
    // console.log ("event=>", event);
    // console.log ("event target localName=>", event.target.localName);
    // console.log ("event target id=>", event.target.id);

// displayRecipeModal(recipeID)
    if (matched) {
        localStorage.setItem("matchedPair", JSON.stringify(matchedLS));
    };
    document.location.href = './results.html'
});
