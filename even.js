function evenonly(numbers){
    for(const number of numbers){
        if(number % 2 === 0){
            console.log(number);
        }
    }
}

const  numbers = [5, 80, 35, 13, 22, 44, 60];
evenonly(numbers);



function getEvenNumbers(numbers){
let even = [];

for(const num of numbers){
    if(num % 2 === 0 ){
        even.push(num);
    }
}
return even;
}

const result = getEvenNumbers([ 23, 45, 54, 65, 67, 40, 6, 36]);
console.log(result);


function getOdd(number){
    let evens = [];
    for (const nums of number){
        if(nums % 2  === 1){
            evens.push(nums);

        }

    }

    return evens;
}

const all = getOdd([22, 23, 50, 68, 67, 99,]);

console.log(all);