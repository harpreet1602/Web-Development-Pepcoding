let req = indexedDB.open("Camera", 1);
//req marega camera database open karne ka
let db;
let body=document.querySelector("body");

req.addEventListener("success", function(){
    db=req.result;
});

req.addEventListener("upgradeneeded", function(){
    let accessToNotesDB = req.result;
    accessToNotesDB.createObjectStore("Gallery",{ keyPath: "mId" });

});

req.addEventListener("error", function(){
    console.log("error");
});
//script.js
function addMedia(media,type){
    if(!db) return;
    let obj = { mId: Date.now(), media, type};
    //Date.now() use it for student purpose not for industry level
    let tx = db.transaction("Gallery","readwrite");
    let gallery = tx.objectStore("Gallery");
    gallery.add(obj);
}
//gallery.html
function viewMedia(){
    let tx = db.transaction("Gallery","readonly");
    let gallery = tx.objectStore("Gallery");
    let cReq = gallery.openCursor();
    
    cReq.addEventListener("success",function(){
        let cursor = cReq.result;
        if(cursor){
            console.log(cursor.value);
            let mo = cursor.value;
            //dom ke through media container banana hoga
            let mediaContainer = document.createElement("div");
            mediaContainer.classList.add("media-container");
            
            if(mo.type=="video")
            {
                //I have to render a video tag
                mediaContainer.innerHTML=` 
                <div class="media">
                <video src="" ></video>
                </div>
                <button class="download"></button>
                <button class="delete"></button>`;
                body.append(mediaContainer);
            }
            else
            {
                //render a image tag
              
            }
            cursor.continue();
        }
    });

        
}