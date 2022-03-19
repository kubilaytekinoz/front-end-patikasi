let formDom = document.querySelector("#userForm")
formDom.addEventListener('submit',formSubmit)



function formSubmit(event){
    event.preventDefault()
    console.log("işlem gerçekleşti")
    let scoreInputDom = document.querySelector("#score").value
    console.log(scoreInputDom)
    localStorage.setItem('score',scoreInputDom)
   
}