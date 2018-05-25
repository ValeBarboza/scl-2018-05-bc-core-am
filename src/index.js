/* Acá va tu código manejo del dom, funcionalidad de los bototnes etc. comunicacion entre html dom y cipher.js */
window.onload = () => { 

//  Para cifrar:

//  Aquí se almacena en variables el input y el boton del numero de la posicion que el codigo se desplazá para cifrar   
    const inputOne = document.getElementById("input-cipher").value;
    const buttonOne = document.getElementById("button-cipher");

//  Aquí se almacena en variables el input y el boton del mensaje a cifrar
    const inputTwo = document.getElementById("input-messagecipher").value;
    const buttonTwo = document.getElementById("button-messagecipher");

//  Evento click del primer botón   
    buttonOne.addEventListener("click", function(){

    });

// Evento click del segundo botón     
    buttonTwo.addEventListener("click", function() {
        document.getElementById("cipher").innerHTML = "Tu mensaje cifrado es: " 
    });

//  Para descifrar:

//  Aquí se almacena en variables el input y el boton del numero de la posicion que el codigo se desplazá para descifrar   
    const inputThree = document.getElementById("input-decipher").value;
    const buttonThree = document.getElementById("button-decipher");

//  Aquí se almacena en variables el input y el boton del mensaje a descifrar
    const inputFor = document.getElementById("input-messagecipher").value;
    const buttonFor = document.getElementById("button-messagedecipher");

//  Evento click del tercer botón   
    buttonThree.addEventListener("click", function(){

});

// Evento click del cuarto botón     
    buttonFor.addEventListener("click", function() {
    document.getElementById("decipher").innerHTML = "Tu mensaje descifrado es: " 
});
















}
