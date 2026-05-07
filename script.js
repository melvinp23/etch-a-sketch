const container = document.querySelector('#container');

for (let i = 0; i < 256; i++) {
	const div = document.createElement('div');
	div.textContent = `Div #${i + 1}`;
	container.appendChild(div);
}
