let userName = "ktekinoz35"
const domain = "dcdmatik.com"

let email = userName + "@" + domain
console.log("Hoşgeldin : " +userName+ " Mail adresin :" + email)

let info = `Merhaba ${userName} mail adresin : ${email} saat ${new Date().getHours()}:${new Date().getMinutes()}`

console.log(info)