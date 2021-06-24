let body=document.querySelector("body");
body.spellcheck = false;

let menuBarPtags = document.querySelectorAll(".menu-bar p");

let columnTags=document.querySelector(".column-tags");

let rowNumbers =  document.querySelector(".row-numbers");

let grid = document.querySelector(".grid");

let oldCell=undefined;

let formulaSelectCell = document.querySelector("select-cell");
//here I need to highlight the option selected and also remove the highlight on clicking it or any other
// option in menu bar 

for(let i=0;i<menuBarPtags.length;i++)
{
    menuBarPtags[i].addEventListener("click",function(e){
        if(e.currentTarget.classList.contains("menu-bar-option-selected"))
        {
            e.currentTarget.classList.remove("menu-bar-option-selected");
        }
        else
        {
            for(let j=0;j<menuBarPtags.length;j++)
            {
                if(menuBarPtags[j].classList.contains("menu-bar-option-selected"))
                menuBarPtags[j].classList.remove("menu-bar-option-selected");
            }
            e.currentTarget.classList.add("menu-bar-option-selected");
        }
    });
}

for(let i=0;i<26;i++)
{
    let div = document.createElement("div");
    div.classList.add("column-tag-cell");
    div.innerText = String.fromCharCode(65+i);
    columnTags.append(div);
}


for(let i=1;i<=100;i++)
{
    let div = document.createElement("div");
    div.classList.add("row-number-cell");
    div.innerText = i;
    rowNumbers.append(div);
}

for(let j=1;j<=100;j++)
{
let row=document.createElement("div");
row.classList.add("row");
//j=1 
//i=0; i+65 => 65 (A)  ==> A1
//i=1; i+65 => 66(B)   ==>B1

//                        Z1
//j=2 repeat
for(let i=0;i<26;i++)
{
    let cell = document.createElement("div");
    cell.classList.add("cell");
    cell.setAttribute("data-address",Sting.fromCharCode(i+65)+j);

    cell.addEventListener("click",function(e){
        if(oldCell)
        {
            oldCell.classList.remove("grid-selected-cell");
        }
        e.currentTarget.classList.add("grid-selected-cell");

        let cellAddress = e.currentTarget.getAttribute("data-address");
        


    });

    cell.contentEditable=true;
    row.append(cell);
}
grid.append(row);
}