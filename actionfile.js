// *** Lógica del Reto Ánsalo ***

// Los arrays ExitoLetras y ExitoNumero son los objetivos que deben mostrarse en la página.
let ExitoLetras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
console.log (ExitoLetras)

let ExitoNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
console.log (ExitoNumeros)

// Definir buffers donde serán almacenados los caracteres ingresados por el usuario.
let BufferLetras = [];
let BufferNumeros = [];

//Funciones por letra


// *** Selector del Tema ***
const SwitchRetro = document.getElementById('SwitchRetro');
const SwitchDark = document.getElementById('SwitchDark');
const container = document.getElementById('container');

function TemaRetro() {
	if (SwitchRetro.checked) {
		localStorage.setItem('TemaActual', 'SwitchRetro');
		container.classList.toggle('TemaRetro');
		SwitchDark.checked = false;
	}

	else {
		container.classList.remove('TemaRetro');
		container.className = 'container';
		localStorage.setItem('TemaActual', 'container');
	}
}

function TemaDark() {
	if (SwitchDark.checked) {
		localStorage.setItem('TemaActual', 'SwitchDark');
		container.classList.toggle('TemaDark');
		SwitchRetro.checked = false;
	}

	else {
		container.classList.remove('TemaDark');
		container.className = 'container';
		localStorage.setItem('TemaActual', 'container');
	}
}

const AlmacenaTema = () => {
	const TemaSelec = localStorage.getItem('TemaActual')
	if (TemaSelec == 'SwitchRetro') {
		container.classList.toggle('TemaRetro');
		SwitchRetro.checked = true;
	}
	else if(TemaSelec == 'SwitchDark') {
	SwitchDark.checked = true;
	container.classList.toggle('TemaDark');
	}
	else
	{
	localStorage.clear();
	}
}
AlmacenaTema()
