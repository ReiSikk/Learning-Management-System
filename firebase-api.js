const BASE_URL = "";

export async function postClass (newClass) {
    const response = await fetch(BASE_URL + "classes.json", {
        method: "POST",
        body: JSON.stringify(newClass),
        headers: {
            "Content-Type": "application/json",
        },
    });
};

export async function getAllClasses() {
    const response = await fetch(BASE_URL + "classes.json");
    const body = await response.json();
    toArray(body);
    return body;
}

export async function getOneClass(id) {
    const response = await fetch(BASE_URL + "classes/" + id + ".json");
    const body = await response.json();
    return body;
};


export async function deleteClass(id) {
    const endpoint = BASE_URL + "classes/" + id + ".json";
    const response = await fetch(endpoint, {
        method: "DELETE",
    });
    return response;
}

function toArray(firebaseBody) {
    const keys = Object.keys(firebaseBody);
    const transformed = keys.map((key) => {
        const obj = firebaseBody[key]
        obj.id = key;  
        return obj;
    })
    console.log(transformed, "transformed");
}