              ///1.Introduccion a Javascript///


  
//Ejercicio 2
console.log("-Ej 2 introduccion-")

let a = 10;
let b = 15;
let c = a+b;

console.log("La suma de a y b es:", c);

//Ejercicio 3
console.log("-Ej 3 introduccion-")

let nombre = prompt("ingrese su nombre aqui:");
console.log("Hola",nombre, "bienvenido.");



              ///2.Operadores lógicos y condicionales///

//Ejercicio 1
console.log("-Ej 1 Operadores L y C-")

function cualEsMayor () {
  let a = 5;
  let b = 9;
  let c;

  if (a > b) {
    c = a;
  } else {
    c = b;
  }
  return "El mayor numero es: "+ c;
}
  console.log(cualEsMayor());

//Ejercicio 2
console.log("-Ej 2 Operadores L y C-")

function parImpar () {
  
  let numero = prompt("Ingrese un numero aqui para saber si es par o impar:")
  numero = Number(numero);

  if (numero % 2 === 0) {
    console.log("El numero " + numero + " es par");
  } else {
    console.log("El número " + numero + " es impar");
}

}
parImpar();



              ///3.Operadores de asignación y bucles///

//Ejercicio 1
console.log("-Ej 1 Operadores de asignacion y bucles-")

let variable = 10;
while(variable >= 0) {
  console.log(variable)
  variable--;
}

//Ejercicio 2
console.log("-Ej 2 Operadores de asignacion y bucles-")

function mayor100 () {
  let numeroM100

  do {
      numeroM100 = prompt("Ingrese un numero mayor a 100:")
      numeroM100 = Number(numeroM100);
      console.log("Número ingresado: " + numeroM100);

    } while (numeroM100 <= 100);
    console.log("El numero " + numeroM100 + " es mayor a 100" )
}

mayor100();



              ///4. Funciones de JavaScript///

//Ejercicio 1
console.log("-Ej 1 Funciones-")

function esPar (number) {
  return number % 2 === 0;
  
}
console.log("El numero 4 es par: " + esPar(4));  
console.log("El numero 7 es par: " + esPar(7));  
console.log("El numero 10 es par: " + esPar(10)); 
console.log("El numero 15 es par: " + esPar(15));

esPar();


//Ejercicio 2
console.log("-Ej 2 Funciones-")

function convertirCelsiusAFahrenheit (celsius) {
  return celsius * 1.8 + 32;
}
console.log("El numero 30°C equivale a : " + convertirCelsiusAFahrenheit(30) + "°F");

convertirCelsiusAFahrenheit();



              ///5. Objetos en JavaScript///

//Ejercicio 1
console.log("-Ej 1 Objetos-")

let persona = {
  nombre: "",
  edad: 20,
  ciudad: ""
}
  
function cambiociudad(nuevaCiudad) {
    persona.ciudad = nuevaCiudad;
}
persona.nombre = "German";
persona.edad = 20;
persona.ciudad = "Barcelona";
cambiociudad("Sevilla");
console.log("Persona: " + persona.nombre + ", Edad: " + persona.edad + ", Ciudad: " + persona.ciudad);

//Ejercicio2
console.log("-Ej 2 objetos-")

let libro = {
  titulo: "Relato de un naufrago",
  autor: "Gabriel Garcia Marquez",
  año: 1955,

  esAntiguo: function() {
    let añoActual = new Date().getFullYear();
    let diferencia = añoActual - libro.año;
    console.log("Diferencia de años: " + diferencia);

    if ((diferencia) > 10) {
      console.log("El libro titulado: " + libro.titulo + " de: " + libro.autor + " es antiguo.");

    } else {
      console.log("El libro titulado: " + libro.titulo + " de: " + libro.autor + " es reciente.");
      }
  } 
};
libro.esAntiguo();



              ///6. Arrays///

//Ejercicio 1
console.log("-Ej 1 Arrays-")

let arregloNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let numerosMultiplicados = [];
  for (let i = 0; i < arregloNumeros.length; i++) {
    numerosMultiplicados.push(arregloNumeros[i] * 2);
  }
console.log("Numeros Originales: " + arregloNumeros);
console.log("Numeros Multiplicados: " + numerosMultiplicados);

//Ejercicio 2
console.log("-Ej 2 Arrays-")

let pares = [];
for (let i=1; pares.length < 10; i++) {
  if (i % 2 === 0) { 
    pares.push(i);
  }
}
console.log("Primeros 10 numeros pares: " + pares);



              ///7. Introducción al DOM///

//Ejercicio 1
console.log("-Ej 1 DOM-");

function cambiarColor() {
const parrafos = document.querySelectorAll(".parrafo");
parrafos.forEach(function(parrafo){
  parrafo.classList.add('azul')
  });
}
const boton = document.getElementById("botonP");

boton.addEventListener("click", cambiarColor);

//Ejercicio2
console.log("-Ej 2 DOM-");

function mostrarAlerta(){
  const texto = document.getElementById("campoTexto").value;
  alert("El valor ingresado es: " + texto);
}
  const boton2 = document.getElementById("botonAlerta");
  boton2.addEventListener("click", mostrarAlerta);



              ///8. Eventos en DOM///

//Ejercicio 1
console.log("-Ej 1 Eventos DOM-");

document.addEventListener("DOMContentLoaded", function() {
  var lista = document.getElementById("milista");
  var itemslista = lista.getElementsByTagName("li");
  for (var i = 0; i < itemslista.length; i++) {
      itemslista[i].addEventListener("click", function() {
          console.log("Contenido del elemento:", this.textContent);
      });
  }
});

//Ejercicio 2
console.log("-Ej 2 Eventos DOM-");

document.addEventListener("DOMContentLoaded", function() {
  let texto = document.getElementById("textobotones");
  let desactivado = document.getElementById("botonDeshabilitar");
  let activado = document.getElementById("botonHabilitar");

  desactivado.addEventListener('click', function() {
      texto.classList.add("deshabilitar")
      texto.disabled = true;
  });

  activado.addEventListener('click', function() {
    texto.classList.remove("deshabilitar")
      texto.disabled = false;
  });
});



              ///9. LocalStorage///

//Ejercicio1
console.log("-Ej 1 LocalStorage-");

function guardarCorreo(){
  document.addEventListener("DOMContentLoaded", () => {
    const correoGuardadoDiv = document.getElementById('emailsubido');

    const correoGuardado = localStorage.getItem('inputcorreo');
    if (correoGuardado) {
        mostrarCorreoGuardado(correoGuardado);
    }


    const formCorreo = document.getElementById('FormularioEmail');
    formCorreo.addEventListener('submit', (event) => {
        event.preventDefault();
        const correo = document.getElementById('inputcorreo').value;


        localStorage.setItem('inputcorreo', correo);

        mostrarCorreoGuardado(correo);
    });


    function mostrarCorreoGuardado(correo) {
        correoGuardadoDiv.innerHTML = `
            <p>Correo guardado: ${correo}</p>
            <button id="eliminarCorreo">Eliminar Correo Guardado</button>`
        ;

        document.getElementById('eliminarCorreo').addEventListener('click', () => {
            localStorage.removeItem('inputcorreo');
            correoGuardadoDiv.innerHTML = '';
        });
    }
  });
}
guardarCorreo();


















