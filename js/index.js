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
    const latestCommitHashStr = document.querySelector('.lastCommitHash')
    console.log("Latest Commit Hash:", latestCommitHash);
    latestCommitHashStr.innerHTML = `#${latestCommitHash.substr(0, 7)}`;
    return latestCommitHash;
  } catch (error) {
    console.error("Error fetching the latest commit hash:", error);
  }
}

getLatestCommitHash();

