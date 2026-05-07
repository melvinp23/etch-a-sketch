function promptNew() {
	prompt(`Enter new canvas size:`);
}

const newBtn = document.querySelector('#newBtn');
newBtn.addEventListener('click', promptNew);

const container = document.querySelector('#container');

for (let i = 0; i < 256; i++) {
	const div = document.createElement('div');
	div.classList.add('pixel');
	container.appendChild(div);
}
