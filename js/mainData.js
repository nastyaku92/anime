const mainData = () => {
    //fetch('./db.json')
    fetch('https://testanime-f419e-default-rtdb.firebaseio.com/anime.json')
        .then((response) => {
            //console.log(response);
            return response.json()
        })
        .then((data)=> {
            //console.log(data.anime);
            console.log(data);

        })
}
mainData()