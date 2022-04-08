function solve() {
   const send = document.getElementById('send');
   const chatInput = document.getElementById('chat_input');
   const messages = document.getElementById('chat_messages');
   send.addEventListener('click', onClick);

   function onClick() {
      const div = document.createElement('div');
      div.classList.add('message');
      div.classList.add('my-message');

      if (chatInput.value == '') {
         return;
      }
      div.innerHTML = chatInput.value;
      messages.appendChild(div);
      chatInput.value = '';
   }
}


