const Person = ['rakib','nokib','sakib','akib','dulal'];
const sortedPerson = Person.sort();
console.log(sortedPerson);


// sort
// const numbers = [4,7,2,8,3,6];
/**
 * Ascending--> smaller to larger:[2,3,4,6,7,8]
 * descending--> larger to smaller: [8,7,6,4,3,2]
 */
const numbers = [4,7,12,8,43,6,1];
// const numbers_asc = numbers.sort(); //not working
const numbers_asc = [...numbers].sort(function (a,b) {return a-b});
const numbers_dsc = [...numbers].sort(function (a,b) {return b-a});

console.log(numbers_asc);
console.log(numbers_dsc);
