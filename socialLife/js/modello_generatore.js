var nome = [
	'Prova_1',
	'Prova_2',
	'Prova_3',
	'Prova_4',
	'Prova_5',
	'Prova_6',
	'Prova_7',
	'Prova_8',
	'Prova_9',
	'Prova_10'
]

function genera_titolo() {
	var random = Math.floor(Math.random() * (nome.length));
	document.getElementById('random').innerHTML = nome[random];
}