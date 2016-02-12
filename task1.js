var a = 0;//обязательно ли в данном случае объявлять эту переменную, поскольку в дальнейшем она является аргументом в функции??
function square(a) {
	var b = Math.sqrt(a);
	if( Number.isInteger(b) == true) {
  		return Math.pow(++b, 2);
  } else {
  		return -1;
  }
}
 console.log( square(625) );