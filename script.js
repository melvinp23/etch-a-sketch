// function promptNew() {
// 	prompt(`Enter new canvas size:`);
// }

const container = document.querySelector('#container');

const newBtn = document.querySelector('#newBtn');
newBtn.addEventListener('click', () => {
	let squarePerSide = parseInt(prompt('Enter new canvas size:'));
	if (isNaN(squarePerSide) || squarePerSide <= 0 || squarePerSide > 100) {
		return;
	}

	let totalSide = squarePerSide * squarePerSide;

	container.innerHTML = '';

	for (let i = 0; i < totalSide; i++) {
		const div = document.createElement('div');
		div.classList.add('pixel');
		div.style.width = `${100 / squarePerSide}%`;
		div.style.height = `${100 / squarePerSide}%`;
		container.appendChild(div);
	}
});

// 100 / number of squares per side
