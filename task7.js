function print(n) {
	var ans = "";
  for(var i = 2; i <= n; i += 2) {
  	ans += "\n\n";
    for(var j = 0; j < i; ++j) {
    	ans += i;
    }
	}
  return ans;
}
 console.log(print(16));