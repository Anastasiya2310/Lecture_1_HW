function calc(x) {
	var ans = [];
  if(x % 2 === 0) {
  	ans.push(false);
  } else {
  	ans.push(true);
  }
 
  var isPrime = true;
  for (var i = 2; i < x; ++i) {
  	if (x % i === 0) {
      isPrime = false;
    }
  }
  ans.push(isPrime);
  
  if(x % 3 === 0) {
  	ans.push(true);
  } else {
  	ans.push(false);
  }
  
  return ans;
}


console.log(calc(5));
console.log(calc(6));
console.log(calc(3));
console.log(calc(144));