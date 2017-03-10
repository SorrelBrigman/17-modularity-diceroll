'use strict'

const toDiceNotation = (a)=>{
  let diceNotation = `${a.sides}d${a.count}`;
  return diceNotation;
}

const roll = (a) =>{
  let sides = parseInt(a.split("d")[0])
  let numberOfDice = parseInt(a.split("d")[1])
  let { randomInt } = require('./math.js')

  let total = 0;
  for(let i = 0; i< numberOfDice; i++) {
    total += randomInt(1, sides);
  }

  return total;
}


module.exports = { toDiceNotation, roll };
