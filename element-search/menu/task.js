const menuOpen = document.getElementsByClassName("menu__link");

for (let i=0;i < menuOpen.length; i++) {
menuOpen[i].onclick = function () {
    let active_parent = menuOpen[i].closest('li');
    if  (active_parent.querySelectorAll('ul').length>0) 
        {
            menuOpen[i].href = '#';
            let active_element = active_parent.getElementsByClassName('menu_sub');
            if (active_element[0].className === 'menu menu_sub menu_active') {active_element[0].className = 'menu menu_sub'}
            else {active_element[0].className += ' menu_active';}
        };
}
}
