function getNextThursday() { 
  var d = new Date();
  console.log("today is " + d);
  d.setHours(19); d.setMinutes(0); d.setSeconds(0); d.setMilliseconds(0);
  // this needs refactored
  if(d.getDate() > 7) { //has the first thursday def passed
    d.setMonth(d.getMonth()+1);
    d.setDate(1);
    d = dd(d,1);
  } else {
    if(d.getDay() < 4) {  
      d = dd(d,-1);
    } else if(d.getDay() > 4) {
      d = dd(d,1);
    } else {
      if(!(dd(d,1).getHours() <= d.getHours())) {
        if(!(dd(d,1).getMinutes() <= d.getMinutes())) {
          d.setMonth(d.getMonth()+1);
          d.setDate(1);
          d = dd(d,1);
        } else {
          d = dd(d,1);
        }
      } else {
        d.setMonth(d.getMonth()+1);
        d.setDate(1);
        d = dd(d,1);
      }
    }
  }

  function dd(d,inc) {
    while(d.getDay() != 4) {
      d.setDate(d.getDay()+inc);
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