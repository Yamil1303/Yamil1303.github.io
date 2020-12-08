function toggle() {
    console.log(document.getElementById("primaryNav").classList.toggle("hide"));
}

var year = new Date().getFullYear();
document.getElementById("year").innerHTML=year;