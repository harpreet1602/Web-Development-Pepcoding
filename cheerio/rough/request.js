const request=require("request");
const cheerio=require("cheerio");
const fs=require("fs");

request("https://www.espncricinfo.com/series/the-marsh-cup-2020-21-1244113/western-australia-vs-tasmania-15th-match-1244120/ball-by-ball-commentary",callback);
function callback(err,res,html)
{
    if(!err)
    {
        //fs.writeFileSync("hello.html",html);
         let $=cheerio.load(html);
         let commentary=$(".match-comment-short-text");
         let lastcomment=$(commentary[0]);
         for(let i=0;i<commentary.length;i++)
         {
             console.log($(commentary[i]).text());
         }
         console.log(commentary.text());
        console.log(lastcomment.text());
    }
}