function toggle() {
    console.log(document.getElementById("primaryNav").classList.toggle("hide"));
}

var year = new Date().getFullYear();
document.getElementById("year").innerHTML=year;


    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Fiday", "Saturday"]
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    var d = new Date();
    var date_now = days[d.getDay()] + ", " + d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear();
    document.getElementById("date").innerHTML= date_now;
