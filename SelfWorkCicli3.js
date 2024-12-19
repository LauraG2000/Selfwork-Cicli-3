let scelta; 

while (true) {
    
    scelta = prompt("Inserisci un numero per selezionare una bevanda: \n1. Acqua \n2. Coca Cola \n3. Birra");
    
   
    if (scelta === "1") {
        console.log("E' stata selezionata l'acqua");
    } else if (scelta === "2") {
        console.log("E' stata selezionata coca cola");
    } else if (scelta === "3") {
        console.log("E' stata selezionata birra");
    } else {
        console.log("Scelta non valida. Riprova.");
    }
while (true) {
    scelta = prompt("Inserisci una bevanda: \n1. Acqua \n2. Coca Cola \n3. Birra");

    if (scelta === "1") {
        console.log("E' stata selezionata l'acqua");
    } else if (scelta === "2") {
        console.log("E' stata selezionata coca cola");
    } else if (scelta === "3") {
        console.log("E' stata selezionata birra");
    } else {
        console.log("Scelta non valida. Riprova."); 
    }
    }
}
