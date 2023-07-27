// Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 

const printAnswers = (value) => {
    let sum = 0;
    for(let i = 0; i < value.length; i++){
        if(value[i]<0){
            value[i] = 0;
        }else if (value[i]>0) {
            sum+=value[i];
        }
    }
    return sum;
}


const result =  printAnswers([2,-5,10,-3,7]);
console.log(result);