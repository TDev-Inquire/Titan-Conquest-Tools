function doAttack(){
    chrome.tabs.executeScript(null, {file: "/Attack/harvest.js"});
    };

function doSelect(){
    chrome.tabs.executeScript(null, {file: "/Attack/AutoFarm.js"});
    };
    
function doLoop(){
    chrome.tabs.executeScript(null, {file: "/Attack/fish.js"});
    };
    
    
    document.getElementById("btnAttack").onclick = doAttack;
    document.getElementById("btnSelect").onclick = doSelect;
    document.getElementById("btnLoop").onclick = doLoop;

    if($("#repeat").is(':checked')){
        // Code in the case checkbox is checked.
        function doRepeat(){
            chrome.tabs.executeScript(null, {file: "/Attack/AutoFarm.js"});
            };
        

   } else {
        // Code in the case checkbox is NOT checked.
   }
     // unchecked
    