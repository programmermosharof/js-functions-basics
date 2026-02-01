function multiply(a, b){
   return a*b;
}
let result = multiply(40 , 5)
console.log(result);


function tenTime (number){
    const back = number * 5;
    return back;
}
const output = tenTime(40);
console.log("output", output);

const bigsize = tenTime(100);
console.log(bigsize);


function isEven (number){
    if(number % 2 === 0){
        return true;
    }else{
        return false;
    }
}

const is = isEven(20);

console.log(is);


function even(nums){
    return nums % 2 === 1;

}
const check = even (10);
console.log(check);