const li = document.getElementsByClassName("box");


for(var i = 0; i < li.length; i++){
    li[i].addEventListener("click", function(){
        this.classList.toggle("active");
    });
    
}
