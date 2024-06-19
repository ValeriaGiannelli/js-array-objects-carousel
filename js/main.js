// devo ricreare i div con le immagini, perché se il mio DB aumenta o diminuisce questo si modifica in automatico


// array delle immagini con i titoli e descrizione
const images = [ 
    { 
        image: 'img/01.webp', 
        title: 'Marvel\'s Spiderman Miles Morale', 
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.'
    }, 
    { 
        image: 'img/02.webp', 
        title: 'Ratchet & Clank: Rift Apart', 
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.'
    }, 
    { 
        image: 'img/03.webp', 
        title: 'Fortnite', 
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.", 
    }, 
    { 
        image: 'img/04.webp', 
        title: 'Stray', 
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city'
    }, 
    { 
        image: 'img/05.webp', 
        title: "Marvel's Avengers", 
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.'
    } 
];

console.log(images);

//richiamo il contenitore dove andrò ad inserire i DIV
let containerCard = document.querySelector(".card_container");

// per ogni elemento dell'array devo creare il div con le immagini e i testi che verranno presi dai singoli oggetti
images.forEach((element) => {
    let card = `
                <div class="item">
                    <!-- immagine -->
                    <img src="${element.image}" alt="">

                    <!-- titolo e descrizione -->
                    <div class="info">
                        <h2>${element.title}</h2>
                        <h4>${element.text}</h4>
                    </div>
                    
                </div>
                `;
    
    containerCard.innerHTML += card;
});


// prendo i singoli elementi del mio array -> ciclo FOR
// for(i = 0; i< images.length; i++){
//     console.log(images[i]);

//     // per ogni "i" questo ciclo mi deve creare un div con le immagini
//     let card = `<div class="item">
//                     <img src=${imagineArray[i]} alt="">
//                  </div>`;

//     // dove metto questo div? Nel mio contenitore che è il [div class="col"] quindi aggiungo a riga 18 il richiamo del div

//     // inserisco il div nel contenitore
//     containerCard.innerHTML += card;
//     // vedo che mi si creano sotto le freccie, quindi faccio un ulteriore contenitore
// }

// // ho creato i miei div e ora devo mettere l'active al primo div che poi al click passerà al successivo e così via

// // visto che sono tanti e non posso farlo manualmente creerò anche qua un array -> getElemnts!

// const cardItem = document.getElementsByClassName("item");
// console.log(cardItem);

// // in questo modo seleziono il div numero 4 (quello col gatto)
// console.log(cardItem[3]);

// // inserisco la classe active di prova:
// // cardItem[3].classList.add("active");

// // non potendo cambiare i numeri a mano creo una variabili per andare ad indicare l'indice 
// let indexCardItem = 0; //lo setto a 0 come valore iniziale

// cardItem[indexCardItem].classList.add("active");

// // al click della freccia in giù va alla seconda immagine:

// // richiamo il bottone
// let clickDown = document.querySelector(".arrow_down");

// // aggiungo l'evento di click
// clickDown.addEventListener("click", 
//     function(){

//         // far funzionare le frecce fino a quando ci sono gli elementi in pagina altrimenti si ferma
//         if(indexCardItem < cardItem.length - 1){ //metto il -1 perché altrimenti arrivato all'index 4 mi metterebbe la classe attiva sul 5 che non esiste
//             // tolgo la classe all'elemento che la ha in questo momento
//             cardItem[indexCardItem].classList.remove("active");

//              // aumento il valore dell'indice
//             indexCardItem++;

//             // metto la classe all'elemento corrispondente
//             cardItem[indexCardItem].classList.add("active"); 
        
//         } else { //ciclo infinito del carosello 
//             // togli l'active dall'ultima card
//             cardItem[indexCardItem].classList.remove("active");
//             // risetta l'indice della card a 0
//             indexCardItem = 0;
//             // metti attiva la card con l'indice 0
//             cardItem[indexCardItem].classList.add("active"); 
//         }
//     }
// );


// // al click della freccia in su va all'immagine precedente:

// // richiamo il bottone
// let clickUp = document.querySelector(".arrow_up");

// // aggiungo l'evento di click
// clickUp.addEventListener("click", 
//     function(){

//         // far funzionare le frecce fino a quando ci sono gli elementi in pagina altrimenti si ferma
//         if(indexCardItem > 0){ 
//             // toglie la classe all'elemento corrispondente
//             cardItem[indexCardItem].classList.remove("active"); 

//             // diminuisce l'indice di uno
//             indexCardItem--;

//             // aggiunge la classe all'elemento precedente
//             cardItem[indexCardItem].classList.add("active");

//         } else { //ciclo infinito del carosello 
//             // togli l'active dall'ultima card
//             cardItem[indexCardItem].classList.remove("active");
//             // imposta l'indice della card all'ultima (ovvero la lungezza dell'array -1)
//             indexCardItem = cardItem.length - 1;
//             // metti attiva la card con l'indice descritto sopra
//             cardItem[indexCardItem].classList.add("active"); 
//         }
//     }
// );

