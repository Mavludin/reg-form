const regForm = document.forms.regForm;

const firstnameField = regForm.firstname;
const lastnameField = regForm.lastname;
const emailField = regForm.email;

const containsOnlyRussianLetters = (string) => {
    return /^[а-я]+$/gi.test(string);
}

const isEmailValid = (string) => {
    return /^[a-z][a-z._0-9]+@[a-z]+\.[a-z]{2,3}$/.test(string);
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
    const lastnameFieldFieldValue = lastnameField.value;

    if (lastnameFieldFieldValue.length >= 3) {
        lastnameFieldErrorFields.namedItem('length').style.display = 'none';
    } else {
        lastnameFieldErrorFields.namedItem('length').style.display = 'block';
    }

    if (containsOnlyRussianLetters(lastnameFieldFieldValue)) {
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

})