// var a = prompt('a = ?')
// var b = prompt('b = ?')

// a = Number(a);
// b = Number(b);

// var sum = a = b



var modal = document.getElementById("myModal");

window.onload = function() {
    modal.style.display = "block";
};

var span = document.getElementsByClassName("close")[0];

// When the user clicks on (x), close
span.onclick = function() {
    modal.style.display = "none";
};

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};





// console.log(mainElement.childNodes.length);


// document.write('The sum is: ' + sum)


// const minusButton = document.getElementById("decrease");
// const plusButton = document.getElementById("increase");
// const resetButton = document.getElementById("reset");
// const countLabel = document.getElementById("count")
// let count = 0;


// plusButton.onclick = function(){
//     count++;
//     countLabel.textContent = count
// }



// minusButton.onclick = function(){
//     count--;
//     countLabel.textContent = count
// }


// resetButton.onclick = function(){
//     count = 0;
//     countLabel.textContent = count
// }
