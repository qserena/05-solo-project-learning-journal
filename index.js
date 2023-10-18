import { getArticlePreviewText, getPostText } from './data.js'

const heroContainer = document.getElementById('hero-container')
const recentPostsEl = document.getElementById('recent-posts')

function getArticlePreview() {
	return `
		<div class="article-preview" id="article-preview">
			<p class="article-date-hero">OCT 17, 2023</p>
			<h1>My new journey as a bootcamp student.</h1>
			<p class="article-preview-hero">${getArticlePreviewText()}</p>
		</div>
	`
}

function getPosts() {
	let html = ``
	const blogNumbers = [`one`, `two`, `three`, `four`, `five`, `six`]
	for (let i = 0; i < 6; i++) {
		html += `
	        <div class="recent-post">
	            <img src="./img/blog-image-0${i + 1}.png"/>
				<p class="date">OCT 17, 2023</p>
				<h2>Blog ${blogNumbers[i]}</h2>
				<p>${getPostText()}</p>
	        </div>
	    `
	}
	return html
}

heroContainer.innerHTML = getArticlePreview()
recentPostsEl.innerHTML = getPosts()
