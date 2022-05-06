

// Declare a function that takes two parameters, el and num to create elements a given number of times
function createEl(parent, el, num){
    for(i = 1; i <= num; i++){
        console.log(i);
        someDiv = document.createElement(el);
        someDiv.textContent = 'Hello';
        someDiv.setAttribute('id', 'box' + i);
        console.log(someDiv.id);
        parent.appendChild(someDiv);
    }
}
