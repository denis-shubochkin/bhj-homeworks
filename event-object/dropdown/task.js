function listOpen() {
    if (listClick[0].querySelector('ul').className === 'dropdown__list dropdown__list_active') 
    {
        listClick[0].querySelector('ul').className = 'dropdown__list';
    }
    else
    {
        listClick[0].querySelector('ul').className = 'dropdown__list dropdown__list_active';

    }
}

function itemAccept() {
    let link = curElement.querySelector('a');
    link.onclick = function(event) {
        event.preventDefault();
    }
    listClick[0].querySelector('ul').className = 'dropdown__list';
    dropDown[0].textContent = link.textContent;
}

const listClick = document.getElementsByClassName('dropdown');
let elementClick = document.getElementsByClassName("dropdown__list");
let dropDown = document.getElementsByClassName('dropdown__value');
listClick[0].addEventListener('click',listOpen);

elementClick[0].onclick = function(event) {
    event.preventDefault();
    dropDown[0].textContent = event.target.innerText;
}




