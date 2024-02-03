const addBt = document.getElementById("add-button");
const addBt2 = document.getElementById("agregar");
const noteText = document.getElementById("text");
const stickyNotes = document.getElementById("list");
const newListDiv = document.querySelector(".newList");

const colors = ["red", "yellow", "blue", "green", "orange", "turquoise"];

function addStickyNote(){
    const removeButton = document.getElementById("add-button");
    var notesSize = stickyNotes.getElementsByTagName('*').length;
    let c = (notesSize-1) % 6;
    
    removeButton.parentNode.removeChild(removeButton);

    const note = document.createElement("button");
    note.innerText = noteText.value;
    note.id = "postIt";
    note.style.backgroundColor = colors[c];
    if(c % 2 == 1){
        note.style.color = "black";
    }

    let addButton = document.createElement("button");
    addButton.innerText = "+";
    addButton.id = "add-button";

    stickyNotes.appendChild(note);
    stickyNotes.appendChild(addButton);
}


//Hace que funcione el boton a pesar de ser eliminado y creado de nuevo con cada nota agregada
const div = document.getElementsByTagName("div")[0];

div.addEventListener("click", (event) => {
  if(event.target.id === 'add-button') {
    addStickyNote();
  }
})

addBt2.addEventListener('click', addStickyNote);