# HTML Code Explanation

## Document Structure
- `<!DOCTYPE html>`: Declares the document type and version of HTML.
- `<html lang="en">`: Sets the language of the document to English.

## Head Section
- `<meta charset="UTF-8">`: Specifies the character encoding as UTF-8.
- `<meta name="viewport" content="width=device-width, initial-scale=1.0">`: Ensures the page is responsive to different screen sizes.
- `<title>Objects</title>`: Sets the title of the webpage to "Objects".

## Body Section
- `<h1 style="text-align:center;">✨ Open the Console to See What's Happening ✨</h1>`: Main heading centered with inline CSS, instructing users to open the console.
- `<script src="script.js"></script>`: Links to an external JavaScript file `script.js`.


# JavaScript Code Explanation

## Global Context
- `console.log(this)`: Logs the global `this` context, which refers to the `window` object.

## Function Definitions

### helloThis
- `helloThis()`: Logs the `this` context inside the function.

## Objects and Methods

### child Object
- `child.age`: Age property, set to 10.
- `child.ageTenYears()`: Logs `age + 10`, with `this` referring to the `child` object.

### investor Object
- `investor.name`: Name property, set to "Cash Saver".
- `investor.investment.initialInvestment`: Initial investment property, set to 5000.
- `investor.investment.investmentGrowth()`: Logs the growth of `initialInvestment` by 15%, with `this` referring to the `investment` object.

## Function Calls
- `helloThis()`
- `child.ageTenYears()`
- `investor.investment.investmentGrowth()`


* What does the `window` object represent? Is the global object always the `window` object?
The window object represents an open window in a browser.
If we are running code inside a browser, the global object is the 'window' object.


