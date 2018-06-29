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




let submit = document.getElementById("buttonSub");
submit.addEventListener("click",()=>{
  let first = document.getElementById("first").value;
  let last = document.getElementById("last").value;
  let mail = document.getElementById("mail").value;
  let phone = document.getElementById("phone").value;
  let ROC = document.getElementById("ReasonOfContact").value;
  let msg = document.getElementById("msg").value;
  
  alert('Thank you for your message '+first+' '+last+'\n'
  +'You contacted us for '+ROC+'\n'+'You message is '+msg+'\n'+'Your phone number is '+phone+'\n'
  +'We will get back to you at this adress: '+mail);
});




  

