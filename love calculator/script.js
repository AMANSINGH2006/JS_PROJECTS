function calculateLove(){
    const name1 = document.getElementById("name1").value;
    const name2 = document.getElementById("name2").value;
    const result = document.getElementById("result");

    if(name1.trim() === "" || name2.trim() === ""){
        alert("Please Enter both names");
    }
    // button.disabled = false;
    const lovePercentage = Math.floor(Math.random() * 101);

    result.innerHTML = `${name1} and ${name2}'s love percantage : ${lovePercentage}%`;
    
    if(lovePercentage < 30){
        result.innerHTML += "<br> Not Matching. Keep looking";
        button.disabled = true;
    }
    else if(lovePercentage >= 30 && lovePercentage < 70){
        result.innerHTML += "<br> There is potential. Give it a try";
        button.disabled = true;
    }
    else{
        result.innerHTML += "<br> Wow Perfect Match ! Love is in the Air"
        button.disabled = true;
    }
}