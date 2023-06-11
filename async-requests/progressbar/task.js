const progress = document.getElementById('progress');
const form = document.getElementById('form');
const xhr = new XMLHttpRequest();
const url = 'https://students.netoservices.ru/nestjs-backend/upload';


xhr.open('POST', url);
xhr.send();

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    xhr.addEventListener('readystatechange', () => {

        xhr.upload.onprogress = (event) => {
            progress.value = event.loaded / event.total;
        };
    });

    xhr.open('POST', url);
    xhr.send(formData);
});