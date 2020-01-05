$(document).ready(function(){
  $('.sidenav').sidenav();
});

var nav = document.querySelector('#mynav'); // Identify target

window.addEventListener('scroll', function(event) { // To listen for event
    event.preventDefault();
     console.log (window.scrollY);
    if (window.scrollY > 35) { // Just an example
        nav.style.backgroundColor = 'rgba(120, 78, 177, 0.8)' ; // or default color
    } 
    
    if (window.scrollY <= 0) { // Just an example
      nav.style.backgroundColor = 'rgba(120, 78, 177, 0.3)' ; // or default color
  }
});
