let t1ScoreS = document.getElementById("t1ScoreS");
let t2ScoreS = document.getElementById("t2ScoreS");
let firstTeamName = document.getElementById("firstTeamName");
let secondTeamName = document.getElementById("secondTeamName");
let number =0;

function t1Score(){
    number++;
    t1ScoreS.innerHTML=number;
}

function t1Azalt(){
    if(number <= 0){
        number =0;
        alert("skor 0 dan kucuk olamaz")
    }
    else{
        number--;
    }
    t1ScoreS.innerHTML = number;
}

function t2Score(){
    number++;
    t2ScoreS.innerHTML= number;
}
function t2Azalt(){
    if(number <=0 ){
        number=0;
        alert("skor 0 dan kucuk olamaz")
    }
    else{
        number--;
    }
    t2ScoreS.innerHTML=number;
}
function nameOne(){
    let name = prompt("Takım A'nin İsimini değiştiriniz.")
    
    if (name !== null && name.trim() !== "" ){
        firstTeamName.innerHTML = name;
    }
    else{
        alert("Lütfen geçerli bir takım adı giriniz!");
    }
}

function nameTwo(){
    let name = prompt("Takım B'nin İsimini değiştiriniz.")
    
    if (name !== null && name.trim() !== "" ){
        secondTeamName.innerHTML = name;
    }
    else{
        alert("Lütfen geçerli bir takım adı giriniz!");
    }
}

document.getElementById("resetButtonA").addEventListener("click", function(){
    document.getElementById("t1ScoreS").innerHTML = "0"
})

document.getElementById("resetButtonB").addEventListener("click", function(){
    document.getElementById("t2ScoreS").innerHTML = "0"
})

function editA(){
    const score = prompt("Yeni gol saysını giriniz:")
    if(score !== null && !isNaN(score)){
        const scoreNum = parseInt(score)
        document.getElementById("t1ScoreS").innerHTML = scoreNum;
    }
    else{
        alert("Giriş iptal edildi veya geçersiz bir değer girildi.")
    }
}

function editB(){
    const score = prompt("Yeni gol saysını giriniz:")
    if(score !== null && !isNaN(score)){
        const scoreNum = parseInt(score)
        document.getElementById("t2ScoreS").innerHTML = scoreNum;
    }
    else{
        alert("Giriş iptal edildi veya geçersiz bir değer girildi.")
    }
}