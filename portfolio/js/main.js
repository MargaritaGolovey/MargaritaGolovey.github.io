const humburger=document.querySelector(".humburger");
const menu=document.querySelector(".menu");
const close=document.querySelector(".menu__close");
const li=document.querySelectorAll(".menu__link");


humburger.addEventListener("click", function(){
    menu.classList.add('active');
});
close.addEventListener("click", function(){
    menu.classList.remove('active');
});

li.forEach((item)=>{
   item.addEventListener("click", function(){
    menu.classList.remove('active');
   });
})



const counter=document.querySelectorAll('.skills__progress-value'),
      lines=document.querySelectorAll('.skills__progress-line')  ;

counter.forEach((item, i)=>{
    lines[i].style.width=item.innerHTML;
});



const sidepenal=document.querySelector(".sidepanel");
const divider=document.querySelector(".sidepanel__divider");
const svg=document.querySelectorAll(".sidepanel svg path");
window.addEventListener("scroll", function(){
    if(window.pageYOffset>800){
        sidepenal.style.color= "black";
        divider.style.backgroundColor= "black";
        svg.forEach((item)=>{
            item.style.fill="black";
        }); 
    }
    else{
        sidepenal.style.color= "white";
        divider.style.backgroundColor= "white";
        svg.forEach((item)=>{
            item.style.fill="white";
        }); 
    }
});


