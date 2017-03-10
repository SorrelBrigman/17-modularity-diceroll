'use strict'

module.exports = (args) => {
  let sides = (args[0]) ? parseInt(args[0]): 6
  let count = (args[1]) ? parseInt(args[1]): 1
  return { sides, count }
}
