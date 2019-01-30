
//transformar minusculas y mayusculas
//Tranformar solo la primer letra de cada palabra
//fondo amarillo para una palabra pasada como parametro
window.onload = init 
let textArea

function init(){
    textArea = document.getElementById('textToTranform')
    textArea.focus()
    upper = document.getElementById('upperTransform')                                
    lower = document.getElementById('lowerTransform')                        
    capital  = document.getElementById('capitalTransform')
    clean  = document.getElementById('clean')

    upper.addEventListener('click',()=>{
        if(textArea.value)
            textArea.value = lowertoUpper(textArea.value.trim())
        else
            showNotification()
    })
    lower.addEventListener('click',()=>{
        if(textArea.value)
            textArea.value = uppertoLower(textArea.value.trim())
        else
            showNotification()
    })
    capital.addEventListener('click',()=>{
        if(textArea.value)
            textArea.value = printString(transformCapitalLetter(textArea.value.trim()))
        else
            showNotification()
    })
    clean.addEventListener('click',()=>{
        textArea.value = '';
        textArea.focus()
    })
}

function showNotification(){
    alert('El texto no ha sido ingresado')
    textArea.focus()
}

function lowertoUpper(string){
    return string.toUpperCase()
}
function uppertoLower(string){
    return string.toLowerCase()
}
function transformCapitalLetter(string){
    let iterations = string.length
    for(let i=0;i<iterations;i++)
    {
        stringSplitted = string.split(' ')
        iterations2 = stringSplitted.length
        for(j=0;j<iterations2;j++)
        {
            stringSplitted[j]=stringSplitted[j].replace(stringSplitted[j][0],stringSplitted[j][0].toUpperCase())
        }
    }
    return stringSplitted;
}

function printString(stringArray){
    let iterations = stringArray.length
    let string = ''
    for(let i=0;i<iterations;i++){

        string += i !== iterations-1 ? stringArray[i]+' ' : stringArray[i]
    }
    return string
}