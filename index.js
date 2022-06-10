/*const closeButton = document.getElementById("close-modal");
const openButton = document.getElementById("open-modal");
const overlay = document.getElementById("overlay");

overlay.style.display = "none";*/
/** 
  Creating interactive buttons: Open Modal
  
  0) Add 'display: none' to '#overlay' - we want to hide it initially!
  1) Use document.getElementById to target "open-modal"
  2) Add an event listener of "click"
  3) Use document.getElementById to target "overlay" and change the style.display to "block"
**/
/*
openButton.addEventListener('click', function openModal() {
    overlay.style.display = "block";
});
*/

document.getElementById("open-modal").addEventListener("click", function() {
    document.getElementById("overlay").style.display = "block";
})
/** 
  Creating interactive buttons: Close Modal
  
  1) Use document.getElementById to target "close-modal"
  2) Add an event listener of "click"
  3) Use document.getElementById to target "overlay" and change the style.display to "none"
**/

/*
closeButton.addEventListener('click', function closeModal() {
    overlay.style.display = "none";
});
*/
document.getElementById("close-modal").addEventListener("click", function() {
    document.getElementById("overlay").style.display = "none";
})