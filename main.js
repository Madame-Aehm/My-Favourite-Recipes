var params = (new URL(document.location)).searchParams;
let category = params.get('category');
let allergens = params.get('allergens'); //only shows first...
let allergens2 = params.get('')
let vegStatus = params.get('veg-status');


console.log(category,allergens,vegStatus);