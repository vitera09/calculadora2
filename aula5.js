var numero;
var op;


var varInput = document.getElementById('resultado')

function num9(){
varInput.value = ("9")

}
var varInput = document.getElementById('resultado')

function num8(){
varInput.value = ("8")

}
var varInput = document.getElementById('resultado')

function num7(){
varInput.value = ("7")

}
var varInput = document.getElementById('resultado')

function num6(){
varInput.value = ("6")

}
var varInput = document.getElementById('resultado')

function num5(){
varInput.value = ("5")

}
var varInput = document.getElementById('resultado')

function num4(){
varInput.value = ("4")

}
var varInput = document.getElementById('resultado')

function num3(){
varInput.value = ("3")

}
var varInput = document.getElementById('resultado')

function num2(){
varInput.value = ("2")

}
var varInput = document.getElementById('resultado')

function num1(){
varInput.value = ("1")

}
var varInput = document.getElementById('resultado')

function num0(){
varInput.value = ("0")

}

function igual(){

 if (op == "+")

varInput.value= parseInt(varInput.value)+ parseInt(numero);

 if (op == "*")   

 varInput.value= parseInt(varInput.value) * parseInt(numero);

 if (op == "-") 

 varInput.value= parseInt(varInput.value)- parseInt(numero);

if (op == "/") 

varInput.value=  parseInt(numero) /  parseInt(varInput.value);

var elemento1 =  []
var operacao =  []
var elemento2 =  []
var result =  []

elemento1.push(numero);
operacao.push(op);
elemento2.push();
result.push(varInput.value)

console.log(elemento1);
console.log(operacao);
console.log(elemento2);
console.log(varInput.value);

var pass = document.getElementById("data").textContent 
pass = pass +"<br>"
var primal = document.getElementById("data")
primal.innerHTML = pass + " " + Date() + " " + parseInt(numero) + op + + varInput.value;
 }

        

    function divisao(){


      numero = varInput.value;
        op="/";
        varInput.value="";
    
        
 }

    function subtração(){

      numero = varInput.value;
        op="-";
        varInput.value="";
        
        
}

    function multiplicação(){

      numero = varInput.value;
        op="*";
        varInput.value="";
}
 
  function soma(){

    numero = varInput.value;
    op="+";
     varInput.value="";

  
  }
