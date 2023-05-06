const modalMain = document.querySelector('#modal_main');
const successMessage = document.querySelector('.show-success');
const modalSuccess = document.querySelector('#modal_success');
const closeButtons = document.querySelectorAll('div.modal__close');

modalMain.classList.add('modal_active');

successMessage.onclick = () => {
    modalMain.classList.remove('modal_active');
    modalSuccess.classList.add('modal_active');
};

closeButtons.forEach(closeButton => {
    closeButton.onclick = () => {
        closeButton.closest('.modal_active').classList.remove('modal_active');
    }
})
