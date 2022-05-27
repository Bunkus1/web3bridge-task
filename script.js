function validateFormValue() {
    let inputName = document.querySelector('input[type=text]').value;
    let option = document.querySelector('select#tiers').value;
    let user = [];
    let userDetails = {name:inputName, option};
    user.push(userDetails);
    localStorage.setItem(inputName,JSON.stringify(user));
}