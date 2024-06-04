const result = document.getElementById("result");
const checkBtn = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");

function palindrome(s) {
    s = s.replaceAll(',', '');
    s = s.replaceAll('.', '');
    s = s.replaceAll('_', '');
    s = s.replaceAll('-', '');
    s = s.replaceAll(' ', '');
    const arr = s.split("");
    const len = arr.length - 1;
    for (let i = 0; i <= len/2; i++) {
        if (arr[i].toLowerCase() !== arr[len-i].toLowerCase()) {
            if ((arr[i] === '(' && arr[len-i] === ')') || (arr[i] === ')' && arr[len-i] === '(')) {
                continue;
            } if ((arr[i] === '\\' && arr[len-i] === '/') || (arr[i] === '/' && arr[len-i] === '\\')) {
                continue;
            } if ((arr[i] === '[' && arr[len-i] === ']') || (arr[i] === ']' && arr[len-i] === '[')) {
                continue;
            } if ((arr[i] === '{' && arr[len-i] === '}') || (arr[i] === '}' && arr[len-i] === '{')) {
                continue;
            }
            return false;
        }
    }
    return true;
}

function func() {
    if (textInput.value === "") {
        alert("Please enter a value! :)");
    } else {
        let s = textInput.value;
        const ans = pallindrome(s);
        if (ans === true) {
            result.innerText = "'" + s + "' is a palindrome.";
        } else {
            result.innerText = "'" + s + "' is not a palindrome.";
        }
    }

    textInput.value = "";
}

checkBtn.onclick = func;
textInput.addEventListener("keydown", function(event) {
    if (event.key === 'Enter') {
        func();
    }
})