
// Javascript Variables-----------------------------------
var marks = {
    name: 'Ashutosh',
    score: '99.98',
    rank: 1
};
var persons = [
    {
        firstName: 'Ashutosh',
        lastName: 'Satapathy',
        Age: 23
    },
    {
        firstName: 'Ronnie',
        lastName: 'Satapathy',
        Age: 12
    }
]
// console.log("Use of arrays in javacript:" + JSON.stringify(persons));
// console.log((persons.valueOf()));

var arr = [1, 2, 3, 4, 5];
/*arr.array.forEach(element => {
    console.log(element);
});*/
// not working

let st = "Ashutosh is a bad person & has a bad personality."
// console.log(st);
// console.log(st.split('bad').join('good'));

// Date methods
let myDate = new Date();
// console.log(myDate.toLocaleTimeString());

// DOM Manipulation
let primaryButton =
    document.getElementsByClassName("primary");
// console.log(primaryButton);

let primaryButtonId =
    document.getElementById("clickMe");
// console.log(primaryButtonId.innerHTML);

var tn = document.getElementsByTagName('div');
// console.log(document.getElementsByTagName('div'));
// tn[1].style.background = 'cyan';

function toggleImg() {
    if (document.getElementsByTagName('div')[0].style.display == 'block') {
        document.getElementsByTagName('div')[0].style.display = 'None';
        document.getElementById('clickMe').innerText = 'Click to add images';
    }
    else {
        document.getElementsByTagName('div')[0].style.display = 'block';
        document.getElementById('clickMe').innerText = 'Click to remove images';
    }
}
// Selecting query selector
var sel = document.querySelector('.div1');
// console.log("printing via selector:", sel);
// console.log("Completed till 2:24->https://www.youtube.com/watch?v=hKB-YGF14SY&t=3066s");

// Events in Javascript
// secondClickMe.addEventListener('click', function () {
//     console.log("button was clicked");
// });

// idDiv3.addEventListener('click', function () {
//     console.log("cotainer was clicked");
// });



idDiv3.addEventListener('mouseover', function () {
    let dynamicVar = document.createElement('b');
    dynamicVar.id = 'dynamicBId';
    dynamicVar.innerHTML = 'Developed By Ashutosh Satapathy with &#10084; ' +
        'and something very big is coming up.';
    // document.getElementById('idDiv3').appendChild(document.createElement('br'));
    document.getElementById('idDiv3').appendChild(dynamicVar);
});

idDiv3.addEventListener('mouseout', function () {
    let dynamicB = document.getElementById('dynamicBId');
    document.getElementById('idDiv3').removeChild(dynamicB);
});

// Set timeout and setInterval

let dynamicTime = document.createElement('h1');

setInterval(() => {
    var date = new Date();
    dynamicTime.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}, 1000);

document.getElementById('idDiv3').appendChild(dynamicTime);

// Getting values in inputTypeText
var nameInput = document.getElementById('name');
console.log(nameInput);

let dynamicGreet = document.createElement('h2');
function inputChange(e) {
    inputName=document.getElementById("name").value;
    dynamicGreet.innerHTML=`<center>Hi ${inputName}, Welcome to my website</center>`;
}

document.getElementById('idDiv1').appendChild(dynamicGreet);