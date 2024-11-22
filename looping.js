/**
 * Looping Technique
 * 1. for loop
 * 22. while loop
 * 3. do while --> ignore
 * 4. for of --> array loop korar jonne
 * 5. for in --> object loop korar jone
 */


const friends = ['Elon', 'Bill', 'Mark', 'Waren'];

for(const friend of friends){
    // console.log(friend);
}



// for(let i = 0; i < 10; i++){
for(let i = 0; i < friends.length; i++){
    // console.log(i);
    // console.log(friends[i]);
}


const numbers = [5,23,456,425,25, 4512,5678,21, 46,6];
for(let i = 0; i < numbers.length; i++){
    // console.log(numbers[i]);
}


let i = 0;
while(i < friends.length){
    // console.log(friends[i]);
    i++;
}

let n = 0;
while(n < numbers.length){
    console.log(numbers[n]);
    i++;
}