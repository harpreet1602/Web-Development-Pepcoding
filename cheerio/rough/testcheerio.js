const request=require("request");
const fs=require("fs");
const cheerio=require("cheerio");
request("https://www.songspk2.info/single",callback);
let finaldata=[];
function callback(err,res,html)
{
    if(!err)
    {
       // fs.writeFileSync("hello.html",html);
        let $=cheerio.load(html);
        let link=$(".album-list a");
        for(let i=0;i<link.length;i++)
        {
            let url=$(link[i]).attr("href");
            //console.log(url);
            request(url,callback2);
        }
    }
}
function callback2(err,res,html)
{
    if(!err)
    {
       // fs.writeFileSync("hello.html",html);
        let $=cheerio.load(html);
        let song=$("h5 strong");
        let artists=$(".songs-artists");
        let link=$(".songs-bitrate-3 a");
        finaldata.push({
            "song":song.text(),
            "artists":artists.text(),
            "link":link.attr("href")
        });
        fs.writeFileSync("song.json",JSON.stringify(finaldata));
    }
}