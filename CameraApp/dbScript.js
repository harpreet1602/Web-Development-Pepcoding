let req = indexedDB.open("Camera", 1);
//req marega camera database open karne ka
let db;

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

function addMedia(media,type){
    let obj = { mId: Date.now(), media, type};
    //Date.now() use it for student purpose not for industry level
    let tx = db.transaction("Gallery","readwrite");
    let gallery = tx.objectStore("Gallery");
    gallery.add(obj);
    

}