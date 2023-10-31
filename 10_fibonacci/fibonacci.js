

const fibonacci = function(rawInput) {

let input = parseInt(rawInput);

if (input < 0) return 'OOPS';

let n = input;
const sequence = [1, 1,];

let tally = 0;
for (let i = 0; i < n; i++) {
    tally = sequence[n - (n - i)] + sequence[n - (n - (i + 1))];
    sequence.push(tally); 
    };

return sequence[input-1];
   
     

 };

// Do not edit below this line
module.exports = fibonacci;
