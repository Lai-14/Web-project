// top text
// 課程檢索系統
topText1 = document.getElementById("ctl00_hplnkCourseQuest");
topText1.addEventListener("mouseover", change1);
topText1.addEventListener("mouseout", original1);

function original1(){
    text1 = document.getElementById("ctl00_hplnkCourseQuest");
    text1.style.color = "white";
}

function change1(){
    text1 = document.getElementById("ctl00_hplnkCourseQuest");
    text1.style.color = "#d2ea32";
}

// 選課地圖
topText2 = document.getElementById("ctl00_hplnkCourseMap");
topText2.addEventListener("mouseover", change2);
topText2.addEventListener("mouseout", original2);

function original2(){
    text2 = document.getElementById("ctl00_hplnkCourseMap");
    text2.style.color = "white";
}

function change2(){
    text2 = document.getElementById("ctl00_hplnkCourseMap");
    text2.style.color = "#d2ea32";
}

// 系統操作說明
topText3 = document.getElementById("ctl00_hplnkHelp");
topText3.addEventListener("mouseover", change3);
topText3.addEventListener("mouseout", original3);

function original3(){
    text3 = document.getElementById("ctl00_hplnkHelp");
    text3.style.color = "white";
}

function change3(){
    text3 = document.getElementById("ctl00_hplnkHelp");
    text3.style.color = "#d2ea32";
}

// 註課組首頁
topText4 = document.getElementById("ctl00_hplnkRegCur");
topText4.addEventListener("mouseover", change4);
topText4.addEventListener("mouseout", original4);

function original4(){
    text4 = document.getElementById("ctl00_hplnkRegCur");
    text4.style.color = "white";
}

function change4(){
    text4 = document.getElementById("ctl00_hplnkRegCur");
    text4.style.color = "#d2ea32";
}

// 逢甲首頁
topText5 = document.getElementById("ctl00_hplnkFCU");
topText5.addEventListener("mouseover", change5);
topText5.addEventListener("mouseout", original5);

function original5(){
    text5 = document.getElementById("ctl00_hplnkFCU");
    text5.style.color = "white";
}

function change5(){
    text5 = document.getElementById("ctl00_hplnkFCU");
    text5.style.color = "#d2ea32";
}

// 隱私權聲明
topText6 = document.getElementById("ctl00_hplinkPrivacy");
topText6.addEventListener("mouseover", change6);
topText6.addEventListener("mouseout", original6);

function original6(){
    text6 = document.getElementById("ctl00_hplinkPrivacy");
    text6.style.color = "white";
}

function change6(){
    text6 = document.getElementById("ctl00_hplinkPrivacy");
    text6.style.color = "#d2ea32";
}

// left
// 按下登入按鈕
login = document.getElementById("ctl00_Login1_LoginButton");
login.addEventListener("click", onClick);

function onClick(){
    alert("登入");
    window.location.reload();
}