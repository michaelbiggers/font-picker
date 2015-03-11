var main = document.getElementById("main");
var descriptor = document.getElementById("descriptor");

var classic = document.getElementById("classic");
var modern = document.getElementById("modern");
var formal = document.getElementById("formal");
var lobster = document.getElementById("lobster");
var alegreya = document.getElementById("alegreya");

  classic.onclick = function (){
    main.className = "cinzel";
    descriptor.innerHTML = "a strong, simple look";
    }
  modern.onclick = function (){
    main.className = "raleway";
    descriptor.innerHTML = "a clean, modern look";
    }
    
  formal.onclick = function (){
    main.className = "tangerine";
    descriptor.innerHTML = "an elegant look";
    }

  lobster.onclick = function (){
    main.className = "lobster";
    descriptor.innerHTML = "a more contemporary cursive look";
    }
  alegreya.onclick = function (){
    main.className = "alegreya";
    descriptor.innerHTML = "a more contemporary cursive look";
    }
