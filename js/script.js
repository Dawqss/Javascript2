var a = prompt ('podaj a: ');
console.log('a wynosi: '+a)
<<<<<<< HEAD
var b = prompt ('podaj b: ');
=======
var b = prompt ('podab b: ');
>>>>>>> 904020a305f62fb2dc74f4b596d71bf76cfc3b61
console.log('b wynosi: '+b)
var value = (a * a) + (2 * a * b) - (b * b);
console.log('wartość równania: '+value)

alert(+value)

if (+value > 0) {
	console.log('wynik dodatni')
}
else if (+value < 0) {
	console.log('wynik ujemny')
}
else {
	console.log('wynik wynosi zero')
}
