function toggle() {
    let div = document.getElementById('extra');
    let button = document.getElementsByClassName("button")[0];
    if (div.style.display == 'block') {
        div.style.display = 'none';
        button.innerText = 'More';
    } else {
        div.style.display = 'block';
        button.innerText = 'Less';
    }

}