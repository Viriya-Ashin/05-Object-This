// Logs the global `this` context, which refers to the `window` object in a browser environment.
console.log(this);

// This refers to window object.
function helloThis() {
  // Logs the `this` context inside the function. In non-strict mode, this will be the global object; in strict mode, it will be `undefined`.
  console.log('Inside this function, this is ' + this);
}


// Define an object `child` with a property `age` and a method `ageTenYears`
var child = {
  age: 10,
  ageTenYears: function() {
    // Logs the current `age` of the child plus 10. `this` refers to the `child` object.
    console.log(this.age + 10);
  }
};

// This refers to the investment object. Will log 5750.
var investor = {
  name: 'Cash Saver',
  investment: {
    initialInvestment: 5000,
    // Method `investmentGrowth` logs the growth of the initial investment by 15%. `this` refers to the `investment` object.
    investmentGrowth: function() {
      console.log(this.initialInvestment * 1.15);
    }
  }
};

// Call the function `helloThis` to see the `this` context within the function
helloThis();

// Call the method `ageTenYears` of the `child` object to see the age plus ten
child.ageTenYears();
// Call the method `investmentGrowth` of the nested `investment` object to see the investment growth calculation
investor.investment.investmentGrowth();
