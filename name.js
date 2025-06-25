/* - names.js
Crea una funzione che accetta due parametri: firstName, lastName. La funzione dovrebbe restituire un oggetto con le proprietà firstName e lastName.
Esporta la funzione dal file.*/

function nameList(firtsName, lastName) {
	const nameFirstLast = {
		firtsName: firtsName,
		lastName: lastName
	}
	return nameFirstLast
}
console.log(nameList('Colucci', 'Gianni'))






//export default per esportare un'unica entità principale da un modulo. //export esporta più elementi da un modulo

//export default nameList (versione defoult es6 ecmascript)
//common js (prima versione per i moduli node js)
module.exports = nameList