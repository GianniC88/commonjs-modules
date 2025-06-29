/*
	- people.js
Importa la tua funzione da names.js
Importa la tua funzione da hobbies.js
Crea una funzione che non ha parametri.La funzione dovrebbe restituire un oggetto con due proprietà: fullName ed hobbies.All'interno della tua funzione, usa le tue due funzioni precedenti per costruire l'oggetto.
*/

import nameList from "./name.js";
import hobbyList from "./hobbies.js";

function people() {
	return {
		name: nameList('Colucci', 'Gianni'),
		hobby: hobbyList('sport', 'mangiare', 'musica')
	}
}
console.log(people())