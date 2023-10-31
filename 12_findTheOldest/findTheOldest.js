const findTheOldest = function(arr) {


const oldest = arr.sort(function(a, b) {
    if (a.yearOfDeath == null) {
        date = new Date();
        a.yearOfDeath = date.getFullYear();
    }
    if (b.yearOfDeath 
        == null) {
        date = new Date();
        b.yearOfDeath = date.getFullYear();
    }
   
    aPerson = a.yearOfDeath - a.yearOfBirth;
    bPerson = b.yearOfDeath - b.yearOfBirth;
    return aPerson > bPerson ?  -1 : 1; 
});

return oldest[0];



};

// Do not edit below this line
module.exports = findTheOldest;
