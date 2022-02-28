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
