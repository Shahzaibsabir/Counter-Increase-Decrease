
let numArr = 0;
numTag = document.querySelector("h1")

function increment() {

    numArr++;
    numTag.textContent = numArr;
    console.log(numArr);

    if (numTag.textContent > 0) {
        numTag.style.color = "white";
    }
}



function decrement() {

    numArr--;
    numTag.textContent = numArr;
    console.log(numArr);

    if (numTag.textContent < 0) {
        numTag.style.color = "red";
    }
}


function reset() {

    numTag.textContent = 0;
}
