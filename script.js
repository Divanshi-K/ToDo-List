const inputBox = document.getElementById("input-box");
const listContaniner = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("You must add somethingh!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContaniner.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}
listContaniner.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContaniner.innerHTML);
}
function showTask(){
    listContaniner.innerHTML = localStorage.getItem("data");
}
showTask();