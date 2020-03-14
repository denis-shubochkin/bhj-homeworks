function setSize(event) {
    event.preventDefault();
    for (let i=0; i < fS.length; i++) 
    {
        fS[i].classList.remove('font-size_active');
    }
    event.target.classList.add('font-size_active');
    if (event.target.classList.contains('font-size_small'))
    {
        book.classList.add('book_fs-small');
    }
    else if (event.target.classList.contains('font-size_big'))
    {
        book.classList.add('book_fs-big');
    }
    else 
    {
        book.className = 'book';
    }
}

let fS = document.getElementsByClassName('font-size');
let book = document.getElementById('book');
for (let i=0; i < fS.length; i++) 
{
    fS[i].addEventListener('click', setSize);
}