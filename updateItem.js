function updateItem (url, idToUpdate, newName, newQty, newPrice ){
const items = {
    method: "PUT",
    headers: {
    "Content-Type": "application/json",
     },
     body: JSON.stringify({
     id: idToUpdate,
     name: newName,
     quantity: newQty,
     price: newPrice,
     createdAt: new Date(),
     updateAt: new Date(),
     }),
};


fetch(`${url}/${idToUpdate}`, items)
     .then((response) => {
    if (!response.ok) {
    throw new Error(
    `There's an error with status code: (${response.status})`
     );
     }
    return response.json();
     })
     .then((data) => {
    console.log(data);
     })
     .catch((error) => {
    console.error(error);
     });
}


export default updateItem