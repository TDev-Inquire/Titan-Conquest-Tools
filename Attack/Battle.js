
var mon1 = document.querySelector("#enemyList > li:nth-child(2) > a > div > div")
var mon2 = document.querySelector("#enemyList > li:nth-child(3) > a > div > div")
var mon3 = document.querySelector("#enemyList > li:nth-child(4) > a > div > div")
var mon4 = document.querySelector("#enemyList > li:nth-child(5) > a > div > div")
var mon5 = document.querySelector("#enemyList > li:nth-child(6) > a > div > div")
var mon6 = document.querySelector("#enemyList > li:nth-child(7) > a > div > div")
var mon7 = document.querySelector("#enemyList > li:nth-child(8) > a > div > div")
var mon8 = document.querySelector("#enemyList > li:nth-child(9) > a > div > div")
var mon9 = document.querySelector("#enemyList > li:nth-child(10) > a > div > div")
var mon10 = document.querySelector("#enemyList > li:nth-child(11) > a > div > div")






async function attack() {
    mon1.click()
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    document.querySelector("body > div.views > div.view.view-main.navbar-through > div.pages > div.page.battlepage.page-on-center > div > div.disable-select.actionswrapper > div > p > a > span").click();
    console.log('after 1 second AGAIN');
  }
  
