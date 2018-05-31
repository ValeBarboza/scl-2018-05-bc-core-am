window.onload = () => { 
    
//  Para cifrar:

// Boton de cifrado
    const buttonOne = document.getElementById("button-messagecipher");
// Evento click del botón cifrado   
    buttonOne.addEventListener("click", function() {
        let inputOne = document.getElementById("input-cipher").value;
        let inputTwo = document.getElementById("input-messagecipher").value;
        let msgFinish = window.cipher.encode(inputOne, inputTwo);
        document.getElementById("cipher").innerHTML = msgFinish; 
     });
    
//  Para descifrar:

// Boton de decifrado
    const buttonTwo = document.getElementById("button-messagedecipher");
// Evento click del cuarto botón     
    buttonTwo.addEventListener("click", function() {
        let inputThree = document.getElementById("input-decipher").value;
        let inputFor = document.getElementById("input-messagedecipher").value;
        let msgFinishTwo = window.cipher.decode(inputThree, inputFor);
        document.getElementById("decipher").innerHTML = msgFinishTwo;
    });

}
