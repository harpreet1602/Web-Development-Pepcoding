const request=require("request");
const cheerio=require("cheerio");
const fs=require("fs");
request("https://www.google.com/",callback);
function callback(err,res,html)
{
    if(!err)
    {
      //  fs.writeFileSync("hello.html",html);
        let $=cheerio.load(html);
        let text=$("#tsuid1");
        console.log(text.attr("value"));
    }
}