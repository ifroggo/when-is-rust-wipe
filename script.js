function getNextThursday() { 
  var d = new Date();
  console.log("today is " + d);
  d.setUTCHours(19); d.setUTCMinutes(0); d.setUTCSeconds(0); d.setUTCMilliseconds(0);
  // this needs refactored
  if(d.getUTCDate() > 7) { //has the first thursday def passed
    d.setUTCMonth(d.getUTCMonth()+1);
    d.setUTCDate(1);
    d = dd(d,1);
  } else {
    if(d.getUTCDay() < 4) {  
      d = dd(d,-1);
    } else if(d.getUTCDay() > 4) {
      d = dd(d,1);
    } else {
      if(!(dd(d,1).getUTCHours() <= d.getUTCHours())) {
        if(!(dd(d,1).getUTCMinutes() <= d.getUTCMinutes())) {
          d.setUTCMonth(d.getUTCMonth()+1);
          d.setUTCDate(1);
          d = dd(d,1);
        } else {
          d = dd(d,1);
        }
      } else {
        d.setUTCMonth(d.getUTCMonth()+1);
        d.setUTCDate(1);
        d = dd(d,1);
      }
    }
  }

  function dd(d,inc) {
    while(d.getUTCDay() != 4) {
      d.setUTCDate(d.getUTCDay()+inc);
    }
    return d;
  }

  return d;
}

function timer(countDownDate) {
  console.log(`Next wipe: ${countDownDate}`)
  var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    //im lazy
    if(minutes < 1) {
      document.getElementById("timer").innerHTML = 
      seconds + "s ";
    } else if( hours < 1) {
      document.getElementById("timer").innerHTML = 
      + minutes + "m " + seconds + "s ";
    } else if(days < 1) {
      document.getElementById("timer").innerHTML = hours + "h "
      + minutes + "m " + seconds + "s ";
    } else {
      document.getElementById("timer").innerHTML = days + "d " + hours + "h "
      + minutes + "m " + seconds + "s ";
    }


    if (distance < 0) {
      clearInterval(x);
      document.getElementById("timer").innerHTML = "Wipe";
    }
    document.body.style.opacity='1'
  }, 1000);
}

timer(getNextThursday());
