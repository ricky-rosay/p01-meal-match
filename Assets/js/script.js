const searchBtn = document.getElementById('search-btn')
const recipeList = document.getElementById('recipe');
const recipeDetailContent = document.querySelector('recipe-details-content');
const recipeCloseBtn = document.getElementById('recipe-close-btn');
const spoonApiUrl = "https://api.spoonacular.com/recipes/complexSearch?titleMatch=%recipeCriteria%&number=50&apiKey=%APIKEY%";

//eventlisteners
searchBtn.addEventListener('click', getRecipeList);

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

const searchBtn2 = document.getElementById('search-btn2')
const DrinkList = document.getElementById('drink');
const drinkDetailContent = document.querySelector('drink-details-content');
const drinkCloseBtn = document.getElementById('drink-close-btn');
const cocktailUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

//eventlisteners
searchBtn2.addEventListener('click', getDrinkList);