let gridContainerDiv= document.querySelector('.grid-container');
let div;
let n= 16
for(let i=0; i<(n*n); i++){
    div = document.createElement('div');
    div.classList.add('box'); 
    let dimension= (1/n)*100
    div.style.length=`${dimension}%`         
    div.style.width=`${dimension}%`                             
    gridContainerDiv.appendChild(div);    
}
let divsArray
function changeColor(){
let divs=document.querySelectorAll('.box')
divsArray=[...divs];
for (let i=0; i<divsArray.length; i++){
    divsArray[i].addEventListener('mouseenter', function(){
        divsArray[i].classList.add('box-color')
    })
}
}
changeColor()
let sizeButton= document.querySelector('.size-button');
sizeButton.addEventListener('click',changeSize)
function changeSize() {
n= +prompt('Enter the new size',16);
gridContainerDiv.replaceChildren();
for(let i=0; i<(n*n); i++){
    div = document.createElement('div');
    div.classList.add('box'); 
    let dimension= (1/n)*100
    div.style.length=`${dimension}%`         
    div.style.width=`${dimension}%`                             
    gridContainerDiv.appendChild(div);    
   }
changeColor();
}

let rainbowButton= document.querySelector('.change-color');
rainbowButton.addEventListener('click',changeToRainbowColor)
let rand;
function changeToRainbowColor(){
    for (let i=0; i<divsArray.length; i++){
        divsArray[i].addEventListener('mouseenter', function(){
        divsArray[i].classList.remove('.box-color')
        rand1= Math.floor(Math.random()*256)
        rand2= Math.floor(Math.random()*256)
        rand3= Math.floor(Math.random()*256)
        divsArray[i].style.backgroundColor=`rgb(${rand1},${rand2},${rand3})`})
    }
}
let eraserButton= document.querySelector('.eraser');
eraserButton.addEventListener('click',erase)
function  erase () {
    for (let i=0; i<divsArray.length; i++){
        divsArray[i].addEventListener('mouseenter', function(){
           divsArray[i].style.backgroundColor="white"})
    }
}
let classicButton= document.querySelector('.classic');
classicButton.addEventListener('click',returnBlack);

function returnBlack(){
    for (let i=0; i<divsArray.length; i++){
        divsArray[i].addEventListener('mouseenter', function(){
           divsArray[i].style.backgroundColor="black"})
    }

}

