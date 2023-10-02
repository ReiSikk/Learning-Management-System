import { postClass } from "./api/firebase-api.js";

const FORM = document.querySelector('#create-class-form');
FORM.addEventListener('submit', (e) => {
    e.preventDefault();

    //retrieve all data from the inputs 
    const data = new FormData(FORM);
    const newClass = formDataToObject(data);
    console.log(newClass, "newClass in the form")

    postClass({ newClass });
});

function formDataToObject(formData) {
    //create object to return
    const toReturn = {};
    //dynamically add keys and values to object
    for (const [key, value] of formData.entries()) {
        toReturn[key] = value;
    }
    
    return toReturn;
}