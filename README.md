# convertLettersToNumbers

## Task

Create a custom filter in AngularJS that will take in a string and convert it to an integer based on the following rules:
1. Each letter is replaced with its coresponding place in the alphabet (a is 1, z is 26)
2. Capital letters are doubled (A is 2, Z is 52).
3. Unexpeted or invalid inputs (non-alpha characters, etc) should result in a value of -1.
4. (Added by me)  Strings that result in an interger overflow should result in a value of -1.
5. (Added by me) Empty input shoudl result in a value of -1.

Examples
```` bash
convertLettersToNumbers("abc") returns 123
convertLettersToNumbers("cz") returns 326
convertLettersToNumbers("aBcT") returns 14340
convertLettersToNumbers("") returns -1 (empty)
convertLettersToNumbers("24") returns -1 (not a string)
convertLettersToNumbers("ALONGSTRINGOFCHARATERS") returns -1 (interger overflow)
````

## Technolgies Used

AngularJS 1.6.6 - Client Side Implmentation

Karma/Jasmine - Unit Testing Framework

Bootstrap- Styling Framework (used on demo)

Gulp - Task Runner

Bower/NPM - Package Managers

PhantomJS - Headless browser for unit testing.

  
## Directions  onced clone to local directory (make sure npm and bower are allready globally installed).
  
1. Install dependenices 
              
  ````bash
  npm install
  ````
              
  ````bash
  bower install
  ````
  
2. Build client distruibution 

  ````bash
  gulp build
  ````
  
3. Run Tests

  ````bash
  gulp test
  ````
                     
           
