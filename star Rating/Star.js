var $ = document
var imgs = $.querySelectorAll('.img')


function change(index) {
    index++
    h1.textContent = index

    for (i = 0; i <= imgs.length; i++) {
        if (i >= index) {
            imgs[i].setAttribute('src', 'img/A_star.png')
        } else {
            imgs[i].setAttribute('src', 'img/star.png')
        }
    }
}


imgs.forEach((img, index) => {
    img.addEventListener('click', () => {   
        localStorage.setItem('index1', index)   
        change(index)
    })
})


var h1 = $.createElement('h1')
document.body.append(h1)


window.addEventListener('DOMContentLoaded', () => {
    change(localStorage.getItem('index1'))
})