const puppy=require("puppeteer");
const id="canaj35181@ddwfzp.com";
const password="1234567890";
let moderators = [
    "bansalbhavesh47",
    "bansalbhavesh50",
    "nocidi6371", 
    "ralariv999", 
    "yasekin473", 
    "sibaje3329", 
    "pamahex943"
];
async function main(){
    let browser=await puppy.launch({
        headless:false,
        defaultViewport:false
   });
   let tabs=await browser.pages();
   let tab=tabs[0];
   await tab.goto("https://www.hackerrank.com/auth/login");
   await tab.type("#input-1",id);
   await tab.type("#input-2",password);
   await tab.click(".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled");
   await tab.waitForNavigation({waitUntil:"networkidle2"});
   //await tab.waitForSelector(".username.text-ellipsis");
   await tab.click(".dropdown-handle.nav_link.toggle-wrap");
   await tab.waitForSelector("a[data-analytics='NavBarProfileDropDownAdministration']");
   await tab.click("a[data-analytics='NavBarProfileDropDownAdministration']");
   await tab.waitForSelector(".nav-tabs.nav.admin-tabbed-nav li");
   let link=await tab.$$(".nav-tabs.nav.admin-tabbed-nav li a");
    await link[1].click();
    await tab.waitForSelector(".btn.btn-green.backbone.pull-right");
    let challenge=await tab.$(".btn.btn-green.backbone.pull-right");
    let challengeurl=await tab.evaluate(function(ele){
        return ele.getAttribute("href");
    },challenge);
    let challenges=["challenge 1","challenge 2","challenge 3","challenge 4","challenge 5"];
    // console.log("https://www.hackerrank.com"+challengeurl);  
    for(let i=0;i<challenges.length;i++)
    {
        await createChallenge("https://www.hackerrank.com"+challengeurl,challenges[i],tab);
    }
//    await tab.waitForSelector("#problem_statement-container .CodeMirror-line",{visible:true});
//  // await tab.click(".block.span12.profile-input.pull-left #problem_statement-container");
   }
main();
async function createChallenge(url,challenge,tab){
    await tab.goto(url);
    await tab.waitForSelector("#name");
    await tab.type("#name",challenge);
    await tab.waitForSelector("#preview");
    await tab.type("#preview",challenge);
    await tab.waitForSelector(".CodeMirror textarea");
    let textareas=await tab.$$(".CodeMirror textarea");
    for(let i=0;i<textareas.length;i++)
    {
      await textareas[i].type(challenge);
    }
    await tab.waitForSelector("#tags_tag");
    await tab.type("#tags_tag",challenge);
    await tab.keyboard.press("Enter");
    await tab.click(".save-challenge.btn.btn-green");
    await tab.waitForSelector('li[data-tab="moderators"]');
    await tab.click('li[data-tab="moderators"]');
    await tab.waitForSelector("#confirmBtn");
    await tab.click("#confirmBtn");
    await tab.waitForSelector('li[data-tab="moderators"]');
    await tab.click('li[data-tab="moderators"]');
    await tab.waitForSelector("#moderator");
    for(let i=0;i<moderators.length;i++)
    {
        await tab.type("#moderator",moderators[i]);
        await tab.keyboard.press("Enter");
    }
    await tab.click(".save-challenge.btn.btn-green");
}