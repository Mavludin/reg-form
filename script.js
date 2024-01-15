const regForm = document.forms.regForm;

const firstnameField = regForm.firstname;

const containsOnlyRussianLetters = (string) => {
    return /^[а-я]+$/gi.test(string);
}

regForm.addEventListener('submit', (e) => {
    e.preventDefault();

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

})