var items = [
    'apple',
    'nvidia',
    'google',
    'tesla',
    'amazun'
]

var $ = document
var searchBox = $.querySelector('.searchBox')
var liCountainer = $.querySelector('.liCountainer1')
searchBox.addEventListener('keyup', (e) => {
    var res = e.target.value.trim().toLowerCase()
    var word = []
    liCountainer.innerHTML = ''
    items.forEach(value => {
        if (value.startsWith(res)) {
            word.push(value)
        }

    })
    if (searchBox.value === '') {
        liCountainer.innerHTML = ''
    } else {
        elem(word)
    }
})

function elem(item) {
    item.forEach((elem, index) => {

        liCountainer.insertAdjacentHTML('afterbegin', `<li class='li'>${elem}</li>`)
        liCountainer.style.cssText = 'display: flex;'
        liCountainer.children.item(index).addEventListener('click', () => {
            searchBox.value = elem
            liCountainer.innerHTML = ''
        })
    })

}
// liCountainer.children.addEventListener('click', () => {
//     searchBox.value = liCountainer.children.textContent
// })

document.addEventListener('DOMContentLoaded', () => {
    searchBox.value = ''
})

