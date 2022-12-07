
var btn = document.getElementsByClassName("gallery");

var modal = document.getElementsByClassName("modal");

var span = document.getElementsByClassName("close");



for(let i = 0;  i < modal.length; i++){


span[i].onclick = function() {
  modal[i].style.display = "none";
}


btn[i].onclick = function() {
  modal[i].style.display = "block";
}

}