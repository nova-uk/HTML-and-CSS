//Variable is set as my age currently 30 years old.
const myAge = 30;
//Early years has a value of 2 but can change.
let earlyYears = 2;
earlyYears *= 10.5;
earlyYears = earlyYears;
let laterYears = myAge - 2;
//Multiplying later years by 4.
laterYears *= 4;

console.log(earlyYears);
console.log(laterYears);

//Adding together early years and laters years.
let myAgeInDogYears = (earlyYears += laterYears);

//Its my name.
let myName = "Sean".toLowerCase();

//Shows my name and then my age in dog years.
console.log(
  `My Name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years`
);
