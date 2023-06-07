const interestCheck = [...document.querySelectorAll('.interest__check')];

interestCheck.forEach((check) => check.addEventListener('change', (event) => {
    let parentElement = event.target.closest('.interest');
    let childrenElement = [...parentElement.querySelectorAll('.interest__check')];

    if (!childrenElement[0].checked) {
        childrenElement.forEach(child => child.checked = false);
        return;
    } else {
        childrenElement.forEach(child => child.checked = true)
    }
}));