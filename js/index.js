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

const callback = (entries, observer) => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.classList.add('in-view');
		} else {
			entry.target.classList.remove('in-view');
		}
	});
};

const observer = new IntersectionObserver(callback, {
	threshold: 0.0,
	rootMargin: '0px 0px 5px 0px'
});

const experienceElements = document.querySelectorAll('.experience');
experienceElements.forEach(element => observer.observe(element));
