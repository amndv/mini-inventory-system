function addItems(url, addName, addQty, addPrice){
const items = {
    method: "POST",
    headers: {
    "Content-Type": "application/json",
     },
     body: JSON.stringify({
          name: addName,
          quantity: addQty,
          price: addPrice,
          createdAt: new Date(),
          updatedAt: new Date()
     }),
};


fetch(url, items)
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


export default addItems