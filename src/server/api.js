import axios, { get } from "axios";
import { load } from "cheerio";

export function setData(routing, url) {
  return axios.get(`https://proxy.cors.sh/https://zheleznodorozhny--svd.sudrf.ru/modules.php?name=sud_delo&srv_num=2`, {
    //     mode: 'no-cors',
    //     withCredentials: true,
    //     crossdomain: true,
    //     credentials: 'same-origin',
    // headers: {"Access-Control-Allow-Origin": "*"},
      responseType: "arraybuffer",
      responseEncoding: "REFUSEDbinary",
    }).then((response) => {
      let u8arr = new Uint8Array(response.data);
      let decoder = new TextDecoder("windows-1251");
      let text = decoder.decode(u8arr);
      const $ = load(text);
  let selectTime;
  let selectCategory;
  let selectJudge;
  let selectNumber;
  let objectData = {};
  selectTime = $("#tablcont").find("td:nth-child(3)").map(function(){
  return $(this).text();
  }).toArray();
  selectCategory = $("#tablcont").find("td:nth-child(5)").map(function(){
    return $(this).text();
  }).toArray();
  selectJudge = $("#tablcont").find("td:nth-child(6)").map(function(){
    return $(this).text();
  }).toArray();
  selectNumber = $("#tablcont").find("td:nth-child(2)").map(function(){
    return $(this).text();
  }).toArray();
  if(selectTime.length !== 0){
    objectData.time = selectTime;
  }
  if(selectCategory.length !== 0){
    objectData.category = selectCategory;
  }
  if(selectJudge.length !== 0){
    objectData.judge = selectJudge;
  }
  if(selectNumber.length !== 0){
    objectData.number = selectNumber;
  }
 return objectData;
    });
    // .then((response) => {
    //   let u8arr = new Uint8Array(response.data);
    //   let decoder = new TextDecoder("windows-1251");
    //   let text = decoder.decode(u8arr);
    //   const $ = cheerio.load(text);
    //   let arrCategory = [];
    //   let arrTime = [];
    //   let arrJudge = [];
    //   let arrNumber = [];
    //   let selectCategory;
    //   let selectTime;
    //   let selectJudge;
    //   let selectNumber;
    //   let data = [];
    //   let numberOfItems = $("#tablcont > table > tbody > tr").length;
    //   // selectTime = $("#tablcont").find("td:nth-child(3)").map(function(i,el){
    //   //   return $(this).text();
    //   //   }).toArray().length;
    //   for (let i = 0; i < numberOfItems; i++) {
    //     selectCategory = $(
    //       `#tablcont > table > tbody > tr:nth-child(${i}) > td:nth-child(5)`
    //     ).text();
    //     arrCategory.push(selectCategory);
    //     selectTime = $(
    //       `#tablcont > table > tbody > tr:nth-child(${i}) > td:nth-child(3)`
    //     ).text();

    //     arrTime.push(selectTime);
    //     selectJudge = $(
    //       `#tablcont > table > tbody > tr:nth-child(${i}) > td:nth-child(6)`
    //     ).text();
    //     arrJudge.push(selectJudge);
    //     selectNumber = $(
    //       `#tablcont > table > tbody > tr:nth-child(${i}) > td:nth-child(2)`
    //     ).text();
    //     arrNumber.push(selectNumber);
    //   }
    //   data.category = arrCategory;
    //   data.time = arrTime;
    //   data.judge = arrJudge;
    //   data.number = arrNumber;
    //   return data;
    // });
}


