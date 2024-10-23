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
