"use strict";

//DICHIARAZIONE VARIABILE BOTTONE CHE AVVIA LA GENERAZIONE DEI 100 NUMERI
const button_start = document.getElementById("button_start");

//DICHIARAZIONE VARIABILE CONTAINER DELLA STRINGA DI AVVIO DEL PROGRAMMA
const container_start = document.getElementById("container_start");


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


//METODO CHE GENERA LA STRINGA DI AVVIO DELLA GENERAZIONE DEI NUMERI IN CONSOLE
button_start.addEventListener("click", function () {

    //CREAZIONE DELL'ELEMENTO <p>
    const stringa_start = document.createElement("p");
    stringa_start.innerHTML = "HAI AVVIATO LA GENERAZIONE DEI NUMERI, CONTROLLA IN CONSOLE!!!";

    //INSERISCO L'ELEMENTO <p> DENTRO AL SUO CONTAINER HTML
    container_start.append(stringa_start);
});


