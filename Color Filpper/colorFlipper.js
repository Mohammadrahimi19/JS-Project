const colorText = document.getElementById('ColorText');
const Container = document.getElementById('container');
const Btn = document.getElementById('btn');

const Color = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
function randomColor() {
    return Math.floor(Math.random() * Color.length)
}
Btn.addEventListener('click', () => {
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        hexColor += Color[randomColor()];
    }
    document.body.style.backgroundColor = hexColor;
    colorText.textContent = hexColor;
})
