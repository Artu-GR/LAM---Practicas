const addBt = document.getElementById("add-button");
const notes = document.getElementById("sticky-notes");
const noteText = document.getElementById("text");
const Note = document.getElementsByClassName("li");//Lo iba a usar con el boton para editar al igual que la funcion editNote

const colors = ["red", "yellow", "blue", "green", "orange", "turquoise"];

function addStickyNote(){
    if(noteText.value != ''){
        let c = notes.childNodes.length % 6;
        const note = document.createElement("li");
        note.innerHTML = noteText.value;
        note.style.backgroundColor = colors[c];
        if(c % 2 == 1){
            note.style.color = "black";
        }
        notes.appendChild(note);
    }else{
        alert("No se puede crear una nota vacia");
    }
}

function editNote(){
    alert("im here");
}

addBt.addEventListener('click', addStickyNote);