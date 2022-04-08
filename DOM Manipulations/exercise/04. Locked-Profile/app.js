function lockedProfile() {
    const main = document.getElementById('main');
    main.addEventListener('click', onClick);

    function onClick(e) {
        const target = e.target;
        const parent = target.parentNode;
        const div = parent.querySelector('div');
        const lock = parent.querySelector('input[value="lock"]');
        if (target.tagName == "BUTTON" && !lock.checked) {
            if (div.style.display == '') {
                div.style.display = 'block';
                target.innerText = 'Hide it';
            } else if (div.style.display == 'block') {
                div.style.display = '';
                target.innerText = 'Show more';
            }
        }
    }
}