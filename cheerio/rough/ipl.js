const request=require("request");
const fs=require("fs");
const cheerio=require("cheerio");
request("https://www.espncricinfo.com/series/ipl-2020-21-1210595/match-results",callback);
let finaldata=[];
let count=0,totalMatches;
function callback(err,res,html)
{
    if(!err)
    {
       // fs.writeFileSync("temp.html",html);
        let $=cheerio.load(html);
       // let scorecards=$('a[data-hover="Scorecard"]'); 
       let scorecards=$(".match-info-link-FIXTURES");
       totalMatches=scorecards.length;
       for(let i=0;i<totalMatches;i++)
        {
            finaldata.push({});
            let url=$(scorecards[i]).attr("href");
            //console.log("https://www.espncricinfo.com"+url);
            request("https://www.espncricinfo.com"+url,getMatchInfo.bind(this,i));
        }
        }
}
function getMatchInfo(idx,err,res,html)
{
    if(!err)
    {
       //fs.writeFileSync("temp.html",html);
        let $=cheerio.load(html);
        let teamNamesDiv=$(".name-link p");
        let team1=$(teamNamesDiv[0]).text();
        let team2=$(teamNamesDiv[1]).text();
        finaldata[idx][team1]={ "batting" : {"players" : [] }, "bowling" : { "players" : []}};
        finaldata[idx][team2]={ "batting" : {"players" : [] }, "bowling" : { "players" : []}};
       // console.log(finaldata);
        let keyarray=["playerName","","R","B","","4s","6s","SR"];
        let table=$(".table.batsman");
        for(let i=0;i<table.length;i++)
        {
            let rows=$(table[i]).find("tbody tr");
          
            for(let j=0;j<rows.length;j+=2)
            {
                let columns=$(rows[j]).find("td");
                let playerinfo={};
                for(let k=0;k<columns.length;k++)
                {
                    if(k!=1&&k!=4)
                    {
                        playerinfo[keyarray[k]]=$(columns[k]).text();
                    }
                }

                if(i==0)
                {
                    finaldata[idx][team1]["batting"]["players"].push(playerinfo);
                }
                else if(i==1)
                {
                    finaldata[idx][team2]["batting"]["players"].push(playerinfo);
                }
            }   
            }
        keyarray=["playerName","O","M","R","W","ECON","","","","WD","NB"];
        table=$(".table.bowler");
        for(let i=0;i<table.length;i++)
        {
            let rows=$(table[i]).find("tbody tr");
            for(let j=0;j<rows.length;j++)
            {
                let columns=$(rows[j]).find("td");
                let playerinfo={};
                for(let k=0;k<columns.length;k++)
                {
                    if(k!=6&&k!=7&&k!=8)
                    {
                        playerinfo[keyarray[k]]=$(columns[k]).text();
                    }
                }

                if(i==0)
                {
                    finaldata[idx][team1]["bowling"]["players"].push(playerinfo);
                }
                else if(i==1)
                {
                    finaldata[idx][team2]["bowling"]["players"].push(playerinfo);
                }
            }   
            }
            count+=1;
            if(count==totalMatches)
            fs.writeFileSync("finalData.json",JSON.stringify(finaldata));

    }
}