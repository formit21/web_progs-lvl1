let colors = ["blue", "red", "yellow", "green", "black", "white" ];
let div = document.createElement("div");
div.id = "pallete"
div.style.display = "flex"
document.body.appendChild(div);
 
for(let i = 0; i < colors.length; i++ ){
    let div = document.createElement("div");
    div.id=colors[i]
    div.style.height = "50px";
    div.style.width = "50px";
    div.style.borderRadius = "100%";
    div.style.border = "1px solid black";
    div.style.backgroundColor = colors[i];
    

    pallete.appendChild(div);
}
   pallete.style.marginLeft = (window.innerWidth/2) - ((colors.length*50)/2) + "px"
   
   let canvas = document.createElement("canvas")
   canvas.id = "field"
   canvas.style.border = "2px solid black"
   canvas.width = window.innerWidth/2
   canvas.height = window.innerWidth*0.8

   canvas.style.marginLeft = (window.innerWidth/2) - (canvas.width/2) + "px";
   canvas.style.marginTop = "50px"
   document.body.appendChild(canvas);

let color = "black";
let bruhSize = 0;
let prevX = prevY = 0;
let currX = currY = 0;
let isDraw = false;

for(let i = 0; i < colors.length; i++ ){
    document.getElementById(colors[i]).addEventListener("click", function(event){
        
        for(let i = 0; i < colors.length; i++ ){
            document.getElementById(colors[i]).style.width= "50px"
            document.getElementById(colors[i]).style.height = "50px"
            
        }
        event.target.style.width = "75px"
        event.target.style.height = "75px"
    
    
        color = event.target.id;
        console.log(color);
    })
}

canvas.addEventListener("mouseup", function(event){
    isDraw = false;
})
canvas.addEventListener("mouseout", function(event){
    isDraw = false;
})
canvas.addEventListener("mousedown", function(event){
        isDraw = true;
        prevX = currX;
        prevY = currY;
        currX = event.offsetX;
        currY = event.offsetY;
})
canvas.addEventListener("mousemove", function(event){
    if(isDraw == true){
        prevX = currX;
        prevY = currY;
        currX = event.offsetX;
        currY = event.offsetY;
        draw() ;
    }
})

function draw(){
    let context = canvas.getContext("2d");
    context.beginPath();
    context.moveTo(prevX, prevY);
    context.lineTo(currX, currY);
    

    context.strokeStyle = color;
    context.lineWidth = bruhSize;

    context.stroke();




    context.closePath();




}
   
   
