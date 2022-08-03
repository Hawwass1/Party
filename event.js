const textElement=document.querySelector("#text")
let x=0
function increase(){
    x+=1
    textElement.innerHTML=x
    checkValue()
}
function decrease(){
    x-=1
    textElement.innerHTML=x
    checkValue()
}
function checkValue(){
    if (x<0) {
        textElement.style.backgroundColor="red"
    }
    else if (x==0) {
        textElement.style.backgroundColor="black"
        textElement.style.color = "#fff"
    }
    else {
        textElement.style.backgroundColor="green"
    }
    

}
