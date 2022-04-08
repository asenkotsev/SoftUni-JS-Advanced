function solve() {
    const taskBox = document.getElementById('task');
    const descriptionBox = document.getElementById('description');
    const dateBox = document.getElementById('date');
    const addButton = document.getElementById('add');

    const open = document.querySelectorAll('section ').item(1).querySelectorAll('div').item(1);
    const inProgress = document.querySelectorAll('section ').item(2).querySelectorAll('div').item(1);
    const complete = document.querySelectorAll('section ').item(3).querySelectorAll('div').item(1);

    addButton.addEventListener('click', addTask);
    function addTask(e) {
        e.preventDefault();
        if (taskBox.value !== '' && descriptionBox.value !== '' && dateBox.value !== '') {
            const article = document.createElement('article');
            const h3 = document.createElement('h3');
            const description = document.createElement('p');
            const date = document.createElement('p');
            const buttonDiv = document.createElement('div');
            buttonDiv.classList.add('flex');

            const startBtn = document.createElement('button');
            startBtn.classList.add('green');
            startBtn.textContent = 'Start';
            const finishBtn = document.createElement('button');
            finishBtn.classList.add('orange');
            finishBtn.textContent = 'Finish';
            const deleteBtn = document.createElement('button');
            deleteBtn.classList.add('red');
            deleteBtn.textContent = 'Delete';

            buttonDiv.appendChild(startBtn);
            buttonDiv.appendChild(deleteBtn);
            h3.innerHTML = taskBox.value;
            description.innerHTML = `Description: ${descriptionBox.value}`;
            date.innerHTML = `Due Date: ${dateBox.value}`;

            article.appendChild(h3);
            article.appendChild(description);
            article.appendChild(date);
            article.appendChild(buttonDiv);
            open.appendChild(article);

            taskBox.value = "";
            descriptionBox.value = "";
            dateBox.value = "";

            startBtn.addEventListener('click', startTask);
            function startTask(e) {
                const target = e.target;
                const buttons = target.parentNode;
                const openArticle = buttons.parentNode;
                buttonDiv.removeChild(startBtn);
                buttonDiv.appendChild(finishBtn);
                openArticle.appendChild(buttonDiv);
                inProgress.appendChild(openArticle);
            }

            deleteBtn.addEventListener('click', deleteTask);
            function deleteTask(e) {
                const target = e.target;
                const articleToDelete = target.parentNode.parentNode;
                articleToDelete.remove();
            }

            finishBtn.addEventListener('click', finishTask);
            function finishTask(e) {
                const target = e.target;
                const buttons = target.parentNode;
                const articleToFinish = buttons.parentNode;
                buttons.remove();
                complete.appendChild(articleToFinish);
            }
        }
    }
}