var	cocktails = {
    drinks : [{
		idDrink: "11050",
		strDrink: "Apricot Lady",
		strDrinkAlternate: null,
		strTags: "Cold",
		strVideo: null,
		strCategory: "Ordinary Drink",
		strIBA: null,
		strAlcoholic: "Alcoholic",
		strGlass: "Old-fashioned glass",
		strInstructions: "In a shaker half-filled with ice cubes, combine the rum, apricot brandy, triple sec, lemon juice, and egg white. Shake well. Strain into an old-fashioned glass almost filled with ice cubes. Garnish with the orange slice.",
		strInstructionsES: "A\u00f1adir todos los ingredientes en un vaso mezclador, enfriar y colar en un vaso de c\u00f3ctel.",
		strInstructionsDE: "In einem Shaker, der halb mit Eisw\u00fcrfeln gef\u00fcllt ist, Rum, Apricot Brandy, Triple Sec, Zitronensaft und Eiwei\u00df mischen. Gut sch\u00fctteln. In ein old-fashioned Glas abseihen, das fast mit Eisw\u00fcrfeln gef\u00fcllt ist. Mit der Orangenscheibe garnieren.",
		strInstructionsFR: null,
		strInstructionsIT: "In uno shaker riempito a met\u00e0 con cubetti di ghiaccio, unire il rum, il brandy di albicocche, il triple sec, il succo di limone e l'albume. Guarnire con la fetta d'arancia. Filtrare in un bicchiere vecchio stile quasi pieno di cubetti di ghiaccio. Agitare bene",
		strInstructionsZHHANS: null,
		strInstructionsZHHANT: null,
		strDrinkThumb: "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/7ityp11582579598.jpg",
		strIngredient1: "Light rum",
		strIngredient2: "Apricot brandy",
		strIngredient3: "Triple sec",
		strIngredient4: "Lemon juice",
		strIngredient5: "Egg white",
		strIngredient6: "Orange",
		strIngredient7: null,
		strIngredient8: null,
		strIngredient9: null,
		strIngredient10: null,
		strIngredient11: null,
		strIngredient12: null,
		strIngredient13: null,
		strIngredient14: null,
		strIngredient15: null,
		strMeasure1: "1 1\/2 oz ",
		strMeasure2: "1 oz ",
		strMeasure3: "1 tsp ",
		strMeasure4: "1\/2 oz ",
		strMeasure5: "1 ",
		strMeasure6: "1 ",
		strMeasure7: null,
		strMeasure8: null,
		strMeasure9: null,
		strMeasure10: null,
		strMeasure11: null,
		strMeasure12: null,
		strMeasure13: null,
		strMeasure14: null,
		strMeasure15: null,
		strImageSource: null,
		strImageAttribution: null,
		strCreativeCommonsConfirmed: "Yes",
		dateModified: "2017-09-02 23:03:34"
	}]};
const recipe = {
    vegetarian: false,
    vegan: false,
    glutenFree: false,
    dairyFree: false,
    veryHealthy: false,
    cheap: false,
    veryPopular: false,
    sustainable: false,
    lowFodmap: false,
    weightWatcherSmartPoints: 23,
    gaps: "no",
    preparationMinutes: 10,
    cookingMinutes: 25,
    aggregateLikes: 231,
    healthScore: 39,
    creditsText: "pinkwhen.com",
    sourceName: "pinkwhen.com",
    pricePerServing: 245.66,
    extendedIngredients: [{
        id: 2044,
        aisle: "Produce",
        image: "fresh-basil.jpg",
        consistency: "SOLID",
        name: "basil leaves",
        nameClean: "fresh basil",
        original: "basil leaves and basil sprig",
        originalName: "basil leaves and basil",
        amount: 1.0,
        unit: "sprig",
        meta: [],
        measures: {
            us: {
                amount: 1.0,
                unitShort: "sprig",
                unitLong: "sprig"
            },
            metric: {
                amount: 1.0,
                unitShort: "sprig",
                unitLong: "sprig"
            }
        }
    }, {
        id: 10011693,
        aisle: "Canned and Jarred",
        image: "tomatoes-canned.png",
        consistency: "SOLID",
        name: "canned tomatoes",
        nameClean: "canned tomatoes",
        original: "2 28oz cans peeled tomatoes",
        originalName: "peeled tomatoes",
        amount: 56.0,
        unit: "oz",
        meta: ["peeled", "canned"],
        measures: {
            us: {
                amount: 56.0,
                unitShort: "oz",
                unitLong: "ounces"
            },
            metric: {
                amount: 1.588,
                unitShort: "kgs",
                unitLong: "kgs"
            }
        }
    }, {
        id: 11215,
        aisle: "Produce",
        image: "garlic.png",
        consistency: "SOLID",
        name: "garlic",
        nameClean: "garlic",
        original: "3 cloves thinly sliced and chopped garlic",
        originalName: "thinly sliced and chopped garlic",
        amount: 3.0,
        unit: "cloves",
        meta: ["thinly sliced", "chopped"],
        measures: {
            us: {
                amount: 3.0,
                unitShort: "cloves",
                unitLong: "cloves"
            },
            metric: {
                amount: 3.0,
                unitShort: "cloves",
                unitLong: "cloves"
            }
        }
    }, {
        id: 7036,
        aisle: "Meat",
        image: "raw-pork-sausage.png",
        consistency: "SOLID",
        name: "italian sausage",
        nameClean: "italian sausage",
        original: "1.5lbs Italian sausage",
        originalName: "Italian sausage",
        amount: 1.5,
        unit: "lbs",
        meta: ["italian"],
        measures: {
            us: {
                amount: 1.5,
                unitShort: "lb",
                unitLong: "pounds"
            },
            metric: {
                amount: 680.389,
                unitShort: "g",
                unitLong: "grams"
            }
        }
    }, {
        id: 1026,
        aisle: "Cheese",
        image: "mozzarella.png",
        consistency: "SOLID",
        name: "mozzarella cheese",
        nameClean: "mozzarella",
        original: "mozzarella cheese",
        originalName: "mozarella cheese",
        amount: 1.0,
        unit: "oz",
        meta: [],
        measures: {
            us: {
                amount: 1.0,
                unitShort: "oz",
                unitLong: "ounce"
            },
            metric: {
                amount: 28.35,
                unitShort: "g",
                unitLong: "grams"
            }
        }
    }, {
        id: 11282,
        aisle: "Produce",
        image: "brown-onion.png",
        consistency: "SOLID",
        name: "onion",
        nameClean: "onion",
        original: "1 small chopped onion",
        originalName: "chopped onion",
        amount: 1.0,
        unit: "small",
        meta: ["chopped"],
        measures: {
            us: {
                amount: 1.0,
                unitShort: "small",
                unitLong: "small"
            },
            metric: {
                amount: 1.0,
                unitShort: "small",
                unitLong: "small"
            }
        }
    }, {
        id: 2027,
        aisle: "Produce;Spices and Seasonings",
        image: "oregano.jpg",
        consistency: "SOLID",
        name: "oregano",
        nameClean: "oregano",
        original: "oregano flakes",
        originalName: "oregano flakes",
        amount: 5.0,
        unit: "servings",
        meta: [],
        measures: {
            us: {
                amount: 5.0,
                unitShort: "servings",
                unitLong: "servings"
            },
            metric: {
                amount: 5.0,
                unitShort: "servings",
                unitLong: "servings"
            }
        }
    }, {
        id: 10620420,
        aisle: "Pasta and Rice",
        image: "lasagna-noodles.jpg",
        consistency: "SOLID",
        name: "packaged no-boil lasagna noodles",
        nameClean: "lasagne noodles",
        original: "no boil lasagna noodles",
        originalName: "no boil lasagna noodles",
        amount: 5.0,
        unit: "servings",
        meta: [],
        measures: {
            us: {
                amount: 5.0,
                unitShort: "servings",
                unitLong: "servings"
            },
            metric: {
                amount: 5.0,
                unitShort: "servings",
                unitLong: "servings"
            }
        }
    }, {
        id: 1032009,
        aisle: "Spices and Seasonings",
        image: "red-pepper-flakes.jpg",
        consistency: "SOLID",
        name: "red pepper flakes",
        nameClean: "red pepper flakes",
        original: "½ tsp red pepper flakes",
        originalName: "red pepper flakes",
        amount: 0.5,
        unit: "tsp",
        meta: ["red"],
        measures: {
            us: {
                amount: 0.5,
                unitShort: "tsps",
                unitLong: "teaspoons"
            },
            metric: {
                amount: 0.5,
                unitShort: "tsps",
                unitLong: "teaspoons"
            }
        }
    }, {
        id: 1036,
        aisle: "Cheese",
        image: "ricotta.png",
        consistency: "SOLID",
        name: "ricotta cheese",
        nameClean: "ricotta cheese",
        original: "ricotta cheese",
        originalName: "ricotta cheese",
        amount: 5.0,
        unit: "servings",
        meta: [],
        measures: {
            us: {
                amount: 5.0,
                unitShort: "servings",
                unitLong: "servings"
            },
            metric: {
                amount: 5.0,
                unitShort: "servings",
                unitLong: "servings"
            }
        }
    }, {
        id: 1102047,
        aisle: "Spices and Seasonings",
        image: "salt-and-pepper.jpg",
        consistency: "SOLID",
        name: "salt and pepper",
        nameClean: "salt and pepper",
        original: "salt and pepper",
        originalName: "salt and pepper",
        amount: 5.0,
        unit: "servings",
        meta: [],
        measures: {
            us: {
                amount: 5.0,
                unitShort: "servings",
                unitLong: "servings"
            },
            metric: {
                amount: 5.0,
                unitShort: "servings",
                unitLong: "servings"
            }
        }
    }],
    id: 715573,
    title: "Simple Skillet Lasagna",
    readyInMinutes: 35,
    servings: 5,
    sourceUrl: "http://www.pinkwhen.com/skillet-lasagna/",
    image: "https://spoonacular.com/recipeImages/715573-556x370.jpg",
    imageType: "jpg",
    nutrition: {
        nutrients: [{
            name: "Calories",
            amount: 810.53,
            unit: "kcal",
            percentOfDailyNeeds: 40.53
        }, {
            name: "Fat",
            amount: 45.86,
            unit: "g",
            percentOfDailyNeeds: 70.56
        }, {
            name: "Saturated Fat",
            amount: 16.47,
            unit: "g",
            percentOfDailyNeeds: 102.97
        }, {
            name: "Carbohydrates",
            amount: 68.7,
            unit: "g",
            percentOfDailyNeeds: 22.9
        }, {
            name: "Net Carbohydrates",
            amount: 60.1,
            unit: "g",
            percentOfDailyNeeds: 21.86
        }, {
            name: "Sugar",
            amount: 16.2,
            unit: "g",
            percentOfDailyNeeds: 17.99
        }, {
            name: "Cholesterol",
            amount: 108.41,
            unit: "mg",
            percentOfDailyNeeds: 36.14
        }, {
            name: "Sodium",
            amount: 1651.8,
            unit: "mg",
            percentOfDailyNeeds: 71.82
        }, {
            name: "Protein",
            amount: 33.67,
            unit: "g",
            percentOfDailyNeeds: 67.34
        }, {
            name: "Selenium",
            amount: 72.57,
            unit: "µg",
            percentOfDailyNeeds: 103.67
        }, {
            name: "Vitamin B1",
            amount: 1.08,
            unit: "mg",
            percentOfDailyNeeds: 71.72
        }, {
            name: "Manganese",
            amount: 1.28,
            unit: "mg",
            percentOfDailyNeeds: 64.09
        }, {
            name: "Vitamin B6",
            amount: 1.02,
            unit: "mg",
            percentOfDailyNeeds: 51.05
        }, {
            name: "Vitamin B3",
            amount: 9.36,
            unit: "mg",
            percentOfDailyNeeds: 46.82
        }, {
            name: "Copper",
            amount: 0.87,
            unit: "mg",
            percentOfDailyNeeds: 43.67
        }, {
            name: "Phosphorus",
            amount: 431.44,
            unit: "mg",
            percentOfDailyNeeds: 43.14
        }, {
            name: "Potassium",
            amount: 1450.21,
            unit: "mg",
            percentOfDailyNeeds: 41.43
        }, {
            name: "Vitamin C",
            amount: 33.63,
            unit: "mg",
            percentOfDailyNeeds: 40.76
        }, {
            name: "Iron",
            amount: 6.97,
            unit: "mg",
            percentOfDailyNeeds: 38.71
        }, {
            name: "Fiber",
            amount: 8.6,
            unit: "g",
            percentOfDailyNeeds: 34.41
        }, {
            name: "Magnesium",
            amount: 118.59,
            unit: "mg",
            percentOfDailyNeeds: 29.65
        }, {
            name: "Zinc",
            amount: 4.34,
            unit: "mg",
            percentOfDailyNeeds: 28.96
        }, {
            name: "Vitamin E",
            amount: 4.31,
            unit: "mg",
            percentOfDailyNeeds: 28.72
        }, {
            name: "Vitamin B2",
            amount: 0.46,
            unit: "mg",
            percentOfDailyNeeds: 26.97
        }, {
            name: "Vitamin K",
            amount: 25.2,
            unit: "µg",
            percentOfDailyNeeds: 24.0
        }, {
            name: "Vitamin B12",
            amount: 1.37,
            unit: "µg",
            percentOfDailyNeeds: 22.85
        }, {
            name: "Calcium",
            amount: 198.85,
            unit: "mg",
            percentOfDailyNeeds: 19.88
        }, {
            name: "Vitamin B5",
            amount: 1.87,
            unit: "mg",
            percentOfDailyNeeds: 18.68
        }, {
            name: "Folate",
            amount: 68.17,
            unit: "µg",
            percentOfDailyNeeds: 17.04
        }, {
            name: "Vitamin A",
            amount: 823.29,
            unit: "IU",
            percentOfDailyNeeds: 16.47
        }],
        properties: [{
            name: "Glycemic Index",
            amount: 58.8,
            unit: ""
        }, {
            name: "Glycemic Load",
            amount: 24.07,
            unit: ""
        }, {
            name: "Nutrition Score",
            amount: 35.18173913043478,
            unit: "%"
        }],
        flavonoids: [{
            name: "Cyanidin",
            amount: 0.0,
            unit: ""
        }, {
            name: "Petunidin",
            amount: 0.0,
            unit: ""
        }, {
            name: "Delphinidin",
            amount: 0.0,
            unit: ""
        }, {
            name: "Malvidin",
            amount: 0.0,
            unit: ""
        }, {
            name: "Pelargonidin",
            amount: 0.0,
            unit: ""
        }, {
            name: "Peonidin",
            amount: 0.0,
            unit: ""
        }, {
            name: "Catechin",
            amount: 0.0,
            unit: "mg"
        }, {
            name: "Epigallocatechin",
            amount: 0.0,
            unit: "mg"
        }, {
            name: "Epicatechin",
            amount: 0.0,
            unit: "mg"
        }, {
            name: "Epicatechin 3-gallate",
            amount: 0.0,
            unit: "mg"
        }, {
            name: "Epigallocatechin 3-gallate",
            amount: 0.0,
            unit: "mg"
        }, {
            name: "Theaflavin",
            amount: 0.0,
            unit: ""
        }, {
            name: "Thearubigins",
            amount: 0.0,
            unit: ""
        }, {
            name: "Eriodictyol",
            amount: 0.0,
            unit: ""
        }, {
            name: "Hesperetin",
            amount: 0.0,
            unit: "mg"
        }, {
            name: "Naringenin",
            amount: 0.0,
            unit: ""
        }, {
            name: "Apigenin",
            amount: 0.0,
            unit: "mg"
        }, {
            name: "Luteolin",
            amount: 0.0,
            unit: "mg"
        }, {
            name: "Isorhamnetin",
            amount: 0.7,
            unit: "mg"
        }, {
            name: "Kaempferol",
            amount: 0.1,
            unit: "mg"
        }, {
            name: "Myricetin",
            amount: 0.03,
            unit: "mg"
        }, {
            name: "Quercetin",
            amount: 2.87,
            unit: "mg"
        }, {
            name: "Theaflavin-3,3'-digallate",
            amount: 0.0,
            unit: ""
        }, {
            name: "Theaflavin-3'-gallate",
            amount: 0.0,
            unit: ""
        }, {
            name: "Theaflavin-3-gallate",
            amount: 0.0,
            unit: ""
        }, {
            name: "Gallocatechin",
            amount: 0.0,
            unit: "mg"
        }],
        ingredients: [{
            id: 2044,
            name: "basil leaves",
            amount: 0.2,
            unit: "sprig",
            nutrients: [{
                name: "Caffeine",
                amount: 0.0,
                unit: "mg",
                percentOfDailyNeeds: 0.0
            }, {
                name: "Carbohydrates",
                amount: 0.01,
                unit: "g",
                percentOfDailyNeeds: 22.9
            }, {
                name: "Mono Unsaturated Fat",
                amount: 0.0,
                unit: "g",
                percentOfDailyNeeds: 0.0
            }, {
                name: "Vitamin K",
                amount: 1.66,
                unit: "µg",
                percentOfDailyNeeds: 24.0
            }, {
                name: "Lycopene",
                amount: 0.0,
                unit: "µg",
                percentOfDailyNeeds: 0.0
            }, {
                name: "Iron",
                amount: 0.01,
                unit: "mg",
                percentOfDailyNeeds: 38.71
            }, {
                name: "Vitamin A",
                amount: 21.1,
                unit: "IU",
                percentOfDailyNeeds: 16.47
            }, {
                name: "Sodium",
                amount: 0.02,
                unit: "mg",
                percentOfDailyNeeds: 71.82
            }, {
                name: "Manganese",
                amount: 0.0,
                unit: "mg",
                percentOfDailyNeeds: 64.09
            }, {
                name: "Fiber",
                amount: 0.01,
                unit: "g",
                percentOfDailyNeeds: 34.41
            }, {
                name: "Vitamin B12",
                amount: 0.0,
                unit: "µg",
                percentOfDailyNeeds: 22.85
            }, {
                name: "Cholesterol",
                amount: 0.0,
                unit: "mg",
                percentOfDailyNeeds: 36.14
            }, {
                name: "Folate",
                amount: 0.27,
                unit: "µg",
                percentOfDailyNeeds: 17.04
            }, {
                name: "Vitamin B1",
                amount: 0.0,
                unit: "mg",
                percentOfDailyNeeds: 71.72
            }, {
                name: "Vitamin B3",
                amount: 0.0,
                unit: "mg",
                percentOfDailyNeeds: 46.82
            }, {
                name: "Protein",
                amount: 0.01,
                unit: "g",
                percentOfDailyNeeds: 67.34
            }, {
                name: "Potassium",
                amount: 1.18,
                unit: "mg",
                percentOfDailyNeeds: 41.43
            }, {
                name: "Vitamin B2",
                amount: 0.0,
                unit: "mg",
                percentOfDailyNeeds: 26.97
            }, {
                name: "Folic Acid",
                amount: 0.0,
                unit: "µg",
                percentOfDailyNeeds: 0.0
            }, {
                name: "Zinc",
                amount: 0.0,
                unit: "mg",
                percentOfDailyNeeds: 28.96
            }, {
                name: "Copper",
                amount: 0.0,
                unit: "mg",
                percentOfDailyNeeds: 43.67
            }, {
                name: "Poly Unsaturated Fat",
                amount: 0.0,
                unit: "g",
                percentOfDailyNeeds: 0.0
            }, {
                name: "Vitamin B6",
                amount: 0.0,
                unit: "mg",
                percentOfDailyNeeds: 51.05
            }, {
                name: "Phosphorus",
                amount: 0.22,
                unit: "mg",
                percentOfDailyNeeds: 43.14
            }, {
                name: "Vitamin E",
                amount: 0.0,
                unit: "mg",
                percentOfDailyNeeds: 28.72
            }, {
                name: "Saturated Fat",
                amount: 0.0,
                unit: "g",
                percentOfDailyNeeds: 102.97
            }, {
                name: "Calories",
                amount: 0.09,
                unit: "kcal",
                percentOfDailyNeeds: 40.53
            }, {
                name: "Selenium",
                amount: 0.0,
                unit: "µg",
                percentOfDailyNeeds: 103.67
            }, {
                name: "Calcium",
                amount: 0.71,
                unit: "mg",
                percentOfDailyNeeds: 19.88
            }, {
                name: "Choline",
                amount: 0.05,
                unit: "mg",
                percentOfDailyNeeds: 0.0
            }, {
                name: "Vitamin D",
                amount: 0.0,
                unit: "µg",
                percentOfDailyNeeds: 0.16
            }, {
                name: "Fat",
                amount: 0.0,
                unit: "g",
                percentOfDailyNeeds: 70.56
            }, {
                name: "Net Carbohydrates",
                amount: 0.0,
                unit: "g",
                percentOfDailyNeeds: 21.86
            }, {
                name: "Alcohol",
                amount: 0.0,
                unit: "g",
                percentOfDailyNeeds: 0.0
            }, {
                name: "Vitamin B5",
                amount: 0.0,
                unit: "mg",
                percentOfDailyNeeds: 18.68
            }, {
                name: "Sugar",
                amount: 0.0,
                unit: "g",
                percentOfDailyNeeds: 17.99
            }, {
                name: "Magnesium",
                amount: 0.26,
                unit: "mg",
                percentOfDailyNeeds: 29.65
            }, {
                name: "Vitamin C",
                amount: 0.07,
                unit: "mg",
                percentOfDailyNeeds: 40.76
            }]
        }, {
            id: 10011693,
            name: "canned tomatoes",
            amount: 11.2,
            unit: "oz",
            nutrients: [{
                name: "Caffeine",
                amount: 0.0,
                unit: "mg",
                percentOfDailyNeeds: 0.0
            }, {
                name: "Carbohydrates",
                amount: 23.15,
                unit: "g",
                percentOfDailyNeeds: 22.9
            }, {
                name: "Mono Unsaturated Fat",
                amount: 0.14,
                unit: "g",
                percentOfDailyNeeds: 0.0
            }, {
                name: "Vitamin K",
                amount: 16.83,
                unit: "µg",
                percentOfDailyNeeds: 24.0
            }, {
                name: "Lycopene",
                amount: 16212.3,
                unit: "µg",
                percentOfDailyNeeds: 0.0
            }, {
                name: "Iron",
                amount: 4.13,
                unit: "mg",
                percentOfDailyNeeds: 38.71
            }, {
                name: "Vitamin A",
                amount: 682.66,
                unit: "IU",
                percentOfDailyNeeds: 16.47
            }, {
                name: "Sodium",
                amount: 419.12,
                unit: "mg",
                percentOfDailyNeeds: 71.82
            }, {
                name: "Manganese",
                amount: 0.58,
                unit: "mg",
                percentOfDailyNeeds: 64.09
            }, {
                name: "Fiber",
                amount: 6.03,
                unit: "g",
                percentOfDailyNeeds: 34.41
            }, {
                name: "Vitamin B12",
                amount: 0.0,
                unit: "µg",
                percentOfDailyNeeds: 22.85
            }, {
                name: "Cholesterol",
                amount: 0.0,
                unit: "mg",
                percentOfDailyNeeds: 36.14
            }, {
                name: "Folate",
                amount: 41.28,
                unit: "µg",
                percentOfDailyNeeds: 17.04
            }, {
                name: "Vitamin B1",
                amount: 0.24,
                unit: "mg",
                percentOfDailyNeeds: 71.72
            }, {
                name: "Vitamin B3",
                amount: 3.88,
                unit: "mg",
                percentOfDailyNeeds: 46.82
            }, {
                name: "Protein",
                amount: 5.21,
                unit: "g",
                percentOfDailyNeeds: 67.34
            }, {
                name: "Potassium",
                amount: 930.32,
                unit: "mg",
                percentOfDailyNeeds: 41.43
            }, {
                name: "Vitamin B2",
                amount: 0.17,
                unit: "mg",
                percentOfDailyNeeds: 26.97
            }, {
                name: "Folic Acid",
                amount: 0.0,
                unit: "µg",
                percentOfDailyNeeds: 0.0
            }, {
                name: "Zinc",
                amount: 0.86,
                unit: "mg",
                percentOfDailyNeeds: 28.96
            }, {
                name: "Copper",
                amount: 0.58,
                unit: "mg",
                percentOfDailyNeeds: 43.67
            }, {
                name: "Poly Unsaturated Fat",
                amount: 0.36,
                unit: "g",
                percentOfDailyNeeds: 0.0
            }, {
                name: "Vitamin B6",
                amount: 0.48,
                unit: "mg",
                percentOfDailyNeeds: 51.05
            }, {
                name: "Phosphorus",
                amount: 101.6,
                unit: "mg",
                percentOfDailyNeeds: 43.14
            }, {
                name: "Vitamin E",
                amount: 3.97,
                unit: "mg",
                percentOfDailyNeeds: 28.72
            }, {
                name: "Saturated Fat",
                amount: 0.13,
                unit: "g",
                percentOfDailyNeeds: 102.97
            }, {
                name: "Calories",
                amount: 101.6,
                unit: "kcal",
                percentOfDailyNeeds: 40.53
            }, {
                name: "Selenium",
                amount: 1.91,
                unit: "µg",
                percentOfDailyNeeds: 103.67
            }, {
                name: "Calcium",
                amount: 107.95,
                unit: "mg",
                percentOfDailyNeeds: 19.88
            }, {
                name: "Choline",
                amount: 40.96,
                unit: "mg",
                percentOfDailyNeeds: 0.0
            }, {
                name: "Vitamin D",
                amount: 0.0,
                unit: "µg",
                percentOfDailyNeeds: 0.16
            }, {
                name: "Fat",
                amount: 0.89,
                unit: "g",
                percentOfDailyNeeds: 70.56
            }, {
                name: "Net Carbohydrates",
                amount: 17.11,
                unit: "g",
                percentOfDailyNeeds: 21.86
            }, {
                name: "Alcohol",
                amount: 0.0,
                unit: "g",
                percentOfDailyNeeds: 0.0
            }, {
                name: "Vitamin B5",
                amount: 0.88,
                unit: "mg",
                percentOfDailyNeeds: 18.68
            }, {
                name: "Sugar",
                amount: 13.97,
                unit: "g",
                percentOfDailyNeeds: 17.99
            }, {
                name: "Magnesium",
                amount: 63.5,
                unit: "mg",
                percentOfDailyNeeds: 29.65
            }, {
                name: "Vitamin C",
                amount: 29.21,
                unit: "mg",
                percentOfDailyNeeds: 40.76
            }]
        }, {
            id: 11215,
            name: "garlic",
            amount: 0.6,
            unit: "cloves",
            nutrients: [{
                name: "Caffeine",
                amount: 0.0,
                unit: "mg",
                percentOfDailyNeeds: 0.0
            }, {
                name: "Carbohydrates",
                amount: 0.6,
                unit: "g",
                percentOfDailyNeeds: 22.9
            }, {
                name: "Mono Unsaturated Fat",
                amount: 0.0,
                unit: "g",
                percentOfDailyNeeds: 0.0
            }, {
                name: "Vitamin K",
                amount: 0.03,
                unit: "µg",
                percentOfDailyNeeds: 24.0
            }, {
                name: "Lycopene",
                amount: 0.0,
                unit: "µg",
                percentOfDailyNeeds: 0.0
            }, {
                name: "Iron",
                amount: 0.03,
                unit: "mg",
                percentOfDailyNeeds: 38.71
            }, {
                name: "Vitamin A",
                amount: 0.16,
                unit: "IU",
                percentOfDailyNeeds: 16.47
            }, {
                name: "Sodium",
                amount: 0.31,
                unit: "mg",
                percentOfDailyNeeds: 71.82
            }, {
                name: "Manganese",
                amount: 0.03,
                unit: "mg",
                percentOfDailyNeeds: 64.09
            }, {
                name: "Fiber",
                amount: 0.04,
                unit: "g",
                percentOfDailyNeeds: 34.41
            }, {
                name: "Vitamin B12",
                amount: 0.0,
                unit: "µg",
                percentOfDailyNeeds: 22.85
            }, {
                name: "Cholesterol",
                amount: 0.0,
                unit: "mg",
                percentOfDailyNeeds: 36.14
            }, {
                name: "Folate",
                amount: 0.05,
                unit: "µg",
                percentOfDailyNeeds: 17.04
            }, {
                name: "Vitamin B1",
                amount: 0.0,
                unit: "mg",
                percentOfDailyNeeds: 71.72
            }, {
                name: "Vitamin B3",
                amount: 0.01,
                unit: "mg",
                percentOfDailyNeeds: 46.82
            }, {
                name: "Protein",
                amount: 0.11,
                unit: "g",
                percentOfDailyNeeds: 67.34
            }, {
                name: "Potassium",
                amount: 7.22,
                unit: "mg",
                percentOfDailyNeeds: 41.43
            }, {
                name: "Vitamin B2",
                amount: 0.0,
                unit: "mg",
                percentOfDailyNeeds: 26.97
            }, {
                name: "Folic Acid",
                amount: 0.0,
                unit: "µg",
                percentOfDailyNeeds: 0.0
            }, {
                name: "Zinc",
                amount: 0.02,
                unit: "mg",
                percentOfDailyNeeds: 28.96
            }, {
                name: "Copper",
                amount: 0.01,
                unit: "mg",
                percentOfDailyNeeds: 43.67
            }, {
                name: "Poly Unsaturated Fat",
                amount: 0.0,
                unit: "g",
                percentOfDailyNeeds: 0.0
            }, {
                name: "Vitamin B6",
                amount: 0.02,
                unit: "mg",
                percentOfDailyNeeds: 51.05
            }, {
                name: "Phosphorus",
                amount: 2.75,
                unit: "mg",
                percentOfDailyNeeds: 43.14
            }, {
                name: "Vitamin E",
                amount: 0.0,
                unit: "mg",
                percentOfDailyNeeds: 28.72
            }, {
                name: "Saturated Fat",
                amount: 0.0,
                unit: "g",
                percentOfDailyNeeds: 102.97
            }, {
                name: "Calories",
                amount: 2.68,
                unit: "kcal",
                percentOfDailyNeeds: 40.53
            }, {
                name: "Selenium",
                amount: 0.26,
                unit: "µg",
                percentOfDailyNeeds: 103.67
            }, {
                name: "Calcium",
                amount: 3.26,
                unit: "mg",
                percentOfDailyNeeds: 19.88
            }, {
                name: "Choline",
                amount: 0.42,
                unit: "mg",
                percentOfDailyNeeds: 0.0
            }, {
                name: "Vitamin D",
                amount: 0.0,
                unit: "µg",
                percentOfDailyNeeds: 0.16
            }, {
                name: "Fat",
                amount: 0.01,
                unit: "g",
                percentOfDailyNeeds: 70.56
            }, {
                name: "Net Carbohydrates",
                amount: 0.56,
                unit: "g",
                percentOfDailyNeeds: 21.86
            }, {
                name: "Alcohol",
                amount: 0.0,
                unit: "g",
                percentOfDailyNeeds: 0.0
            }, {
                name: "Vitamin B5",
                amount: 0.01,
                unit: "mg",
                percentOfDailyNeeds: 18.68
            }, {
                name: "Sugar",
                amount: 0.02,
                unit: "g",
                percentOfDailyNeeds: 17.99
            }, {
                name: "Magnesium",
                amount: 0.45,
                unit: "mg",
                percentOfDailyNeeds: 29.65
            }, {
                name: "Vitamin C",
                amount: 0.56,
                unit: "mg",
                percentOfDailyNeeds: 40.76
            }]
        }, {
            id: 7036,
            name: "italian sausage",
            amount: 0.3,
            unit: "lbs",
            nutrients: [{
                name: "Magnesium",
                amount: 19.05,
                unit: "mg",
                percentOfDailyNeeds: 29.65
            }, {
                name: "Carbohydrates",
                amount: 0.88,
                unit: "g",
                percentOfDailyNeeds: 22.9
            }, {
                name: "Mono Unsaturated Fat",
                amount: 19.51,
                unit: "g",
                percentOfDailyNeeds: 0.0
            }, {
                name: "Iron",
                amount: 1.61,
                unit: "mg",
                percentOfDailyNeeds: 38.71
            }, {
                name: "Vitamin A",
                amount: 0.0,
                unit: "IU",
                percentOfDailyNeeds: 16.47
            }, {
                name: "Sodium",
                amount: 994.73,
                unit: "mg",
                percentOfDailyNeeds: 71.82
            }, {
                name: "Manganese",
                amount: 0.08,
                unit: "mg",
                percentOfDailyNeeds: 64.09
            }, {
                name: "Fiber",
                amount: 0.0,
                unit: "g",
                percentOfDailyNeeds: 34.41
            }, {
                name: "Vitamin B12",
                amount: 1.24,
                unit: "µg",
                percentOfDailyNeeds: 22.85
            }, {
                name: "Cholesterol",
                amount: 103.42,
                unit: "mg",
                percentOfDailyNeeds: 36.14
            }, {
                name: "Protein",
                amount: 19.39,
                unit: "g",
                percentOfDailyNeeds: 67.34
            }, {
                name: "Vitamin B1",
                amount: 0.77,
                unit: "mg",
                percentOfDailyNeeds: 71.72
            }, {
                name: "Vitamin B3",
                amount: 4.42,
                unit: "mg",
                percentOfDailyNeeds: 46.82
            }, {
                name: "Folate",
                amount: 10.89,
                unit: "µg",
                percentOfDailyNeeds: 17.04
            }, {
                name: "Potassium",
                amount: 344.28,
                unit: "mg",
                percentOfDailyNeeds: 41.43
            }, {
                name: "Vitamin B2",
                amount: 0.23,
                unit: "mg",
                percentOfDailyNeeds: 26.97
            }, {
                name: "Folic Acid",
                amount: 0.0,
                unit: "µg",
                percentOfDailyNeeds: 0.0
            }, {
                name: "Zinc",
                amount: 2.44,
                unit: "mg",
                percentOfDailyNeeds: 28.96
            }, {
                name: "Copper",
                amount: 0.11,
                unit: "mg",
                percentOfDailyNeeds: 43.67
            }, {
                name: "Poly Unsaturated Fat",
                amount: 5.48,
                unit: "g",
                percentOfDailyNeeds: 0.0
            }, {
                name: "Vitamin B6",
                amount: 0.41,
                unit: "mg",
                percentOfDailyNeeds: 51.05
            }, {
                name: "Phosphorus",
                amount: 193.23,
                unit: "mg",
                percentOfDailyNeeds: 43.14
            }, {
                name: "Saturated Fat",
                amount: 15.34,
                unit: "g",
                percentOfDailyNeeds: 102.97
            }, {
                name: "Calories",
                amount: 470.83,
                unit: "kcal",
                percentOfDailyNeeds: 40.53
            }, {
                name: "Selenium",
                amount: 33.75,
                unit: "µg",
                percentOfDailyNeeds: 103.67
            }, {
                name: "Calcium",
                amount: 24.49,
                unit: "mg",
                percentOfDailyNeeds: 19.88
            }, {
                name: "Fat",
                amount: 42.63,
                unit: "g",
                percentOfDailyNeeds: 70.56
            }, {
                name: "Net Carbohydrates",
                amount: 0.88,
                unit: "g",
                percentOfDailyNeeds: 21.86
            }, {
                name: "Vitamin C",
                amount: 2.72,
                unit: "mg",
                percentOfDailyNeeds: 40.76
            }, {
                name: "Vitamin B5",
                amount: 0.69,
                unit: "mg",
                percentOfDailyNeeds: 18.68
            }]
        }, {
            id: 1026,
            name: "mozzarella cheese",
            amount: 0.2,
            unit: "oz",
            nutrients: [{
                name: "Caffeine",
                amount: 0.0,
                unit: "mg",
                percentOfDailyNeeds: 0.0
            }, {
                name: "Carbohydrates",
                amount: 0.12,
                unit: "g",
                percentOfDailyNeeds: 22.9
            }, {
                name: "Mono Unsaturated Fat",
                amount: 0.37,
                unit: "g",
                percentOfDailyNeeds: 0.0
            }, {
                name: "Vitamin K",
                amount: 0.13,
                unit: "µg",
                percentOfDailyNeeds: 24.0
            }, {
                name: "Lycopene",
                amount: 0.0,
                unit: "µg",
                percentOfDailyNeeds: 0.0
            }, {
                name: "Iron",
                amount: 0.02,
                unit: "mg",
                percentOfDailyNeeds: 38.71
            }, {
                name: "Vitamin A",
                amount: 38.33,
                unit: "IU",
                percentOfDailyNeeds: 16.47
            }, {
                name: "Sodium",
                amount: 35.55,
                unit: "mg",
                percentOfDailyNeeds: 71.82
            }, {
                name: "Manganese",
                amount: 0.0,
                unit: "mg",
                percentOfDailyNeeds: 64.09
            }, {
                name: "Fiber",
                amount: 0.0,
                unit: "g",
                percentOfDailyNeeds: 34.41
            }, {
                name: "Vitamin B12",
                amount: 0.13,
                unit: "µg",
                percentOfDailyNeeds: 22.85
            }, {
                name: "Cholesterol",
                amount: 4.48,
                unit: "mg",
                percentOfDailyNeeds: 36.14
            }, {
                name: "Folate",
                amount: 0.4,
                unit: "µg",
                percentOfDailyNeeds: 17.04
            }, {
                name: "Vitamin B1",
                amount: 0.0,
                unit: "mg",
                percentOfDailyNeeds: 71.72
            }, {
                name: "Vitamin B3",
                amount: 0.01,
                unit: "mg",
                percentOfDailyNeeds: 46.82
            }, {
                name: "Protein",
                amount: 1.26,
                unit: "g",
                percentOfDailyNeeds: 67.34
            }, {
                name: "Potassium",
                amount: 4.31,
                unit: "mg",
                percentOfDailyNeeds: 41.43
            }, {
                name: "Vitamin B2",
                amount: 0.02,
                unit: "mg",
                percentOfDailyNeeds: 26.97
            }, {
                name: "Folic Acid",
                amount: 0.0,
                unit: "µg",
                percentOfDailyNeeds: 0.0
            }, {
                name: "Zinc",
                amount: 0.17,
                unit: "mg",
                percentOfDailyNeeds: 28.96
            }, {
                name: "Copper",
                amount: 0.0,
                unit: "mg",
                percentOfDailyNeeds: 43.67
            }, {
                name: "Poly Unsaturated Fat",
                amount: 0.04,
                unit: "g",
                percentOfDailyNeeds: 0.0
            }, {
                name: "Vitamin B6",
                amount: 0.0,
                unit: "mg",
                percentOfDailyNeeds: 51.05
            }, {
                name: "Phosphorus",
                amount: 20.07,
                unit: "mg",
                percentOfDailyNeeds: 43.14
            }, {
                name: "Vitamin E",
                amount: 0.01,
                unit: "mg",
                percentOfDailyNeeds: 28.72
            }, {
                name: "Saturated Fat",
                amount: 0.75,
                unit: "g",
                percentOfDailyNeeds: 102.97
            }, {
                name: "Calories",
                amount: 17.01,
                unit: "kcal",
                percentOfDailyNeeds: 40.53
            }, {
                name: "Selenium",
                amount: 0.96,
                unit: "µg",
                percentOfDailyNeeds: 103.67
            }, {
                name: "Calcium",
                amount: 28.63,
                unit: "mg",
                percentOfDailyNeeds: 19.88
            }, {
                name: "Choline",
                amount: 0.87,
                unit: "mg",
                percentOfDailyNeeds: 0.0
            }, {
                name: "Vitamin D",
                amount: 0.02,
                unit: "µg",
                percentOfDailyNeeds: 0.16
            }, {
                name: "Fat",
                amount: 1.27,
                unit: "g",
                percentOfDailyNeeds: 70.56
            }, {
                name: "Net Carbohydrates",
                amount: 0.12,
                unit: "g",
                percentOfDailyNeeds: 21.86
            }, {
                name: "Alcohol",
                amount: 0.0,
                unit: "g",
                percentOfDailyNeeds: 0.0
            }, {
                name: "Vitamin B5",
                amount: 0.01,
                unit: "mg",
                percentOfDailyNeeds: 18.68
            }, {
                name: "Sugar",
                amount: 0.06,
                unit: "g",
                percentOfDailyNeeds: 17.99
            }, {
                name: "Magnesium",
                amount: 1.13,
                unit: "mg",
                percentOfDailyNeeds: 29.65
            }, {
                name: "Vitamin C",
                amount: 0.0,
                unit: "mg",
                percentOfDailyNeeds: 40.76
            }]
        }, {
            id: 11282,
            name: "onion",
            amount: 0.2,
            unit: "small",
            nutrients: [{
                name: "Caffeine",
                amount: 0.0,
                unit: "mg",
                percentOfDailyNeeds: 0.0
            }, {
                name: "Carbohydrates",
                amount: 1.31,
                unit: "g",
                percentOfDailyNeeds: 22.9
            }, {
                name: "Mono Unsaturated Fat",
                amount: 0.0,
                unit: "g",
                percentOfDailyNeeds: 0.0
            }, {
                name: "Vitamin K",
                amount: 0.06,
                unit: "µg",
                percentOfDailyNeeds: 24.0
            }, {
                name: "Lycopene",
                amount: 0.0,
                unit: "µg",
                percentOfDailyNeeds: 0.0
            }, {
                name: "Iron",
                amount: 0.03,
                unit: "mg",
                percentOfDailyNeeds: 38.71
            }, {
                name: "Vitamin A",
                amount: 0.28,
                unit: "IU",
                percentOfDailyNeeds: 16.47
            }, {
                name: "Sodium",
                amount: 0.56,
                unit: "mg",
                percentOfDailyNeeds: 71.82
            }, {
                name: "Manganese",
                amount: 0.02,
                unit: "mg",
                percentOfDailyNeeds: 64.09
            }, {
                name: "Fiber",
                amount: 0.24,
                unit: "g",
                percentOfDailyNeeds: 34.41
            }, {
                name: "Vitamin B12",
                amount: 0.0,
                unit: "µg",
                percentOfDailyNeeds: 22.85
            }, {
                name: "Cholesterol",
                amount: 0.0,
                unit: "mg",
                percentOfDailyNeeds: 36.14
            }, {
                name: "Folate",
                amount: 2.66,
                unit: "µg",
                percentOfDailyNeeds: 17.04
            }, {
                name: "Vitamin B1",
                amount: 0.01,
                unit: "mg",
                percentOfDailyNeeds: 71.72
            }, {
                name: "Vitamin B3",
                amount: 0.02,
                unit: "mg",
                percentOfDailyNeeds: 46.82
            }, {
                name: "Protein",
                amount: 0.15,
                unit: "g",
                percentOfDailyNeeds: 67.34
            }, {
                name: "Potassium",
                amount: 20.44,
                unit: "mg",
                percentOfDailyNeeds: 41.43
            }, {
                name: "Vitamin B2",
                amount: 0.0,
                unit: "mg",
                percentOfDailyNeeds: 26.97
            }, {
                name: "Folic Acid",
                amount: 0.0,
                unit: "µg",
                percentOfDailyNeeds: 0.0
            }, {
                name: "Zinc",
                amount: 0.02,
                unit: "mg",
                percentOfDailyNeeds: 28.96
            }, {
                name: "Copper",
                amount: 0.01,
                unit: "mg",
                percentOfDailyNeeds: 43.67
            }, {
                name: "Poly Unsaturated Fat",
                amount: 0.0,
                unit: "g",
                percentOfDailyNeeds: 0.0
            }, {
                name: "Vitamin B6",
                amount: 0.02,
                unit: "mg",
                percentOfDailyNeeds: 51.05
            }, {
                name: "Phosphorus",
                amount: 4.06,
                unit: "mg",
                percentOfDailyNeeds: 43.14
            }, {
                name: "Fluoride",
                amount: 0.15,
                unit: "mg",
                percentOfDailyNeeds: 0.0
            }, {
                name: "Vitamin E",
                amount: 0.0,
                unit: "mg",
                percentOfDailyNeeds: 28.72
            }, {
                name: "Saturated Fat",
                amount: 0.01,
                unit: "g",
                percentOfDailyNeeds: 102.97
            }, {
                name: "Calories",
                amount: 5.6,
                unit: "kcal",
                percentOfDailyNeeds: 40.53
            }, {
                name: "Selenium",
                amount: 0.07,
                unit: "µg",
                percentOfDailyNeeds: 103.67
            }, {
                name: "Calcium",
                amount: 3.22,
                unit: "mg",
                percentOfDailyNeeds: 19.88
            }, {
                name: "Choline",
                amount: 0.85,
                unit: "mg",
                percentOfDailyNeeds: 0.0
            }, {
                name: "Vitamin D",
                amount: 0.0,
                unit: "µg",
                percentOfDailyNeeds: 0.16
            }, {
                name: "Fat",
                amount: 0.01,
                unit: "g",
                percentOfDailyNeeds: 70.56
            }, {
                name: "Net Carbohydrates",
                amount: 1.07,
                unit: "g",
                percentOfDailyNeeds: 21.86
            }, {
                name: "Alcohol",
                amount: 0.0,
                unit: "g",
                percentOfDailyNeeds: 0.0
            }, {
                name: "Vitamin B5",
                amount: 0.02,
                unit: "mg",
                percentOfDailyNeeds: 18.68
            }, {
                name: "Sugar",
                amount: 0.59,
                unit: "g",
                percentOfDailyNeeds: 17.99
            }, {
                name: "Magnesium",
                amount: 1.4,
                unit: "mg",
                percentOfDailyNeeds: 29.65
            }, {
                name: "Vitamin C",
                amount: 1.04,
                unit: "mg",
                percentOfDailyNeeds: 40.76
            }]
        }, {
            id: 2027,
            name: "oregano",
            amount: 1.0,
            unit: "servings",
            nutrients: [{
                name: "Caffeine",
                amount: 0.0,
                unit: "mg",
                percentOfDailyNeeds: 0.0
            }, {
                name: "Carbohydrates",
                amount: 0.69,
                unit: "g",
                percentOfDailyNeeds: 22.9
            }, {
                name: "Mono Unsaturated Fat",
                amount: 0.01,
                unit: "g",
                percentOfDailyNeeds: 0.0
            }, {
                name: "Vitamin K",
                amount: 6.22,
                unit: "µg",
                percentOfDailyNeeds: 24.0
            }, {
                name: "Lycopene",
                amount: 0.0,
                unit: "µg",
                percentOfDailyNeeds: 0.0
            }, {
                name: "Iron",
                amount: 0.37,
                unit: "mg",
                percentOfDailyNeeds: 38.71
            }, {
                name: "Vitamin A",
                amount: 17.01,
                unit: "IU",
                percentOfDailyNeeds: 16.47
            }, {
                name: "Sodium",
                amount: 0.25,
                unit: "mg",
                percentOfDailyNeeds: 71.82
            }, {
                name: "Manganese",
                amount: 0.05,
                unit: "mg",
                percentOfDailyNeeds: 64.09
            }, {
                name: "Fiber",
                amount: 0.43,
                unit: "g",
                percentOfDailyNeeds: 34.41
            }, {
                name: "Vitamin B12",
                amount: 0.0,
                unit: "µg",
                percentOfDailyNeeds: 22.85
            }, {
                name: "Cholesterol",
                amount: 0.0,
                unit: "mg",
                percentOfDailyNeeds: 36.14
            }, {
                name: "Folate",
                amount: 2.37,
                unit: "µg",
                percentOfDailyNeeds: 17.04
            }, {
                name: "Vitamin B1",
                amount: 0.0,
                unit: "mg",
                percentOfDailyNeeds: 71.72
            }, {
                name: "Vitamin B3",
                amount: 0.05,
                unit: "mg",
                percentOfDailyNeeds: 46.82
            }, {
                name: "Protein",
                amount: 0.09,
                unit: "g",
                percentOfDailyNeeds: 67.34
            }, {
                name: "Potassium",
                amount: 12.6,
                unit: "mg",
                percentOfDailyNeeds: 41.43
            }, {
                name: "Vitamin B2",
                amount: 0.01,
                unit: "mg",
                percentOfDailyNeeds: 26.97
            }, {
                name: "Trans Fat",
                amount: 0.0,
                unit: "g",
                percentOfDailyNeeds: 0.0
            }, {
                name: "Folic Acid",
                amount: 0.0,
                unit: "µg",
                percentOfDailyNeeds: 0.0
            }, {
                name: "Zinc",
                amount: 0.03,
                unit: "mg",
                percentOfDailyNeeds: 28.96
            }, {
                name: "Copper",
                amount: 0.01,
                unit: "mg",
                percentOfDailyNeeds: 43.67
            }, {
                name: "Poly Unsaturated Fat",
                amount: 0.01,
                unit: "g",
                percentOfDailyNeeds: 0.0
            }, {
                name: "Vitamin B6",
                amount: 0.01,
                unit: "mg",
                percentOfDailyNeeds: 51.05
            }, {
                name: "Phosphorus",
                amount: 1.48,
                unit: "mg",
                percentOfDailyNeeds: 43.14
            }, {
                name: "Vitamin E",
                amount: 0.18,
                unit: "mg",
                percentOfDailyNeeds: 28.72
            }, {
                name: "Saturated Fat",
                amount: 0.02,
                unit: "g",
                percentOfDailyNeeds: 102.97
            }, {
                name: "Calories",
                amount: 2.65,
                unit: "kcal",
                percentOfDailyNeeds: 40.53
            }, {
                name: "Selenium",
                amount: 0.04,
                unit: "µg",
                percentOfDailyNeeds: 103.67
            }, {
                name: "Calcium",
                amount: 15.97,
                unit: "mg",
                percentOfDailyNeeds: 19.88
            }, {
                name: "Choline",
                amount: 0.32,
                unit: "mg",
                percentOfDailyNeeds: 0.0
            }, {
                name: "Vitamin D",
                amount: 0.0,
                unit: "µg",
                percentOfDailyNeeds: 0.16
            }, {
                name: "Fat",
                amount: 0.04,
                unit: "g",
                percentOfDailyNeeds: 70.56
            }, {
                name: "Net Carbohydrates",
                amount: 0.26,
                unit: "g",
                percentOfDailyNeeds: 21.86
            }, {
                name: "Alcohol",
                amount: 0.0,
                unit: "g",
                percentOfDailyNeeds: 0.0
            }, {
                name: "Vitamin B5",
                amount: 0.01,
                unit: "mg",
                percentOfDailyNeeds: 18.68
            }, {
                name: "Sugar",
                amount: 0.04,
                unit: "g",
                percentOfDailyNeeds: 17.99
            }, {
                name: "Magnesium",
                amount: 2.7,
                unit: "mg",
                percentOfDailyNeeds: 29.65
            }, {
                name: "Vitamin C",
                amount: 0.02,
                unit: "mg",
                percentOfDailyNeeds: 40.76
            }]
        }, {
            id: 10620420,
            name: "packaged no-boil lasagna noodles",
            amount: 1.0,
            unit: "servings",
            nutrients: [{
                name: "Magnesium",
                amount: 29.68,
                unit: "mg",
                percentOfDailyNeeds: 29.65
            }, {
                name: "Carbohydrates",
                amount: 41.82,
                unit: "g",
                percentOfDailyNeeds: 22.9
            }, {
                name: "Mono Unsaturated Fat",
                amount: 0.1,
                unit: "g",
                percentOfDailyNeeds: 0.0
            }, {
                name: "Vitamin K",
                amount: 0.06,
                unit: "µg",
                percentOfDailyNeeds: 24.0
            }, {
                name: "Iron",
                amount: 0.73,
                unit: "mg",
                percentOfDailyNeeds: 38.71
            }, {
                name: "Vitamin A",
                amount: 0.0,
                unit: "IU",
                percentOfDailyNeeds: 16.47
            }, {
                name: "Sodium",
                amount: 3.36,
                unit: "mg",
                percentOfDailyNeeds: 71.82
            }, {
                name: "Manganese",
                amount: 0.51,
                unit: "mg",
                percentOfDailyNeeds: 64.09
            }, {
                name: "Fiber",
                amount: 1.79,
                unit: "g",
                percentOfDailyNeeds: 34.41
            }, {
                name: "Vitamin B12",
                amount: 0.0,
                unit: "µg",
                percentOfDailyNeeds: 22.85
            }, {
                name: "Cholesterol",
                amount: 0.0,
                unit: "mg",
                percentOfDailyNeeds: 36.14
            }, {
                name: "Folate",
                amount: 10.08,
                unit: "µg",
                percentOfDailyNeeds: 17.04
            }, {
                name: "Vitamin B1",
                amount: 0.05,
                unit: "mg",
                percentOfDailyNeeds: 71.72
            }, {
                name: "Vitamin B3",
                amount: 0.95,
                unit: "mg",
                percentOfDailyNeeds: 46.82
            }, {
                name: "Protein",
                amount: 7.3,
                unit: "g",
                percentOfDailyNeeds: 67.34
            }, {
                name: "Potassium",
                amount: 124.88,
                unit: "mg",
                percentOfDailyNeeds: 41.43
            }, {
                name: "Vitamin B2",
                amount: 0.03,
                unit: "mg",
                percentOfDailyNeeds: 26.97
            }, {
                name: "Trans Fat",
                amount: 0.0,
                unit: "g",
                percentOfDailyNeeds: 0.0
            }, {
                name: "Folic Acid",
                amount: 0.0,
                unit: "µg",
                percentOfDailyNeeds: 0.0
            }, {
                name: "Zinc",
                amount: 0.79,
                unit: "mg",
                percentOfDailyNeeds: 28.96
            }, {
                name: "Copper",
                amount: 0.16,
                unit: "mg",
                percentOfDailyNeeds: 43.67
            }, {
                name: "Poly Unsaturated Fat",
                amount: 0.32,
                unit: "g",
                percentOfDailyNeeds: 0.0
            }, {
                name: "Vitamin B6",
                amount: 0.08,
                unit: "mg",
                percentOfDailyNeeds: 51.05
            }, {
                name: "Phosphorus",
                amount: 105.84,
                unit: "mg",
                percentOfDailyNeeds: 43.14
            }, {
                name: "Vitamin E",
                amount: 0.06,
                unit: "mg",
                percentOfDailyNeeds: 28.72
            }, {
                name: "Saturated Fat",
                amount: 0.16,
                unit: "g",
                percentOfDailyNeeds: 102.97
            }, {
                name: "Calories",
                amount: 207.76,
                unit: "kcal",
                percentOfDailyNeeds: 40.53
            }, {
                name: "Selenium",
                amount: 35.39,
                unit: "µg",
                percentOfDailyNeeds: 103.67
            }, {
                name: "Calcium",
                amount: 11.76,
                unit: "mg",
                percentOfDailyNeeds: 19.88
            }, {
                name: "Vitamin D",
                amount: 0.0,
                unit: "µg",
                percentOfDailyNeeds: 0.16
            }, {
                name: "Fat",
                amount: 0.85,
                unit: "g",
                percentOfDailyNeeds: 70.56
            }, {
                name: "Alcohol",
                amount: 0.0,
                unit: "g",
                percentOfDailyNeeds: 0.0
            }, {
                name: "Net Carbohydrates",
                amount: 40.02,
                unit: "g",
                percentOfDailyNeeds: 21.86
            }, {
                name: "Sugar",
                amount: 1.5,
                unit: "g",
                percentOfDailyNeeds: 17.99
            }, {
                name: "Vitamin C",
                amount: 0.0,
                unit: "mg",
                percentOfDailyNeeds: 40.76
            }, {
                name: "Vitamin B5",
                amount: 0.24,
                unit: "mg",
                percentOfDailyNeeds: 18.68
            }]
        }, {
            id: 1032009,
            name: "red pepper flakes",
            amount: 0.1,
            unit: "tsp",
            nutrients: [{
                name: "Caffeine",
                amount: 0.0,
                unit: "mg",
                percentOfDailyNeeds: 0.0
            }, {
                name: "Carbohydrates",
                amount: 0.1,
                unit: "g",
                percentOfDailyNeeds: 22.9
            }, {
                name: "Mono Unsaturated Fat",
                amount: 0.01,
                unit: "g",
                percentOfDailyNeeds: 0.0
            }, {
                name: "Vitamin K",
                amount: 0.21,
                unit: "µg",
                percentOfDailyNeeds: 24.0
            }, {
                name: "Lycopene",
                amount: 0.04,
                unit: "µg",
                percentOfDailyNeeds: 0.0
            }, {
                name: "Iron",
                amount: 0.03,
                unit: "mg",
                percentOfDailyNeeds: 38.71
            }, {
                name: "Vitamin A",
                amount: 59.3,
                unit: "IU",
                percentOfDailyNeeds: 16.47
            }, {
                name: "Sodium",
                amount: 3.28,
                unit: "mg",
                percentOfDailyNeeds: 71.82
            }, {
                name: "Manganese",
                amount: 0.0,
                unit: "mg",
                percentOfDailyNeeds: 64.09
            }, {
                name: "Fiber",
                amount: 0.07,
                unit: "g",
                percentOfDailyNeeds: 34.41
            }, {
                name: "Vitamin B12",
                amount: 0.0,
                unit: "µg",
                percentOfDailyNeeds: 22.85
            }, {
                name: "Cholesterol",
                amount: 0.0,
                unit: "mg",
                percentOfDailyNeeds: 36.14
            }, {
                name: "Folate",
                amount: 0.06,
                unit: "µg",
                percentOfDailyNeeds: 17.04
            }, {
                name: "Vitamin B1",
                amount: 0.0,
                unit: "mg",
                percentOfDailyNeeds: 71.72
            }, {
                name: "Vitamin B3",
                amount: 0.02,
                unit: "mg",
                percentOfDailyNeeds: 46.82
            }, {
                name: "Protein",
                amount: 0.03,
                unit: "g",
                percentOfDailyNeeds: 67.34
            }, {
                name: "Potassium",
                amount: 3.9,
                unit: "mg",
                percentOfDailyNeeds: 41.43
            }, {
                name: "Vitamin B2",
                amount: 0.0,
                unit: "mg",
                percentOfDailyNeeds: 26.97
            }, {
                name: "Trans Fat",
                amount: 0.0,
                unit: "g",
                percentOfDailyNeeds: 0.0
            }, {
                name: "Folic Acid",
                amount: 0.0,
                unit: "µg",
                percentOfDailyNeeds: 0.0
            }, {
                name: "Zinc",
                amount: 0.01,
                unit: "mg",
                percentOfDailyNeeds: 28.96
            }, {
                name: "Copper",
                amount: 0.0,
                unit: "mg",
                percentOfDailyNeeds: 43.67
            }, {
                name: "Poly Unsaturated Fat",
                amount: 0.02,
                unit: "g",
                percentOfDailyNeeds: 0.0
            }, {
                name: "Vitamin B6",
                amount: 0.0,
                unit: "mg",
                percentOfDailyNeeds: 51.05
            }, {
                name: "Phosphorus",
                amount: 0.6,
                unit: "mg",
                percentOfDailyNeeds: 43.14
            }, {
                name: "Vitamin E",
                amount: 0.08,
                unit: "mg",
                percentOfDailyNeeds: 28.72
            }, {
                name: "Saturated Fat",
                amount: 0.0,
                unit: "g",
                percentOfDailyNeeds: 102.97
            }, {
                name: "Calories",
                amount: 0.56,
                unit: "kcal",
                percentOfDailyNeeds: 40.53
            }, {
                name: "Selenium",
                amount: 0.04,
                unit: "µg",
                percentOfDailyNeeds: 103.67
            }, {
                name: "Calcium",
                amount: 0.66,
                unit: "mg",
                percentOfDailyNeeds: 19.88
            }, {
                name: "Choline",
                amount: 0.13,
                unit: "mg",
                percentOfDailyNeeds: 0.0
            }, {
                name: "Vitamin D",
                amount: 0.0,
                unit: "µg",
                percentOfDailyNeeds: 0.16
            }, {
                name: "Fat",
                amount: 0.03,
                unit: "g",
                percentOfDailyNeeds: 70.56
            }, {
                name: "Net Carbohydrates",
                amount: 0.03,
                unit: "g",
                percentOfDailyNeeds: 21.86
            }, {
                name: "Alcohol",
                amount: 0.0,
                unit: "g",
                percentOfDailyNeeds: 0.0
            }, {
                name: "Vitamin B5",
                amount: 0.0,
                unit: "mg",
                percentOfDailyNeeds: 18.68
            }, {
                name: "Sugar",
                amount: 0.01,
                unit: "g",
                percentOfDailyNeeds: 17.99
            }, {
                name: "Magnesium",
                amount: 0.3,
                unit: "mg",
                percentOfDailyNeeds: 29.65
            }, {
                name: "Vitamin C",
                amount: 0.0,
                unit: "mg",
                percentOfDailyNeeds: 40.76
            }]
        }, {
            id: 1036,
            name: "ricotta cheese",
            amount: 1.0,
            unit: "servings",
            nutrients: [{
                name: "Caffeine",
                amount: 0.0,
                unit: "mg",
                percentOfDailyNeeds: 0.0
            }, {
                name: "Carbohydrates",
                amount: 0.03,
                unit: "g",
                percentOfDailyNeeds: 22.9
            }, {
                name: "Mono Unsaturated Fat",
                amount: 0.04,
                unit: "g",
                percentOfDailyNeeds: 0.0
            }, {
                name: "Vitamin K",
                amount: 0.01,
                unit: "µg",
                percentOfDailyNeeds: 24.0
            }, {
                name: "Lycopene",
                amount: 0.0,
                unit: "µg",
                percentOfDailyNeeds: 0.0
            }, {
                name: "Iron",
                amount: 0.0,
                unit: "mg",
                percentOfDailyNeeds: 38.71
            }, {
                name: "Vitamin A",
                amount: 4.45,
                unit: "IU",
                percentOfDailyNeeds: 16.47
            }, {
                name: "Sodium",
                amount: 0.84,
                unit: "mg",
                percentOfDailyNeeds: 71.82
            }, {
                name: "Manganese",
                amount: 0.0,
                unit: "mg",
                percentOfDailyNeeds: 64.09
            }, {
                name: "Fiber",
                amount: 0.0,
                unit: "g",
                percentOfDailyNeeds: 34.41
            }, {
                name: "Vitamin B12",
                amount: 0.0,
                unit: "µg",
                percentOfDailyNeeds: 22.85
            }, {
                name: "Cholesterol",
                amount: 0.51,
                unit: "mg",
                percentOfDailyNeeds: 36.14
            }, {
                name: "Folate",
                amount: 0.12,
                unit: "µg",
                percentOfDailyNeeds: 17.04
            }, {
                name: "Vitamin B1",
                amount: 0.0,
                unit: "mg",
                percentOfDailyNeeds: 71.72
            }, {
                name: "Vitamin B3",
                amount: 0.0,
                unit: "mg",
                percentOfDailyNeeds: 46.82
            }, {
                name: "Protein",
                amount: 0.11,
                unit: "g",
                percentOfDailyNeeds: 67.34
            }, {
                name: "Potassium",
                amount: 1.05,
                unit: "mg",
                percentOfDailyNeeds: 41.43
            }, {
                name: "Vitamin B2",
                amount: 0.0,
                unit: "mg",
                percentOfDailyNeeds: 26.97
            }, {
                name: "Folic Acid",
                amount: 0.0,
                unit: "µg",
                percentOfDailyNeeds: 0.0
            }, {
                name: "Zinc",
                amount: 0.01,
                unit: "mg",
                percentOfDailyNeeds: 28.96
            }, {
                name: "Copper",
                amount: 0.0,
                unit: "mg",
                percentOfDailyNeeds: 43.67
            }, {
                name: "Poly Unsaturated Fat",
                amount: 0.0,
                unit: "g",
                percentOfDailyNeeds: 0.0
            }, {
                name: "Vitamin B6",
                amount: 0.0,
                unit: "mg",
                percentOfDailyNeeds: 51.05
            }, {
                name: "Phosphorus",
                amount: 1.58,
                unit: "mg",
                percentOfDailyNeeds: 43.14
            }, {
                name: "Vitamin E",
                amount: 0.0,
                unit: "mg",
                percentOfDailyNeeds: 28.72
            }, {
                name: "Saturated Fat",
                amount: 0.08,
                unit: "g",
                percentOfDailyNeeds: 102.97
            }, {
                name: "Calories",
                amount: 1.74,
                unit: "kcal",
                percentOfDailyNeeds: 40.53
            }, {
                name: "Selenium",
                amount: 0.15,
                unit: "µg",
                percentOfDailyNeeds: 103.67
            }, {
                name: "Calcium",
                amount: 2.07,
                unit: "mg",
                percentOfDailyNeeds: 19.88
            }, {
                name: "Choline",
                amount: 0.17,
                unit: "mg",
                percentOfDailyNeeds: 0.0
            }, {
                name: "Vitamin D",
                amount: 0.0,
                unit: "µg",
                percentOfDailyNeeds: 0.16
            }, {
                name: "Fat",
                amount: 0.13,
                unit: "g",
                percentOfDailyNeeds: 70.56
            }, {
                name: "Net Carbohydrates",
                amount: 0.03,
                unit: "g",
                percentOfDailyNeeds: 21.86
            }, {
                name: "Alcohol",
                amount: 0.0,
                unit: "g",
                percentOfDailyNeeds: 0.0
            }, {
                name: "Vitamin B5",
                amount: 0.0,
                unit: "mg",
                percentOfDailyNeeds: 18.68
            }, {
                name: "Sugar",
                amount: 0.0,
                unit: "g",
                percentOfDailyNeeds: 17.99
            }, {
                name: "Magnesium",
                amount: 0.11,
                unit: "mg",
                percentOfDailyNeeds: 29.65
            }, {
                name: "Vitamin C",
                amount: 0.0,
                unit: "mg",
                percentOfDailyNeeds: 40.76
            }]
        }, {
            id: 1102047,
            name: "salt and pepper",
            amount: 1.0,
            unit: "servings",
            nutrients: [{
                name: "Caffeine",
                amount: 0.0,
                unit: "mg",
                percentOfDailyNeeds: 0.0
            }, {
                name: "Carbohydrates",
                amount: 0.0,
                unit: "g",
                percentOfDailyNeeds: 22.9
            }, {
                name: "Mono Unsaturated Fat",
                amount: 0.0,
                unit: "g",
                percentOfDailyNeeds: 0.0
            }, {
                name: "Vitamin K",
                amount: 0.0,
                unit: "µg",
                percentOfDailyNeeds: 24.0
            }, {
                name: "Lycopene",
                amount: 0.0,
                unit: "µg",
                percentOfDailyNeeds: 0.0
            }, {
                name: "Iron",
                amount: 0.0,
                unit: "mg",
                percentOfDailyNeeds: 38.71
            }, {
                name: "Vitamin A",
                amount: 0.0,
                unit: "IU",
                percentOfDailyNeeds: 16.47
            }, {
                name: "Sodium",
                amount: 193.79,
                unit: "mg",
                percentOfDailyNeeds: 71.82
            }, {
                name: "Manganese",
                amount: 0.0,
                unit: "mg",
                percentOfDailyNeeds: 64.09
            }, {
                name: "Fiber",
                amount: 0.0,
                unit: "g",
                percentOfDailyNeeds: 34.41
            }, {
                name: "Vitamin B12",
                amount: 0.0,
                unit: "µg",
                percentOfDailyNeeds: 22.85
            }, {
                name: "Cholesterol",
                amount: 0.0,
                unit: "mg",
                percentOfDailyNeeds: 36.14
            }, {
                name: "Folate",
                amount: 0.0,
                unit: "µg",
                percentOfDailyNeeds: 17.04
            }, {
                name: "Vitamin B1",
                amount: 0.0,
                unit: "mg",
                percentOfDailyNeeds: 71.72
            }, {
                name: "Vitamin B3",
                amount: 0.0,
                unit: "mg",
                percentOfDailyNeeds: 46.82
            }, {
                name: "Protein",
                amount: 0.0,
                unit: "g",
                percentOfDailyNeeds: 67.34
            }, {
                name: "Potassium",
                amount: 0.04,
                unit: "mg",
                percentOfDailyNeeds: 41.43
            }, {
                name: "Vitamin B2",
                amount: 0.0,
                unit: "mg",
                percentOfDailyNeeds: 26.97
            }, {
                name: "Folic Acid",
                amount: 0.0,
                unit: "µg",
                percentOfDailyNeeds: 0.0
            }, {
                name: "Zinc",
                amount: 0.0,
                unit: "mg",
                percentOfDailyNeeds: 28.96
            }, {
                name: "Copper",
                amount: 0.0,
                unit: "mg",
                percentOfDailyNeeds: 43.67
            }, {
                name: "Poly Unsaturated Fat",
                amount: 0.0,
                unit: "g",
                percentOfDailyNeeds: 0.0
            }, {
                name: "Vitamin B6",
                amount: 0.0,
                unit: "mg",
                percentOfDailyNeeds: 51.05
            }, {
                name: "Phosphorus",
                amount: 0.0,
                unit: "mg",
                percentOfDailyNeeds: 43.14
            }, {
                name: "Fluoride",
                amount: 0.01,
                unit: "mg",
                percentOfDailyNeeds: 0.0
            }, {
                name: "Vitamin E",
                amount: 0.0,
                unit: "mg",
                percentOfDailyNeeds: 28.72
            }, {
                name: "Saturated Fat",
                amount: 0.0,
                unit: "g",
                percentOfDailyNeeds: 102.97
            }, {
                name: "Calories",
                amount: 0.0,
                unit: "kcal",
                percentOfDailyNeeds: 40.53
            }, {
                name: "Selenium",
                amount: 0.0,
                unit: "µg",
                percentOfDailyNeeds: 103.67
            }, {
                name: "Calcium",
                amount: 0.12,
                unit: "mg",
                percentOfDailyNeeds: 19.88
            }, {
                name: "Choline",
                amount: 0.0,
                unit: "mg",
                percentOfDailyNeeds: 0.0
            }, {
                name: "Vitamin D",
                amount: 0.0,
                unit: "µg",
                percentOfDailyNeeds: 0.16
            }, {
                name: "Fat",
                amount: 0.0,
                unit: "g",
                percentOfDailyNeeds: 70.56
            }, {
                name: "Net Carbohydrates",
                amount: 0.0,
                unit: "g",
                percentOfDailyNeeds: 21.86
            }, {
                name: "Alcohol",
                amount: 0.0,
                unit: "g",
                percentOfDailyNeeds: 0.0
            }, {
                name: "Vitamin B5",
                amount: 0.0,
                unit: "mg",
                percentOfDailyNeeds: 18.68
            }, {
                name: "Sugar",
                amount: 0.0,
                unit: "g",
                percentOfDailyNeeds: 17.99
            }, {
                name: "Magnesium",
                amount: 0.0,
                unit: "mg",
                percentOfDailyNeeds: 29.65
            }, {
                name: "Vitamin C",
                amount: 0.0,
                unit: "mg",
                percentOfDailyNeeds: 40.76
            }]
        }],
        caloricBreakdown: {
            percentProtein: 16.38,
            percentFat: 50.2,
            percentCarbs: 33.42
        },
        weightPerServing: {
            amount: 534,
            unit: "g"
        }
    },
    summary: "Simple Skillet Lasagna might be just the main course you are searching for. This recipe makes 5 servings with <b>814 calories</b>, <b>34g of protein</b>, and <b>46g of fat</b> each. For <b>$2.47 per serving</b>, this recipe <b>covers 35%</b> of your daily requirements of vitamins and minerals. 231 person have tried and liked this recipe. If you have pepper flakes, onion, oregano flakes, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes about <b>35 minutes</b>. This recipe is typical of Mediterranean cuisine. All things considered, we decided this recipe <b>deserves a spoonacular score of 96%</b>. This score is excellent. Try <a href=\"https://spoonacular.com/recipes/simple-vegetarian-skillet-lasagna-714495\">Simple Vegetarian Skillet Lasagna</a>, <a href=\"https://spoonacular.com/recipes/quick-and-simple-springtime-skillet-lasagna-with-a-mediterranean-kick-549476\">Quick and Simple Springtime Skillet Lasagna with a Mediterranean Kick</a>, and <a href=\"https://spoonacular.com/recipes/simple-lasagna-383790\">Simple Lasagna</a> for similar recipes.",
    cuisines: ["Mediterranean", "Italian", "European"],
    dishTypes: ["lunch", "main course", "main dish", "dinner"],
    diets: [],
    occasions: [],
    winePairing: {},
    instructions: "In a large saute pan, heat oil on high. Add sausage and cook until browned, about 3-5 minutes. Transfer to a side bowl and set aside.Reduce the heat to medium low and add your onion, garlic, and pepper flakes. Cook until onions are softened, about 8 minutes. Add your oregano, tomatoes and their juices (crushing the whole tomatoes with your hands or a mixer if you prefer), the basil sprig, and the cooked sausage. Add salt and pepper and simmer for about 5 minutes.Break half of the lasagna noodles in half and place into the meat mixture under the sausage. Distribute them evenly throughout. Take the other half of the noodles and use a spoon to submerge them down into the pan.Dollop Ricotta over lasagna and mix in with the sauce. Top with Mozzarella and bake in the oven on 325 degrees for 15 minutes. Top with basil, then remove from heat and allow to cool before serving.",
    analyzedInstructions: [{
        name: "",
        steps: [{
            number: 1,
            step: "In a large saute pan, heat oil on high.",
            ingredients: [{
                id: 4582,
                name: "cooking oil",
                localizedName: "cooking oil",
                image: "vegetable-oil.jpg"
            }],
            equipment: [{
                id: 404645,
                name: "frying pan",
                localizedName: "frying pan",
                image: "pan.png"
            }]
        }, {
            number: 2,
            step: "Add sausage and cook until browned, about 3-5 minutes.",
            ingredients: [{
                id: 1017063,
                name: "sausage",
                localizedName: "sausage",
                image: "raw-pork-sausage.png"
            }],
            equipment: [],
            length: {
                number: 5,
                unit: "minutes"
            }
        }, {
            number: 3,
            step: "Transfer to a side bowl and set aside.Reduce the heat to medium low and add your onion, garlic, and pepper flakes. Cook until onions are softened, about 8 minutes.",
            ingredients: [{
                id: 11215,
                name: "garlic",
                localizedName: "garlic",
                image: "garlic.png"
            }, {
                id: 11282,
                name: "onion",
                localizedName: "onion",
                image: "brown-onion.png"
            }, {
                id: 1002030,
                name: "pepper",
                localizedName: "pepper",
                image: "pepper.jpg"
            }],
            equipment: [{
                id: 404783,
                name: "bowl",
                localizedName: "bowl",
                image: "bowl.jpg"
            }],
            length: {
                number: 8,
                unit: "minutes"
            }
        }, {
            number: 4,
            step: "Add your oregano, tomatoes and their juices (crushing the whole tomatoes with your hands or a mixer if you prefer), the basil sprig, and the cooked sausage.",
            ingredients: [{
                id: 10711529,
                name: "whole tomato",
                localizedName: "whole tomato",
                image: "tomato.png"
            }, {
                id: 11529,
                name: "tomato",
                localizedName: "tomato",
                image: "tomato.png"
            }, {
                id: 2027,
                name: "oregano",
                localizedName: "oregano",
                image: "oregano.jpg"
            }, {
                id: 1017063,
                name: "sausage",
                localizedName: "sausage",
                image: "raw-pork-sausage.png"
            }, {
                id: 2044,
                name: "basil",
                localizedName: "basil",
                image: "basil.jpg"
            }],
            equipment: [{
                id: 404726,
                name: "blender",
                localizedName: "blender",
                image: "blender.png"
            }]
        }, {
            number: 5,
            step: "Add salt and pepper and simmer for about 5 minutes.Break half of the lasagna noodles in half and place into the meat mixture under the sausage. Distribute them evenly throughout. Take the other half of the noodles and use a spoon to submerge them down into the pan.Dollop Ricotta over lasagna and mix in with the sauce. Top with Mozzarella and bake in the oven on 325 degrees for 15 minutes. Top with basil, then remove from heat and allow to cool before serving.",
            ingredients: [{
                id: 10620420,
                name: "lasagne noodles",
                localizedName: "lasagne noodles",
                image: "lasagna-noodles.jpg"
            }, {
                id: 1102047,
                name: "salt and pepper",
                localizedName: "salt and pepper",
                image: "salt-and-pepper.jpg"
            }, {
                id: 1026,
                name: "mozzarella",
                localizedName: "mozzarella",
                image: "mozzarella.png"
            }, {
                id: 20420,
                name: "pasta",
                localizedName: "pasta",
                image: "fusilli.jpg"
            }, {
                id: 1036,
                name: "ricotta cheese",
                localizedName: "ricotta cheese",
                image: "ricotta.png"
            }, {
                id: 1017063,
                name: "sausage",
                localizedName: "sausage",
                image: "raw-pork-sausage.png"
            }, {
                id: 2044,
                name: "basil",
                localizedName: "basil",
                image: "basil.jpg"
            }, {
                id: 0,
                name: "sauce",
                localizedName: "sauce",
                image: ""
            }, {
                id: 1065062,
                name: "meat",
                localizedName: "meat",
                image: "whole-chicken.jpg"
            }],
            equipment: [{
                id: 404784,
                name: "oven",
                localizedName: "oven",
                image: "oven.jpg"
            }, {
                id: 404645,
                name: "frying pan",
                localizedName: "frying pan",
                image: "pan.png"
            }],
            length: {
                number: 20,
                unit: "minutes"
            }
        }]
    }],
    originalId: null,
    spoonacularSourceUrl: "https://spoonacular.com/simple-skillet-lasagna-715573"
};
const recipeList = {
	results: [{
		id: 649280,
		title: "Lasagna Silvia",
		image: "https://spoonacular.com/recipeImages/649280-312x231.jpg",
		imageType: "jpg"
	}, {
		id: 649270,
		title: "Lasagna - Spinach Rolls",
		image: "https://spoonacular.com/recipeImages/649270-312x231.jpg",
		imageType: "jpg"
	}, {
		id: 664737,
		title: "Veggie Lasagna Rolls with Peppery Pecorino Marinara",
		image: "https://spoonacular.com/recipeImages/664737-312x231.jpg",
		imageType: "jpg"
	}, {
		id: 1096086,
		title: "Chorizo Lasagna Rolls",
		image: "https://spoonacular.com/recipeImages/1096086-312x231.jpg",
		imageType: "jpg"
	}, {
		id: 660215,
		title: "Skillet Lasagna Topped with Ricotta",
		image: "https://spoonacular.com/recipeImages/660215-312x231.jpg",
		imageType: "jpg"
	}, {
		id: 651646,
		title: "Mexican Lasagna with Chicken & Black Bean",
		image: "https://spoonacular.com/recipeImages/651646-312x231.jpg",
		imageType: "jpg"
	}, {
		id: 640864,
		title: "Crock Pot Lasagna",
		image: "https://spoonacular.com/recipeImages/640864-312x231.jpg",
		imageType: "jpg"
	}, {
		id: 641974,
		title: "Easy Gift Lasagna",
		image: "https://spoonacular.com/recipeImages/641974-312x231.jpg",
		imageType: "jpg"
	}, {
		id: 715573,
		title: "Simple Skillet Lasagna",
		image: "https://spoonacular.com/recipeImages/715573-312x231.jpg",
		imageType: "jpg"
	}, {
		id: 658743,
		title: "Roll Up Eggplant Lasagna",
		image: "https://spoonacular.com/recipeImages/658743-312x231.jpg",
		imageType: "jpg"
	}, {
		id: 715560,
		title: "World’s Greatest Lasagna Roll Ups",
		image: "https://spoonacular.com/recipeImages/715560-312x231.jpg",
		imageType: "jpg"
	}, {
		id: 642095,
		title: "Easy Skillet Garden Lasagna",
		image: "https://spoonacular.com/recipeImages/642095-312x231.jpg",
		imageType: "jpg"
	}, {
		id: 663595,
		title: "Tomato Free Mexican Lasagna",
		image: "https://spoonacular.com/recipeImages/663595-312x231.jpg",
		imageType: "jpg"
	}, {
		id: 657250,
		title: "Pumpkin and Sausage Lasagna",
		image: "https://spoonacular.com/recipeImages/657250-312x231.jpg",
		imageType: "jpg"
	}, {
		id: 663745,
		title: "Totally Fresh Tomato Lasagna",
		image: "https://spoonacular.com/recipeImages/663745-312x231.jpg",
		imageType: "jpg"
	}, {
		id: 1426885,
		title: "Quick and Easy No-Boil Lasagna",
		image: "https://spoonacular.com/recipeImages/1426885-312x231.jpg",
		imageType: "jpg"
	}, {
		id: 662346,
		title: "Super Kale and Sausage Lasagna",
		image: "https://spoonacular.com/recipeImages/662346-312x231.jpg",
		imageType: "jpg"
	}, {
		id: 644785,
		title: "Gluten And Dairy Free Alfredo Lasagna",
		image: "https://spoonacular.com/recipeImages/644785-312x231.jpg",
		imageType: "jpg"
	}, {
		id: 636581,
		title: "Butternut Squash and Zucchini Lasagna-Gluten free, Vegan",
		image: "https://spoonacular.com/recipeImages/636581-312x231.jpg",
		imageType: "jpg"
	}, {
		id: 653238,
		title: "Noodle Free Eggplant and Spinach Lasagna",
		image: "https://spoonacular.com/recipeImages/653238-312x231.jpg",
		imageType: "jpg"
	}, {
		id: 1054737,
		title: "How to make the World’s Greatest Lasagna Roll Ups",
		image: "https://spoonacular.com/recipeImages/1054737-312x231.jpg",
		imageType: "jpg"
	}, {
		id: 1046983,
		title: "Excellent No Fail and Easy Keto Zucchini Lasagna",
		image: "https://spoonacular.com/recipeImages/1046983-312x231.jpg",
		imageType: "jpg"
	}, {
		id: 633661,
		title: "Baked Lasagne",
		image: "https://spoonacular.com/recipeImages/633661-312x231.jpg",
		imageType: "jpg"
	}, {
		id: 1697743,
		title: "Lasagne al Forno with Bolognese and Béchamel Sauce",
		image: "https://spoonacular.com/recipeImages/1697743-312x231.jpg",
		imageType: "jpg"
	}],
	offset: 0,
	number: 25,
	totalResults: 24
};

// const searchBtn = document.getElementById('search-btn')
// const recipeList = document.getElementById('recipe');
// const recipeDetailContent = document.querySelector('recipe-details-content');
// const recipeCloseBtn = document.getElementById('recipe-close-btn');
// const spoonApiUrl = 'https://api.spoonacular.com/food/products/search?query=yogurt&apiKey=%API-KEY%';


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

// displayRecipeList(recipeList);
// displayRecipeList(recipe);

async function getRecipeAPIdata(recipeUrl) {
    // console.log(" >>>>>>  inside getRecipeAPIdata  >>>>>>>>>>>>>>>");
    const response = await fetch(recipeUrl);
    const jsonRecipe = await response.json();
    
    displayRecipeList(jsonRecipe); 
};

async function getRecipeID(recipeUrl) {
    // console.log(" >>>>>>  inside getRecipeAPIdata  >>>>>>>>>>>>>>>");
    const response = await fetch(recipeUrl);
    const jsonRecipe = await response.json();
    
    displayRecipeModal(jsonRecipe); 
};

async function getDrinkAPIdata(drinkUrl) {
    // console.log(" >>>>>>  inside getDrinkAPIdata  >>>>>>>>>>>>>>>");
    const response = await fetch(drinkUrl);
    const jsonDrink = await response.json();
    
    displayDrinkList(jsonDrink);
};

async function getDrinkID(drinkUrl) {
    // console.log(" >>>>>>  inside getDrinkAPIdata  >>>>>>>>>>>>>>>");
    const response = await fetch(drinkUrl);
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
            let line = measure + " " + ingredient;
            let liEl = "<li>" + line + "</li>";
            $("#drinkIngredients").append(liEl);
        };
    };

    $("#drinkInstructions").text(drinkData.drinks[0].strInstructions);
};

function setRecipeCriteriaFromSearch() {
// console.log(" >>>>>>  inside setRecipeCriteriaFromSearch  >>>>>>>>>>>>>");
    let recipeQuery = $("#recipeQuery").val();
    const spoonApiKey="97810753c767475a85ce44389acb3b8e";
    const imranApiKey="561cea46f3664faa9a4dd071c85d058f";
    const spoonApiUrl = "https://api.spoonacular.com/recipes/complexSearch?query=%RECIPEQUERY%&number=25&apiKey=%APIKEY%";
    var recipeUrl = spoonApiUrl.replace("%RECIPEQUERY%", recipeQuery).replace("%APIKEY%", spoonApiKey);
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
    let drinkQuery = $("#drinkQuery").val();
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
    
    let recipeID = $("#" + event.target.id).data("id");
    console.log("button data-id", recipeID );
       // var recipeId=715573;
       const spoonApiKey="97810753c767475a85ce44389acb3b8e";
       const imranApiKey="561cea46f3664faa9a4dd071c85d058f";
       const spoonApiUrl = "https://api.spoonacular.com/recipes/%RECIPEID%/information?includeNutrition=false&apiKey=%APIKEY%";
       // const spoonApiUrl = "https://api.spoonacular.com/recipes/%recipeID%/card?apiKey=%APIKEY%";
       var recipeUrl = spoonApiUrl.replace("%RECIPEID%", recipeID).replace("%APIKEY%", spoonApiKey);
       // var recipeUrl = spoonApiUrl.replace("%RECIPEID%", recipeID).replace("%APIKEY%", imranApiKey);
       console.log(recipeUrl);
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
    
    let drinkID = $("#" + event.target.id).data("id");
    console.log("button data-id", drinkID );
    const cocktailUrl = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=%DRINKID%";
    var drinkUrl = cocktailUrl.replace("%DRINKID%", drinkID);
       console.log(drinkUrl);
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

$("#selectRecipe").on("click", function (event) {
    // console.log(" >>>>>>>>>click event happened >>>>>>>>>>>>>");
    event.preventDefault();
    // console.log ("event=>", event);
    // console.log ("event target localName=>", event.target.localName);
    // console.log ("event target id=>", event.target.id);
    matched.recipe = true;
    $("#drinkModal").removeClass("is-active");
// displayRecipeModal(recipeID)
    if (matched) {
        // goto results page
    };
});

