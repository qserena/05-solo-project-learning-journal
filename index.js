import { getArticlePreview } from './data.js'

const heroContainer = document.getElementById('hero-container')
const recentPostsEl = document.getElementById('recent-posts')

function getArticle() {
	return `
		<div class="article-preview" id="article-preview">
			<h1>My new journey as a bootcamp student.</h1>
			<p>${getArticlePreview()}</p>
		</div>
	`
}

function getPosts() {
	let html = ``
	for (let i = 0; i < 6; i++) {
		html += `
	        <div class="recent-post">
	            <img src="./img/blog-image-0${i + 1}.png"/>
	        </div>
	    `
	}
	return html
}

console.log(heroContainer)

heroContainer.innerHTML = getArticle()
recentPostsEl.innerHTML = getPosts()
