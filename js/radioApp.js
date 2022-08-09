// Date and Time
function updateTime() {    
    const today = new Date();
    var displayTime = today.toLocaleTimeString();
    var updateTimeDisplay = setInterval(dateTimeClock, 1000);
    
    function dateTimeClock() {
        var upDate = new Date();
        var displayTime = upDate.toLocaleTimeString();
        document.getElementById("date-time").innerHTML = today.toDateString() + " | " + displayTime;
    }
}
updateTime();



const radioPlayer = document.querySelector('#radioPlayer');
const wtmdBtn = document.querySelector('#wtmd');
const wyprBtn = document.querySelector('#wypr');
const wnrnBtn = document.querySelector('#wnrn');
const jempBtn = document.querySelector('#jempRadio');
const nowPlaying = document.querySelector('#nowPlaying');
radioPlayer.volume = 0.7; //set initial audio player volume to 0.7
wyprBtn.addEventListener('click', changeStation2);
wtmdBtn.addEventListener('click', changeStation1);
wnrnBtn.addEventListener('click', changeStation3);
jempBtn.addEventListener('click', changeStation4);

function changeStation1() {
    radioPlayer.src = "https://wtmd-ice.streamguys1.com/wtmd.mp3";
    radioPlayer.type = "audio/mpeg";
    radioPlayer.setAttribute('autoplay', true);
    wtmdBtn.classList.add("activeBtn");
    wyprBtn.classList.remove("activeBtn");
    wnrnBtn.classList.remove("activeBtn");
    jempBtn.classList.remove("activeBtn");
    
}

function changeStation2() {
    radioPlayer.src = "http://playerservices.streamtheworld.com/api/livestream-redirect/WYPR_HD1.mp3";
    radioPlayer.type = "audio/mp4";
    radioPlayer.setAttribute('autoplay', true);
    wyprBtn.classList.add("activeBtn");
    wtmdBtn.classList.remove("activeBtn");
    wnrnBtn.classList.remove("activeBtn");
    jempBtn.classList.remove("activeBtn");
}

function changeStation3() {
    radioPlayer.src = "https://22113.live.streamtheworld.com/WNRNFM_128.mp3";
    radioPlayer.type = "audio/mpeg";
    radioPlayer.setAttribute('autoplay', true);
    wnrnBtn.classList.add("activeBtn");
    wyprBtn.classList.remove("activeBtn");
    wtmdBtn.classList.remove("activeBtn");
    jempBtn.classList.remove("activeBtn");
}

function changeStation4() {
    radioPlayer.src = "https://streaming.radio.co/sd71de59b3/listen";
    radioPlayer.type = "audio/mpeg";
    radioPlayer.setAttribute('autoplay', true);
    jempBtn.classList.add("activeBtn");
    wyprBtn.classList.remove("activeBtn");
    wnrnBtn.classList.remove("activeBtn");
    wtmdBtn.classList.remove("activeBtn");
}

document.onload(changeStation1());