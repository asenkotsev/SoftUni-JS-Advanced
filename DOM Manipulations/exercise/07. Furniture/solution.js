function solve() {
  const tbody = document.querySelector('tbody');
  const buttonArr = document.querySelectorAll('button');
  const [generateBtn, buyBtn] = buttonArr;
  const boxArr = document.querySelectorAll('textarea');
  const [input, output] = boxArr;


  generateBtn.addEventListener('click', onGenerate);
  buyBtn.addEventListener('click', onBuy);

  function onGenerate(e) {
    let data;
    try {
      data = JSON.parse(input.value);
    } catch {
      data = [];
    }

    for (const item of data) {
      const row = document.createElement('tr');
      const html = `<td><img src="${item.img}"></td><td><p>${item.name}</p><td><p>${item.price}</p></
      td><td><p>${item.decFactor}</p></td><td><input type="checkbox" /></td>`;
      row.innerHTML = html;
      tbody.appendChild(row);
    }
  }

  function onBuy(e) {
    const boughtItems = [...tbody.querySelectorAll('input')]
      .filter(i => i.checked)
      .map(i => i.parentNode.parentNode)
      .map(row => ({
        name: row.children[1].textContent.trim(),
        price: Number(row.children[2].textContent),
        decFactor: Number(row.children[3].textContent)
      }));
    if (boughtItems.length <= 0) { return; }
    const result = [
      `Bought furniture: ${boughtItems.map(i => i.name).join(', ')}`,
      `Total price: ${boughtItems.reduce((p, c, i, a) => p + c.price, 0).toFixed(2)}`,
      `Average decoration factor: ${boughtItems.reduce((p, c, i, a) => p + c.decFactor, 0) / boughtItems.length}`
    ]
    output.textContent = result.join('\n');
  }
}