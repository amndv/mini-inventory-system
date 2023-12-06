function getItemsAll(url){
fetch(`${url}`)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    
    console.log(data)
  })
  .catch((error) => {
    console.log('Error: ')
    // console.error(err)
  });
}


export default getItemsAll