function solve() {
  let textInput = document.getElementById('input');
  let output = document.getElementById('output');

  let text = textInput.innerText;
  let sentenceArray = Array.from(text.split('. '));

  let currentParagraph = document.createElement('p');
  
  for(let i = 0; i < sentenceArray.length; i++) {
    currentParagraph.innerText += sentenceArray[i];
    if(i % 3 == 0) {
      output.appendChild(currentParagraph);
      currentParagraph = document.createElement('p');
    }
  }
}