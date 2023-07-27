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
  
  // Example usage:
  const passwordLength = 6; // Change this to specify the desired password length
  const randomPassword = generateRandomPassword(passwordLength);
  console.log(randomPassword);