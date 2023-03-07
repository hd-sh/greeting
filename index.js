'use strict'

var now = new Date(),
  hour = now.getHours(),
  greeting

if (hour < 6) {greeting = '凌晨好！';}
else if (hour < 9) {greeting = '早上好！';}
else if (hour < 12) {greeting = '上午好！';}
else if (hour < 14) {greeting = '中午好！';}
else if (hour < 17) {greeting = '下午好！';}
else if (hour < 19) {greeting = '傍晚好！';}
else if (hour < 22) {greeting = '晚上好！';}else {greeting = '夜深了，早点休息！';}
function greetings () {
  // console.log(greeting)
  return greeting
}
module.exports = greetings
