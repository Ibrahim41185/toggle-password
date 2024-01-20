let myinput = document.getElementById("myinput");
let mybtn = document.getElementById("but");

mybtn.onclick = function(){
    if(mybtn.getAttribute("data-text")=="show"){
        myinput.setAttribute("type", "text");
        mybtn.setAttribute("data-text", "hide");
        mybtn.innerHTML = "hide";
    }else{
        myinput.setAttribute("type", "password");
        mybtn.setAttribute("data-text", "show");
        mybtn.innerHTML = "show";
    }
}