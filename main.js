let isMobile = false;

(window.innerWidth<=600)?isMobile= true:isMobile=false


window.addEventListener('scroll', function() {
    var aboutbox = document.querySelector('.about');
    var projbox = document.querySelector('.projects');
    var planbox = document.querySelector('.plans');
    var scrollPosition = window.scrollY;
    var about=150;
    var proj=650;
    var plan = 850;
    var about_u=1000;
    var proj_u=1230;
    var plan_u = 1430;
    
    console.log(scrollPosition);
    if (isMobile){
        about = 150;
        proj = 300;
        plan = 500 ;
        about_u = 630;
        proj_u = 789;
        plan_u = 935;
    }
    // Adjust the left position based on the scroll position
    aboutbox.style.left = ((scrollPosition > about) && (scrollPosition < about_u)) ? '8vw' : '-100vw';
    planbox.style.left = ((scrollPosition > plan) && (scrollPosition < proj_u)) ? '-57.5vw' : '-100vw';
    projbox.style.left = ((scrollPosition > proj) && (scrollPosition < plan_u)) ? '26vw' : '120vw';
  
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