import { getAllClasses, deleteClass } from "./firebase-api";


window.addEventListener("load", async () => {
    const allClasses = await getAllClasses();
    console.log(allClasses, "allClasses");

    const allClassesElements = allClasses.map((oneClass) =>{
        return createClassElement(oneClass);
    });
    document.querySelector(".container").append(...allClassesElements)
})

function createClassElement(oneClass) {
    const p = document.createElement("p");
    p.innerHTML = oneClass.name;
    p.id = oneClass.id;
    const button = document.createElement("button");
    button.textContent = "delete";


    button.addEventListener("click", async () => {
        const response = await deleteClass(oneClass.id);
        if(response.ok) {
            div.remove();
        }
    })

    const updateButton = document.createElement("a");
    updateButton.textContent = "update";
    updateButton.href ="update/?id=" + oneClass.id

    const div = document.createElement("div");
    div.append(p, button, updateButton);

    return div;
}