const progress = document.getElementById('progress');
let form = document.getElementById('form');
form.addEventListener('submit',  (e) => {
    e.preventDefault();
    let xhr = new XMLHttpRequest();
    let formData = new FormData(form);
    let flag = 0;
    xhr.open('POST','https://netology-slow-rest.herokuapp.com/upload.php',true);
    xhr.upload.addEventListener('progress', function(e) {
        progress.value = (e.loaded/e.total).toFixed(1);
        if (progress.value === 1 && flag === 0)
        {
            flag = 1;
            alert('Файл загружен');
        }
    })
    xhr.send(formData);
})