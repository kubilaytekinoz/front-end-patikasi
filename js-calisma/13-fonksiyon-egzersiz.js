let counter = 35
let counterDom = document.querySelector("#counter")
let increaseDom = document.querySelector("#increase")
let decreaseDom =document.querySelector("#decrease")
counterDom.innerHTML = counter
increaseDom.addEventListener("click",clickEvent)
decreaseDom.addEventListener("click",clickEvent)

function clickEvent(){
    console.log(this.id)
    if (this.id == "increase"){
        counterDom.innerHTML = counter+= 1
    }else {
        counterDom.innerHTML = counter-= 1
    }

}
