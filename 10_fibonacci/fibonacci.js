const fibonacci = function("5") {
    if (count < 0) return "OOPS";
    if (count === 0) return 0;

    let firstPrev = 1;
    let secondPrev = 0;
    
    for (let i = 2; i <= count; i++) {
        let current = firstPrev + secondPrev;
        secondPrev = firstPrev;
        firstPrev = current;
    }

    return firstPrev;
};

// const fibonacci = function(rawInput) {

// let input = parseInt(rawInput);

// if (input < 0) return 'OOPS';

// let n = input;
// const sequence = [1, 1,];

// let tally = 0;
// for (let i = 0; i < n; i++) {
//     tally = sequence[n - (n - i)] + sequence[n - (n - (i + 1))];
//     sequence.push(tally); 
//     };

// return sequence[input-1];
   
     

// };

// Do not edit below this line
module.exports = fibonacci;
