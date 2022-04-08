    function solve() {
        const container = document.getElementById('container');
        const nameInput = container.children[0];
        const ageInput = container.children[1];
        const kindInput = container.children[2];
        const ownerInput = container.children[3];
        const addButton = container.children[4];
        const list = document.querySelector('section > ul');

        addButton.addEventListener('click', addTo);

        function addTo(e) {
            e.preventDefault();
            if (nameInput.value !== '' && ageInput.value !== '' && kindInput.value !== '' && ownerInput.value !== '' && ageInput.value >= 0) {
                const target = e.target;
                const li = document.createElement('li');
                const p = document.createElement('p');
                const span = document.createElement('SPAN');
                const contactOwnerBtn = document.createElement('button');
                contactOwnerBtn.textContent = 'Contact with owner';
                span.textContent = `Owner: ${ownerInput.value}`
                p.innerHTML = `<strong>${nameInput.value}</strong> is a <strong>${ageInput.value}</strong> year old <strong>${kindInput.value}</strong>`;
                li.appendChild(p);
                li.appendChild(span);
                li.appendChild(contactOwnerBtn);
                list.appendChild(li);

                contactOwnerBtn.addEventListener('click', onContact);
                function onContact(e) {
                    const target = e.target;
                    target.remove();
                    const div = document.createElement('div');
                    const input = document.createElement('input');
                    input.placeholder = 'Enter your names';
                    const takeBtn = document.createElement('button');
                    takeBtn.textContent = 'Yes! I take it!';
                    div.appendChild(input);
                    div.appendChild(takeBtn);
                    li.appendChild(div);

                    takeBtn.addEventListener('click', onTake);
                    function onTake(e) {
                        const target = e.target;
                        const button = target.parentNode;
                        const parent = button.parentNode;
                        if (input.value !== '') {
                            button.remove();
                            const checkedBtn = document.createElement('button');
                            checkedBtn.textContent = 'Checked';
                            span.textContent = `New Owner: ${input.value}`
                            li.appendChild(checkedBtn);
                            const adopted = document.getElementById('adopted').querySelector('ul');
                            adopted.appendChild(parent);

                            checkedBtn.addEventListener('click', onCheck);
                            function onCheck(e) {
                                const target = e.target;
                                const parent = target.parentNode;
                                parent.remove();
                            }
                        }
                    }
                }
                nameInput.value = '';
                ageInput.value = '';
                kindInput.value = '';
                ownerInput.value = '';
            }
        }
    }

