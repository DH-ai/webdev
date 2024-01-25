//capitalization 

const observer = new IntersectionObserver(function(clas){
    console.log("da")
    clas.forEach(id => {
        
        if (id.isIntersecting){
            console.log("d");
            
        }
    });
    

},{threshold:0.5})

observer.observe(document.getElementById("roceket1"));