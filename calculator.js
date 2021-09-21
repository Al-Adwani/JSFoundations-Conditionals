const prompt = require("prompt-sync")(); // Please don't touch me :)

// The prompt method allows us to take an input from the user.
// Run the code to see how to use prompt.
const firstNumber = Number(prompt("What's your First Number? "));
const secondNumber = Number(prompt("What's your Secoond Number? "));
const operation = prompt("What's your Operation? ");


if (!isNaN(firstNumber) && !isNaN(secondNumber) && (operation === `+` || operation === `-` || operation === `/` || operation === `*`)){
      if (operation === `+`){
            console.log(firstNumber + secondNumber);

      } else if (operation === `-`){
            console.log(firstNumber - secondNumber);
      } else if (operation === `*`){
            console.log(firstNumber * secondNumber);
      } else if (operation === `/`){
            console.log(firstNumber / secondNumber);
      } 
} else  {
      console.log(`Please Make Sure That You put a valid number or operation`)
}
