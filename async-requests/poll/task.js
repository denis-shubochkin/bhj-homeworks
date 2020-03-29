let title = document.getElementById('poll__title');
let answers = document.getElementById('poll__answers');
//let buttons = document.getElementsByClassName('poll__answer');
function insertTitle (respTitle)
{
    title.textContent = respTitle;
}

function insertAnswers (answer)
{
    answers.insertAdjacentHTML("beforeend",`<button class="poll__answer">
    ${answer}
  </button>`);
}

function wind (event) 
{
    alert(`Ваш ответ ${event.target.textContent} учтен!`);
    window.location.reload();
}
let result;
let xhr = new XMLHttpRequest();
xhr.open('GET','https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();
xhr.onreadystatechange = function ()
    {
        if (xhr.readyState===4)
        {
           result = xhr.responseText;
            json = JSON.parse(result);
            insertTitle(json.data.title);
            for (let i=0;i<json.data.answers.length;i++)
            {
                insertAnswers(json.data.answers[i]);
            }
            let buttons = document.getElementsByClassName('poll__answer');         
            for (let i=0;i<buttons.length;i++)
            {
                buttons[i].addEventListener('click', wind);
            }      
        }
    }
