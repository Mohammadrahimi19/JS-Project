const questionText = document.querySelectorAll('.questionText');
const plus = document.querySelectorAll('.plus');
const minus = document.querySelectorAll('.minus');

questionText.forEach((item, index) => {
    plus[index].addEventListener('click', () => {
        show(index);
    })
    minus[index].addEventListener('click', () => {
        hide(index)
    })
})




function show(index) {
    questionText[index].classList.remove('d-none')
    questionText[index].classList.add('show-text')
    minus[index].classList.remove('d-none')
    minus[index].classList.add('d-block')
    plus[index].classList.remove('d-block')
    plus[index].classList.add('d-none')
}
function hide(index) {
    questionText[index].classList.remove('show-text')
    questionText[index].classList.add('d-none')
    minus[index].classList.add('d-none')
    minus[index].classList.remove('d-block')
    plus[index].classList.remove('d-none')
    plus[index].classList.add('d-block')
}