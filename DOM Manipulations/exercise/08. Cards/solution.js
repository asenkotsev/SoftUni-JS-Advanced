function solve() {
   const cards = document.getElementsByTagName('img');

   let upperCard = 0;
   let upperCardNode;
   let bottomCard = 0;
   let bottomCardNode;


   for (const card of cards) {
      card.addEventListener('click', onClick)

      function onClick(e) {
         const target = e.target;
         const parent = target.parentNode;
         const id = parent.getAttribute('id');

         if (id == 'player1Div') {
            const span = document.querySelectorAll('#result span')[0];
            upperCard = Number(target.name);
            span.textContent = target.name;
            upperCardNode = target;
         } else if (id == 'player2Div') {
            const span = document.querySelectorAll('#result span')[2];
            bottomCard = Number(target.name);
            span.textContent = target.name;
            bottomCardNode = target;
         }

         if (upperCard > bottomCard && upperCard !== 0 && bottomCard !== 0) {
            upperCardNode.style = 'border: 2px solid green';
            bottomCardNode.style = 'border: 2px solid red';
            document.getElementById('history').textContent += `[${upperCard} vs ${bottomCard}] `;
            document.querySelectorAll('#result span')[0].innerHTML = '';
            document.querySelectorAll('#result span')[2].innerHTML = '';
            upperCard = 0;
            bottomCard = 0;
         } else if (bottomCard > upperCard && upperCard !== 0 && bottomCard !== 0) {
            bottomCardNode.style = 'border: 2px solid green';
            upperCardNode.style = 'border: 2px solid red';
            document.getElementById('history').textContent += `[${upperCard} vs ${bottomCard}] `;
            document.querySelectorAll('#result span')[0].innerHTML = '';
            document.querySelectorAll('#result span')[2].innerHTML = '';
            upperCard = 0;
            bottomCard = 0;
         } else if (upperCard == bottomCard) {
            document.getElementById('history').textContent += `[${upperCard} vs ${bottomCard}] `;
            document.querySelectorAll('#result span')[0].innerHTML = '';
            document.querySelectorAll('#result span')[2].innerHTML = '';
            upperCard = 0;
            bottomCard = 0;
         }
         target.src = 'images/whiteCard.jpg';
      }
   }
}
