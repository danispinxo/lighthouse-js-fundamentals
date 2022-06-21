const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

let start = 0;

while (start <= ingredients.length - 1) {
  console.log(ingredients[start]);
  start++;
}

for (let i = 0; i <= ingredients.length - 1; i++) {
  console.log(ingredients[i]);
}

for (let i = ingredients.length - 1; i >= 0; i--) {
  console.log(ingredients[i]);
}