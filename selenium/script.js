const cd=require("chromedriver");
const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

const driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();
    driver.get('https://www.cricbuzz.com/live-cricket-scores/33773').then(function(){
        return driver.findElements(By.className('cb-nav-tab'))
    }).then(function(data){
        data[1].click();
    }).then(function(){
        return driver.wait(webdriver.until.elementLocated(By.css(".cb-col.cb-col-100.cb-ltst-wgt-hdr")));
    }).then(function(){
        return driver.findElements(By.css(".cb-col.cb-col-100.cb-ltst-wgt-hdr"));
    }).then(function(tables){
        let promises=[];
        for(let i=0;i<8;i+=2)
        {
            promises.push(tables[i].findElements(By.css('.cb-col.cb-col-100.cb-scrd-itms')));
        }
        return Promise.all(promises);
    }).then(function(data){
        let promises=[];
        for(let i=0;i<data.length;i++)
        {
            for(let j=0;j<data[i].length;j++)
            {
                promises.push(data[i][j].findElements(By.css('div')));
            }
        }
        return Promise.all(promises);
    }).then(function(data){
        for(let i=0;i<data.length;i++)
        {
            if(data[i].length==7)
            {
                data[i][0].getText().then(function(playername){
                    console.log(playername);
                })
            }
        }
    });