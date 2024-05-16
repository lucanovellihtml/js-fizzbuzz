"use strict";

//DICHIARAZIONE VARIABILE BOTTONE CHE AVVIA LA GENERAZIONE DEI 100 NUMERI
const button_start = document.getElementById("button_start");


//METODO CHE GENERA I 100 NUMERI E CONTROLLA LA STAMPA
button_start.addEventListener("click", function () {

    /* 
       IL METODO CONTROLLA A MONTE SE IL NUMERO GENERATO E' DIVISIBILE SIA PER 3/5,
       ALTRIMENTI PASSA AI SINGOLI CASI SUCCESSIVI
    */
    for (let i = 1; i < 101; i++) {
        if (i % 3 === 0 && i % 5 === 0)
            console.log("NUMERO --> " + i + " // FIZZBUZZ");

        else if (i % 5 === 0)
            console.log("NUMERO --> " + i + " // BUZZ");

        else if (i % 3 === 0)
            console.log("NUMERO --> " + i + " // FIZZ");

        else
            console.log("NUMERO --> " + i);
    }

});
