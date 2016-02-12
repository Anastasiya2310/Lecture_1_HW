function song(n) {
	var getBottles = function (x) {
  	if (x > 1) {
    	return x.toString() + ' bottles';
    } else  {
      return x.toString() + ' bottle';
    }
  }
  
  var answer = "";
  for (var i = n; i > 1; --i) {
  	answer += "\n\n" + getBottles(i) + " of beer on the wall, " + getBottles(i) + " of beer.\n\n
    Take one down and pass it around, " + getBottles(i - 1) + " of beer on the wall.";
  }
  answer += "\n\n
  1 bottle of beer on the wall, 1 bottle of beer.\n\n
  Take one down and pass it around, no more bottles of beer on the wall.\n\n
  No more bottles of beer on the wall, no more bottles of beer.\n\n
  Go to the store and buy some more, " + getBottles(n) + " of beer on the wall."
  return answer;
}

console.log(song(99));