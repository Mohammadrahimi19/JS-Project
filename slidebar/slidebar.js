const left = document.querySelector('.left')
const close = document.getElementById('btn-close')
const open = document.getElementById('open')

open.addEventListener("click", function () {
    if (left.classList.contains("show-left")) {
        left.classList.remove("show-left");
    } else {
        left.classList.add("show-left");
    }
});

close.addEventListener("click", function () {
    left.classList.remove("show-left");
});
