let isMobile = false;
// let prescroll = window.scrollY;

(window.innerWidth<=600)?isMobile= true:isMobile=false

// window.addEventListener("scroll",function(){
//     if (window.scrollY<500){
//         document.getElementById('navbar').style.height = (60- (window.scrollY/3) ) + 'px';
        
//     }else if (window.scrollY>500){
//         document.getElementById('navbar').style.height = '50px';


//     }
//     console.log( this.document.getElementById('navbar').style.height)
// })  

window.inter
window.addEventListener('scroll', function() {
    
    const scrollPosition = window.scrollY;
    

    var aboutbox = document.querySelector('.about');
    var projbox = document.querySelector('.projects');
    var planbox = document.querySelector('.plans');
    var about=150;
    var proj=650;
    var plan = 850;
  
    
    console.log(scrollPosition);
    if (isMobile){
        about = 150;
        proj = 300;
        plan = 500 ;
     
    }
    // Adjust the left position based on the scroll position
    aboutbox.style.left = ((scrollPosition > about) ) ? '8vw' : '-100vw';
    projbox.style.left = ((scrollPosition > proj) ) ? '26vw' : '120vw';
    planbox.style.left = ((scrollPosition > plan)) ? '-57.5vw' : '-100vw';
  
    }
);

function fun ( i){
    if (i ===1){
    
        open("about.html","_blank")
    }
    if (i ===2){
    
        open("proj.html","_blank")
    }
    if (i ===3){
    
        open("plans.html","_blank")
    }
}