// function add(x,y) {

// }

// const add01 = function(x,y){

// }

// const add02 =  (x,y) => {

// }


let memes = []


axios.get('https://api.imgflip.com/get_memes')
.then((response) => {
    memes = response.data.data.memes.map(meme => {
        document.getElementById("mem").innerHTML += `<div>${meme.name}</div> <img src= ${meme.url} width=${meme.width} height=${meme.height} `
    })
    //[{},{},{}]
    // memes.forEach((meme) => {
    //     console.log(meme)
    // })
})
.catch(() => {
    console.log('error')
})

// axios.get("url")
// .then()
// .catch()




