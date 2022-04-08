function create(words) {
   for (let word of words) {
      const div = document.createElement('div');
      const p = document.createElement('p');
      
      p.textContent = word;
      p.style.display = 'none';
      div.appendChild(p);
      div.addEventListener('click', onclick);
      
      function onclick() {
         p.style.display = 'block';
      }

      const contentDiv = document.getElementById('content');
         contentDiv.appendChild(div);
        
   }
}