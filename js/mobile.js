var widths = screen.width;
var height = screen.height;
var homepage = document.getElementById("homepage");
var userpage = document.getElementById("contactpage");
var blogpage = document.getElementById("blogpage");
var resumepage = document.getElementById("resumepage");
var heading_text = document.getElementById("heading_text");
var btn1 = document.getElementById("navbtn1").style;
var btn2 = document.getElementById("navbtn2").style;
var btn3 = document.getElementById("navbtn3").style;
var btn4 = document.getElementById("navbtn4").style;
var clor = "rgb(202, 202, 202)";
var img = document.getElementById("heroimg");
var wid = screen.width;
if (wid < 901) {
    img.src = "https://instagram.fslv1-2.fna.fbcdn.net/vp/40c18de2523b7b3edbb9a8f383dc8810/5DB74F89/t51.2885-19/s150x150/61303548_850893918599943_5550910738026987520_n.jpg?_nc_ht=instagram.fslv1-2.fna.fbcdn.net";
} else {
    img.src = "img/plogo144.png";
}

console.log(widths)

function loadhome() {
    userpage.style.visibility = "hidden";
    userpage.style.height = "2px";
    blogpage.style.visibility = "hidden";
    blogpage.style.height = "2px";

    resumepage.style.visibility = "hidden";
    resumepage.style.height = "2px";
    homepage.style.visibility = "visible";
    homepage.style.height = "auto";
    btn1.color = "#4201ff";
    btn2.color = clor;
    btn3.color = clor;
    btn4.color = clor;
    var wid = screen.width;
    if (wid < 901) {
        heading_text.innerHTML = "About Me";
    } else {
        heading_text.style.visibility = "hidden";
    }

}

function loadblog() {
    homepage.style.visibility = "hidden";
    homepage.style.height = "1px";
    userpage.style.visibility = "hidden";
    userpage.style.height = "1px";
    resumepage.style.visibility = "hidden";
    resumepage.style.height = "1px";
    blogpage.style.visibility = "visible";
    blogpage.style.height = "auto";
    var wid = screen.width;
    if (wid < 901) {
        heading_text.innerHTML = "Blog";
    } else {
        heading_text.style.visibility = "hidden";
    }
    btn2.color = "#4201ff";
    btn1.color = clor;
    btn3.color = clor;
    btn4.color = clor;
}

function loadresume() {
    homepage.style.visibility = "hidden";
    homepage.style.height = "2px";
    userpage.style.visibility = "hidden";
    userpage.style.height = "2px";
    blogpage.style.visibility = "hidden";
    blogpage.style.height = "2px";
    resumepage.style.visibility = "visible";
    resumepage.style.height = "auto";
    var wid = screen.width;
    if (wid < 901) {
        heading_text.innerHTML = "Resume/C.V";
    } else {
        heading_text.style.visibility = "hidden";
    }
    btn3.color = "#4201ff";
    btn2.color = clor;
    btn1.color = clor;
    btn4.color = clor;

}

function loaduser() {
    homepage.style.visibility = "hidden";
    homepage.style.height = "2px";
    blogpage.style.visibility = "hidden";
    blogpage.style.height = "2px";
    resumepage.style.visibility = "hidden";
    resumepage.style.height = "2px";

    userpage.style.visibility = "visible";
    userpage.style.height = "auto";
    var wid = screen.width;
    if (wid < 901) {
        heading_text.innerHTML = "Contact";
    } else {
        heading_text.style.visibility = "hidden";
    }
    btn4.color = "#4201ff";
    btn2.color = clor;
    btn3.color = clor;
    btn1.color = clor;
}
if (wid < 901) {


    // When the user scrolls down 50px from the top of the document, resize the header's font size

    window.onscroll = function() { scrollFunction() };
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
}