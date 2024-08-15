
// ---------------------------Task 1 a) ---------------------------
console.log("Task1 A") // Task Seperator
console.log(" ")

const StringToSearch = "asuntokionapajaa"
const SearchWord = "paja"
result = StringToSearch.search(SearchWord)

if (result !== -1) {
    const NewString = SearchWord
    console.log("OriginString:", StringToSearch)
    console.log("NewString:", NewString)
}
else {
    console.log("String  not found")
}
console.log(" ")
// ---------------------------Task 1 b) ---------------------------
console.log("Task1 B") // Task Seperator
console.log(" ")

let everyThird = "";
let replaceA = "";

for (let i = 0; i < StringToSearch.length; i++) {

if (i % 3 == 2) {
const thirdchar = StringToSearch.charAt(i)
everyThird += thirdchar;
replaceA = everyThird.replace(/a/g, "*")
};
}
console.log(replaceA);
console.log(" ")
// ---------------------------Task 2 ---------------------------
console.log("Task2") // Task Seperator
console.log(" ")
console.log("Please call function age() to get prompt. ")

function age() {
let age = prompt("Please enter your age:");

while (age < 18 || age > 22) {
age = prompt("Please enter an age between 18 and 22:");
if (age === null) {
  return;
}
}

let description = "";
switch (true) {
case age < 20:
  description = "Young";
  break;
case age >= 20 && age < 22:
  description = "Middle Age";
  break;
case age >= 22:
  description = "Old";
  break;
}
console.log(age, ":", description);
}

// ---------------------------Task 3 ---------------------------
console.log(" ")
console.log("Task3 A") // Task Seperator
console.log(" ")


const animals = ["Dog", "Horse", "Cow"];
animals.forEach(function (listItem) {
listItem = listItem;
console.log(listItem);
});

console.log(" ")
// Arrow function for each
animals.forEach((listItem) => {
listItem = listItem;
console.log(listItem);
});


console.log(" ")
console.log("Task3 B") // Task Seperator
console.log(" ")


// Copy array to new array.
const moreAnimals = animals.map(
function (item) {return item;}
)
moreAnimals.push("cat","Sheep")
console.log(moreAnimals)


console.log(" ")
console.log("Task3 C") // Task Seperator
console.log(" ")


// Search For Cow and Co
let Asearch = "Cow"
function checkArray () {

if (moreAnimals.includes(Asearch)) {
console.log(`Search result: ${Asearch} found.`)
}
else {
console.log(`Search result: ${Asearch} not found.`)
}
}
checkArray ()
Asearch = "Co"
checkArray ()

console.log(" ")
// ---------------------------Task 4 ---------------------------
console.log("Task4-1") // Task Seperator
console.log(" ")

class FlowerClass {
    constructor (
    Type,
    Color,
    Amount,
    inStore,)
    {
        // properties
        this.Type= Type;
        this.Color= Color;
        this.Amount= Amount;
        this.inStore= inStore;
    }
    //methods
    changeType(Type) {
      this.Type = Type;
    }
    changeColor(Color) {
      this.Color= Color;
    }
    changeAmount(Amount) {
      this.Amount= Amount;
    }     
    changeinStore(inStore) {
      this.inStore= inStore;
    }  

};

// Flower from class
console.log("Rose Before")

const Flower = new FlowerClass (
    "Rose", "Red", 5, true,
)
console.log(Flower)

console.log(" ")
console.log("Rose After")

Flower.changeColor("Yellow")
Flower.changeAmount(4)
Flower.changeinStore(false)

console.log(Flower)



console.log(" ")
console.log("Task4-2") // Task Seperator
console.log(" ")

document.querySelector(".maincontent").innerHTML = "Ad astra per aspera" // Add text to HTML