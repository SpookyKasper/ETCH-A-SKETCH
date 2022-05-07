// create and appends el passed num of times
function createEl(parent, el, num){
    for(i = 1; i <= num; i++){
        console.log(i);
        someDiv = document.createElement(el);
        someDiv.textContent =  `Hello I'm div number ` + i;
        someDiv.setAttribute('class', 'boxes');
        someDiv.setAttribute('id', 'box' + i);
        parent.appendChild(someDiv);
    }
}
