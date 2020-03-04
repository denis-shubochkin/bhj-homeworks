const timer = setInterval(function(){
    const output = document.getElementById("timer");
    if (output.textContent === '1') 
        {
            alert('Вы победили в конкурсе!');
            clearInterval(timer);
        }
    else 
        {    
             output.textContent -= 1;
        }
        return output.textContent;
}, 1000);


