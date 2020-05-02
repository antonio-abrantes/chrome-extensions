var data = new Date();
console.log("Javascrip iniciado "+ data.getMilliseconds() );

let botao = document.getElementById('botao');

// console.log(botao);

document.addEventListener("DOMContentLoaded", function(event){
  
  console.log("DOM completamente carregado e analisado");

  document.querySelector('#botao').addEventListener('click', function(){

    let text = document.querySelector('#texto').value;
    document.querySelector('#result').innerHTML = upper(text);

  });

  function upper(text){
    return text.toUpperCase();
  }

});

function msg() {
  alert('Funcionando!');
}