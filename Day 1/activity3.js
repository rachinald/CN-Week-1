let date1 = new Date('11/16/2021');
let date2 = new Date('02/20/2022');
let diff = date2.getTime() - date1.getTime();
let msInDay = 1000 * 3600 * 24;
let result = diff/msInDay;
console.log(result);