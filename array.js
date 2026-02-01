// function sumArray(numbers){
// let sum = 0;
//    for (const number of numbers){
    
//     sum = sum + number;
//    }
//    return sum;

// }

// const nums = [10, 113, 16, 12, ]
// const sum = sumArray(nums);
// console.log("Sum of number is", sum);


// function getSum (numbers){
//     let sum =0;
//     for(let i = 0; i < numbers.length; i++){
//          sum = sum + numbers[i];
//     }
//     return sum;
// }
// let result = getSum([23, 56, 67, 56, 80]);
// console.log("total",result);


// function getsum(Mosharof){
//     let m = 0;
//     for(n = 0; n < Mosharof.length; n++){
//         m = m + Mosharof[n];
//     }
//     return m;
// }
// let b = getsum([50, 34, 55, 65,32,]);
// console.log("all:", b);


function getSum(numbers){
    let m = 0;

    for(let n = 0; n < numbers.length; n++){
        m = m + numbers[n];
    }

    return m;
}

let result = getSum([23, 56, 67, 56, 80]);
console.log("total", result);

let b = getSum([50, 34, 55, 65, 32]);
console.log("all:", b);
