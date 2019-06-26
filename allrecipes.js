const scrapeIt = require("scrape-it");
let url = "https://www.allrecipes.com/recipe/75490/shrimp-and-sugar-snap-peas";
let data = {
		url: {
			selector: "#canonicalUrl",
			attr: "href"
		},
	  title: ".recipe-summary__h1",
	  blogLogo: {
      selector: ".header img",
      attr: "src"
     },
	  desc: ".submitter__description",
	  ingredients1: "#lst_ingredients_1",
	  ingredients2: "#lst_ingredients_2",
	  rating: {
        selector: ".rating-stars",
        attr: "data-ratingstars",
    },
    numOfRatings: ".review-count",
		prepTime: {
			selector:	".prepTime__item--time",
			eq: 0
		},
   	cookTime: {
			selector:	".prepTime__item--time",
			eq: 1
		},
   	readyIn: {
			selector:	".prepTime__item--time",
			eq: 2
		},
		step0: {
			selector: ".recipe-directions__list--item",
			eq: 0
		},
		step1: {
			selector: ".recipe-directions__list--item",
			eq: 1
		},
		step2: {
			selector: ".recipe-directions__list--item",
			eq: 2
		},
		step3: {
			selector: ".recipe-directions__list--item",
			eq: 3
		},
		step4: {
			selector: ".recipe-directions__list--item",
			eq: 4
		},
		step5: {
			selector: ".recipe-directions__list--item",
			eq: 5
		},
		step6: {
			selector: ".recipe-directions__list--item",
			eq: 6
		},
		calories: {
			selector: ".nutrition-summary-facts span",
			eq: 1
		},
		fat: {
			selector: ".nutrition-summary-facts span",
			eq: 2
		},
		carbs: {
			selector: ".nutrition-summary-facts span",
			eq: 5
		},
		protein: {
			selector: ".nutrition-summary-facts span",
			eq: 8
		},
		cholesterol: {
			selector: ".nutrition-summary-facts span",
			eq: 11
		},
		sodium: {
			selector: ".nutrition-summary-facts span",
			eq: 14
		},
}

let cleanData = {};

function concat(string1, string2) {
	let stringed =  string1.concat(string2);
  return stringed
}

function updateData(data, response) {
	// var clean = JSON.stringify(data).replace(/['"]+/g, '');
	// var cleaner = clean.replace(/\\r\\n/g, '').split("                                                                                                                                                    ");
	// 	if (cleaner.indexOf("            Add all ingredients to list")){
	// 		cleaner.pop();
	// 	} else { 
	// 		console.log("Nothing to 'pop'.")
	// 	}

	var ingredients = concat(data.ingredients1, data.ingredients2);

	delete data["ingredients1"]
	delete data["ingredients2"]

	let update = { "ingredients": ingredients };
	let cleanData = Object.assign({}, data, update);

	console.log(cleanData);
	return cleanData
}

scrapeIt(url, data)
	.then(({ data }) => {
		updateData(data);
	})
	.catch(console.error)





