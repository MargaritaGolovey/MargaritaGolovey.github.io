document.querySelector("#sortingHight").onclick=mySort;

function mySort(){

    const div=document.querySelectorAll(".product-price");
    // console.log(div.length);
    for(let i=0;i<div.length;i++){
        for(let j=i;j<div.length;j++){
            if(+div[i].getAttribute("data-sort") > +div[j].getAttribute("data-sort")){
                let temp=div[i];
                div[i]=div[j];
                div[j]=temp;
                
        }
    }
} }

mySort();