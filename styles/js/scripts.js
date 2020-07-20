// scripts for navbar effect blogpage
window.onscroll = function() {myFunction()};
var x = document.getElementById("test");

function myFunction(){
if (window.pageYOffset >= x.offsetTop - 150) {
chuchu.classList.add("x");
fills.classList.add("fills");
} else {
chuchu.classList.remove("x");
fills.classList.remove("fills");

}
}
// end
