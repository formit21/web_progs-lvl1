let step = 10

function setCSS(element, rule, value){
    let css = window.getComputedStyle(element)[rule].replace("px", "");
    element.style[rule] = (parseInt(css) + value) + "px"

}


   function finish(){
    let h1 = p1.style.height. replace("px", "");
    let h2 = p2.style.height. replace("px", "");
    let hr = window.getComputedStyle(fin)["margin-top"].replace("px, ");
    let finish
 }



function game(event){

    if(event.keyCode == 32){
        let h1 = p1.style.height;
        h1 = h1.replace("px", "");
        h1 = parseInt(h1) + step ;
        p1.style.height = h1 + "px";

    }
    else if (event.keyCode == 38){
        setCSS(p2, "height" , step);
    }
    else{
        alert("No ");
    }
}

document.addEventListener("keyup", game)
