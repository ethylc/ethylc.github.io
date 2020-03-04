function scrollHome() {
    var elmnt = document.getElementById("section1");
    elmnt.scrollIntoView();
}

function scrollAbout() {
    var elmnt = document.getElementById("section2");
    elmnt.scrollIntoView();
}

function scrollWork() {
    var elmnt = document.getElementById("section3");
    elmnt.scrollIntoView();
}

function scrollContact() {
    var elmnt = document.getElementById("section4");
    elmnt.scrollIntoView();
}

window.onresize = function(event) {
var e = document.getElementById("theElement");
e.scrollIntoView(true);
};