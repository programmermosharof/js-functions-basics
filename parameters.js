function even(str){
    const size = str.length;
    console.log(str, size);
    if(str % 2 === 0){
        console.log("Even");
    }else{
        console.log("Odd");
    }


}
even('Dhaka');
even('faka')

function doc(num, numbers){
if (numbers === true){
    const result = numbers * 2 ;
    return result;
}else{
    const result = numbers * 3;
    return result;
}


}
console.log(doc(5, true));
console.log(doc ( 5, false));

function num (nums){
    const len = nums.length;
    return len;
}

console.log(num([12, 2, 45, 55, 77, 89, 7, 0]));
