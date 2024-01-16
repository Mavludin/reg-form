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

regForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // firstname validation
    const firstnameErrorFields = firstnameField.parentElement.children;
    const firstnameFieldValue = firstnameField.value;

    if (firstnameFieldValue.length >= 3) {
        firstnameErrorFields.namedItem('length').style.display = 'none';
    } else {
        firstnameErrorFields.namedItem('length').style.display = 'block';
    }

    if (containsOnlyRussianLetters(firstnameFieldValue)) {
        firstnameErrorFields.namedItem('alphabet').style.display = 'none';
    } else {
        firstnameErrorFields.namedItem('alphabet').style.display = 'block';
    }

    // lastname validation
    const lastnameFieldErrorFields = lastnameField.parentElement.children;
    const lastnameFieldValue = lastnameField.value;

    if (lastnameFieldValue.length >= 3) {
        lastnameFieldErrorFields.namedItem('length').style.display = 'none';
    } else {
        lastnameFieldErrorFields.namedItem('length').style.display = 'block';
    }

    if (containsOnlyRussianLetters(lastnameFieldValue)) {
        lastnameFieldErrorFields.namedItem('alphabet').style.display = 'none';
    } else {
        lastnameFieldErrorFields.namedItem('alphabet').style.display = 'block';
    }

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

    if (passwordFieldValue.length >= 8) {
        passwordFieldErrorFields.namedItem('length').style.display = 'none';
    } else {
        passwordFieldErrorFields.namedItem('length').style.display = 'block';
    }

    if (containsOnlyLatinLetters(passwordFieldValue)) {
        passwordFieldErrorFields.namedItem('alphabet').style.display = 'none';
    } else {
        passwordFieldErrorFields.namedItem('alphabet').style.display = 'block';
    }

    if (containsUppercaseLetter(passwordFieldValue)) {
        passwordFieldErrorFields.namedItem('uppercase').style.display = 'none';
    } else {
        passwordFieldErrorFields.namedItem('uppercase').style.display = 'block';
    }

    if (containsLowercaseLetter(passwordFieldValue)) {
        passwordFieldErrorFields.namedItem('lowercase').style.display = 'none';
    } else {
        passwordFieldErrorFields.namedItem('lowercase').style.display = 'block';
    }

    if (containsPunctuationMarks(passwordFieldValue)) {
        passwordFieldErrorFields.namedItem('alphanumeric').style.display = 'none';
    } else {
        passwordFieldErrorFields.namedItem('alphanumeric').style.display = 'block';
    }

})