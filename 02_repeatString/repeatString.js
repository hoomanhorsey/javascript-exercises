
//let string = prompt("What is the string?")
//let number = prompt("How many times would you like it repeated")

const repeatString = function(string, num) {

if (num < 0) {
    return "ERROR";
} else {

let endString = "";

for (let i = 0; i < num; i++) { 
    endString += string; 
    }
return endString;
};
}

repeatString()

// Do not edit below this line
module.exports = repeatString;
