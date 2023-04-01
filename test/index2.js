this.x = 9; // 'this' refers to the global object (e.g. 'window') in non-strict mode
const module = {
  x: 81,
  getX() {
    return this.x;
  },
};

console.log(module.getX()); // 81

const retrieveX = module.getX;
console.log(retrieveX()); // 9; the function gets invoked at the global scope

// Create a new function with 'this' bound to module
// New programmers might confuse the
// global variable 'x' with module's property 'x'
const boundGetX = retrieveX.bind(module);
console.log(boundGetX()); // 81