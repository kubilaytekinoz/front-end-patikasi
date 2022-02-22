let itemLast = document.querySelector("ul#list>li:last-child").innerHTML
let itemFirst = document.querySelector("ul#list>li:first-child").innerHTML
console.log(itemLast)
console.log(itemFirst)

let ulDom = document.querySelector("ul#list")
let liDom = document.createElement("li")
liDom.innerHTML = "kendi oluşturduğumuz öğe"

ulDom.append(liDom)
ulDom.prepend(liDom)