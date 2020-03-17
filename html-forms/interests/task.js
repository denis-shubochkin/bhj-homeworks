function checks (event) 
{
    if (!event.target.closest('ul').classList.contains('interests_active'))
        {
            let inputs = event.target.closest('.interest').querySelector('.interests_active').getElementsByClassName('interest__check');
            for (let i=0; i<inputs.length;i++) 
            {
                if(event.target.checked === true)
                {inputs[i].checked = true;}
                if(event.target.checked === false)
                {inputs[i].checked = false;}
            }
        }
}


let checkBox = document.getElementsByClassName('interest__check');

for (let i = 0; i< checkBox.length; i++) 
{
    checkBox[i].addEventListener('change', checks);
}

