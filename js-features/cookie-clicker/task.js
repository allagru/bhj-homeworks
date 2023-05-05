const cookie = document.querySelector('#cookie');
const clickerCounter = document.querySelector('#clicker__counter');
const clickerSpeed = document.querySelector('#clicker__speed');
let value = 0;

cookie.onclick = function () {
    value++;
    clickerCounter.textContent = value;
    if (value % 2 == 0) {
        cookie.width = 250;
    } else {
        cookie.width = 180;
    }
}
