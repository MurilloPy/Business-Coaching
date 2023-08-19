document.addEventListener('DOMContentLoaded', function() {
    const uppercaseCheckbox = document.getElementById('uppercaseCheckbox');
    const lowercaseCheckbox = document.getElementById('lowercaseCheckbox');
    const specialCharsCheckbox = document.getElementById('specialCharsCheckbox');
    const numbersCheckbox = document.getElementById('numbersCheckbox');
    const generateButton = document.getElementById('generateButton');
    const generatedPassword = document.getElementById('generatedPassword');
    const lengthOptions = document.getElementsByName('length');
  
    generateButton.addEventListener('click', function() {
      const selectedLength = Array.from(lengthOptions).find(option => option.checked).value;
      const characters = generateCharacterSet(uppercaseCheckbox.checked, lowercaseCheckbox.checked, specialCharsCheckbox.checked, numbersCheckbox.checked);
      const password = generatePassword(characters, selectedLength);
      generatedPassword.textContent = password;
    });
  });
  
  function generateCharacterSet(uppercase, lowercase, specialChars, numbers) {
    let characters = '';
    if (uppercase) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (lowercase) characters += 'abcdefghijklmnopqrstuvwxyz';
    if (specialChars) characters += '!@#$%^&*()';
    if (numbers) characters += '0123456789';
    return characters;
  }
  
  function generatePassword(characters, length) {
    let password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters.charAt(randomIndex);
    }
    return password;
  }
  