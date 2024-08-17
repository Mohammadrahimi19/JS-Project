const value = [
    {
        id: 1,
        name: "Reza",
        job: "Designer",
        img: "./images2.jpg",
        info: "lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium aut veniam, temporafacere in ad natus minus illo? Cupiditate esse reprehenderit magnam architecto aut cumque expeditaab ad rem tempora."
    },
    {
        id: 2,
        name: 'Zahra',
        job: 'Developer',
        img: "./images.jpg",
        info: "lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium aut veniam, temporafacere in ad natus minus illo? Cupiditate esse reprehenderit magnam architecto aut cumque expeditaab ad rem tempora."
    },
    {
        id: 2,
        name: 'Omid',
        job: "Mobile Developer",
        img: "./portrait-white-man-isolated_53876-40306.avif",
        info: "lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium aut veniam, temporafacere in ad natus minus illo? Cupiditate esse reprehenderit magnam architecto aut cumque expeditaab ad rem tempora."
    },

];

const image = document.getElementById('image');
const aothor = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');
const prev_btn = document.querySelector('.prev-btn');
const next_btn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn')
var currentItem = 0;

async function showPrson(person) {
    const item = await value[person];
    image.src = item.img;
    aothor.textContent = item.name;
    job.textContent = item.job
    info.textContent = item.info;
}
window.addEventListener('DOMContentLoaded', async () => {
    await showPrson(currentItem);
})

prev_btn.addEventListener('click', async () => {
    currentItem -= 1
    if (currentItem < 0) {
        currentItem = value.length - 1;///اینجا -1 کردم چون عضو چهارم در اندیس سوم است
    }
    await showPrson(currentItem);
})
next_btn.addEventListener('click', async () => {
    currentItem++
    if (currentItem >= value.length) {
        currentItem = 0
    }
    await showPrson(currentItem);
})
randomBtn.addEventListener('click', async () => {
    currentItem = Math.floor(Math.random() * value.length);
    await showPrson(currentItem);
    currentItem = 0
})