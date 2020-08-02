


;(function() {

    'use strict';
  
    var element, string, length;
  
    element = document.querySelector('.errorcode');
    string  = element.innerText;
    length  = string.length;
  setTimeout(timer, 5000);
    function timer(delay, repetitions) {
      var n, i;
      
      n = 0;
      i = window.setInterval(function () {
        element.innerText = string.substring(0, n);
        if (n++ === repetitions) {
          window.clearInterval(i);
        }
      }, delay+100);
    }
    timer(500, length);
  
  })();

  
 
  ;(function() {

    'use strict';
  
    var element, string, length;
  
    element = document.querySelector('.question');
    string  = element.innerText;
    length  = string.length;
  setTimeout(timer, 7000);
    function timer(delay, repetitions) {
      var n, i;
      
      n = 0;
      i = window.setInterval(function () {
        element.innerText = string.substring(0, n);
        if (n++ === repetitions) {
          window.clearInterval(i);
        }
      }, delay-20);
    }
    timer(1000, length);
  
  })();


 
  ;(function() {

    'use strict';
  
    var element, string, length;
  
    element = document.getElementById('question');
    string  = element.innerText;
    length  = string.length;
  setTimeout(timer, 10000);
    function timer(delay, repetitions) {
      var n, i;
      
      n = 0;
      i = window.setInterval(function () {
        element.innerText = string.substring(0, n);
        if (n++ === repetitions) {
          window.clearInterval(i);
        }
      }, delay+800);
    }
    timer(500, length);
  
  })();


  $("#lname").keyup(function(event) {
    if (event.keyCode === 13) {
        $("#submit").click();
    }
});




