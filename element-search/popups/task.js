const m = document.getElementById("modal_main");
const mS = document.getElementById("modal_success");

m.className += ' modal_active';

let active = document.getElementsByClassName('modal_active');

function closeF (active) {
    let close = active[0].getElementsByClassName("modal__close");
    close[0].onclick = function () {
        active[0].className = "modal";
    }
}

closeF(active);

const success = active[0].getElementsByClassName("show-success");
success[0].onclick = function () {
    m.className = "modal";
    mS.className += ' modal_active';
    active = document.getElementsByClassName('modal_active');
    closeF(active); 
}