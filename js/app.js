// task-1
document.getElementById("player-caption").style.color = "coral";
document.getElementById("blog-caption").style.color = "purple";

// task-2
const playerDivs = document.getElementsByClassName("player");
for (const player of playerDivs) {
    player.style.backgroundColor = "rgba(75, 207, 250,0.6)";
}

// task-3
document.getElementById("add-new").addEventListener("click", function () {
    const listBox = document.getElementById("list-box");
    const li = document.createElement("li");
    li.innerText = "New Brand";
    listBox.appendChild(li);
});

// task-4