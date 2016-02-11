function validate(str) {
	if(str.length < 8){
  	return false;
  }
  
  var found = false;
  for(var i = 0; i < str.length; ++i) {
  	if (str[i] >= 'A' && str[i] <= 'Z') {
    	found = true;
    }
  }
  if (!found) {
  	return false;
  } 
  
  found = false;
  for(var i = 0; i < str.length; ++i) {
  	if (str[i] >= 'a' && str[i] <= 'z') {
    	found = true;
    }
  }
  if (!found) {
  	return false;
  }
  
  found = false;
  for(var i = 0; i < str.length; ++i) {
  	if (str[i] >= '0' && str[i] <= '9') {
    	found = true;
    }
  }
  if (!found) {
  	return false;
  }
  
  return true;
}


console.log(validate('a'));
console.log(validate('aaaaaaaa'));
console.log(validate('AAAAAAAA'));
console.log(validate('aaaaAAAA'));
console.log(validate('AAAAaaaa1111'));