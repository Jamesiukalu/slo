export function validatePassword(password, confirmPassword) {
  // Regular expression to match password format
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  // Check if password matches the format
//   if (!passwordRegex.test(password)) {
//     return false; // Password format is invalid
//   }

  // Check if password and confirm password fields match
  if (password !== confirmPassword) {
    return false; // Passwords do not match
  }

  return true; // Password is valid and matches confirm password
}