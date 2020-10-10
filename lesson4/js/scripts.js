function toggle() {
    console.log(document.getElementById("primaryNav").classList.toggle("hide"));
}

var modified = document.lastModified;
document.getElementById("last_updated").innerHTML=modified;

var year = new Date().getFullYear();
document.getElementById("year").innerHTML=year;