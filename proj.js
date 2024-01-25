const sections = document.querySelectorAll("#s1")



const observer = new IntersectionObserver(entries =>{

    console.log(entries);
})

observer.observe(sections);