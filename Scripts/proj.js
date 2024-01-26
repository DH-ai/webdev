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