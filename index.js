import { getArticlePreviewText, getArticleLast, getPostText } from './data.js'

const heroSection = document.getElementById('hero')
const heroContainer = document.getElementById('hero-container')
const fullArticleSection = document.getElementById('full-article')
const aboutSection = document.getElementById('about-section')
const recentPostsEl = document.getElementById('recent-posts')

document.addEventListener('click', function (e) {
	if (e.target.id === 'home') {
		handleHomeClick()
	} else if (e.target.id === 'about') {
		handleAboutClick()
	} else if (
		e.target.id === 'hero-container' ||
		e.target.parentElement.id === 'article-preview'
	) {
		handleHeroClick()
	}
})

function handleHomeClick() {
	heroSection.style.display = 'block'
	fullArticleSection.style.display = 'none'
	aboutSection.style.display = 'none'
}

function handleAboutClick() {
	heroSection.style.display = 'none'
	fullArticleSection.style.display = 'none'
	aboutSection.style.display = 'block'
}

function handleHeroClick() {
	heroSection.style.display = 'none'
	fullArticleSection.style.display = 'block'
	aboutSection.style.display = 'none'
}

function getArticlePreview() {
	return `
		<div class="article-preview" id="article-preview">
			<p class="article-date-hero">OCT 17, 2023</p>
			<h1>My new journey as a bootcamp student.</h1>
			<p class="article-preview-hero">${getArticlePreviewText()}</p>
		</div>
	`
}

function getFullArticle() {
	return `
		<div class="inner-container">
			${getArticlePreview()}
		</div>
			<img src="./img/article-image-hero.png"/>
		<div class="inner-container">
			${getArticleLast()}
		</div>
	`
}

function getAboutHtml() {
	return `
		<div class="initial-presentation">
			<img class="profile-image" src="./img/profile-image.png"/>
			<div class="initial-presentation-text">
				<h1>Hi there! My name is Roku and welcome to my learning journal.</h1>
				<p class="article-preview-hero">${getArticlePreviewText()}</p>
			</div>
		</div>
		<div class="inner-container">
			${getArticleLast()}
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

function getRecentPostsHeader() {
	return `<h3 class="recent-posts-header">Recent posts</h3>`
}

heroContainer.innerHTML = getArticlePreview()
fullArticleSection.innerHTML = getFullArticle() + getRecentPostsHeader()
aboutSection.innerHTML = getAboutHtml() + getRecentPostsHeader()
recentPostsEl.innerHTML = getPosts()

handleHomeClick()
