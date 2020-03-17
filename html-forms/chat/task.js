function chatOpenF() {
    chatOpen.classList.add('chat-widget_active');
}

function sendMessage(event) 
{
    
        if(event.keyCode === 13) 
        {
            if (chatInput.value != '') 
                {      
                    messages.innerHTML += `
                    <div class="message message_client">
                        <div class="message__time">${Hour}:${Minutes}</div>
                        <div class="message__text">
                            ${chatInput.value}
                        </div>
                    </div> `;
                    chatInput.value = '';
                }
                messages.innerHTML += `
                <div class="message">
                    <div class="message__time">${Hour}:${Minutes}</div>
                    <div class="message__text">
                    Добрый день!
                    </div>
                </div> `;
        }
}


let chatOpen = document.querySelector('.chat-widget');
let chatInput = document.getElementById('chat-widget__input');
const messages = document.querySelector( '.chat-widget__messages' );
let Data = new Date();
let Hour = Data.getHours();
let Minutes = Data.getMinutes();
if(Minutes<=9)
    {
        Minutes = '0'+Minutes;
    }
chatOpen.addEventListener('click',chatOpenF);
chatInput.addEventListener('keydown',sendMessage);

