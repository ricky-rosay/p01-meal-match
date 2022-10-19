const searchBtn = document.getElementById('search-btn')
const recipeList = document.getElementById('recipe');
const recipeDetailContent = document.querySelector('recipe-details-content');
const recipeCloseBtn = document.getElementById('recipe-close-btn');
const spoonApiUrl = 'https://api.spoonacular.com/food/products/search?query=yogurt&apiKey=API-KEY';
const spoonApikey = '561cea46f3664faa9a4dd071c85d058f'

//eventlisteners
searchBtn.addEventListener('click', getRecipeList);

async function getRecipeAPIdata(recipeUrl) {
    // console.log(" >>>>>>  inside getRecipeAPIdata  >>>>>>>>>>>>>>>");
    const response = await fetch(recipeUrl);
    const jsonRecipe = await response.json();
    
    displayRecipeData(jsonRecipe); 

    
    function displayRecipeData(recipeData) {
        console.log(" >>> inside displayRecipeSearchError >>>>>>>>>>>>");
    
        console.log("recipeData", recipeData);
    
        $("#recipeName").text(recipeData.title);
    }

//get recipe list that matches with the Name
function getRecipeList(){
    let searchInputTxt = document.getElementById
    ('search-input').value.trim();
    fetch('spoonApiUrl')
    .then(response => response.json())
    .then(data => {
        let html = "";
        if(data.recipecontent){
            data.recipecontent.forEach(recipe => {
                html
            })
        }
        recipeList.innerHTML = html;
    })

}

// // // function getRandomcocktail() {
// // //     console.log("getRandomcocktail");
    
let drinkId=715573;
 const cocktailUrl = "www.thecocktaildb.com/api/json/v1/1/lookup.php?i=%drinkId%";
var drinkUrl = cocktailUrl.replace("%drinkId%", drinkId);
const drinkUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php"
getDrinkAPIdata(drinkUrl)
then(response => {
gatherDrink(drinkData);
displayDrinkforSelection();
console.log('yay from setDrinkCriteria');
})

.catch(error => {
console.log('error!');
console.error(error)
});

        
};

getRandomcocktail();