import { createLogin } from '../../api/auth-proxy.js';


const loginForm = document.querySelector('#create-login-form');

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(loginForm);
    try {
        const response = await createLogin(
            data.get('email'),
            data.get('password'),
            data.get('confirm-password')
        );
        console.log(response, "response");
        const body = await response.json();
        console.log(body, "body");

        localStorage.setItem("userObject", JSON.stringify(response));
        //redirect to index page
    } catch (error) {
        console.error(error, "error happened");
    }
});

function formDataToObject(formData) {
    const toReturn = {};
    for (const [key, value] of formData.entries()) {
        toReturn[key] = value;
    }
    return toReturn;
}