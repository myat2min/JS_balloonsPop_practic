var popped =0;

document.addEventListener('click',function(e){
   
   // e.target.style.display = "none";
   if (e.target.className == "balloon"){
     e.target.style.backgroundColor = "white";
    e.target.textContent = "POP!";
    popped++;
    //console.log(popped);
    checkAll();
   }
});

function checkAll(){
    if (popped == 10){
        var balloondiv = document.querySelector('.balloons-div');
        balloondiv.innerHTML='';
        var noballoondiv = document.querySelector( '#no-balloons');
        noballoondiv.style.display ='block'

    }
}