// create and appends el passed num of times
function createEl(parent, el, num){
    for(i = 1; i <= num; i++){
        someDiv = document.createElement(el);
        // someDiv.textContent = 'box' + i;
        someDiv.setAttribute('class', 'boxes');
        someDiv.setAttribute('id', 'box' + i);
        parent.appendChild(someDiv);
    }
}
