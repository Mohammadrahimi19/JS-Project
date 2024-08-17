var $ = document
var baner = $.querySelector('.baner')
document.addEventListener('keyup', (event) => {
    addValue(event)
    let userkey = event.key.toUpperCase()
    let mainkey = document.querySelector(`.${userkey}`)
    mainkey.classList.add('action')
    // setTimeout(() => {
    //     mainkey.classList.remove('action')       یک راهش اینه
    // }, 1000);
    document.addEventListener('animationend', function () {//یک راهشم اینه و بهینه است  (وقتی کخ انیمشن تموم شد)
        mainkey.classList.remove('action')
    })

})

function addValue(event) {
    if (event.key === 'Enter') {
        baner.innerHTML += '</br>'
        return
    }
    if (event.code === 'Backspace') {
        baner.innerHTML = baner.innerHTML.slice(0, -1)
        return
    }
    if (event.key === 'CapsLock' || event.key == 'Escape') {
        return console.log(event.key);

    }

    baner.innerHTML += event.key

}
