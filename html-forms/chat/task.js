const openChat = document.querySelector('.chat-widget');
const messages = document.querySelector('.chat-widget__messages');
const chatWidgetInput = document.getElementById('chat-widget__input');

openChat.addEventListener('click', () => {
    openChat.classList.add('chat-widget_active');
});

const botAnswers = [
    'Напишите в следующей жизни.',
    'Мы ничего не будем вам продавать!',
    'Кто тут?',
    'Где Ваша совесть?',
    'Добрый день! До свидания!',
    'Вы не купили ни одного товара для того, чтобы так с нами разговаривать!',
    'К сожалению, все операторы сейчас заняты, не звоните нам больше!',
];

document.addEventListener('keydown', event => {
    if (event.key === 'Enter' && chatWidgetInput.value.trim() !== '') {
        messages.innerHTML += `
        <div class="message message_client">
        <div class="message__time">${new Date().toLocaleTimeString()}</div>
        <div class="message__text">${chatWidgetInput.value}</div>
        </div>
      `;
        chatWidgetInput.value = '';

        messages.innerHTML += `
        <div class="message">
        <div class="message__time">${new Date().toLocaleTimeString()}</div>
        <div class="message__text">${botAnswers[Math.floor(Math.random() * botAnswers.length)]}</div>
        </div>
      `;
    }
});