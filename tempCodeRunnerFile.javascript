function generatePassword() {
  const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const specialChars = "!@#$%^&*()_+[]{}|;:,.<>?";

  // Ensure the password has at least one lowercase, uppercase, number, and special character
  const getRandomChar = (chars) =>
    chars[Math.floor(Math.random() * chars.length)];

  const password = [
    getRandomChar(lowerCaseChars),
    getRandomChar(upperCaseChars),
    getRandomChar(numbers),
    getRandomChar(specialChars),
  ];

  const allChars =
    lowerCaseChars + upperCaseChars + numbers + specialChars;
  for (let i = password.length; i < 8; i++) {
    password.push(getRandomChar(allChars));
  }

  return password.sort(() => Math.random() - 0.5).join("");
}

console.log(generatePassword());