const loginForm = document.querySelector('#login-form');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(loginForm);
    const loginInfo = formDataToObject(data);
    console.log(loginInfo, "loginInfo");
});

function formDataToObject(formData) {
    const toReturn = {};
    for (const [key, value] of formData.entries()) {
        toReturn[key] = value;
    }
    return toReturn;
}