const regForm = document.forms.regForm;

const firstnameField = regForm.firstname;
const lastnameField = regForm.lastname;
const emailField = regForm.email;
const passwordField = regForm.password;

const modal = document.getElementById('modal');

const containsOnlyRussianLetters = (string) => {
  return /^[а-я]+$/i.test(string)
}

const isEmailValid = (email) => {
  return /^[a-z][a-z._0-9]+@[a-z]+\.[a-z]{2,3}$/i.test(email)
}

const containsADigit = (string) => {
  return /[0-9]/.test(string)
}

const containsUpperCaseLetter = (string) => {
  return /[A-Z]/.test(string)
}

const containsLowerCaseLetter = (string) => {
  return /[a-z]/.test(string)
}

const containsPunctiationMark = (string) => {
  return /[.,?\/#!$%\^&\*;:{}=\-_`~()]/.test(string)
}

const isFormValid = () => {
  const errorFields = document.querySelectorAll('.error');

  return [...errorFields].every((errorField) => {
    return window.getComputedStyle(errorField).display === 'none';
  })
}

const toggleErrorMessage = ({ condition, errorMessages, errorType }) => {
  if (condition) {
    errorMessages.namedItem(errorType).style.display = 'none';
  } else {
    errorMessages.namedItem(errorType).style.display = 'block';
  }
}

regForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // firstname validation
  const firstnameErrorMessages = firstnameField.parentElement.children;
  const firstnameFieldValue = firstnameField.value;

  toggleErrorMessage({
    condition: firstnameFieldValue.length >= 3,
    errorMessages: firstnameErrorMessages,
    errorType: 'length',
  })

  toggleErrorMessage({
    condition: containsOnlyRussianLetters(firstnameFieldValue),
    errorMessages: firstnameErrorMessages,
    errorType: 'alphabet',
  })

  // lastname validation
  const lastnameErrorMessages = lastnameField.parentElement.children;
  const lastnameFieldValue = lastnameField.value;

  toggleErrorMessage({
    condition: lastnameFieldValue.length >= 3,
    errorMessages: lastnameErrorMessages,
    errorType: 'length',
  })

  toggleErrorMessage({
    condition: containsOnlyRussianLetters(lastnameFieldValue),
    errorMessages: lastnameErrorMessages,
    errorType: 'alphabet',
  })

  // email validation
  const emailErrorMessages = emailField.parentElement.children;
  const emailFieldValue = emailField.value;

  toggleErrorMessage({
    condition: isEmailValid(emailFieldValue),
    errorMessages: emailErrorMessages,
    errorType: 'emailError',
  })

  // password validation
  const passwordErrorMessages = passwordField.parentElement.children;
  const passwordFieldValue = passwordField.value;

  toggleErrorMessage({
    condition: passwordFieldValue.length >= 8,
    errorMessages: passwordErrorMessages,
    errorType: 'length',
  })

  toggleErrorMessage({
    condition: containsADigit(passwordFieldValue),
    errorMessages: passwordErrorMessages,
    errorType: 'digit',
  })

  toggleErrorMessage({
    condition: containsUpperCaseLetter(passwordFieldValue),
    errorMessages: passwordErrorMessages,
    errorType: 'uppercase',
  })

  toggleErrorMessage({
    condition: containsLowerCaseLetter(passwordFieldValue),
    errorMessages: passwordErrorMessages,
    errorType: 'lowercase',
  })

  toggleErrorMessage({
    condition: containsPunctiationMark(passwordFieldValue),
    errorMessages: passwordErrorMessages,
    errorType: 'punctuation',
  })

  if (isFormValid()) {
    modal.style.display = 'block';
    regForm.style.display = 'none';
  }
})