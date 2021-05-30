let allFilters = document.querySelectorAll(".filter div");
let grid = document.querySelector(".grid");
let addButton = document.querySelector(".add");
let body = document.querySelector("body");
let modalVisible = false;
let short = new ShortUniqueId();
let colors = {
    pink: "#d595aa",
    blue: "#5ecdde",
    green: "#91e6c7",
    black: "black"
};
let colorClasses = ["pink", "blue", "green", "black"];
let delbtn = document.querySelector(".delete");
let delState = false;
let ticket;

//initialization step of local storage
if (!localStorage.getItem("tasks")) {
    localStorage.setItem("tasks", JSON.stringify([]));
}

addButton.addEventListener("click", function () {
    if (modalVisible) return;
    if (delbtn.classList.contains("del-state")) {
        delState = false;
        delbtn.classList.remove("del-state");
    }
    let modal = document.createElement("div");
    modal.classList.add("modal-container");
    modal.setAttribute("click-first", true);

    modal.innerHTML = `<div class="writing-area"  contenteditable>Enter your task
    </div>
    <div class="filter-area">
            <div class="modal-filter pink"></div>
            <div class="modal-filter blue"></div>
            <div class="modal-filter green"></div>
            <div class="modal-filter black active-modal-filter"></div>
    </div>`;
    let wa = modal.querySelector(".writing-area");
    wa.addEventListener("click", function () {
        if (modal.getAttribute("click-first") == "true") {
            wa.innerHTML = "";
            modal.setAttribute("click-first", false);
        }
    });
    wa.addEventListener("keypress", function (e) {
        if (e.key == "Enter") {
            let task = e.currentTarget.innerText;
            let selectedModalFilter = document.querySelector(".active-modal-filter");
            let color = selectedModalFilter.classList[1];
            let ticket = document.createElement("div");
            ticket.classList.add("ticket");
            let id=short();
            //var uuid = Math.random().toString(36).slice(-6);
            ticket.innerHTML = `<div class="ticket-color ${color}"></div>
        <div class="ticket-id">#${id}</div>
        <div class="ticket-box" contenteditable>
        ${task}
        </div>`;
        saveTicketInLocalStorage(id,color,task);
            grid.appendChild(ticket);
            modal.remove();
            modalVisible = false;
            ticket.addEventListener("click", function (e) {
                if (delState) {
                    e.currentTarget.remove();
                }
            });
            let ticketcol = ticket.querySelector(".ticket-color");
            ticketcol.addEventListener("click", ticketcolHandler);
            let ticketWritingArea=ticket.querySelector(".ticket-box");
            ticketWritingArea.addEventListener("input",ticketWritingAreaHandler);
        }
    });
    body.appendChild(modal);
    modalVisible = true;
    let allModalFilter = modal.querySelectorAll(".filter-area div");
    for (let i = 0; i < allModalFilter.length; i++) {
        allModalFilter[i].addEventListener("click", function () {
            for (let j = 0; j < allModalFilter.length; j++) {
                allModalFilter[j].classList.remove("active-modal-filter");
            }
            allModalFilter[i].classList.add("active-modal-filter");
        });
    }
});

delbtn.addEventListener("click", function (e) {
    if (delState) {
        delState = false;
        delbtn.classList.remove("del-state");
    }
    else {
        delState = true;
        delbtn.classList.add("del-state");
    }
});

for (let i = 0; i < allFilters.length; i++) {
    allFilters[i].addEventListener("click", function (e) {
        let color = e.currentTarget.classList[0].split("-")[0];
        console.log(color);
        grid.style.backgroundColor = colors[color];
    });
}
function saveTicketInLocalStorage(id,color,task){
    let requiredObj= { id, color, task};
    let taskArr=JSON.parse(localStorage.getItem("tasks"));
    taskArr.push(requiredObj);
    localStorage.setItem("tasks",JSON.stringify(taskArr));
}

function ticketcolHandler(e) {
    let id=e.currentTarget.parentElement.querySelector(".ticket-id").innerText.split("#")[1];
    let reqind=-1;
    let taskArr=JSON.parse(localStorage.getItem("tasks"));
    for(let i=0;i<taskArr.length;i++)
    {
        if(taskArr[i].id==id)
        {
            reqind=i;
            break;
        }
    }
    let currcol = e.currentTarget.classList[1];
    let ind = colorClasses.indexOf(currcol);
    ind++;
    ind = ind % 4;
    console.log(ind);
    e.currentTarget.classList.remove(currcol);
    e.currentTarget.classList.add(colorClasses[ind]);
    taskArr[reqind].color=colorClasses[ind];
    localStorage.setItem("tasks",JSON.stringify(taskArr));
}

function ticketWritingAreaHandler(e){
    let id=e.currentTarget.parentElement.querySelector(".ticket-id").innerText.split("#")[1];
    let reqind=-1;
    let taskArr=JSON.parse(localStorage.getItem("tasks"));
    for(let i=0;i<taskArr.length;i++)
    {
        if(taskArr[i].id==id)
        {
            reqind=i;
            break;
        }
    }
    taskArr[reqind].task=e.currentTarget.innerText;
    localStorage.setItem("tasks",JSON.stringify(taskArr));
}

function loadTasks()
{
    let tasksArr=JSON.parse(localStorage.getItem("tasks"));
}