function solve() {
    const button = document.querySelector("article button");
    const items = document.querySelector("ol").querySelectorAll('li');
    const list = {};

    [...items].forEach(e => {
        if (e.textContent.trim().length == 0) { return; }
        const letter = e.textContent[0].toLocaleUpperCase();
        list[letter] = e.textContent;
    });

    button.addEventListener('click', onClick);

    function onClick() {
        const input = document.querySelector("article input");
        const value = input.value;
        const letter = value[0].toLocaleUpperCase();
        if (!list.hasOwnProperty(letter)) {
            list[letter] = `${value[0].toLocaleUpperCase()}${value.substr(1).toLowerCase()}`;
        } else {
            list[letter] = `${list[letter][0].toUpperCase()}${list[letter].substr(1).toLowerCase()}, ${value[0].toUpperCase()}${value.substr(1).toLowerCase()}`;
        }

        const index = letter.charCodeAt() - 65;
        items[index].textContent = list[letter];

        input.value = '';
    }

}