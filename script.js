var btnclick = document.getElementById("getakan");
btnclick.addEventListener("click", function() {
    // checks the validity of date and month
    let d = parseInt(document.getElementById("date").value);
    let m = parseInt(document.getElementById("month").value);
    if ((d <= 0) || (d > 31)) {
        alert("Invalid date, please input again");
    }
    if ((m <= 0) || (m > 12)) {
        alert("invalid month,please input again");
    } //calculates the day
    let y = parseInt(document.getElementById("year").value);
    c = Math.round(((y / 100) + 1));
    var theday = (((c / 4) - 2 * c - 1) + ((5 * y / 4)) + ((26 * (m + 1) / 10)) + d) % 7;
    //checks whether female or male
    var male = document.getElementById("male");
    var female = document.getElementById("female");
    if (male.checked == true) {
        var days = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
        var dayborn = days[Math.round(theday)];
        document.getElementById("akan").innerHTML = dayborn;
    } else if (female.checked == true) {
        var days = ["Akisau", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
        var dayborn = days[Math.round(theday)];
        document.getElementById("akan").innerHTML = dayborn;
    } else {
        alert("gender not selected");
    }
});