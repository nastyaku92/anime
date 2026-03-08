const bgElements = () => {
    const elements = document.querySelectorAll('.set-bg');

    elements.forEach((elem) => {
        elem.style.backgroundImage = `url(${elem.dataset.setbg})`
    })

    // const array = [5,2,3,4,1]
    // // const newArray = array.filter((item) => {
    // //         return item <= 3
    // // })    
    // const newArray = array.sort()
    //console.log(newArray);

/*     const array = [
        {
            id: 0,
            value: 100
        }, {
            id: 2,
            value: 300
        }, {
            id: 1,
            value: 200
        }
    ]
    const newArray = array.sort((a, b) => a.value - b.value)
    console.log(newArray); */


    /*     for (let i = 0; i < elements.length; i++) {
            const src = elements[i].dataset.setbg
            elements[i].style.backgroundImage = `url(${src})`
        } */
}
bgElements()