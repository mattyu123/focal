//Define a function rolls a dice between 1 and 6
function diceRoll(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

//Define a function that rolls a dice num number of times, and returns the value of all the dice rolls
const diceRoller = function(num) {
  let counter = 1;
  let finalRolls = [];

  while (counter <= num){
    finalRolls.push(diceRoll(1,7));
    counter += 1;
  }
  // return finalRolls;
  return `Rolled ${num} dice: ${finalRolls.join(", ")}`
}

console.log(diceRoller(2));

