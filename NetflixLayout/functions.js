const list = document.getElementById("list");
const inputText = document.getElementById("textInput");
const recommendations = document.getElementById("recommendations");
const topDiv = document.getElementById("firstDiv");

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

function displayRecommendations(){
    recommendations.style.display = "flex";
    if(inputText.value === "") clearRecommendations();
}

function clearRecommendations(){
    recommendations.style.display = "none";
}

completeList();

inputText.addEventListener('input', displayRecommendations);