function solve() {
    const menuTo = document.getElementById('selectMenuTo');
    const binaryOption = document.createElement('option');
    const hexadecimalOption = document.createElement('option');
    const input = document.getElementById('input');
    const result = document.getElementById('result');
    const convertBtn = document.querySelector('button');

    binaryOption.textContent = 'Binary';
    binaryOption.value = 'binary';
    menuTo.appendChild(binaryOption);
    hexadecimalOption.textContent = 'Hexadecimal';
    hexadecimalOption.value = 'hexadecimal';
    menuTo.appendChild(hexadecimalOption);

    convertBtn.addEventListener('click', onClick);
    function onClick() {
        if (menuTo.value == 'binary') {
            function dec2bin(dec){
                return (dec >>> 0).toString(2);
              }   
            result.value = dec2bin(Number(input.value));
        } else if (menuTo.value == 'hexadecimal') {
            function dec2hex(dec) {
                return dec.toString(16).toUpperCase();
            }
            result.value = dec2hex(Number(input.value));
        }
    }
}