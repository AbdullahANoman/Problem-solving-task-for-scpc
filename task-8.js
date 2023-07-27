// implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.
const checkSecondSmallestNumber = (numbers) => {
  let biggestNumber = numbers[0];

  const len = numbers.length;
  for (let i = 1; i<len; i++) {
    if(numbers[i]>biggestNumber){
      biggestNumber = numbers[i];
    }else{
      biggestNumber = biggestNumber;
    }
  }

  let index = numbers.indexOf(biggestNumber);
  numbers.splice(index,1);
  let secondBiggestNumber = numbers[0];
  for(let j=1; j< len; j++) {
    if(numbers[j]>secondBiggestNumber){
      secondBiggestNumber = numbers[j];
    }
    else{
      secondBiggestNumber = secondBiggestNumber;
    }
  }
  return secondBiggestNumber;
};
const result = checkSecondSmallestNumber([10, 20, 100, 40, 50, 60,70]);
console.log(result);
 