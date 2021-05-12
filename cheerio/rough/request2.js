const request=require("request");
const fs=require("fs");
const cheerio=require("cheerio");
request("https://www.espncricinfo.com/series/ipl-2021-1249214/mumbai-indians-vs-royal-challengers-bangalore-1st-match-1254058/full-scorecard",callback);
function callback(err,res,html)
{
    if(!err)
    {
        //fs.writeFileSync("hello.html",html);
        let $=cheerio.load(html);
        let maxwicket=-(parseInt)(1e9);
        let bowlers=$(".table.bowler tbody tr");
        let player="";
        //console.log(bowlers.length);
        // for(let i=0;i<bowlers.length;i++)
        // {
        //     let name=$(bowlers[i]).find("td");
        //     console.log($(name[0]).text());
        // }
        for(let i=0;i<bowlers.length;i++)
        {
            let column=$(bowlers[i]).find("td");
            let wicket=parseInt($(column[4]).text());
            if(maxwicket<wicket)
            {
           player=$(column[0]).text();
            maxwicket=wicket;
            }
        }
        console.log(player+" "+maxwicket);
    }
}