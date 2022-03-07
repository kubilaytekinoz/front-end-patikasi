let welcome = document.querySelector('#welcome')
welcome.addEventListener("mouseover",domClick)

function domClick(){
    console.log("etkinlik test")
    this.style.color == "red" ? this.style.color = "black" : this.style.color = "red"
}