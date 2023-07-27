// Write a JavaScript program to find the most frequent element in an array and return it.

const checkMostFrequentElements = (value) => {
    let mostFrequentElement = value[0];
    let mostFrequentCount = 0;

    for (let i = 0; i < value.length; i++) {
        if (value[i] === mostFrequentElement) {
            mostFrequentCount++;
        } else {
            if (mostFrequentCount > mostFrequentElement) {
                mostFrequentElement = mostFrequentCount;
                mostFrequentCount = 1;
            } else {
                mostFrequentCount = 1;
            }
        }
    }

    return mostFrequentElement;
};

const result = checkMostFrequentElements(  [3, 5, 2, 5, 3, 3, 1, 4, 5] );
console.log(result);
