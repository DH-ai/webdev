const sections = document.getElementsByClassName("section")



let i = 1;
// function togle(bool){

// }

function aim(){
    document.getElementById("aim").classList.remove("vis")
    document.getElementById("process1").classList.remove("vis")
}

function proc(){
    document.getElementById("aim").classList.add("vis")
    document.getElementById("process1").classList.add("vis")


}



// buttons for navigations 
function next(){
    sections[i].style.left = '0px'
    sections[i].style.top = '0px'
    console.log(i)
    i++;
    
}
function prev(){
    sections[i].style.left = '100vw'
    sections[i].style.top = '100vh'
    console.log(i)
    i--;
}



// slide show code 
// console.log(slides)

// const slides = document.querySelectorAll(".sld");
// console.log(slides)
// offsetp =0;
// let ip =1;
// ordr=0
// const observer = new IntersectionObserver(function (slide){
//     slide.forEach(id => {
        
//         if (!id.isIntersecting){
//             id.target.style.right="-100%";
            
//             ordr++;
//             console.log("order changed   "+ id.target.style.offset)
            
//         }
//     });
// });

// slides.forEach(id=>{
//     observer.observe(id)
// })
// function sld(){
//     // if (slides.forEach(element=>
//     //     element.onmouseover))
    
//     // slides[2].remove()
//     slides.forEach(element => {
//         // element.addEventListener("mouseover",function(){
//             //     offsetp--;
//             // })
//             element.style.right  = offsetp +"px";
            
//             offsetp++;
//             // element.style.position = "fixed"
            
            
            
//         });
//         // offsetp++;
        
        
//     // console.log(ip++)
   
// }

// setInterval(sld,100)