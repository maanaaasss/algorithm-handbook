// datatypes
// Primitive
// number, string, boolean, bitInt, objects, null, undefined

// numbers
let a = 10;
let b = 10.02;

// strings
const fname = "Manas";
const lname = "Gedam";

// Booleans internally 0 and 1
let isLoggedIn = true;

// null & undefined
let lastLoginDate = null;

// Objects
const person = {
    firstName: "Manas",
    lastName: "Gedam",
    isLoggedIn: true,
}

// String '1' + '1' = string
// string + number = string
// string * number = number

// typeof 


// Switch

// let option = 1;

// switch(option) {
//     case 1: console.log("Hello");
//     break;
//     case 2: console.log("Namaste");
//     break;
//     case 3: console.log("Konnichiwa");
//     break;
//     case 4: console.log("Bonjour");
//     break;
//     default: console.log("Invalid Option");
// }

// logical operators 

// AND && OR || NOT !

// loops

// for -> iteratoins are known
// while -> condition is known but iterations not
// do while -> first execute then check condition

// functions -> a block of code that performs a task

function sayHello() {
    console.log("Hello");
}

// parameters

function multiplication(a, b) {
    console.log(a*b);
}
// return from function

function addition(a, b) {
    return a + b;
}

let res = addition(3,4);


// function addNNumbers() {
//     let res = 0;
//     for(let i=0; i<arguments.length; i++) {
//         res += arguments[i];
//     }
//     return res;
// }

// let ans = addNNumbers(1,2,3);

// console.log(ans);

function addNNumbers(...numbers) {
    let res = 0;
    for(let i=0; i<numbers.length; i++) {
        res += numbers[i];
    }
    return res;    
}

let result = addNNumbers(1,2,3,4,5,6);
// console.log(result);


//--------- Arrow Function --------------

// 1. Syntax
const sayHi = () => {
    console.log("Hello");
}

const add = (a, b) => {
    return a + b;
}

const addv2 = (a, b) => a+b;

// 2. 'arguments' keyword
const multiply = (...numbers) => {
    let res=numbers[0];
    for (let index = 1; index < numbers.length; index++) {
        res *= numbers[index];
    }
    return res;
}

// 3. Hoisting - not hoisted, so call after declaration

// 4. 'this keyword

// this keywords refers to the window (global object) not the object when used in arrow functions


// higher order function in which a function accepts another function as a argument

// A callback function in JavaScript is a function passed as an argument to another function, which is then executed (or "called back") at a later point in time to complete a specific task


// Arrays
const students = ['Manas', 'Ganisha', 'Vedant', 'Mansi'];
const numbers = [1,2,3,4,5,6,7];

// Higher order functions in Array

// students.forEach((n) => console.log(n));
// students.map((n) => console.log(n)); // map returns a new array
// let ans = students.find((student) => student == 'John') returns value
// console.log(numbers.includes(3)); true or false
// numbers.filter(num => num % 2 == 0); returns new array
// let ans = numbers.slice(1, 3); gets the speific range new array 
// console.log(numbers.splice(0, 2)); // start index, deleete count and modifies originla array and retursn the deleted eleemts array 





// ----------- DOM -----------------

// Document Object Model


// const button = document.getElementById('clickButton');
// const container = document.getElementById('container');

// let count = 0;

// button.addEventListener('click', () => {
//     const li = document.createElement('li');
//     li.innerText = count;
//     container.appendChild(li);
//     count++;
// })

// ----------- Promise ------------------

/* 
Synchronous Task 
    Sequential; waits for completion
    Blocks thread; slower for I/O
    Simple and easy to debug


Asynchronous Task
    Concurrent; non-blocking
    Improves speed; handles multitasking
    More complex; requires callbacks/promises
    returns a Promise **

    async -> Programs doesnt run in thread of the program
    await -> it means I need the data so wait for it

let data = fetch('https://jsonplaceholder.typicode.com/posts')
console.log(data);

async function getData() {
    let data  = await fetch('https://jsonplaceholder.typicode.com/posts');
    console.log(await data.json());
}


------- Fetch ----------

fetch('https://jsonplaceholder.typicode.com/posts')
.then((data) => { console.log(data)})
.catch((error) => {console.log(error);})


------- Weather App --------
const getButton = document.getElementById('searchButton');
const loc = document.getElementById('location');
const cityName = document.getElementById('city-name');
const cityTemp = document.getElementById('city-temp');
const cityTime = document.getElementById('city-time');

async function getWeather(location) {
    const data = await fetch(`http://api.weatherapi.com/v1/current.json?key=f03a64d87b3541e4abc52528260210&q=${location}&aqi=no
`);
    return data.json();
}

getButton.addEventListener('click', async () => {
    const value = loc.value;
    const result = await getWeather(value);
    console.log(result);
    
    cityName.innerText = `${result.location.name}, ${result.location.region}`;

    cityTemp.innerText = `${result.current.condition.text}, ${result.current.temp_c}`
    cityTime.innerText = `${result.location.localtime}`;
    
})


---------- localStorage ----------------

const button = document.getElementById('submitButton');
const uName = document.getElementById("name");

button.addEventListener('click', () => {
    const val = uName.value;
    localStorage.setItem("Name", val);
    location.reload();
})

const showName = document.getElementById('showName');
window.addEventListener('load', () => {
    const val = localStorage.getItem("Name");
    showName.innerText = val;
})


--------- Current Location -----------

const button = document.getElementById('locateButton');

function getLocation(position) {
    console.log(position);
}

function failed() {
    console.log("Failed");
}


button.addEventListener('click', async () => {
    navigator.geolocation.getCurrentPosition(getLocation, failed);
})

const show = document.getElementById('time');

function showTime() {
    const currentTime = new Date();
    const time = `${currentTime.getHours()}:${currentTime.getHours()}:${currentTime.getSeconds()}`

    show.innerText = time;
}

setInterval(showTime, 1000);

-------- timer ------------

const input = document.getElementById('time-input');
const startbutton = document.getElementById('start-timer');
const title = document.getElementById('timer');

let count;
let interval;

startbutton.addEventListener('click', () => {
    count = Number(input.value);

    interval = setInterval(() => {
        if(count >= 0) {
            title.innerText = count;
            count--;
        } else {
            clearInterval(interval);
        }
    }, 1000)
});


--------- Closure -----------
A closure is a function that has access to the parent scope, after the parent function has closed.

Closures has historically been used to:
Create private variables
Preserve state between function calls
Simulate block-scoping before let and const existed
Implement certain design patterns like currying and memoization

------- Currying -----------
Currying in JavaScript is a functional programming technique that transforms a function accepting multiple arguments into a sequence of nested functions, each taking a single argument.  Instead of calling f(a, b, c), a curried function is called as f(a)(b)(c), leveraging closures to retain the state of previously passed arguments. 

How It Works
When a curried function is called with fewer arguments than required, it returns a new function that expects the next argument. This process continues until all arguments are provided, at which point the final result is computed and returned. 

// Basic currying example
const add = (a) => (b) => a + b;

// Usage
const addFive = add(5);       // Returns a function expecting b
console.log(addFive(3));      // Output: 8
console.log(add(5)(3));       // Output: 8



--------- IIFE Immediaxtely Invoked function Expression ---------
(function() {})();

(function add(a, b) {
    console.log(a+b);
})(1,1);




-------- Iterators Patterns -----------

-------- Generator Function ----------

-------- yield --------

-------- Promisification ----------


-------- Event Propogation ---------
What is Event Propogation?
    Event Propagation defines the order in which event handlers are triggered when an event occurs in the DOM.

        Event Bubbling
        Event Capturing
 */



