let counter = document.getElementById("clicker__counter");
const image = document.getElementById("cookie");

function clickAction() {
    counter.textContent = Number(counter.textContent) + 1;
    if (Number(counter.textContent) % 2 === 0) {image.width -= 100}
    else {image.width += 100}
}

image.onclick = clickAction;