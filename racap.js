function add(price1, price3){
    const total = price1 + price2 ;
    return total;

}

function oddEven(number){
    if(number % 2 === 0){
        return "Even"
    }else{
        return "Odd"
    }
}

let results = oddEven(8);
console.log(results);

function doMath(num1, num2){
    const sum = num1 + num2 ;
    const diff = num1 - num2;
    const multiply = sum * diff;
    const result = multiply / 2; 

    return result;
}

const result = doMath(10, 5);
console.log(result);
const multiply = doMath(10, 1);
console.log(multiply);