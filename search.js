function searchKeyword(url){
    fetch(`${url}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        data.forEach(element => {
            console.log(`Data keyword: ${element.name}`)
        });
        const filtered = data
        .filter((element) => element.name === keyword)
        console.log(filtered)
      })
      .catch((error) => {
        console.log('Error: ')
      });
    }

    export default searchKeyword