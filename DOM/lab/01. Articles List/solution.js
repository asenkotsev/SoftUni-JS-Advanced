function createArticle() {
	const createTitleArea = document.getElementById('createTitle');
	const textArea = document.getElementById('createContent');
	const articleList = document.getElementById('articles');
	const article = document.createElement('article');
	const h3 = document.createElement('h3');
	const p = document.createElement('p');
	if (createTitleArea.value == '' || textArea.value == '') {
		return;
	}

	h3.innerHTML = createTitleArea.value;
	p.innerHTML = textArea.value;

	article.appendChild(h3);
	article.appendChild(p);
	articleList.appendChild(article);

	createTitleArea.value = '';
	textArea.value = '';
}