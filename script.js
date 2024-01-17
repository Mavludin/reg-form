const regForm = document.forms.regForm;

const firstnameField = regForm.firstname;
const lastnameField = regForm.lastname;
const emailField = regForm.email;
const passwordField = regForm.password;

const containsOnlyRussianLetters = (string) => {
  return /^[а-я]+$/gi.test(string);
};

const isEmailValid = (string) => {
  return /^[a-z][a-z._0-9]+@[a-z]+\.[a-z]{2,3}$/.test(string);
};

const containsOnlyLatinLetters = (string) => {
  return /^[a-z]+$/gi.test(string);
};

const containsUppercaseLetter = (string) => {
  return /[A-Z]/.test(string);
};

const containsLowercaseLetter = (string) => {
  return /[a-z]/.test(string);
};

const containsPunctuationMarks = (string) => {
  return /[^A-Za-z0-9\s]/.test(string);
};

const toggleErrorMessage = (condition, errorMessages, errorType) => {
  if (condition) {
    errorMessages.namedItem(errorType).style.display = "none";
  } else {
    errorMessages.namedItem(errorType).style.display = "block";
  }
};

regForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // firstname validation
  const firstnameErrorMessages = firstnameField.parentElement.children;
  const firstnameFieldValue = firstnameField.value;

  toggleErrorMessage(
    firstnameFieldValue.length >= 3,
    firstnameErrorMessages,
    "length"
  );
  toggleErrorMessage(
    containsOnlyRussianLetters(firstnameFieldValue),
    firstnameErrorMessages,
    "alphabet"
  );

  // lastname validation
  const lastnameFieldErrorMessages = lastnameField.parentElement.children;
  const lastnameFieldValue = lastnameField.value;

  toggleErrorMessage(
    lastnameFieldValue.length >= 3,
    lastnameFieldErrorMessages,
    "length"
  );
  toggleErrorMessage(
    containsOnlyRussianLetters(lastnameFieldValue),
    lastnameFieldErrorMessages,
    "alphabet"
  );

  // email validation
  const emailFieldValue = emailField.value;
  const emailErrorMessage = emailField.nextElementSibling;

  if (isEmailValid(emailFieldValue)) {
    emailErrorMessage.style.display = "none";
  } else {
    emailErrorMessage.style.display = "block";
  }

  // password validation
  const passwordFieldErrorMessages = passwordField.parentElement.children;
  const passwordFieldValue = passwordField.value;

  toggleErrorMessage(
    passwordFieldValue.length >= 8,
    passwordFieldErrorMessages,
    "length"
  );
  toggleErrorMessage(
    containsOnlyLatinLetters(passwordFieldValue),
    passwordFieldErrorMessages,
    "alphabet"
  );
  toggleErrorMessage(
    containsUppercaseLetter(passwordFieldValue),
    passwordFieldErrorMessages,
    "uppercase"
  );
  toggleErrorMessage(
    containsLowercaseLetter(passwordFieldValue),
    passwordFieldErrorMessages,
    "lowercase"
  );
  toggleErrorMessage(
    containsPunctuationMarks(passwordFieldValue),
    passwordFieldErrorMessages,
    "alphanumeric"
  );
});
