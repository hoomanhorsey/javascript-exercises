





const reverseString = function(string) {

    // get the length of the string
    const length = string.length;

    // declare a new array to store reversed string
    const rString = [];

    // use the length to start a loop from the LAST number in the string, 
    // extract that letter at that location
    // create a loop that adds each letter to the new array, until the end.

    for (let i = (length - 1); i > -1; i--)
        {
        rString.push(string[i]);
        }

        let text = rString.join("");

    return text;


};

// Do not edit below this line
module.exports = reverseString;
