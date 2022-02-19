let mainImg = document.querySelector('.product-img img')
let img = document.querySelectorAll('.images-thumb img')


img.forEach( num  => {
    num.addEventListener('click' , (e) => {
        mainImg.src = e.target.src
        removeActive()
        num.classList.add('active')
    })
})

function removeActive() {
    img.forEach(img => {
        img.classList.remove('active')
    })
}


mainImg.addEventListener('mousemove' , e => {
    mainImg.style.transform = `translate(${e.offsetX/30}px , ${e.offsetY/30}px)`
    console.log(e.offsetX , e.offsetY)
})



