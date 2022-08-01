var params = (new URL(document.location)).searchParams;
let category = params.get('category');
let allergens = params.getAll('allergens');
let vegStatus = params.get('veg-status');

console.log(category,allergens,vegStatus);

const catCell = document.getElementById("cat");
const alleCell = document.getElementById("alle");
const vegCell = document.getElementById("veg");

catCell.innerHTML = category;
alleCell.innerHTML = allergens;
vegCell.innerHTML = vegStatus;
