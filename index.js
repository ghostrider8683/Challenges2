let btnEl = document.getElementById("btn")
let btn1El = document.getElementById("btn1")
let firstpassEl = document.getElementById("first-pass")
let secondpassEl = document.getElementById("second-pass")

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L",
"M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c",
"d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t",
"u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", 
"9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=",
"{","[","}","]",",","|",":",";","<",">",".","?","/"];

btnEl.addEventListener("click", function(){
    console.log("hello")
    renderToScreen(firstpassEl)
    renderToScreen(secondpassEl)
})

function generatePass(){
    let passGenerated=[] 
    for(let i=0; i<15; i++){
        passGenerated += characters[Math.floor(characters.length*Math.random())]
    }
    console.log(typeof passGenerated[0])
    return passGenerated;
}

function renderToScreen(whichCell){
    whichCell.textContent = generatePass()
}
console.log("hello")

btn1El.addEventListener("click",function(){
    let transfer = document.createElement("input")
    document.body.append(transfer)
    transfer.value = firstpassEl.textContent
    transfer.select()
    document.execCommand("copy")
    document.body.removeChild(transfer)
})
