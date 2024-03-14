let car: string = `BMW`;
let age: number = 20;
let numbers: number [] = [1,2,3,4];
//STRING TEST
// equality test:
//true
car = `BMW`;
console.log(`car==true`);
console.log(car==`BMW`);
//false
car = `BMW`;
console.log(`car===false`);
console.log(car==`BMW`);

//inequality test:
//true
car = `COROLLA`;
console.log(`car!=true`);
console.log(car!=`COROLLA`);
//false
car = `SWIFT`;
console.log(`car!==false`);
console.log(car!==`SWIFT`);

//lowercase function test:
//true
car = `FERRARI`;
console.log(`car.toLowerCase()==true`);
console.log(car.toLowerCase()==`FERRARI`);
//false
car = `FERRARI`;
console.log(`car.toLowerCase()===false`);
console.log(car.toLowerCase()===`FERRARI`);

//NUMERICAL TEST
//equality test:
//true
age = 20;
console.log(`age==true`);
console.log(age==20);
//inequality test:
//false
age = 25;
console.log(`age!=true`);
console.log(age!=25);
//greater than:
//false
age = 25;
console.log(`age>false`);
console.log(age>25);
//less than or equal:
//true
age = 20;
console.log(`age<=true`);
console.log(age<=20);

//LOGICAL OPERATORS
//and:
//true
age = 15,25;
console.log(`age<>true`);
console.log(age>15 && age<25);
//or:
//false
age = 25,16;
console.log(`age<>false`);
console.log(age>25 || age<16);

//ARRAY TEST
//in array:
//true
console.log("Is 3 in numbers? I predict true.");
console.log(3 in numbers);
//not in array:
//false
console.log("Is 5 is not in numbers? I predict true.");
console.log(5 in numbers);













