function encodeAndDecodeMessages() {
    document.getElementById('main').addEventListener('click', onClick);

    function onClick(e) {
        const target = e.target;
        const parent = target.parentNode;

        const textAreaArray = document.querySelectorAll('textarea');
        const buttonArray = document.querySelectorAll('button');
        const [input, output] = textAreaArray;
        const [encodeBtn, decodeBtn] = buttonArray;

        if (target == encodeBtn && input.value !== '') {
            let encoded = '';

            for (let i = 0; i < input.value.length; i++) {
                encoded += String.fromCharCode(input.value.charCodeAt(i) + 1);
            }

            output.textContent = encoded;
            textAreaArray[0].value = '';
        } else if (target == decodeBtn && output.value !== '') {
            let decoded = '';

            for (let i = 0; i < output.value.length; i++) {
                decoded += String.fromCharCode(output.value.charCodeAt(i) - 1);
            }

            output.textContent = decoded;
        }
    }
}