var min = 0;
var seconds = 0;

setInterval(function timer() {
	var time = 0;
  if(seconds < 10 && min < 10) {
  	var time = "0" + min + ":" + "0" + seconds;
  } else if (seconds < 10) {
  	var time = min + ":" + "0" + seconds;
  } else if (min < 10) {
  	var time = "0" + min + ":" + seconds;
  } else {
  	var time = min + ":" + seconds;
  };
    
    if(seconds > 58) {
    	seconds = 0;
      ++min;
    } else {
    	++seconds;
    }
    console.log(time);
}, 1000);

/* пока не придумала как в данном случае можно задать цикличность с помощью функции setTimeout(). если мысля посетит - обязательно исправлсь) */