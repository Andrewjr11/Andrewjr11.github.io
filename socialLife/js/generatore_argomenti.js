var argomenti = [
	'Sesso',
	'Droga',
	'Cultura',
	'Educazione sessuale',
	'Cibo',
	'Scuola',
	'Tecnologia',
	'Anime',
	'Lavoro',
	'Hobby',
	'Sport',
	'Musica',
	'Intrattenimento',
	'Notizie',
	'Meteo',
	'Bevande',
	'Viaggi',
	'Vacanza',
	'Sogni',
	'Ricordi',
	'Relazioni',
	'Giochi',
	'Videogiochi',
	'Ragazze',
	'Ragazzi',
	'Sessualità',
	'Film',
	'Meme',
	'Serie-TV',
	'Litigi',
	'Morte',
	'Vita',
	'Progetti',
	'Gioie',
	'Gioielli',
	'Edifici',
	'Natura',
	'Ambiente',
	'Allenamento',
	'Malattie',
	'Arte',
	'Ballare',
	'Motori',
	'Svago',
	'Aneddoti',
	'Concerti',
	'Libri',
	'Spettacoli',
	'Riflessioni',
	'Giudizi',
	'Obblighi',
	'Famiglia',
	'Futuro',
	'Gelato',
	'TV',
	'Bambini',
	'Figli',
	'Religione',
	'Spiritualità',
	'Moda',
	'Volontariato',
	'Socials',
	'Apps',
	'Programmi',
	'Parenti',
	'Cura personale',
	'Carattere',
	'Personalità',
	'Umore',
	'Emozioni',
	'Lingue',
	'Paesi',
	'Città',
	'Citazioni',
	'Idee',
	'VIPs',
	'Filosofia',
	'Gestore telefonico',
	'Telefoni',
	'Aziende',
	'Veicoli',
	'Quarantena',
	'Didattica a distanza',
	'Ebook',
	'Fisico',
	'Spazzatura',
	'Artigianato',
	'Mobili',
	'Relax',
	'Palestra',
	'Legalizzazione',
	'Leggi',
	'Storia',
	'Italiano',
	'Materie scolastiche',
	'Matematica',
	'Geografia',
	'Scienze',
	'Scienze motorie',
	'Letteratura',
	'Consigli',
	'Esperienze positive',
	'Esperienze negative',
	'Sigarette',
	'Gioco d"azzardo',
	'Infanzia',
	'Adolescenza',
	'Nonni',
	'Vecchiaia',
	'Maturità',
	'Genitori',
	'Fratelli',
	'Sorelle',
	'Cugini',
	'Zii',
	'Amici',
	'Nemici',
	'Siti web',
	'Asilo',
	'Scuole medie',
	'Elementari',
	'Liceo',
	'Università',
	'Certificazioni',
	'Traumi',
	'Bravate'
]

function genera_argomento() {
	var random = Math.floor(Math.random() * (argomenti.length));
	document.getElementById('random').innerHTML = argomenti[random];
}