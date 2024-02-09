const list = document.getElementById("list");

function completeList(){
    let c = 40;

    while(c--){
        const listElement = document.createElement("div");
        const block = document.createElement("div");
        const image = document.createElement("div");
        const name = document.createElement("div");
        const playButton = document.createElement("div");
        const icon = document.createElement("i");
        const imageIcon = document.createElement("img");

        imageIcon.src = "iconos/play.svg";
        icon.appendChild(imageIcon);
        playButton.appendChild(icon);

        playButton.className = "playButton";
        name.className = "name";
        image.className = "image";
        block.id = "block";
        listElement.className = "listElement";

        image.innerText = "";
        name.innerText = "Dark";
        
        block.appendChild(image);
        block.appendChild(name);
        block.appendChild(playButton);

        listElement.appendChild(block);

        list.appendChild(listElement);
    }
}

completeList();