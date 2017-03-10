'use strict'

const randomInt = (low, high) => {
  low = Math.ceil(low);
  high = Math.floor(high);
  return Math.floor(Math.random() * (high-low +1)) + low;
}


module.exports = { randomInt } ;
