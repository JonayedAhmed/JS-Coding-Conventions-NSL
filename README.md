# **JavaScript Coding Convention (NSL)**

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
- When using anonymous functions inside a method that requires a function as a parameter, it is acceptable to use an arrow function (although not required).
- If parameter is passed use default argument in function.
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
