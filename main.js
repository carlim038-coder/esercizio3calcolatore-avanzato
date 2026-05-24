document.getElementById('btnCalcola').addEventListener('click', function() {

// CORRETTO: Converti sempre il prompt in un numero
let num1 = Number(prompt("Inserisci il primo numero:"));
let num2 = Number(prompt("Inserisci il secondo numero:"));



// Controllo validità
    if (isNaN(num1) || isNaN(num2)) {
        alert("Inserisci numeri validi!");
        return;
    }
     // Controllo validità
    if (isNaN(num2)) {
        alert("Inserisci un numero valido!");
        return;
    }

    // Calcoli


    // operazioni
    let somma = num1 + num2;
    let sottrazione = num1 - num2;
    let moltiplicazione = num1 * num2;
    let divisione = num2 !== 0 ? (num1 / num2) : "Impossibile dividere per zero";
    // Potenza di ciascuno preso separatamente (es. elevati al quadrato)
    let potenza1 = Math.pow(num1, 2); 
    let potenza2 = Math.pow(num2, 2);


    // Messaggio formattato
let messaggio = `Con i numeri ${num1} e ${num2}:
    - Somma: ${somma}
    - Sottrazione: ${sottrazione}
    - Moltiplicazione: ${moltiplicazione}
    - Divisione: ${divisione}
    - Quadrato del primo: ${potenza1}
    - Quadrato del secondo: ${potenza2}`;
    // Output
    console.log(messaggio);
    alert("Controlla la console per i dettagli!");
    document.getElementById('displayRisultato').innerText = messaggio;
});