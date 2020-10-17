var logoText = document.getElementById("logo");
let nightModer = document.getElementById("night-mode");
const mT = document.getElementById("mainText");
const iT = document.getElementById("introText");
const wH = document.getElementById("workHeading");
const link = document.getElementById("nifipisiLink");
var logoTextArr = ["-d-nm-", "-d-n-m-", "-dn--m-", "--dnm--", "--d-nm-","d-n--m-","dn-m--"];
let changeLogoCounter = 0;
let timerTime = 0;
let nightMode = true;
let randomer = false;
let pleaseStop = false;
var changeLogoTimer;
var countMouse = 0;

runLogo('soberUp');

function runLogo(flag){
    if (flag === 'goCrazy'){ 
        timerTime = Math.floor(Math.random() * 500);  
    }
    if (flag === 'soberUp') {
        timerTime = 1000;
    }

    changeLogoTimer = setInterval(()=>{
        logoText.innerHTML = logoTextArr[changeLogoCounter];
        //console.log('changeLogoCounter is '+ changeLogoCounter);
        changeLogoCounter++;
        if(changeLogoCounter > logoTextArr.length - 1)
        {
            changeLogoCounter = 0;
        }
        console.log('Speed is '+ timerTime); 
    }, 
    timerTime);
}

logoText.addEventListener('mouseover', () => {
    clearInterval(changeLogoTimer);
    runLogo('goCrazy');  
});

logoText.addEventListener('mouseout', () => {
    clearInterval(changeLogoTimer);
    runLogo('soberUp');
});

nightModer.addEventListener('click', (e) => {
    if(nightMode){
        nightMode = false;
        console.log('night mode is ' + nightMode);
        nightModer.innerHTML = "flash_off";
        nightModer.style.color = "#7e7e7e";
        document.body.style.backgroundColor = "#eeeeee";
        mT.style.color = "#f8f8f8";
        iT.style.color = "#ffffff";
        wH.style.color = "#fbfbfb";
        link.style.color = "#ffffff";
    }
    else{
        nightMode = true;
        console.log('night mode is ' + nightMode);
        nightModer.innerHTML = "flash_on";
        nightModer.style.color = "#7e7e7e";
        document.body.style.backgroundColor = "#121212";
        mT.style.color = "#181818";
        iT.style.color = "#212121";
        wH.style.color = "#1a1a1a";
        link.style.color = "#212121";
        link.style.color = "#212121";
    }
});