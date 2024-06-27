const opr = ['/', '*', '-', '+', '^', '=', '%', "clearAll", "backspace"];
const nums = ['1','2','3','4','5','6','7','8','9','0'];

const exponent = document.querySelector("#exponent");
const clearAll = document.querySelector("#clearAll");
const backspace = document.querySelector("#backspace");
const obelus = document.querySelector("#obelus");
// const seven = document.querySelector("#seven");
// const eight = document.querySelector("#eight");
// const nine = document.querySelector("#nine");
const cross = document.querySelector("#cross");
// const four = document.querySelector("#four");
// const five = document.querySelector("#five");
// const six = document.querySelector("#six");
const minus = document.querySelector("#minus");
// const one = document.querySelector("#one");
// const two = document.querySelector("#two");
// const three = document.querySelector("#three");
const plus = document.querySelector("#plus");
const decimal = document.querySelector("#decimal");
// const zero = document.querySelector("#zero");
const percentage = document.querySelector("#percentage");
const equals = document.querySelector("#equals");

const numbers = {
    zero: document.querySelector("zero"),
    one: document.querySelector("#one"),
    two: document.querySelector("#two"),
    three: document.querySelector("#three"),
    four: document.querySelector("#four"),
    five: document.querySelector("#five"),
    six: document.querySelector("#six"),
    seven: document.querySelector("#seven"),
    eight: document.querySelector("#eight"),
    nine: document.querySelector("#nine")
};

const input = document.querySelector("#input");
const answer = document.querySelector("#answer");

const buttons = document.querySelectorAll("button");
const opr_str = expression.split(/([/\-+*\^%])/);

let expr = "";

function checkLast(str) {
    if (str[str.length - 1].includes(nums)) {
        return true;
    } return false;
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => {
        if (!opr.includes(buttons[i].id) || buttons[i].id === decimal) {
            
            answer.innerText += buttons[i].innerText;
        } else {
            if (checkLast(expr)) {
                input.innerText = answer.innerText;
                input.innerText += buttons[i].id;
            } else {
                switch (buttons[i].id) {
                    case '+':
                }
            }
        }
    });
}

