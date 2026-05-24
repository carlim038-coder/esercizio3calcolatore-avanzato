document.getElementById('btnCalcola').addEventListener('click', function() {

// Input dall'utente
    let num1 = (prompt("Inserisci il primo numero:"));
    let num2 = (prompt("Inserisci il secondo numero:"));
    // Calcoli
    let somma = num1 + num2;
    let sottrazione = num1 - num2;
    let moltiplicazione = num1 * num2;
    let divisione = num2 !== 0 ? (num1 / num2) : "Impossibile dividere per zero";
    let potenza = Math.pow(num1, num2);

    // Messaggio formattato
    let messaggio = `Con i numeri da te scelti (${num1} e ${num2}), i risultati sono: 
    - Somma: ${somma}
    - Sottrazione: ${sottrazione}
    - Moltiplicazione: ${moltiplicazione}
    - Divisione: ${divisione}
    - Potenza: ${potenza}`;

    // Output
    console.log(messaggio);
    alert("Controlla la console per i dettagli!");
    document.getElementById('displayRisultato').innerText = messaggio;
});