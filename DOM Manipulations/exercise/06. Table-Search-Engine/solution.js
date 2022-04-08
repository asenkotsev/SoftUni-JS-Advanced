function solve() {
   document.getElementById('searchBtn').addEventListener('click', onSearch);
   function onSearch(e) {
      const query = document.getElementById('searchField').value;

      if (query.trim().length <= 0) { return; }

      const tbody = document.querySelector('tbody');

      [...tbody.querySelectorAll('tr')].forEach(r => {
         r.classList.remove('select')
      });

      [...tbody.querySelectorAll('td')].forEach(d => {
         if (d.textContent.includes(query)) {
            d.parentNode.classList.add('select');
         }
      });
   }
}