const regForm = document.forms.regForm;

const firstnameField = regForm.firstname;
const lastnameField = regForm.lastname;
const emailField = regForm.email;
const passwordField = regForm.password;

const containsOnlyRussianLetters = (string) => {
    return /^[а-я]+$/gi.test(string)
}

const isEmailValid = (string) => {
    return /^[a-z][a-z._0-9]+@[a-z]+\.[a-z]{2,3}$/.test(string)
}

const containsOnlyLatinLetters = (string) => {
    return /^[a-z]+$/gi.test(string)
}

const containsUppercaseLetter = (string) => {
    return /[A-Z]/.test(string)
}

const containsLowercaseLetter = (string) => {
    return /[a-z]/.test(string)
}

const containsPunctuationMarks = (string) => {
    return /[^A-Za-z0-9\s]/.test(string)
}

const toggleErrorField = (condition, errorFields, fieldName) => {
    if (condition) {
        errorFields.namedItem(fieldName).style.display = 'none';
    } else {
        errorFields.namedItem(fieldName).style.display = 'block';
    }
}

regForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // firstname validation
    const firstnameErrorFields = firstnameField.parentElement.children;
    const firstnameFieldValue = firstnameField.value;

    toggleErrorField(firstnameFieldValue.length >= 3, firstnameErrorFields, 'length')
    toggleErrorField(containsOnlyRussianLetters(firstnameFieldValue), firstnameErrorFields, 'alphabet')

    // lastname validation
    const lastnameFieldErrorFields = lastnameField.parentElement.children;
    const lastnameFieldValue = lastnameField.value;

    toggleErrorField(lastnameFieldValue.length >= 3, lastnameFieldErrorFields, 'length')
    toggleErrorField(containsOnlyRussianLetters(lastnameFieldValue), lastnameFieldErrorFields, 'length')

    // email validation
    const emailFieldValue = emailField.value;
    const emailErrorField = emailField.nextElementSibling;

    if (isEmailValid(emailFieldValue)) {
        emailErrorField.style.display = 'none';
    } else {
        emailErrorField.style.display = 'block';
    }

    // password validation
    const passwordFieldErrorFields = passwordField.parentElement.children;
    const passwordFieldValue = passwordField.value;

    toggleErrorField(passwordFieldValue.length >= 8, passwordFieldErrorFields, 'length')
    toggleErrorField(containsOnlyLatinLetters(passwordFieldValue), passwordFieldErrorFields, 'alphabet')
    toggleErrorField(containsUppercaseLetter(passwordFieldValue), passwordFieldErrorFields, 'uppercase')
    toggleErrorField(containsLowercaseLetter(passwordFieldValue), passwordFieldErrorFields, 'lowercase')
    toggleErrorField(containsPunctuationMarks(passwordFieldValue), passwordFieldErrorFields, 'alphanumeric')

})