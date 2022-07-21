const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operators");
const screenBig = document.querySelector(".container__screen");
const screenSmall = document.querySelector(".screen-result-show");
const clearSpace = document.getElementById("delete");
const result = document.getElementById("result");
const funcionesCientificas = document.querySelectorAll(".js-scientific");
const numeroNegativo = document.getElementById("negative");

let acumulador = "";
let numbersArray = [];
let operatorsArray = [];


// FUNCIONES -----------------------------------------------------------

// CAMBIAR UN NUMERO A NEGATIVO

function changeToNegative() {
    numeroNegativo.addEventListener('click', () => {
        screenBig.textContent = '';
        acumulador = '-'
        showBig('-')
        showSmall('-')
    })
}

// MOSTRAR SCREEN GRANDE
function showBig(clicked) {
    screenBig.textContent += clicked;
}

// MOSTRAR SCREEN CHICA
function showSmall(clicked) {
    screenSmall.textContent += clicked;
}

// BORRAR CONTENIDO
function clearSpaceContent() {
    acumulador = "";
    numbersArray = [];
    operatorsArray = [];
    screenBig.textContent = "";
    screenSmall.textContent = "";
}

// FUNCTION DE OPERACIONES SUMA / RESTA / DIVISION / MULTIPLICACION

function operatoria(a, b) {
    if (operatorsArray[0] == '+') {
        return a + b;
    } else if (operatorsArray[0] == '-') {
        return a - b;
    } else if (operatorsArray[0] == 'x') {
        return a * b;
    } else if (operatorsArray[0] == '÷') {
        return a / b;
    } else if (operatorsArray[0] == '%') {
        return ((a * b) / 100)
    }
}

//CONDICION PARA EJECUTAR LA OPERACION

function condicionOperatoria() {
    if (numbersArray.length == 2) {
        showBig("")
        numbersArray.push(operatoria(numbersArray[0], numbersArray[1]));
        showBig(operatoria(numbersArray[0], numbersArray[1]))
        numbersArray.splice(0, 2);
        screenBig.setAttribute('id', "exist");
    }
}

// EVENTOS -----------------------------------------------------------

//EVENTO CLICK EN NUMEROS
numbers.forEach(number => {
    number.addEventListener("click", (e) => {
        if (screenBig.id == 'exist') {
            screenBig.textContent = "";
            screenBig.removeAttribute('id');
        }
        showBig(e.target.value);
        showSmall(e.target.value);
        acumulador += e.target.value;

    })
})

//EVENTO CLICK EN OPERADORES
operators.forEach(operators => {
    operators.addEventListener("click", (e) => {
        screenBig.textContent = "";
        showSmall(e.target.value);
        console.log(numbersArray)
        console.log(operatorsArray)
        acumulador != "" && numbersArray.push(Number(acumulador));
        operatorsArray.push(e.target.value);
        acumulador = "";
        operatorsArray.length == 3 && operatorsArray.splice(0, 1)
        condicionOperatoria()
    })
})

//EVENTO IGUAL

result.addEventListener("click", () => {
    numbersArray.push(Number(acumulador));
    acumulador = "";
    screenBig.textContent = "";
    operatorsArray.length == 2 && operatorsArray.splice(0, 1);
    condicionOperatoria();
})

//EVENTO BORRAR
clearSpace.addEventListener("click", () => {
    clearSpaceContent();
})

//EVENTO CALCULADORA CIENTIFICA

funcionesCientificas.forEach(item => {
    item.addEventListener("click", (e) => {
        if (e.target.value === 'Cos') {
            if(screenBig.textContent != "") {
                screenBig.textContent = Math.acos(screenBig.textContent)
            }
            screenSmall.textContent = screenBig.textContent
        } else if (e.target.value === 'Sin') {
            if(screenBig.textContent != "") {
                screenBig.textContent = Math.sin(screenBig.textContent)
                screenSmall.textContent = screenBig.textContent
            }
        } else if (e.target.value === 'Tan') {
            if(screenBig.textContent != "") {
                screenBig.textContent = Math.tan(screenBig.textContent)
                screenSmall.textContent = screenBig.textContent
            }
        } else if (e.target.value === "√") {
            if(screenBig.textContent != "") {
                screenBig.textContent = Math.sqrt(screenBig.textContent)
                screenSmall.textContent = screenBig.textContent
            }
        } else if (e.target.value === "∛") {
            if(screenBig.textContent != "") {
                screenBig.textContent = Math.cbrt(screenBig.textContent)
                screenSmall.textContent = screenBig.textContent
            }
        } else if (e.target.value === "x2") {
            if(screenBig.textContent != "") {
                screenBig.textContent = Math.pow(screenBig.textContent, 2)
                screenSmall.textContent = screenBig.textContent
            }
        } else if (e.target.value === "x3") {
            if(screenBig.textContent != "") {
                screenBig.textContent = Math.pow(screenBig.textContent, 3)
                screenSmall.textContent = screenBig.textContent
            }
        }

    })
})

//ACTIVAR FUNCION

changeToNegative()














