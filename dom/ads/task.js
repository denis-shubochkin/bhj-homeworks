function change() {
    for (let i=0; i<rotators.length; i++)
        {   
            if (rotators[i].lastElementChild.classList.contains('rotator__case_active')) 
            {   
                rotators[i].lastElementChild.classList.remove('rotator__case_active');
                rotators[i].firstElementChild.classList.add('rotator__case_active');
            }
            else 
            {
                rtActive = rotators[i].querySelector('.rotator__case_active');
                rtActive.classList.remove('rotator__case_active');
                rtActive.nextElementSibling.classList.add('rotator__case_active');
            }
        }
}
let rotators = document.getElementsByClassName('rotator');
let rotatorCases = document.getElementsByClassName('rotator__case');
let rtActive;
setInterval(change,1000);

