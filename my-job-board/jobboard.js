// JavaScript Document
const jobboard = "https://jobs.github.com/positions/21516.json";

const jobs = [];

fetch(jobboard).then(blob => blob.json()).then(data => jobs.push(...data));

function findMatches(wordToMatch, jobs) {
	return jobs.filter(place => {
		const regex = new RegExp(wordToMatch, 'gi');
		return place.city.match(regex) || place.state.match(regex);
	});
}

function numberWithCommas(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatches() {
	const matchArray = findMatches(this.value, jobs);
	const html = matchArray.map(place => {
		const regex = new RegExp(this.value, 'gi');
		const location = place.city.replace(regex, `<span class="h1">${this.vale}</span>`);
		const stateName = place.state.replace(regex, `<span class="h1">${this.value}</span>`);
		return `<li> <span class="name">${location}, ${stateName}</span></li>`;
	}).join('');
	suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);