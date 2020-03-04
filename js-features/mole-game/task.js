     
let deadCounter = document.getElementById("dead");
let lostCounter = document.getElementById("lost"); 

const timer = setInterval( function() {
    for (let index = 1; index++; index <= 9 )
    {   
        const curEl = document.getElementById(`hole${index}`);
        function clickAction()  
        {
            if (curEl.className.includes( 'hole_has-mole')) 
            {
                deadCounter.textContent = Number(deadCounter.textContent) + 1;       
            }
            else 
            {
                lostCounter.textContent = Number(lostCounter.textContent) + 1;
            }
        }
       // if (index === 10 && curEl.onclick === null) {break;}
        curEl.onclick = clickAction
    }
},800);                