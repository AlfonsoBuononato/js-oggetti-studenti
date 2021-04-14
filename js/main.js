/* Descrizione
1. Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
2. Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
3. Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età. Una volta creato il nuovo oggetto inserirlo nell'array creato al punto 2 e mostrare alla fine il contenuto dell'array. */

$(document).ready(function(){

    /* 
    * 1. ESERCIZIO
    */

    //CREARE UN OGGETTO ARRAY CONTENENTE LE PROPRIETA NOME COGNOME ETA DELLO STUDENTE 

   /*  var studenti = {
        nome : "Alfonso",
        cognome : "Buononato",
        eta : 24,
    }; */
    
    //STAMPARE ATTRAVERSO UN CICLO FOR LE PROPRIETA DELL OGGETTO
    /* for(var key in studenti){
        console.log(key + ": " + studenti[key])
    } */

    /* 
    *  2. ESERCIZIO
    */

    //CREARE UN ARRAY DI OGGETTI.
    
    var studenti = [
        {
            nome : "alfonso",
            cognome : "buononato",
            eta : 24,
        },
        {
            nome : "alice",
            cognome : "aguglia",
            eta : 25,
        },
        {
            nome : "pasquale",
            cognome : "vitale",
            eta : 49,
        }
    ];

    /* 
    ** 3. ESERCIZIO 3°
    */

    //DATI STUDENTE DA INSERIRE CON RELATIVE VALIDAZIONI
    var nomeValidato = prompt("inserisci il tuo nome");
    //VALIDAZIONE NOME
    while(! isNaN(nomeValidato)){
        var nomeValidato = prompt("devi inserire il tuo nome");
    }

    var cognomeValidato = prompt("inserisci il tuo cognome");
    //VALIDAZIONE COGNOME
    while(! isNaN(cognomeValidato)){
        var cognomeValidato = prompt("devi inserire il tuo cognome");
    }

    var etaValidata = parseInt(prompt("devi inserire la tua età"));
    //VALIDAZIONE ETA
    while(isNaN(etaValidata)){
        var etaValidata = prompt("devi inserire la tua età");
    }
    // OGGETTO DA AGGIUNGERE NELL ARRAY DI OGGETTI STUDENTI
    var studenteDaAggiungere ={
        nome : nomeValidato,
        cognome : cognomeValidato,
        eta : etaValidata,
    }
    
    studenti.push(studenteDaAggiungere)

    // STAMPARE ATTRAVERSO UN CICLO FOR IL NOME E IL COGNOME CONTENUTO NEGLI OGGETTI
    for(i = 0; i < studenti.length; i++){
        var studente = studenti[i];
        console.log(studente.nome + " " + studente.cognome + " " + studente.eta);
    } 








    //end   
})