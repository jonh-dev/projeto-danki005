// Input Range
var range = document.getElementById("filter");
var output = document.getElementById("outputRange");
var usedColor = ('red');
var currentValue = ((range.value - range.min) / (range.max - range.min)) * range.max;
output.innerHTML = 'R$:' + range.value + '.000,00';

const updateBackgroundColor = (value, color) => {
    range.style.setProperty(
      'background',
      `linear-gradient(to right,  ${color} 0%,  ${color} 
        ${value}%,
        #fff ${value}%, 
        #fff 100%)`,
    );
  };
  
  updateBackgroundColor(currentValue, usedColor);

  range.addEventListener('input', function () {
    // retorna o valor atual do seletor
    const updatedValue = ((this.value - this.min) / (this.max - this.min)) * this.max;

  
    // chama a função que atualiza o background
    updateBackgroundColor(updatedValue, usedColor);
  });



// Carros
var car1 = document.getElementById("car1");
var car2 = document.getElementById("car2");
var car3 = document.getElementById("car3");
var car4 = document.getElementById("car4");
var car5 = document.getElementById("car5");
var car6 = document.getElementById("car6");

range.oninput = function(){
    var valor = this.value;
    output.innerHTML = "R$:" + valor + ".000,00";
    if(valor >= 40 & valor <= 59){
        car1.style.display = "none"; 
        car3.style.display = "none";
        car4.style.display = "none";
    }else if(valor >= 60 & valor <= 69){
        car2.style.display = "none";
    }else if(valor == 70){
        car5.style.display = "none";
    }else{
        car1.style.display = "block"; 
        car2.style.display = "block";
        car3.style.display = "block";
        car4.style.display = "block";
        car5.style.display = "block";
    }
}

let checkbox = document.getElementById("all");
checkbox.addEventListener("click", ()=>{
    if(checkbox.checked == true){
        document.querySelector(".ano").checked = true;
        document.querySelector(".ano2").checked = true;
        document.querySelector(".ano3").checked = true;
    }else{
        document.querySelector(".ano").checked = false;
        document.querySelector(".ano2").checked = false;
        document.querySelector(".ano3").checked = false;
    }

    car1.style.display = "block";
    car2.style.display = "block";
    car3.style.display = "block";
    car4.style.display = "block";
    car5.style.display = "block";
    car6.style.display = "block"; 
});


    $(".ano").click(function(){
        $("#car1").toggle();
        $("#car3").toggle();
        $("#car4").toggle();
        $("#car6").toggle();
    });

    $(".ano2").click(function(){
        $("#car2").toggle();
        $("#car3").toggle();
        $("#car4").toggle();
        $("#car5").toggle();
        $("#car6").toggle();
    });

    $(".ano3").click(function(){
        $("#car1").toggle();
        $("#car2").toggle();
        $("#car5").toggle();
    });



