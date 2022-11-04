// Select increment and decrement buttons
const incrementCount = document.getElementsByClassName("inc-btn");
const decrementCount = document.getElementsByClassName("dec-btn");
const totalCount = document.getElementById("total-count");

for (var i = 0; i < incrementCount.length; i++) {
  var buttton = incrementCount[i];
  buttton.addEventListener("click", function (event) {
    var butttonClicked = event.target;

    var input = butttonClicked.parentElement.children[3];
    //console.log(input);
    var inputValue = input.innerText;

    var newValue = parseInt(inputValue) + 1;

    input.innerText = newValue;

    var newTotalCount = parseInt(totalCount.innerText);
    totalCount.innerText = newValue;
  });
}

for (var i = 0; i < decrementCount.length; i++) {
  var buttton = decrementCount[i];
  buttton.addEventListener("click", function (event) {
    var butttonClicked = event.target;

    var input = butttonClicked.parentElement.children[3];
    //console.log(input);
    var inputValue = input.innerText;

    var newValue = parseInt(inputValue) - 1;

    if (newValue >= 0) {
      input.innerText = newValue;
    } else {
      input.innerText = 0;
    }
    var newTotalCount = parseInt(totalCount.innerText);
    totalCount.innerText = newValue;
  });
}

const icon = document.getElementsByClassName("rate");
//console.log(icon);

const classes = icon.classList;

for (var i = 0; i < icon.length; i++) {
  icon[i].addEventListener("click", () => {
    classes.toggle("fa-regular fa-star ");
  });
}
