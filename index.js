import { getArticlePreview } from "./data.js"

const heroEl = document.getElementById("hero")
const recentPostsContainer = document.getElementById("recent-posts-container")

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

heroEl.innerHTML = getArticle()
recentPostsContainer.innerHTML = getPosts()
