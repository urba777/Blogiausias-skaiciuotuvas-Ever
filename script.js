const UI = {
    calculatorOutput: document.getElementById("calculatorOutput"), //Output'as
};

const OPERATORS = {
    percent: document.getElementById("percent"),
    delete: document.getElementById("delete"), //Ištrinti viską
    deleteTwo: document.getElementById("deleteTwo"), //Ištrinti viską
    backspace: document.getElementById("backspace"), //Ištrinti vieną simbolį
    divideOneBy: document.getElementById("divideOneBy"), //Vienas dalinti iš esamo skaičiaus
    square: document.getElementById("square"), //Pakelti kvadratu
    root: document.getElementById("root"), //Šaknis
    divide: document.getElementById("divide"), //Dalyba
    multi: document.getElementById("multi"), //Daugyba
    minus: document.getElementById("minus"), //Atimti
    plus: document.getElementById("plus"), //Pridėti
    plusMinus: document.getElementById("plusMinus"), //Teigiamas arba neigiamas skaičius
    dot: document.getElementById("dot"),
    equal: document.getElementById("equal") //Lygybės ženklas
}

const NUMBERS = {
    seven: document.getElementById("seven"),
    eight: document.getElementById("eight"),
    nine: document.getElementById("nine"),
    four: document.getElementById("four"),
    five: document.getElementById("five"),
    six: document.getElementById("six"),
    one: document.getElementById("one"),
    two: document.getElementById("two"),
    three: document.getElementById("three"),
    zero: document.getElementById("zero")
};

//Spausdiname pagrindinius skaičius
function printOutput() {
    UI.calculatorOutput.innerHTML = "";
}
printOutput();


//Skaičių spaudimai
NUMBERS.one.addEventListener("click", () => {
    console.log("Paspaustas skaičius 1");
        UI.calculatorOutput.innerHTML += 1;
})
NUMBERS.two.addEventListener("click", () => {
    console.log("Paspaustas skaičius 2");
        UI.calculatorOutput.innerHTML += 2;
})
NUMBERS.three.addEventListener("click", () => {
    console.log("Paspaustas skaičius 3");
        UI.calculatorOutput.innerHTML += 3;
})
NUMBERS.four.addEventListener("click", () => {
    console.log("Paspaustas skaičius 4");
        UI.calculatorOutput.innerHTML += 4;
})
NUMBERS.five.addEventListener("click", () => {
    console.log("Paspaustas skaičius 5");
        UI.calculatorOutput.innerHTML += 5;
})
NUMBERS.six.addEventListener("click", () => {
    console.log("Paspaustas skaičius 6");
        UI.calculatorOutput.innerHTML += 6;
})
NUMBERS.seven.addEventListener("click", () => {
    console.log("Paspaustas skaičius 7");
        UI.calculatorOutput.innerHTML += 7;
})
NUMBERS.eight.addEventListener("click", () => {
    console.log("Paspaustas skaičius 8");
        UI.calculatorOutput.innerHTML += 8;
})
NUMBERS.nine.addEventListener("click", () => {
    console.log("Paspaustas skaičius 9");
        UI.calculatorOutput.innerHTML += 9;
})
NUMBERS.zero.addEventListener("click", () => {
    console.log("Paspaustas skaičius 0");
        UI.calculatorOutput.innerHTML += 0;
})

//Operatorių paspaudimai
OPERATORS.percent.addEventListener("click", () => {
        console.log("Paspaustas procentų operatorius");
        UI.calculatorOutput.innerHTML += "%";
})
OPERATORS.delete.addEventListener("click", () => {
        console.log("Paspaustas ištrinimo operatorius");
        printOutput();
})
OPERATORS.deleteTwo.addEventListener("click", () => {
    printOutput();
        console.log("Paspaustas ištrinimo antras operatorius");
})
OPERATORS.backspace.addEventListener("click", () => {
        console.log("Paspaustas vieno simbolio trinimo operatorius");
        UI.calculatorOutput.innerHTML = UI.calculatorOutput.innerHTML.slice(0, -1);
})
OPERATORS.divideOneBy.addEventListener("click", () => {
        console.log("Paspaustas 1 dalinti iš skaičiaus operatorius");
        UI.calculatorOutput.innerHTML = 1 / UI.calculatorOutput.innerHTML;
})
OPERATORS.square.addEventListener("click", () => {
        console.log("Paspaustas pakelti kvadratu operatorius");
        UI.calculatorOutput.innerHTML = UI.calculatorOutput.innerHTML **2;
})
OPERATORS.root.addEventListener("click", () => {
        console.log("Paspaustas šaknies operatorius");
        UI.calculatorOutput.innerHTML = Math.sqrt(UI.calculatorOutput.innerHTML);
})
OPERATORS.divide.addEventListener("click", () => {
        console.log("Paspaustas dalybos operatorius");
        UI.calculatorOutput.innerHTML += "/";
})
OPERATORS.multi.addEventListener("click", () => {
        console.log("Paspaustas daugybos operatorius");
        UI.calculatorOutput.innerHTML = "Nemoku dauginti";
})
OPERATORS.minus.addEventListener("click", () => {
        console.log("Paspaustas atimti operatorius");
        UI.calculatorOutput.innerHTML += "-";
})
OPERATORS.plus.addEventListener("click", () => {
        console.log("Paspaustas pridėti operatorius");
        UI.calculatorOutput.innerHTML += "+";
})
OPERATORS.plusMinus.addEventListener("click", () => {
        console.log("Paspaustas plius/minus operatorius");
})
OPERATORS.equal.addEventListener("click", () => {
        console.log("Paspaustas lygybės operatorius");
        // UI.calculatorOutput.innerHTML = UI.calculatorOutput.innerHTML.value;
        UI.calculatorOutput.innerHTML = "NEMOKU TIEK SUSKAIČIUOTI";
        // let x = UI.calculatorOutput.innerHTML;
        // console.log(x);
        // var text = UI.calculatorOutput.innerHTML;
        // var pointNum = parseFloat(text);
        // UI.calculatorOutput.innerHTML = pointNum;
})
OPERATORS.dot.addEventListener("click", () => {
    console.log("Paspaustas taško operatorius");
    // UI.calculatorOutput.innerHTML = UI.calculatorOutput.innerHTML.value;
})