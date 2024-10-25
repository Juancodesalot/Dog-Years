var myAge = 29;

// variable of my age 

var earlyYears = 2;

//  Early years is set a 2 

earlyYears *= 10.5;
// OR earlyYears = earlyYears * 10.5;
console.log(earlyYears)

// with ealyYears already set you can change the value of it so I only multplied it by 10.5

var laterYears = myAge - 2;

// laterYears is myAge - 2 so I can set the variable for it using the previous variable set up and the static number 2 

laterYears *= 4;

// or laterYears= laterYears * 4 ;

// set the new laterYears as a it is multiplied by 4 didnt need a second var 

console.log(laterYears);

// expected answers for step 6 early year is 21 then later years 108

var myAgeInDogYears = earlyYears + laterYears;

// step 8 

var name = 'JUAN';

var myName= name.toLowerCase();

console.log(myName);

// first set a variable for  name then set one as myName with the name in it and the lowercase function put in console log to check if it worked

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)

// first console log to display on the console then the ` to add the string interpolation for the myName myAge and myAgeInDogYears
// This helps make it easier to type the code you need to display. 

// I orginally wrote it without the *= operetor haha and then deleted it when I realized that wasnt what was asked

