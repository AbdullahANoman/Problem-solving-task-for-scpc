// Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.

const testString = (str) => {
  let format = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
  let newStr = " ";
  if (/\d/.test(str)) {
    console.log("Please enter valid string");
  } else if (format.test(str)) {
    console.log("Please enter a valid string");
  } else {
    for (let i = str.length-1; i >= 0; i--) {
      // console.log(str[i]);
      newStr = newStr + str[i];
    }
  }

  console.log(newStr);
};
testString("hello world");
