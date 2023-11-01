var con = document.querySelector("body");
var dil = document.querySelector("i");

con.addEventListener("dblclick",function(){

    
    dil.style.transform = 'translate(-50%, -50%) scale(1.5)'
    dil.style.opacity = 0.8;
    setTimeout(function(){
        dil.style.opacity = 0;

    },550)
    setTimeout(function(){
        dil.style.transform = 'translate(-50%, -50%) scale(1)'

    },600)
})