import { postClass } from "./firebase-api";

const FORM = document.querySelector('#create-class-form');
FORM.addEventListener('submit', (e) => {
    e.preventDefault();

    //retrieve all data from the inputs 
    const data = new FormData(FORM);
    const newClass = formDataToObject(data);
    postClass({ newClass });
    console.log(data.entries, "data in the form")
});

function formDataToObject(formData) {
    //create object to return
    const toReturn = {};
    //dynamically add keys and values to object
    for (const [key, value] of formData.entries()) {
        toReturn[key] = value;
    }
    console.log(toReturn, "toReturn");
    return toReturn;
}