var str = "";

function same(str) {
	for (var i = 1; i < str.length; ++i){

	    if( str[i] === str[i-1] ) {
			console.log("Есть одинаковые символы");
	        return true;
	    } else {
	     		console.log("нет символов");
	    }
	};
	return false;
};
  
console.log( same('Аннотация') );