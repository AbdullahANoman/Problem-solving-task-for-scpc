
//Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

function generateRandomPassword(length) {
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const specialCharacters = '!@#$%^&*()-_=+[]{}|;:,.<>?';
  
    const allChars = uppercaseLetters + lowercaseLetters + numbers + specialCharacters;
    const allCharsLength = allChars.length;
  
    let password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allCharsLength);
      password += allChars[randomIndex];
    }
  
    return password;
  }
  

  const passwordLength = 6; 
  const randomPassword = generateRandomPassword(passwordLength);
  console.log(randomPassword);