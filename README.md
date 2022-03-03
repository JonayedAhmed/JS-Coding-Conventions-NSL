# **JavaScript Coding Convention (NSL)**


## Table of Contents

1. [Variables](#1.variables)
2. [Functions](#functions)
3. [Objects and Data Structures](#objects-and-data-structures)
4. [Constructors](#constructors)
5. [Braces](#braces)
6. [Filename](#filename)
7. [Hierarchy](#hierarchy)
8. [Callbacks](#callbacks)
9. [Imports](#imports)
10. [Exports](#exports)
11. [Comments](#comments)
12. [Enums](#enums)
13. [General guidelines](#general-guidelines)



## Variables
- Use lowerCamelCase for variables name.
- Use let (for storing a value which chnages frquently).
- Use const (for storing a constant value).
- Variable name should be noun.
- Always use a meaningful and pronounceable name.
- Use the same type of vocabulary for similar variables.
- Keep all the global variables at the top.

## Functions
- Use meaningful name.
- use the same type of vocabulary for similar functions.
- Use lowerCamelCase for function name.
- Function name should be verb.
- Function name must support the work inside the function.
- Function should do only one thing. Try to avoid if else inside a function. Rather make multiple functions.
- Function should ensure reusability of code and avoid duplication.
- Avoid negative conditioning.
- Where possible, use the function declaration to define functions over function expressions. 
- Prefer arrow functions over other this scoping approaches such as f.bind(this), goog.bind(f, this), and const self = this.
- Arrow functions are particularly useful for calling into callbacks as they permit explicitly specifying which parameters to pass to the callback whereas binding will blindly pass along all parameters.
- When using anonymous functions inside a method that requires a function as a parameter, it is acceptable to use an arrow function (although not required).
- If parameter is passed try to use default argument in function if there is a possibility of any error or null value or empty value.
- Try to use minimum arguments. Preferably 2-3.
- Encapsulate Conditionals.
- Try to extend existing object using ES6 classes or inheritance, instead of creating the function. 
 

## Objects and Data Structures
- Object name should be noun.
- use UpperCamelCasing (also known as PascalCasing).
- Do not use JavaScript getter and setter properties.
- Try to use private members (ES5).
- Prefer composition over inheriance.
- Use literals NOT constructors for creating general objects. i.e. use let myObject = { }; avoid let myObject = new Object();

## Constructors
- Constructors are optional. Subclass constructors must call super() before setting any fields or otherwise accessing this. Interfaces should declare non-method properties in the constructor.

## Braces
- Braces are required for all control structures(if, else, for, do, while).
- Braces follow the Kernighan and Ritchie style.
- No line break before the opening brace.
- Line break after the opening brace.
- Line break before the closing brace.

## Filename 
-File names must be all lowercase and may include underscores (_) or dashes (-), but no additional punctuation.Follow the convention that your project uses.

## Hierarchy
- Module namespaces may never be named as a direct child of another module's namespace.
- Use goog.module('foo.bar'); NOT goog.module('foo.bar.baz');

## Callbacks
- Avoid complex nested callbacks. 
- Use single-argument style.

## Imports
- ES module files must use the import statement to import other ES module files.
- The .js file extension is not optional in import paths and must always be included.
- Do not import the same file multiple times.

## Exports
- Use named exports in all code. You can apply the export keyword to a declaration, or use the export {name}; syntax.
- Do not use default exports.

## Comments 
- Avoid Unnecessary comments.
- Remove commented out codes from codebase after serving the perpouse.
- Classes, interfaces and records must be documented with a description and any template parameters, implemented interfaces, visibility, or other appropriate tags. The class description should provide the reader with enough information to know how and when to use the class, as well as any additional considerations necessary to correctly use the class. 


## Enums 
- Enumerations are defined by adding the @enum annotation to an object literal. Additional properties may not be added to an enum after it is defined. Enums must be constant, and all enum values must be deeply immutable.

## General guidelines
- Use template literals  ``.
- User strict equality (===).
- Avoid using flags.
- Block indentation should be 4 space (Tab).
- Use ; in every line. Every statement must be terminated with a semicolon. Relying on automatic semicolon insertion is forbidden.
- Use expanded syntax.
- Ternary operators should be put on a single line.
- One statement per line. Each statement is followed by a line-break.
- JavaScript code has a column limit of 80 characters. Except as noted below, any line that would exceed this limit must be line-wrapped.
- Do not use block scoped functions declarations.


## Example 1

```javascript
/*
* Title: Temperature Calculation
* Description: Calculations like convertion, max and min temperature
*/

//Dependencies
import temperature from "./temp.js";

allTemperatureData = [32,25,21,33,40,42];

temperature.convertToCelcius(89);
temperature.convertToFahrenhe(22);
temperature.calculateMaximumTemperature(allTemperatureData);
```

```javascript
/*
* Title: Temperature Calculation
* Description: Calculations like convertion, max and min temperature
*/


//module scarfing
const temperature = {}

// Converts Farhenheit to Celcius
temperature.convertToCelcius = (fahrenheitTemperature=32) => {
    // Try to Avoid Type Checking
    // If type checking is done, try to use strong type check
    var fahrenheitTemperature = typeof(fahrenheitTemperature) === Number ? fahrenheitTemperature : false;
    if(fahrenheitTemperature){
        return Math.round((fahrenheitTemperature - 32)*0.555);
    }
    else{
        return "Invalid Input";
    }
}

// Converts Celcius to Farenheit
temperature.convertToFahrenhe = (celciusTemperature=-17.78) => {
    var fahrenheitTemperature = typeof(celciusTemperature) === Number ? celciusTemperature : false;
    if(fahrenheitTemperature){
        return Math.round((celciusTemperature * 1.8)+32);
    }
    else{
        return "Invalid Input";
    }
}

// Calculates the maximum
temperature.calculateMaximumTemperature = (allTemperatureData) => {
    let maxTemperature = allTemperatureData[0];
    for(let i=1; i<allTemperatureData.length; i++){
        maxTemperature = allTemperatureData[i] > maxTemperature ? allTemperatureData[i] : maxTemperature;
    }
    return maxTemperature;
}

module.exports = temperature;
```

## Example 2

```javascript
const makeBurger = () => {
  return getBeef()
    .then(beef => cookBeef(beef))
    .then(cookedBeef => getBuns(cookedBeef))
    .then(bunsAndBeef => putBeefBetweenBuns(bunsAndBeef))
}

// Make and serve burger
makeBurger()
  .then(burger => serve(burger))
```
OR
```javascript
const makeBurger = () => {
  return getBeef()
    .then(cookBeef)
    .then(getBuns)
    .then(putBeefBetweenBuns)
}

// Make and serve burger
makeBurger()
  .then(serve)
```
