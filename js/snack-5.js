/**
 *
 * Generatore di persone fittizie casuali:
 * Il Grande Gatsby ha una lista di nomi e una lista di cognomi, da queste vuole generare una falsa lista di invitati con nome e cognome.
 *
 */

 const names = ['Michela', 'Giuseppina', 'Taylor','Donna', 'Marsha', 'Fabio', 'Roberto'];
 const lastnames = ['Cappelletti', 'Jager', 'Porcinelli' , 'Buffetti' , 'Forghieri', 'Papagni', 'Marazzini'];

 let list = [];

 for (let i = 0 ; i < 20; i++){
    list = names[Math.floor(Math.random() * 7)].concat( lastnames[Math.floor(Math.random() * 7)]);
    console.log(list);
 }

