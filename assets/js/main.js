// dark theme btn

var toggleButton = document.getElementById("dark-mode-toggle");
var section_sobre = document.getElementById("sobre");
var navbar = document.getElementById('nav-bar')

toggleButton.addEventListener("click", function () {
	var body = document.getElementsByTagName("body")[0];
	body.classList.toggle("dark-mode");
	bgDarkAboutSection()
	bgNavbarItem()
});

const bgDarkAboutSection = () => {
	if(section_sobre.classList.contains('bg-light')) {
		section_sobre.classList.remove('bg-light')
	} else {
		section_sobre.classList.add('bg-light')
	}
}

const bgNavbarItem = () => {
	if(navbar.classList.contains('bg-light')) {
		navbar.classList.remove('bg-light')
		navbar.classList.add('bg-dark')
		navbar.setAttribute('data-bs-theme', 'dark')
	} else if (navbar.classList.contains('bg-dark')) {
		navbar.classList.remove('bg-dark')
		navbar.classList.add('bg-light')
		navbar.setAttribute('data-bs-theme', 'light')
	}
}

// limpar campos

function cleanFields() {
	let nome = document.getElementById('nome')
	let email = document.getElementById('email')
	let mensagem = document.getElementById('mensagem')
	let assunto = document.getElementById('assunto')

	nome.value = ""
	email.value = ""
	mensagem.value = ""
	assunto.value = ""
}

document.querySelector('#submit').addEventListener('submit', (e) => {
	e.preventDefault();
	sendEmail()
	cleanFields()
})