const buttons = document.querySelectorAll('.btn');
let mouseX = 0;
let mouseY = 0;

function updateMousePosition(e) {
	mouseX = e.clientX;
	mouseY = e.clientY;
	updateGradientPosition();
}

function updateGradientPosition() {
	buttons.forEach(btn => {
		const rect = btn.getBoundingClientRect();
		const x = mouseX - rect.left;
		const y = mouseY - rect.top;
		btn.style.setProperty('--x', x + 'px');
		btn.style.setProperty('--y', y + 'px');
	});
}

document.addEventListener('mousemove', updateMousePosition);
document.addEventListener('scroll', updateGradientPosition);

async function getLatestCommitHash() {
	const url = `https://api.github.com/repos/crllect/CS-Portfolio/commits/main`;

	try {
		const response = await fetch(url);

		if (!response.ok) {
			throw new Error(`Error: ${response.status} ${response.statusText}`);
		}

		const data = await response.json();

		const latestCommitHash = data.sha;
		const latestCommitHashStr = document.querySelector('.lastCommitHash');
		console.log('Latest Commit Hash:', latestCommitHash);
		latestCommitHashStr.innerHTML = `#${latestCommitHash.substr(0, 7)}`;
		return latestCommitHash;
	} catch (error) {
		console.error('Error fetching the latest commit hash:', error);
	}
}

getLatestCommitHash();

function updatePageHeight() {
	const pageHeight = document.documentElement.scrollHeight;
	document.documentElement.style.setProperty(
		'--pageHeight',
		`${pageHeight}px`
	);
}

window.addEventListener('resize', updatePageHeight);
window.addEventListener('DOMContentLoaded', updatePageHeight);

updatePageHeight();

const thumb = document.querySelector('.thumb');
const trackTop = document.querySelector('.trackTop');
const trackBottom = document.querySelector('.trackBottom');
const scrollerInner = document.querySelector('.scrollerInner');

function updateTracks() {
    const scrollerHeight = scrollerInner.clientHeight;
    const thumbTop = parseFloat(getComputedStyle(thumb).top);
    const topPercent = (thumbTop / scrollerHeight) * 100;
    trackTop.style.height = `calc(${topPercent}% - 15px)`;
    trackBottom.style.height = `calc(${100 - topPercent}% - 14px)`;
}

function trackThumbPosition() {
    updateTracks();
    requestAnimationFrame(trackThumbPosition);
}

trackThumbPosition();
