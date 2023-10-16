//Creo un array che conterrà la lista dell'utente
let list = [];

// Creo una variabile su cui dovrà scrivere l'utente
let item = '';

// Creo un ciclo che permetta all'utente di creare una lista e poi dire stop
while (item !== 'stop'){
    item = prompt('Aggiungi alla lista');
    item = item.trim();

    if(item !== 'stop' && item !== ''){
        console.log(item);
        list.push(item);
    }
}

console.log(list);

// Con la lista creata ora devo stampare il contenuto sulla pagina
const listEl = document.getElementById("list");
for(i = 0; i < list.lenght; i++){
    const listItemEl = document.createElement("li");
    listItemEl.innerHTML = list[i];
    listEl.appendChild(listItemEl);
}
