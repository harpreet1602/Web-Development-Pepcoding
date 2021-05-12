const request=require("request");
const fs=require("fs");
const cheerio=require("cheerio");
request("https://www.espncricinfo.com/series/ipl-2021-1249214/mumbai-indians-vs-royal-challengers-bangalore-1st-match-1254058/full-scorecard",callback);
let finaldata=[];
function callback(err,res,html)
{
    if(!err)
    {
        //fs.writeFileSync("hello.html",html);
        let $=cheerio.load(html);
        let link=$(".batsman-cell");
        for(let i=0;i<link.length;i++)
        {
        //console.log("https://www.espncricinfo.com"+$(link[i]).find("a").attr("href"));
        request("https://www.espncricinfo.com"+$(link[i]).find("a").attr("href"),getbirthday);
        }
    }
}
function getbirthday(err,res,html)
{
    if(!err)
    {
        //fs.writeFileSync("hello.html",html);
        let $=cheerio.load(html);
        let fullcard=$(".player_overview-grid h5");
 //      console.log($(fullcard[0]).text());
   //     console.log($(fullcard[1]).text());
   let player=$(fullcard[0]).text();
   let birthday=$(fullcard[1]).text();
        finaldata.push(
            {
                "Player":player,
                "Birthday":birthday
            }
        );
    }
    fs.writeFileSync("finaldata.json",JSON.stringify(finaldata));
}