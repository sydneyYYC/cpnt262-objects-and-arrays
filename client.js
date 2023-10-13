// define my array and object

// schoolBag will be my array
const schoolBag = ["pencil case", "laptop", "pen", "keys", "water"];

// laptop will be my object
const laptop = {
  color: 'grey',
  size: 'medium',
  age: '3',
};

// array 

// let variable 'add' equal schoolBag plus wallet
const add = schoolBag.push("wallet");

//render my new array item - put my wallet in my bag
//lets store the document.query selector in a variable so we can reduce blocky code
let schoolBagAdd = document.querySelector(".schoolbag-add");

schoolBagAdd.innerHTML = schoolBag[5];


//let shift = schoolBag with the first element removed from it
//taking out pencil case to find pencil lets say
const shift = schoolBag.shift();
//log new array
console.log(schoolBag);
// log new first element in schoolbag
document.querySelector("#schoolbag-shift").innerHTML = schoolBag[0];

// slice 
// i wanna take out my pen - NOT my keys
// slice - grab the second element in my bag: 'pen'
const slice = (schoolBag.slice(1));

//insert first element into the html - pen
document.querySelector("#schoolbag-slice").innerHTML = slice[0];

//object

// check what values our object has
let laptopV = console.log(Object.values(laptop));

//render those values onto html page
document.querySelector(".laptop-values").innerHTML = laptop.color;

// render values of laptop to hmtl using object entries - this will render everything inside laptop key and values
document.querySelector(".laptop-object").innerHTML = (Object.entries(laptop))

// fun with object keys and values
//render keys
document.querySelector(".laptop-keys").innerHTML = (Object.keys(laptop))
// render values
document.querySelector(".laptop-v").innerHTML = (Object.values(laptop))

