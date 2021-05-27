//const shortid= require('shortid');
let allFilters = document.querySelectorAll(".filter div");
let grid = document.querySelector(".grid");
let addButton = document.querySelector(".add");
let body = document.querySelector("body");
let modalVisible = false;

let colors = {
    pink: "#d595aa",
    blue: "#5ecdde",
    green: "#91e6c7",
    black: "black"
};
addButton.addEventListener("click", function () {
    if (modalVisible) return;
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
    wa.addEventListener("keypress",function(e)
    {
        if(e.key=="Enter")
        {
        let task=e.currentTarget.innerText;
        let selectedModalFilter=document.querySelector(".active-modal-filter");
        let color=selectedModalFilter.classList[1];
        let ticket=document.createElement("div");
        ticket.classList.add("ticket");
        //var short=shortid.generate();
        var uuid = Math.random().toString(36).slice(-6);
        ticket.innerHTML=`<div class="ticket-color ${color}"></div>
        <div class="ticket-id">#${uuid}</div>
        <div class="ticket-box" contenteditable>
        ${task}
        </div>`;
        grid.appendChild(ticket);
        modal.remove();
        modalVisible=false;
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

for (let i = 0; i < allFilters.length; i++) {
    allFilters[i].addEventListener("click", function (e) {
        let color = e.currentTarget.classList[0].split("-")[0];
        console.log(color);
        grid.style.backgroundColor = colors[color];
    });
}