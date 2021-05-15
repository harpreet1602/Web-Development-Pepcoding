let input=document.querySelector("#inp");
let ul=document.querySelector("#list");
input.addEventListener("keypress",function(e){
    //console.log(e);  //object 
    //console.log(e.key);  
    //console.log(e.code);
    if(e.code=="Enter"){
        //console.log(e.currentTarget.value);
        //console.log(1);
        let task=e.currentTarget.value;
        task=task.trim();
        if(task=="") return;
        let li=document.createElement("li");
        li.innerText=task;

        li.addEventListener("dblclick",function(e){
            e.currentTarget.remove();
        });
        // li.addEventListener("click",function(e){
        //     e.currentTarget.innerText="deleted";
        // });
        ul.append(li);
        e.currentTarget.value="";
    }
});