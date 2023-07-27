// Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

const checkResult = (arr, targetValue) => {
  let sum  = 0;
  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];
    for(let j=1; j< arr.length; j++){
        sum = value + arr[j];
        if(sum == targetValue){
            return [i,j]
        }
    }
    
  }

};

const result = checkResult([1, 3, 6, 8, 11, 15], 9);
console.log(result);