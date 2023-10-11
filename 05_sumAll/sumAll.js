const sumAll = function(x, y) {

if (x > y) {
    let temp = x;
    x = y;
    y = temp;
}

if ((x || y) < 0) {
    return 'ERROR';
} 

if ((Number.isInteger(x) === false) || (Number.isInteger(y) === false)) {
    return 'ERROR';
}

let z = 0;
let n = 0;

while ((x + n) < (y + 1)) {
    z += x +n;
    n++;
}
return z;

};

// Do not edit below this line
module.exports = sumAll;
