//capitalization 

document.addEventListener("DOMContentLoaded",function(){

    let textElement = document.getElementById("about");

    const letters = textElement.textContent.split('').map(letter =>{
        const span = document.createElement('span');
        span.textContent = letter;
        return span 
    });

    textElement.innerHTML = ''
    letters.forEach(letter =>{
        textElement.appendChild(letter);
    });
    letters[3].classList.add('lowercase')
    console.log(letters)

})