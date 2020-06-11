function scrollHome() {
    var elmnt = document.getElementById("section1");
    elmnt.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
}

function scrollAbout() {
    var elmnt = document.getElementById("section2");
    elmnt.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
}

function scrollWork() {
    var elmnt = document.getElementById("section3");
    elmnt.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
}

function scrollContact() {
    var elmnt = document.getElementById("section4");
    elmnt.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
}

$(document).ready(function () {
    $(window).load(function () {
        setTimeout(function () {
            $('.loader').fadeOut(1000);
            $('.show').show();
            AOS.refresh();
        }, 1200)
    });
});