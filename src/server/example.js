const puppeteer = require('puppeteer');
const axios = require("axios");
const cheerio = require("cheerio");

axios.get("https://revdinsky--svd.sudrf.ru/modules.php?name=sud_delo", { responseType: 'arraybuffer',  responseEncoding: 'binary' }).then(response => {
 let u8arr = new Uint8Array(response.data);
 let decoder = new TextDecoder("windows-1251");
 let text = decoder.decode(u8arr);
 const $ = cheerio.load(text);
 let arrCategory = [];
 let arrTime = [];
 let arrJudge = [];
 let arrNumber = [];
 let selectCategory;
 let selectTime;
 let selectJudge;
 let selectNumber;
 let data = [];
 let numberOfItems = $("#tablcont > table > tbody > tr").length;
//  let xt = $("#tablcont").find("td").filter(function(i,el){
//      return $(this).text().includes("КАТЕГОРИЯ");
//  }).text();

// !!!!!!!!!!!!!!!!!
// let gt = $("#tablcont").find("td:nth-child(3)").map(function(i,el){
// return $(this).text();
// }).toArray().length;

//  console.log(gt);

 for(let i=0;i<numberOfItems;i++){
    selectCategory = $(`#tablcont > table > tbody > tr:nth-child(${i}) > td:nth-child(5)`).text();
     arrCategory.push(selectCategory);
     selectTime = $(`#tablcont > table > tbody > tr:nth-child(${i}) > td:nth-child(3)`).text();
     arrTime.push(selectTime);
     selectJudge = $(`#tablcont > table > tbody > tr:nth-child(${i}) > td:nth-child(6)`).text();
     arrJudge.push(selectJudge);
     selectNumber = $(`#tablcont > table > tbody > tr:nth-child(${i}) > td:nth-child(2)`).text();
     arrNumber.push(selectNumber);
 }
data.category = arrCategory;
data.time = arrTime;
data.judge = arrJudge;
data.number = arrNumber;
return data;
});

// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto('https://revdinsky--svd.sudrf.ru/modules.php?name=sud_delo&srv_num=1&name_op=case&case_id=214599332&case_uid=5e494b86-42ca-495f-93ae-cd3fbf23cb73&delo_id=1540005&new=');
//   const element = await page.waitForSelector('#cont2 > table > tbody > tr:last-child');
//   const value = await element.evaluate(el => el.textContent);
//   console.log(value);
//   await browser.close();
// })();

