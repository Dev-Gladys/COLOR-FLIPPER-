

let button=document.getElementById("clickBtn");


button.addEventListener("click", changeColor);


function changeColor(){
  let colors = ["#E76F51","#F4A261","#FFB703","#1D3557","#FFC8DD","#FF99C8","#FCF6BD"];
  let frameElement = document.querySelector(".myFrame");
  let randomColor=Math.floor(Math.random()*colors.length);
  frameElement.style.backgroundColor=colors[randomColor];
  button.style.backgroundColor=colors[randomColor];
  let hexValue=document.getElementById("colorHexValues");
  hexValue.innerHTML=frameElement.style.backgroundColor=colors[randomColor];

}
