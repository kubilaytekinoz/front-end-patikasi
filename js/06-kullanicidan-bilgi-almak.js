let fullName = prompt("Lütfen kullanıcı adınızı giriniz","")

let greeting = document.querySelector("#greeting")
greeting.innerHTML = `${greeting.innerHTML} <small style="color:red"> ${fullName}</small>`
console.log(greeting)