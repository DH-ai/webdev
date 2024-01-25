const sections = document.querySelectorAll(".section")
console.log


const observer = new IntersectionObserver(entries =>{
    entries.forEach(entry=>{
        entry.target.classList.toggle("vp",entry.isIntersecting);
    })
    // console.log(entries);
},{
    threshold:0.6
})

// sections.forEach(section =>{observer.observe(section);});
sections.forEach(section=>{observer.observe(section)});