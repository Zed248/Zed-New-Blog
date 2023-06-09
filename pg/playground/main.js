

let html_btn = document.querySelector('#html')
let css_btn = document.querySelector('#css')
let js_btn = document.querySelector('#js');


let menuOpen = false;

var btns = document.querySelectorAll('.btn');
var pages = document.querySelectorAll('div[id^="page"]');


for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function () {
    for (var j = 0; j < btns.length; j++) {
      btns[j].classList.remove('active');
    }
    this.classList.add('active');

    for (var k = 0; k < pages.length; k++) {
      pages[k].style.display = 'none';
    }
    var pageNum = this.id.slice(-1);
    document.getElementById('page' + pageNum).style.display = 'flex';
  });
}



//for adding files



let btnsContainer = document.querySelector('#btnscontainer');
let div_container = document.querySelector('.menu-container')


function fileAdd() {
  let myMenus = ["index.html", "style.css", "act.js"]

  let menuContainer = document.querySelector('.menu-container');



  myMenus.map(myMenu => {
    let div = document.createElement('div');
    div.style.cssText = "z-index: 10; position: relative; color: green; font-size: 11pt; cursor: default; padding: 0 2em;";
    div.className = "mymenu"
    div.textContent = myMenu
    div_container.appendChild(div)
  })


  let mymenus = document.querySelectorAll('.mymenu');
  for (var i = 0; i < mymenus.length; i++) {
    mymenus[i].addEventListener('click', function () {
      menuContainer.innerHTML = ""
      if (this.innerHTML == "index.html") {
        btns[0].style.display = "flex"

      } else if (this.innerHTML == "style.css") {
        btns[1].style.display = "flex"


      } else if (this.innerHTML == "act.js") {
        btns[2].style.display = "flex"
      }
    })
  }

}


function closeBtn1() {
  btns[0].style.display = "none"
}

function closeBtn2() {
  btns[1].style.display = "none"

}

function closeBtn3() {
  btns[2].style.display = "none"

}

console.log("Ha You Want to Explore!")