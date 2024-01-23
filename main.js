let isMobile = false;
let prescroll = window.scrollY;

(window.innerWidth<=600)?isMobile= true:isMobile=false


window.addEventListener('scroll', function() {
    
    const scrollPosition = window.scrollY;
    console.log();
    if ((prescroll>scrollPosition)){ 
        document.getElementById("navbar").style.top="0px";
    } else{
        // document.getElementById('navbar').style.top="-80px"
    }

    var aboutbox = document.querySelector('.about');
    var projbox = document.querySelector('.projects');
    var planbox = document.querySelector('.plans');
    var about=150;
    var proj=650;
    var plan = 850;
    var about_u=900;
    var proj_u=1230;
    var plan_u = 1630;
    
    // console.log(scrollPosition);
    if (isMobile){
        about = 150;
        proj = 300;
        plan = 500 ;
        about_u = 610;
        proj_u = 769;
        plan_u = 915;
    }
    // Adjust the left position based on the scroll position
    aboutbox.style.left = ((scrollPosition > about) && (scrollPosition < about_u)) ? '8vw' : '-100vw';
    projbox.style.left = ((scrollPosition > proj) && (scrollPosition < proj_u)) ? '26vw' : '120vw';
    planbox.style.left = ((scrollPosition > plan) && (scrollPosition < plan_u)) ? '-57.5vw' : '-100vw';
  
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