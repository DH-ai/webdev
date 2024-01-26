const sections = document.getElementsByClassName("section")



let i = 1;
function togle(bool){

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