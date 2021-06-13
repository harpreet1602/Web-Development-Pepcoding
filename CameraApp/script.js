let video=document.querySelector("video");
let start=document.querySelector("#start")
let stop=document.querySelector("#stop");
let chunks=[];
start.addEventListener("click",function(){
    //code likhna hai jise recording start ho
    mediaRecorder.start();
});
stop.addEventListener("click",function(){
    //code likhna hai jise recording band ho
    mediaRecorder.stop();
});
navigator.mediaDevices
.getUserMedia({ video:true , audio:true})
.then(function(mediaStream){
    // let options = { mimeType : "video/webm" };
    mediaRecorder=new MediaRecorder(mediaStream);
    
    mediaRecorder.addEventListener("dataavailable",function(e){
        chunks.push(e.data);
    });
    mediaRecorder.addEventListener("stop",function(e){
        let blob=new Blob(chunks,{ type: "video/mp4" });
        chunks = [];
        let a=document.createElement("a");
        let url=window.URL.createObjectURL(blob);
        a.href=url;
        a.download="video.mp4";
        a.click();
        a.remove();
    });
    video.srcObject=mediaStream;
})
.catch(function(err){
    console.log(err);
});