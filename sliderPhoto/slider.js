var $ = document
var btnNext = $.querySelector('.nextbtn')
var btnPrev = $.querySelector('.prevbtn')
var img = $.querySelector('.img')

var items = ['canvas.gif.png', 'note.jpg', '2159510.webp']
var counter = 0


function nextItem() {
    counter++
    if (counter >= items.length) {
        counter = 0
    }
    console.log(counter);
    img.setAttribute('src', items[counter])
}

function prevItem() {

    if (counter <= 0) {
        counter = items.length
    }
    console.log(counter);
    counter--
    img.setAttribute('src', items[counter])
}
btnNext.addEventListener('click', nextItem)
btnPrev.addEventListener('click', prevItem)

setInterval(nextItem, 4000)