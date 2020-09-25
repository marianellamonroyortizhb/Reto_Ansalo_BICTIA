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
		localStorage.setItem('tema', 'SwitchRetro');
		container.classList.toggle('TemaRetro');
		SwitchDark.checked = false;

	} else {
		container.classList.remove('TemaRetro');
		container.classList.toggle('fondoCaja');
		container.className = 'container';
		localStorage.setItem('tema', 'container');
	}

}

function TemaDark() {
	if (SwitchDark.checked) {
		localStorage.setItem('tema', 'SwitchDark');
		container.classList.toggle('TemaDark');
		SwitchRetro.checked = false;
	} else {
		container.classList.remove('TemaDark');
		container.className = 'container';
		localStorage.setItem('tema', 'container');
	}
}

const temaEnStorage = () => {

	const temaGuardado = localStorage.getItem('tema')
	if (temaGuardado == 'SwitchRetro') {
		SwitchRetro.checked = true;
		container.classList.toggle('TemaRetro');
	} else if (temaGuardado == 'SwitchDark') {
	SwitchDark.checked = true;
	container.classList.toggle('TemaDark');

	}
	localStorage.clear()
}

temaEnStorage()
