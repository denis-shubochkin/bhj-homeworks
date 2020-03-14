     
let deadCounter = document.getElementById("dead");
let lostCounter = document.getElementById("lost"); 


    for (let index = 1; index <= 9; index++)
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
                