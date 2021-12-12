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
            }