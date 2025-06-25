/*
hobbies.js
Crea una funzione che accetta tre parametri: hobbyOne, hobbyTwo, hobbyThree. La funzione dovrebbe restituire un array di stringhe contenenti gli hobby.
Esporta la funzione dal file.
*/

function hobbyList(hobbyOne, HobbyTwo, hobbyThree) {
	const hobbyList = [hobbyOne, HobbyTwo, hobbyThree]
	return hobbyList
}

console.log(hobbyList("hobby one", "hobby two", "hobby three"))


module.exports = hobbyList