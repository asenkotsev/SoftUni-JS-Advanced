function attachEventsListeners() {
    const daysBtn = document.getElementById('daysBtn').addEventListener('click', onClick);
    const hoursBtn = document.getElementById('hoursBtn').addEventListener('click', onClick);
    const minutesBtn = document.getElementById('minutesBtn').addEventListener('click', onClick);
    const secondsBtn = document.getElementById('secondsBtn').addEventListener('click', onClick);

    const daysInput = document.querySelector('#days');
    const hoursInput = document.querySelector('#hours');
    const minutesInput = document.querySelector('#minutes');
    const secondsInput = document.querySelector('#seconds');

    function onClick(e) {
        const target = e.target;
        const id = target.id;

        if (id == 'daysBtn') {
            const days = daysInput.value;
            hoursInput.value = days * 24;
            minutesInput.value = days * 1440;
            secondsInput.value = days * 86400;
        } else if (id == 'hoursBtn') {
            const hours = hoursInput.value;
            daysInput.value = hours / 24;
            minutesInput.value = hours * 60;
            secondsInput.value = hours * 60 * 60;
        } else if (id == 'minutesBtn') {
            const minutes = minutesInput.value;
            hoursInput.value = minutes / 60;
            daysInput.value = minutes / 60 / 24;
            secondsInput.value = minutes * 60;
        } else if (id == 'secondsBtn') {
            let seconds = secondsInput.value;
            hoursInput.value = seconds / 60 / 60;
            minutesInput.value = seconds / 60;
            daysInput.value = seconds / 60 / 60 / 24;
        }
    }
}