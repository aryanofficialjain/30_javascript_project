const stars = document.querySelectorAll(".star i");


stars.forEach((star,index1)=>{
    star.addEventListener("click", ()=>{
        stars.forEach((star, index2)=> {
            if(index1>= index2){
                star.classList.add("active");
            }
            else{
                star.classList.remove("active");
            }
        })
    })


})
   