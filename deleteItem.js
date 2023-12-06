const items = {
    method: "DELETE",
    headers: {
    "Content-Type": "application/json",
     },
     body: JSON.stringify({
     id: 12,
     name: "item12",
     quantity: 12,
     price: 11000,
     createdAt: "11/3/2021",
     updateAt: "09/01/2023",
     }),
};


function deleteItems(url,id){
fetch(`${url}/${id}`, items)
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


export default deleteItems