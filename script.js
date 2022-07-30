function calculate()
{
    var prAmount = document.getElementById("prAmount").value;
    var iRate = document.getElementById("iRate").value;
    var tYears = document.getElementById("tYears").value;
    if (prAmount == "") {
        alert("Enter a positive number");
        document.getElementById("prAmount").focus();
        return false;
    }else {
        if (prAmount <= 0) {
            alert("Enter a positive number");
            document.getElementById("prAmount").focus();
            return false;
        }
    }
    var CurrentDate = new Date().getFullYear();
    var finalYear = parseInt(CurrentDate,10) + parseInt(tYears,10);
    var totalInterest = prAmount * tYears * iRate / 100;
    var finalInfo = "If you deposit <mark>" + prAmount + "</mark>,<br> at an interest rate of <mark>" + iRate + "</mark>%. <br> You will receive an amount of <mark>" + totalInterest + ",</mark><br> in the year <mark>" + finalYear + "</mark>";
    document.getElementById("result").innerHTML=finalInfo;
}

function showValue(freshVal){ 
    document.getElementById("InterestRate").innerHTML=freshVal + '%';
}