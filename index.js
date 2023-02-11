const yes = document.getElementById("yesButton");
const container = document.getElementById("container");
const close = document.getElementById("close");
const result = document.getElementById("result-container");
yes.addEventListener("click", ()=>{
    container.style.display = "none";
    result.style.display = "block";
});

const no = document.getElementById("noButton");
no.addEventListener("mouseover", ()=>{
    var i = Math.floor(Math.random()*900)+1;
    var j = Math.floor(Math.random()*400)+1;
    container.style.left = i+"px";
    container.style.top = j+"px";
    
})

close.addEventListener("mouseover", ()=>{
    var i = Math.floor(Math.random()*1000)+1;
    var j = Math.floor(Math.random()*700)+1;
    container.style.left = i+"px";
    container.style.top = j+"px";
    
})
