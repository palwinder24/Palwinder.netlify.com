

var homepage = document.getElementById("homepage");
var userpage = document.getElementById("userpage");
var blogpage = document.getElementById("blogpage");
var resumepage = document.getElementById("resumepage");
var heading_text = document.getElementById("heading_text");
var btn1 = document.getElementById("navbtn1").style;
var btn2 = document.getElementById("navbtn2").style;
var btn3 = document.getElementById("navbtn3").style;
var btn4 = document.getElementById("navbtn4").style;
var clor = "rgb(202, 202, 202)";

function loadhome() {
  userpage.style.visibility = "hidden";
  blogpage.style.visibility = "hidden";
  resumepage.style.visibility = "hidden";
  homepage.style.visibility = "visible";
  heading_text.innerHTML = "Home";
  btn1.color = "#4201ff";
  btn2.color = clor;
  btn3.color = clor;
  btn4.color = clor;
}

function loadblog() {
  homepage.style.visibility = "hidden";
  userpage.style.visibility = "hidden";
  resumepage.style.visibility = "hidden";
  blogpage.style.visibility = "visible";
  heading_text.innerHTML = "Blog";
  btn2.color = "#4201ff";
  btn1.color = clor;
  btn3.color = clor;
  btn4.color = clor;
}

function loadresume() {
  homepage.style.visibility = "hidden";
  userpage.style.visibility = "hidden";
  blogpage.style.visibility = "hidden";
  resumepage.style.visibility = "visible";
  heading_text.innerHTML = "Resume";
  btn3.color = "#4201ff";
  btn2.color = clor;
  btn1.color = clor;
  btn4.color = clor;

}
function loaduser() {
  homepage.style.visibility = "hidden";
  blogpage.style.visibility = "hidden";
  resumepage.style.visibility = "hidden";
  userpage.style.visibility = "visible";
  heading_text.innerHTML = "User";
  btn4.color = "#4201ff";
  btn2.color = clor;
  btn3.color = clor;
  btn1.color = clor;
}

// When the user scrolls down 50px from the top of the document, resize the header's font size

window.onscroll = function () { scrollFunction() };
var heading = document.getElementById("heading_text").style;
var hr = document.getElementsByClassName("hr").style;
function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 20) {

    console.log("worked bsdhbf ");
    heading.fontSize = "25px";
    heading.background = "#292929";
    heading.color = "#4201ff";
    heading.alignItems = "center";
    heading.textAlign = "center";
    heading.padding = "2%";


  } else {

    heading.textAlign = "left";
    heading.paddingLeft = "30px";
    heading.paddingTop = "30px";
    heading.fontSize = "37px";
    heading.background = "#292929";


  }
}