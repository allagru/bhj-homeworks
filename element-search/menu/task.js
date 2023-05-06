const menuLinks = document.querySelectorAll('.menu__link');

menuLinks.forEach((menuLink) => {
    const menuMain = menuLink.closest('.menu_main');
    const menuSub = menuMain.querySelectorAll('.menu_sub');
    const parentLinkElem = menuLink.parentElement;
    const menuElem = parentLinkElem.querySelector('.menu_sub');

    menuLink.onclick = function () {
        if (!menuElem.classList.contains('menu_active')) {
            menuSub.forEach((menu) => {
                menu.classList.remove('menu_active');
            });
            menuElem.classList.add('menu_active');
        } else {
            menuElem.classList.remove('menu_active');
        }

        if (menuLink.closest('.menu_main')) {
            return false;
        }
    };
}); 