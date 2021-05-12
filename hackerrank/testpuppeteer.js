const puppy=require("puppeteer");
async function main()
{
    let browser=await puppy.launch({
        headless:false,
        defaultViewport:false
    });
    let tabs=await browser.pages();
    let tab=tabs[0];
    let url="https://www.youtube.com/watch?v=vR_VIDh_Vws";
    await tab.goto(url);
    url=url.replace("www.","www.ss");
    await tab.goto(url);
    await tab.waitForSelector(".link.link-download.subname.ga_track_events.download-icon");
    await tab.click(".link.link-download.subname.ga_track_events.download-icon");
}
main();