function akanName(){
    var yob = document.getElementById("yob").value;
    var month = document.getElementById("bornmonth").value;
    var day = document.getElementById("bornday").value;
    var theName;
    var indexNumber;

    var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    var siku = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    if (month <= 0 || month > 12){
    alert("Please give a month between 1 and 12");
    process.exit();
    } 
    if (day <= 0 || day > 31){
    alert("Please give a better dates ranging from 1 to 31!!");
    process.exit();
    } 

    var cc = parseInt(yob/100);
    var yy = parseInt(yob % 100);
    var mm = parseInt(month);
    var dd = parseInt(day);

    indexNumber = (((cc / 4) - 2 * cc - 1 ) + ((5 * yy / 4)) + ((26 * (mm + 1) / 10)) + dd) % 7;

    var indexNum = parseInt(indexNumber);

    if (document.getElementById("maleselect").checked == true){
        document.getElementById("femaleselect").checked == false;
        if(indexNum === 0){
            theName = maleNames[0];
        }
        else if(indexNum === 1){
            theName = maleNames[1];
        }
        else if(indexNum === 2){
            theName = maleNames[2];
        }
        else if(indexNum === 3){
            theName = maleNames[3];
        }
        else if(indexNum === 4){
            theName = maleNames[4];
        }
        else if(indexNum === 5){
            theName = maleNames[5];
        }
        else if(indexNum === 6){
            theName = maleNames[6];
        }

    } else {
        if(indexNum === 0){
            theName = femaleNames[0];
        }
        else if(indexNum === 1){
            theName = femaleNames[1];
        }
        else if(indexNum === 2){
            theName = femaleNames[2];
        }
        else if(indexNum === 3){
            theName = femaleNames[3];
        }
        else if(indexNum === 4){
            theName = femaleNames[4];
        }
        else if(indexNum === 5){
            theName = femaleNames[5];
        }
        else if(indexNum === 6){
            theName = femaleNames[6];
        }
    }

    document.getElementById("akanname").innerHTML="Your birthday is: " + day + "/" + month + "/" + yob + " and you were born on a " + siku[indexNum] + 
    ". Finally, your Akan name is " + theName;
    alert("your name is " + theName);
}


