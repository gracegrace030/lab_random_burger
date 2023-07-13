const burgerIngredientsTitles = document.getElementById(
  "display-ingredients-titles"
);
const burgerIngredients = document.getElementById("display-ingredients");
const burgerText = document.getElementById("burger-text");
const burgerBtn = document.querySelector(".btn");

const menu = document.querySelector(".menu");
const burgerImg = document.querySelector(".burger-img");

const hamburger = Object();
hamburger.bun = [
  "plain",
  "sesame seed",
  "english muffin",
  "pretzel",
  "ciabatta",
];
hamburger.vegetable = ["lettuce", "mushroom", "zucchini", "spinach", "tomato"];
hamburger.cheese = [
  "Cheddar",
  "American",
  "Mozzarella",
  "Blue",
  "Smoked Gouda",
];
hamburger.sauce = ["BBQ", "Hawaiian", "Garden", "Ranch"];
hamburger.patty = ["beef", "chicken", "vegetarian"];
hamburger.size = ["single", "double", "triple"];
hamburger.topping = ["pickles", "hot peppers", "olivers"];

hamburger.randomBurger = function () {
  burgerIngredientsTitles.innerHTML = "";
  burgerIngredients.innerHTML = "";

  let ingredientsArr = [];

  // Menu
  for (let i = 0; i < Object.keys(this).length - 1; i++) {
    // Title
    let listTitle = document.createElement("li");
    listTitle.innerText = Object.keys(this)[i] + ":";
    burgerIngredientsTitles.appendChild(listTitle);

    // Ingredients
    var randItemNum = Math.floor(Math.random() * Object.values(this)[i].length);
    let listItem = document.createElement("li");
    var randItem = Object.values(this)[i][randItemNum];
    listItem.innerText = randItem;
    burgerIngredients.appendChild(listItem);

    var concatText = randItem + " " + Object.keys(this)[i]; // eg. Sesame Seed Bun
    ingredientsArr.push(concatText);
  }

  // Sentence
  outputText = `Your amazing burger with ${ingredientsArr.join(", ")}.`;
  resetTypeWriter();
  setTimeout(() => {
    typeWriter(outputText, 200);
  }, 450);
};

// Create object
function createRandomBurger() {
  const randomBurger = Object.create(hamburger);
  hamburger.randomBurger();
}

// Typing effect
var typeWriterCount = 0;
function typeWriter(text, time) {
  if (typeWriterCount < text.length) {
    burgerText.innerHTML += text.charAt(typeWriterCount);
    typeWriterCount++;
    // console.log(typeWriterCount);
    setTimeout(function () {
      typeWriter(text);
    }, time);
  }
}
// Reset typing effect
function resetTypeWriter() {
  typeWriterCount = 0;
  burgerText.innerHTML = "";
}

// Flip effect
function flip() {
  burgerImg.classList.toggle("flip");

  setTimeout(function () {
    menu.classList.toggle("flip");
  }, 100);

  setTimeout(function () {
    burgerImg.classList.toggle("flip");
    burgerImg.classList.toggle("burger-img-2");
  }, 300);

  setTimeout(function () {
    createRandomBurger();
    menu.classList.toggle("flip");
  }, 450);
}

createRandomBurger();
// Event Handlers
burgerBtn.addEventListener("click", flip);
burgerBtn.addEventListener("keypress", flip);

// ====================================================================================

// class Burger {
//     constructor(){
//         this.bun = ["plain", "sesame seed", "english muffin", "pretzel", "ciabatta"];
//         this.vegetable = ["lettuce", "mushroom", "zucchini", "spinach", "tomato"];

//         // Keep "category" property in the end
//         this.category = [
//             "Bun",
//             "Vegetable"
//         ];
//     }

//     randomBurger(){
//         for(let i = 0; i < Object.keys(this).length - 1; i++){
//             var randItemNum = Math.floor(Math.random() * Object.values(this)[i].length);

//         let listItem = document.createElement("li");
//         listItem.innerText = this.category[i] + ":" + Object.values(this)[i][randItemNum];
//         burgerIngredients.appendChild(listItem);
//             // console.log(
//             //     this.category[i] + ":" + Object.values(this)[i][randItemNum]
//             // );
//         }
//     }
// }

// const burger1 = new Burger();
// burger1.randomBurger();
