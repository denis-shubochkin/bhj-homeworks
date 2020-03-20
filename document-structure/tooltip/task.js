
let links = document.getElementsByClassName('has-tooltip');
let tooltips = document.getElementsByClassName('tooltip');
let html;
let flagShowTool=[];
function clearTools() {
for (let i =0;i<links.length;i++)
{   
    flagShowTool[i] = 0;
}
}
clearTools();


for (let i =0;i<links.length;i++)
{   
    links[i].addEventListener('click',(event) => {
        event.preventDefault();
        if(flagShowTool[i]===0) 
        {       
        html = `   <div class="tooltip" id="${i}" style="left: ${event.target.getBoundingClientRect().left}px; top: ${event.target.getBoundingClientRect().top+20}px; display: block;">
                     ${event.target.title}
                    </div> `
        event.target.insertAdjacentHTML('afterEnd' ,html);
        flagShowTool[i] = 1;
        }
        else 
        {
            toDel = document.getElementById(i);
            toDel.remove();
            flagShowTool[i] = 0;
        }
    });
}

    document.addEventListener('scroll', () => {
        for (let i=0;i<tooltips.length;i++) 
        {
            if(tooltips.length>0)
            {
                tooltips[i].remove();
                clearTools();
            }
        }   
    });




