 if ('serviceWorker'in navigator) {
 	window.addEventListener('load', function() {
 	navigator.serviceWorker.register('service-worker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

let btnDon = document.getElementById("btnDon");
btnDon.addEventListener("click",myFunction);

let btnDon2 = document.getElementById("btnDon2");
btnDon2.addEventListener("click",myFunction);

function myFunction() {
  alert("If you feel generous, you can give BeCode T-shirts to the Devs of this website :) ");
}
  

