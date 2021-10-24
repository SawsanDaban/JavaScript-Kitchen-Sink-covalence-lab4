let name = "Sawsan"; //String variable - Name
const NoS = 50; // Integer constant - Number of States in the US
let add = 5+4; // Integer variable - Sum of 5 and 4

//Function that says Hello World
function sayHello(){
    alert("HELLO WORLD!");
}

sayHello(); // Calling the function

//Function for checking the age
function checkAge(name, age){
    if(age < 21){
        alert("Sorry " + name + ", you aren't old enough to view this page!");
    }
}

checkAge("Charles", 21);
checkAge("Abby ", 27);
checkAge("James ", 18);
checkAge("John ", 17);

// Vegetables array 
let vegetables = ["Tomato", "Potato", "Cucumber", "Mint"];

// Printing the array elements
for (let i of vegetables){
    console.log(i);
}

// Pet dictionary
let pet = {
    name:"Lucy",
    breed:"Cat"
}

//Printing the pet object
console.log(pet);

//Names and Ages array of 5 objects
let person = [  
                {name:"Sara", age:20},
                {name:"Yasser", age:25}, 
                {name:"Alex", age:30},
                {name:"Mike", age:18},
                {name:"Lucy", age:21}
            ];

//Check the age of the array names and age
for(let i=0; i<person.length; i++){
    checkAge(person[i].name, person[i].age);
}

//Check the length of any word and return the number of characters
function getLength(word){
    return word.length;
}

let wordLength = getLength("Hello World");

if(wordLength%2 == 0){
    console.log("The world is nice and even!");
} else {
    console.log("The world is an odd place!");
}