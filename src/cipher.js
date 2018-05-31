window.cipher = {

  encode: (inputTwo, inputOne) => {
    
    let phrase = "";
    for (let i = 0; i < inputTwo.length; i++) {
        let letter = inputTwo[i].toUpperCase();
        
        if((letter.charCodeAt(0) >= 65) && (letter.charCodeAt(0) <=90)) {
          let n = letter.charCodeAt(0) - 65; 
          phrase += String.fromCharCode((n + parseInt(inputOne)) % 26 + 65); 
        } 
        else if (letter.charCodeAt(0) === 32) {
          let n = letter.charCodeAt(0);
          phrase += String.fromCharCode(n);
        }
          
      }
        return phrase; 
    }, 

  decode: (inputFor, inputThree) => {

    let phraseTwo = "";
    for (let i = 0; i < inputFor.length; i++) {
        let letterTwo = inputFor[i].toUpperCase();

        if((letterTwo.charCodeAt(0) >=65) && (letterTwo.charCodeAt(0) <=90)) {
        let nTwo = letterTwo.charCodeAt(0) + 65;
        phraseTwo += String.fromCharCode((nTwo - parseInt(inputThree)) % 26 + 65);
        }
        else if (letterTwo.charCodeAt(0) === 32) {
        let nTwo = letterTwo.charCodeAt(0);
        phraseTwo += String.fromCharCode(nTwo);
        } 
     } 
      return phraseTwo;  
  }

}