function tabSelect(event) {
    for (let i =0; i< tab.length; i++) {
        tab[i].className = 'tab';
        tabContent[i].className = 'tab__content';
    }
    let currentTab = event.target;
    currentTab.className = 'tab tab_active';
    for (let j=0; j<tab.length; j++) {
        if(tab[j].className === 'tab tab_active')
        {
            tabContent[j].className = 'tab__content tab__content_active';
        }
    }
}
let tab = document.getElementsByClassName('tab');
let tabContent = document.getElementsByClassName('tab__content');
 for (let i =0; i< tab.length; i++) {
     tab[i].addEventListener('click',tabSelect);
 }
