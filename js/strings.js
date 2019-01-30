
//transformar minusculas y mayusculas
//Tranformar solo la primer letra de cada palabra
//fondo amarillo para una palabra pasada como parametro
window.onload = init 

function init(){
    console.log(printString(transformCapitalLetter('america latina')))
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