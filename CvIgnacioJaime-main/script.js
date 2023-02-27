
const elements = document.querySelectorAll(".text");

for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener("mouseover", function() {
    this.style.transform = "scale(1.1)";
  });
  
  elements[i].addEventListener("mouseout", function() {
    this.style.transform = "scale(1)";
  });
}


