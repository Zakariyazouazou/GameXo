
var turnOf="X"
var titel = document.getElementById("title")
var tabel = []
function test( a , b , c){
       a.style.backgroundColor='red'
       b.style.backgroundColor='red'
       c.style.backgroundColor='red'
       titel.innerHTML="the winner is " + a.innerHTML ; 

       setInterval(function(){titel.innerHTML+='.'},500)
       setTimeout(() => {
           window.location="XO.html"
       }, 2000);
}

function winner(){
    for (var i = 1 ; i<10 ; i++){
        tabel[i] = document.getElementById("item"+i)
    }
    if(tabel[1].innerHTML===tabel[2].innerHTML && tabel[2].innerHTML===tabel[3].innerHTML && tabel[1].innerHTML!==""){
        test( tabel[1] , tabel[2] , tabel[3])
    }
    else if(tabel[4].innerHTML===tabel[5].innerHTML && tabel[5].innerHTML===tabel[6].innerHTML && tabel[4].innerHTML!==""){
        test( tabel[4] , tabel[5] , tabel[6])
    }
    else if(tabel[7].innerHTML===tabel[8].innerHTML && tabel[8].innerHTML===tabel[9].innerHTML && tabel[7].innerHTML!==""){
        test( tabel[7] , tabel[8] , tabel[9])
    }
    else if(tabel[1].innerHTML===tabel[5].innerHTML && tabel[5].innerHTML===tabel[9].innerHTML && tabel[1].innerHTML!==""){
        test( tabel[1] , tabel[5] , tabel[9])
    }
    else if(tabel[3].innerHTML===tabel[5].innerHTML && tabel[5].innerHTML===tabel[7].innerHTML && tabel[3].innerHTML!==""){
        test( tabel[3] , tabel[5] , tabel[7])
    }
    else if(tabel[1].innerHTML===tabel[4].innerHTML && tabel[4].innerHTML===tabel[7].innerHTML && tabel[1].innerHTML!==""){
        test( tabel[1] , tabel[4] , tabel[7])
    }
    else if(tabel[2].innerHTML===tabel[5].innerHTML && tabel[5].innerHTML===tabel[8].innerHTML && tabel[8].innerHTML!==""){
        test( tabel[2] , tabel[5] , tabel[8])
    }
    else if(tabel[3].innerHTML===tabel[6].innerHTML && tabel[6].innerHTML===tabel[9].innerHTML && tabel[3].innerHTML!==""){
        test( tabel[3] , tabel[6] , tabel[9])
    }

}






function game(id){
    var item = document.getElementById(id);
    if(turnOf==='X'&& item.innerHTML==""){
          item.innerHTML='X'
          titel.innerText='turn of O'
          turnOf = "O"
    }
    else if(turnOf==='O'&& item.innerHTML==""){
        item.innerHTML='O'
        titel.innerText='turn of X'
        turnOf = "X"
  
        
    }
    winner()
}