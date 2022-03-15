// Task 1
let x = 1;
let y = 2;
let res1 = String(x) + String(y);
console.log(res1);          //12
console.log(typeof res1);   //string

let res2 = Boolean(x) + String(y);
console.log(res2);          //true2
console.log(typeof res2);   //string

let res3 = (x < y);
console.log(res3);
console.log(typeof res3);

let res4 = Number(String(x > y));
console.log(res4);
console.log(typeof res4);


// Task 2
let someNumber2 = prompt("Enter the number:");
someNumber2 = Number(someNumber2);

// a)
if (someNumber2 > 0 && (someNumber2 % 2) == 0) {
    console.log("Even positive number!"); }
else  {
    console.log("You are wrong!");
}

// b)
if (someNumber2 % 7 == 0) {
    console.log("Multiple to 7"); }

else  {console.log("You are wrong!"); }

//Task 3
const anyCar = [];
anyCar[0] = 45;
anyCar[1] = "Audi";
anyCar[2] = true;
anyCar[3] = null;
console.log(anyCar.length);     

anyCar[4] = prompt("Enter your favourite color:");
console.log(anyCar[4]);

anyCar.shift();
console.log(anyCar);

// Task 4
let cities = ["Rome", "Lviv", "Warsaw"];




// 4. Напишіть програму, яка об’єднує всі наявні елементи масиву в стрічку і розділяє їх символом “*”.
// Початковий масив:
// let cities = ["Rome", "Lviv", "Warsaw"]; 
// Результат:
// "Rome*Lviv*Warsaw"


// Task 5
let isAdult = prompt("How old are you?");
let result = isAdult >= 18 ? "You are an adult" : "You are not an adult"
console.log(result); 


// Task 6
let a = Number(prompt("Enter the first side of the triangle:"));
let b = Number(prompt("Enter the second side of the triangle:"));
let c = Number(prompt("Enter the third side of the triangle:"));

if (a <= 0|| b <= 0 || c <= 0) alert("Incorrect data");

else if (isNaN(a) || isNaN(b) || isNaN(c))  alert("Incorrect data"); 
     
else if (a > b + c || b > a + c || c > a + b) alert("Incorrect data");

else {
    let halfP = (a + b + c)/2;     // половина периметру трикутника
    let area = (halfP * (halfP - a) * (halfP - b) * (halfP - c)) ** (1 / 2);
    console.log(area.toFixed(3));  }

// Прямокутний чи ні
if (a**2 + b**2 == c**2 || b**2 + c**2 == a**2 || a**2 + c**2 == b**2) {
    console.log("Right triangle!");
}
else {
    console.log("Not a right triangle!");
}

// Task 7
let currentDate = new Date();
let currentHour = currentDate.getHours();

if (currentHour >= 23 || currentHour >= 0 && currentHour < 5) console.log("Good night!");
else if (currentHour >= 17 && currentHour < 23) console.log("Good evening!");
else if (currentHour >= 11 && currentHour < 17) console.log("Good day!");
else  console.log("Good morning!");


switch (currentHour) {
    case 23:
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
        console.log("Good night!");
        break;
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
        console.log("Good morning!");
        break;
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
        console.log("Good day!");
        break;
    case 17:
    case 18:
    case 19:
    case 20:
    case 21:
    case 22:
        console.log("Good evening!");
        break;
}
