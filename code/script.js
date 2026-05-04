// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. The best pizzeria there is :)Ready to Start? - Click 'OK' to begin.`
)
// The great thing about the prompt method is that you can store the input in a variable. Your code goes here

const name = prompt("Great! What's your name?");
if (name === null || name.trim() === "") {
  alert("No name given");
} else {
  alert(`Hi and welcome, ${name}!`);

  // Step 2 - Food choice
  // Your code goes here
  const foodChoice = prompt(
    "Please choose a food by number:\n1) Pizza\n2) Pasta\n3) Salad"
  );

  let food;
  if (foodChoice === "1") {
    food = "Pizza";
  } else if (foodChoice === "2") {
    food = "Pasta";
  } else if (foodChoice === "3") {
    food = "Salad";
  } else {
    food = null;
  }

  if (!food) {
    alert("Invalid choice. Please reload the page and select 1, 2 or 3.");
  } else {
    alert(`You selected ${food}. Great choice!`);
  }

// Step 3 - Subtype choice
// Your code goes here

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
