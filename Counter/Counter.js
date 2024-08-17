const Counter = document.getElementById('Counter');
const Decrase = document.getElementById('Decrase');
const incrase = document.getElementById('Incrase');
const reset = document.getElementById('Reset');
var value = 0
Decrase.addEventListener('click', () => {
    value -= 1;
    if (value < 0) {
        Counter.style.color = "red"
    }
    Counter.textContent = value;

})
incrase.addEventListener('click', () => {
    value += 1
    if (value > 0) {
        Counter.style.color = "green";
    }
    Counter.textContent = value;
})
reset.addEventListener('click', () => {
    value = 0;
    Counter.textContent = value;
    Counter.style.color = 'silver';

})