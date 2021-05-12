const request=require("request");
const cheerio=require("cheerio");
const fs=require("fs");
request("https://github.com/topics",callback);
let finaldata=[];
function callback(err,res,html)
{
    //let arr=[];
   //fs.writeFileSync("githubdata.html",html);
    let $=cheerio.load(html);
    let url=$(".no-underline.d-flex.flex-column.flex-justify-center");
    for(let i=0;i<url.length;i++)
    {
        let link="https://github.com"+$(url[i]).attr("href");
        let name=$($(url[i]).find("p")[0]).text().split(" ")[8].split("\n")[0];
      //  let t=$($(url[i]).find("p")[0]).text();
        // let name1=t.split(' ');
        // let name2=name1.join("");
        // let name3=name2.split("\n");
        // let name4=name3.join("");
        
        finaldata.push({
            "projectName":name,
            "ProjectUrl":link,
            "repo":[]
        });
        request(link,getrepo.bind(this,i));
      //arr.push(link);   
    }
    // console.log(finaldata);
   //console.log(arr);
}
let repocount=0;
function getrepo(finalindex,err,res,html)
{
    if(!err)
    {
      //  fs.writeFileSync("githubdata.html",html);
        let $=cheerio.load(html);
        let repo=$("a.text-bold");
        repocount+=repo.length>8?8:repo.length;
        for(let i=0;i<8 && i<repo.length;i++)
        {
        //console.log("https://github.com/"+$(repo[i]).attr("href"));
        let repolink="https://github.com"+$(repo[i]).attr("href");
        let repoName=$(repo[i]).text().split(" ")[12].split("\n")[0];
        finaldata[finalindex]["repo"].push({
            "repoName":repoName,
            "repoUrl":repolink,
            "issues":[]
        });
        request(repolink+"/issues",getissues.bind(this,finalindex,i));    
    }
    }
}
let count=0,count1=0;
function getissues(finalindex,repoindex,err,res,html)
{
    if(!err)
    {
        count++;
       // console.log(count);
        //fs.writeFileSync("githubdata.html",html);
        let $=cheerio.load(html);
        let issue=$(".Link--primary.v-align-middle.no-underline.h4.js-navigation-open.markdown-title");
        count1=0;
       // console.log("Number of issues"+issue.length);
        for(let i=0;i<8 && i<issue.length;i++)
        {
        // count1++;
        // console.log("Issue no"+count1);
        // console.log($(issue[i]).text());
        // console.log("https://github.com"+$(issue[i]).attr("href"));
        finaldata[finalindex]["repo"][repoindex]["issues"].push({
            "IssueName":$(issue[i]).text(),
            "IssueUrl":"https://github.com"+$(issue[i]).attr("href")
        });
        } 
        
        if(repocount==count)
       fs.writeFileSync("git.json",JSON.stringify(finaldata));  
    }
}