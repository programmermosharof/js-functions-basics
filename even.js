function evenonly(numbers){
    for(const number of numbers){
        if(number % 2 === 0){
            console.log(number);
        }
    }
}

const  numbers = [5, 80, 35, 13, 22, 44, 60];
evenonly(numbers);

function geteven (num){
    let even = [];
    for (const nums of num ){
        if(nums % 2 ===0){
            even.push(nums);

        }
    }
    return even;
}

const result = geteven([45, 22, 34, 65, 66, 80]);

console.log(result);