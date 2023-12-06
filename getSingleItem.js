function GetSingleItem (url, id){
    fetch(`${url}/${id}`)
    .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data)
      })
      .catch((error) => {
        console.log('Error: ')
      });
}

export default GetSingleItem