

// Get the button that opens the modal
var btn = document.getElementsByClassName("gallery");

var modal = document.getElementsByClassName("modal");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close");
//const span = document.querySelectorAll(".close");
//let likes = Array.apply(null, Array(likeButtons.length)).map(function () { return false; });

// When the user clicks the button, open the modal
for(let i = 0;  i < modal.length; i++){

// When the user clicks on <span> (x), close the modal
span[i].onclick = function() {
  modal[i].style.display = "none";
}


btn[i].onclick = function() {
  modal[i].style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
/*window.onclick = function(event) {
  if (event.target == modal[i]) {
    modal[i].style.display = "none";
  }
}*/
}