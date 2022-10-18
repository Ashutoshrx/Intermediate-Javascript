// just for reference
// var titleToBeAdded = document.getElementsByClassName('card-title')[0];
// var descToBeAdded = document.getElementsByClassName('card-text')[0];
let bodyP = document.getElementsByTagName('body')[0];

let parentDiv = document.createElement('div');
parentDiv.className = 'card';
parentDiv.style = "width: 18rem;";


var titleToBeFetched = document.querySelector('input');
var descToBeFetched = document.querySelector('textarea');

function addToList() {
    createDiv(titleToBeFetched.value, descToBeFetched.value)
    titleToBeFetched.value = '';
    descToBeFetched.value = '';
}

function clearList() {
    parentDiv.remove();
}


function createDiv(title, description) {
    let subDiv = document.createElement('div');
    let subH5 = document.createElement('h5');
    let subPara = document.createElement('p');
    let subBut = document.createElement('button');
    subDiv.className = 'card-title';
    subH5.className = 'card-title';
    subH5.innerText = title;
    subPara.className = 'card-text';
    subPara.innerText = description;
    subBut.type = 'button';
    subBut.className = 'btn btn-danger';
    subBut.innerText = 'DELETE'
    subDiv.appendChild(subH5);
    subDiv.appendChild(subPara);
    subDiv.appendChild(subBut);
    parentDiv.appendChild(subDiv);
    bodyP.appendChild(parentDiv);
    // Dynamically delete operation
    subBut.addEventListener("click", () => {
        subDiv.remove();
    });
}




