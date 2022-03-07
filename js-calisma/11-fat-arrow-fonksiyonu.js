function hello(Fname){
    console.log(`Merhaba ${Fname}`)
}

hello("kubilay")

const helloFunc = (firstName,lastName) => {
    let greeting = `Merhaba ${firstName} ${lastName}`
    console.log(greeting)
    return greeting
}
helloFunc("Kubilay","Tekinöz")

