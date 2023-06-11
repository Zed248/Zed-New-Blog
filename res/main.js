
//for Night Mood & Day Mood
var mood_label = document.querySelector('._mood-label');
var mood_btn = document.querySelector('#_mood_btn')
var mood_icon = document.querySelector('#mood-icon');


let menuOpen = false;

mood_btn.addEventListener('click', function () {
  if (!menuOpen) {
    mood_icon.className = "fa-solid fa-sun fa-1x";
    mood_label.innerText = "Light";
    menuOpen = true;
    document.querySelector('body').classList.add('active')
    document.querySelector('.__nav').classList.add('active')
    document.querySelector('.__home_showcase_container').classList.add('active');
  } else {
    mood_icon.className = "fa-solid fa-moon fa-1x";
    mood_label.innerText = "Dark";
    menuOpen = false;
    document.querySelector('body').classList.remove('active')
    document.querySelector('.__nav').classList.remove('active')
    document.querySelector('.__home_showcase_container').classList.remove('active');
  }
})


function notify_Error() {
  alert("Coming Soon.....!")
}


window.onscroll = function () { mySticky() };

var navbar = document.querySelector(".__nav");
var sticky = navbar.offsetTop;

function mySticky() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }

  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myScrollIndicatingBar").style.width = scrolled + "%";

}




