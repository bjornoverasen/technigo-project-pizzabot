// Start here

// Step 1 - Welcome and introduction
// a) In this first iteration, you'll find a pre-written code snippet that generates a welcoming message 
// and introduction for the user. This is done to give you a hint about how it can be implemented. The 
// alert() method will greet the user. Open up the page in the browser to try it out, feel free to change 
// the text appearing in the alert.
// b) After that, your task is to ask for the user’s name. Look into the prompt() method to do this. The 
// great thing about the prompt method is that you can store the input in a variable. So, write a prompt 
// to ask for the name and store the answer in a variable.
// c) Create a new alert using the name variable to say something like “Hi and welcome, Madonna!”

// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. The best pizzeria there is :)Ready to Start? - Click 'OK' to begin.`
)

const name = prompt("Great! What's your name?");
if (name === null || name.trim() === "") {
  alert("No name given");
} else {
  alert(`Hi and welcome, ${name}!`);

  // Step 2 - Food choice 
  // The goal of this iteration is to allow the user to select the type of food they want to order. If you 
  // check the provided working example, you can see that our Javascript Pizzeria offers:
  // Pizza
  // Pasta
  // Salad
  // The program should use the prompt() method to present the user with a menu of options (Pizza, Pasta, 
  // Salad) and prompt them to enter a number corresponding to their choice. Based on the user's input, 
  // the program should determine the chosen food type (Pizza, Pasta, Salad) and display a message using 
  // the alert() method to confirm the user selection.

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

  // Step 3 - Subtype choice - For this iteration, the focus is on enabling the user to choose a subtype of 
  // the selected food type. Depending on the previously chosen food type (Pizza, Pasta, Salad), the program 
  // should present the user with subtype options specific to that food type. The prompt() method should be 
  // used to get the user's input. The program should then determine the chosen subtype and provide feedback 
  // using the alert() method to confirm the selection. Tip: Use conditional statements for this.

  // Your code goes here
  let subtype;

  if (food === "Pizza") {
    const pizzaChoice = prompt(
      "Choose a pizza subtype:\n1) Margherita\n2) Pepperoni\n3) Vegetarian"
    );
    switch (pizzaChoice) {
      case "1": subtype = "Margherita"; break;
      case "2": subtype = "Pepperoni"; break;
      case "3": subtype = "Vegetarian"; break;
      default: subtype = null;
    }
  } else if (food === "Pasta") {
    const pastaChoice = prompt(
      "Choose a pasta subtype:\n1) Carbonara\n2) Bolognese\n3) Alfredo"
    );
    switch (pastaChoice) {
      case "1": subtype = "Carbonara"; break;
      case "2": subtype = "Bolognese"; break;
      case "3": subtype = "Alfredo"; break;
      default: subtype = null;
    }
  } else if (food === "Salad") {
    const saladChoice = prompt(
      "Choose a salad subtype:\n1) Caesar\n2) Greek\n3) Garden"
    );
    switch (saladChoice) {
      case "1": subtype = "Caesar"; break;
      case "2": subtype = "Greek"; break;
      case "3": subtype = "Garden"; break;
      default: subtype = null;
    }
  }

  if (!subtype) {
    alert("Invalid subtype. Please reload and try again.");
  } else {
    alert(`You selected ${subtype} ${food}. Excellent choice!`);

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
