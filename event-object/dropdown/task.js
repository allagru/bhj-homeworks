const btnDropdown = document.querySelector('.dropdown');
const itemValue = document.querySelector('.dropdown__value');
const listMenu = document.querySelector('.dropdown__list');
const links = Array.from(document.querySelectorAll('.dropdown__link'));

btnDropdown.addEventListener('click', function () {
    listMenu.classList.toggle('dropdown__list_active');
});

for (const link of links) {
    link.onclick = () => {
        itemValue.textContent = link.textContent;
        return false;
    }
}