const puppy=require("puppeteer");
const id="canaj35181@ddwfzp.com";
const password="1234567890";
async function main()
{
    let browser=await puppy.launch({
        headless:false,    //browser will be visible if true then not visible
        defaultViewport:false   //so we don't need 600X600 page
    });
    let tabs= await browser.pages();
    let tab=tabs[0];
   // await tab.goto("https://www.youtube.com/");
   //it will give all the tabs open in browser and store it in array
   // console.log(tabs.length);
   // browser.close(); 
    await tab.goto("https://www.hackerrank.com/auth/login?h_l=body_middle_left_button&h_r=login");
    await tab.type("#input-1",id);
    await tab.type("#input-2",password);
    await tab.click(".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled"); //login button  
    await tab.waitForSelector("#base-card-1-link",{visible:true});                    //interview practice     
    await tab.click("#base-card-1-link");
    await tab.waitForSelector('a[data-attr1="warmup"]',{visible:true});            //warm up
    await tab.click('a[data-attr1="warmup"]');
    await tab.waitForSelector(".js-track-click.challenge-list-item");           //4 problems of warm up 
    let problems=await tab.$$(".js-track-click.challenge-list-item");            //array of 4 problems of warm up
    //$$ is used to get all the elements of the class
    let arr=[];
    for(let i=0;i<problems.length;i++)
    {
       let url=await tab.evaluate(function(ele){
        return ele.getAttribute("href");
       },problems[i]); 
      // console.log("https://www.hackerrank.com"+url);
      arr.push(url);
    } 
    
    for(let i=0;i<arr.length;i++)
    {
        await geteditorial("https://www.hackerrank.com"+arr[i],tab);
    }
}
let count=0;
async function geteditorial(url,tab)
{
    let problemurl=url.replace("?","/problem?");
    let editorialurl=url.replace("?","/editorial?");
    //console.log(editorialurl);
    await tab.goto(editorialurl);
    let languages=await tab.$$(".hackdown-content h3");    
    let codes=await tab.$$(".highlight");
    let code;
    for(let i=0;i<languages.length;i++)
    {
        let language=await tab.evaluate(function(ele){
            return ele.innerText;
        },languages[i]);
        //console.log(language);
        if(language=="C++")
        {
               code=await tab.evaluate(function(ele){
                return ele.innerText;
            },codes[i]);
            //console.log(code);            
            break;
        }
    }
    await tab.goto(problemurl);
    await tab.waitForSelector(".checkbox-wrap");
    await tab.click(".checkbox-wrap");
    await tab.click("#input-1");
    await tab.type("#input-1",code);
    await tab.keyboard.down("Control");
    await tab.keyboard.press("A");
    await tab.keyboard.press("X");
    await tab.click(".monaco-scrollable-element.editor-scrollable.vs");
    await tab.keyboard.press("A");
    await tab.keyboard.press("V");
    await tab.keyboard.up("Control");
    await tab.click(".ui-btn.ui-btn-normal.ui-btn-primary.pull-right.hr-monaco-submit.ui-btn-styled");
    await tab.waitForSelector(".congrats-heading",{visible:true});
}
main();