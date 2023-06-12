const text = document.getElementById('editor');

text.value = localStorage.getItem('text');
text.oninput = () => {
    localStorage.setItem('text', text.value)
};
