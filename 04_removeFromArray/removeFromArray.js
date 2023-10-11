
// x is the array
// y is what you want to remove from the array

// 'arguments' is an object that contains all the arguments entered into the function
// argument[0], would be the array that is being reviewd
// argument[1, n] would be the items that need to be removed from the array.


// declare a new array to store final array
// find length of array
// loop to compare a) the first variable against the array, and 
// b)subsequent variables against the array

// In the array comparsion, compare y against x, 

const removeFromArray = function(array, deletedItems) {

    
    const newArray = [];

    let arrayLength = array.length;
    let argumentsLength = arguments.length;

    for (let j = 1; j < argumentsLength; j++) {
        arguments[j]
        

        for (let i = 0; i < arrayLength; i++) {
            if (array[i] === arguments[j]) {
                array.splice(i, 1);               
            } 
        }
    }
    return array;
    
    
};

// Do not edit below this line
module.exports = removeFromArray;
