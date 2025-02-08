// 2) date of birth validation
// Conditions: It should accept only today date and before days date but
// not tomorrow date when we enter tomorrow date it should display the invalid date

// date of birth validation
function validateBirthDate(inputDate) {
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);
  const userDate = new Date(inputDate);

  if (isNaN(userDate)) {
    console.log(false); // Invalid date format
    return;
  }

  if (userDate > currentDate) {
    console.log(false); // Invalid date because it's in the future
  } else {
    console.log(true); // Valid date
  }
}

// Test cases
validateBirthDate("12-12-2025"); // false (future date)
validateBirthDate("12-12-2002"); // true (valid date)
