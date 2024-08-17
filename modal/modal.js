const openbtn = document.querySelector('.open')
const closebtn = document.querySelector('.btn-close');
const modal = document.querySelector('.modal-hidden');
openbtn.addEventListener('click', () => {
    modal.classList.remove('modal-hidden');
    modal.classList.add('modal-content1');
})
closebtn.addEventListener('click', () => {
    modal.classList.remove('modal-content1');
    modal.classList.add('modal-hidden');
})