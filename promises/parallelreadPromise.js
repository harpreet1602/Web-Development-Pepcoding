const fs=require("fs");
function main(){
    for(let i=1;i<=8;i++)
    {
        let readpromise=fs.promises.readFile(i+".txt","utf-8");
        readpromise.then(function(data){
            console.log(i+" file has been read");
            // console.log(data);
        })
    }
}
main();