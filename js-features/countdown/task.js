setInterval(() => {
    let timer = +document.querySelector('#timer').textContent;
    if (timer > 0) {
        timer = timer - 1;
        document.querySelector('#timer').textContent = timer;
    } else {
        alert('Вы победили в конкурсе!');
        document.querySelector('#timer').textContent = 59;
    }

}, 1000);