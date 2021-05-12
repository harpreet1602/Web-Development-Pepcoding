const puppy = require("puppeteer");
const fs = require("fs");
async function main() {
    let browser = await puppy.launch({
        headless: false,
        defaultViewport: false
    });
    let tabs = await browser.pages();
    let tab = tabs[0];
    await tab.goto("https://alpha2320.github.io/covid-19.io/");
    await covidResources(tab, "OxygenCylinders", 0);
    await covidResources(tab, "Hospitalbeds", 2);
    await covidResources(tab, "Onlineconsultation", 3);
    await covidResources(tab, "FoodSupply", 4);
    await covidResources(tab, "HomeQuarantine", 5);
    await covidResources(tab, "AmbulanceService", 6);
}
main();
async function covidResources(tab, boxname, i) {
    await tab.waitForSelector(".text-2xl.font-semibold.items-center.py-6", { visible: true });
    let boxes = await tab.$$(".text-2xl.font-semibold.items-center.py-6");
    await tab.evaluate(function (ele) {
        ele.click();
    }, boxes[i]);
    await tab.waitForSelector(".text-xl.font-semibold.my-2", { visible: true });
    let names = await tab.$$(".text-xl.font-semibold.my-2");
    let info = await tab.$$(".flex.space-x-2.text-gray-400.text-sm");
    let verifiedAt = await tab.$$(".text-base.text-gray-400.font-semibold");
    let k = 0;
    let box = [];
    for (let i = 0; i < names.length; i++) {
        let name = await tab.evaluate(function (ele) {
            return ele.innerText;
        }, names[i]);
        k = 2 * i;
        let information1 = await tab.evaluate(function (ele) {
            return ele.innerText;
        }, info[k]);
        let arr=information1.split("\n");
        let info1=arr.join("");
        let information2 = await tab.evaluate(function (ele) {
            return ele.innerText;
        }, info[k + 1]);
        let verify = await tab.evaluate(function (ele) {
            return ele.innerText;
        }, verifiedAt[i]);
        box.push({
            "Name": name,
            "Info1": info1,
            "Info2": information2,
            "Verified At": verify
        });
        if (i == names.length - 1)
            fs.writeFileSync(boxname + ".json", JSON.stringify(box));
    }
    await tab.click('a[href="./index.html"]');
}