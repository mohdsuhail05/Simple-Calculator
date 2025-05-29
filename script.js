// Get the input box and all buttons
let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        const btnText = e.target.innerText;

        if (btnText === '=') {
            try {
                string = eval(string);
            } catch (error) {
                string = "Error";
            }
            input.value = string;
        } 
        else if (btnText === 'AC') {
            string = "";
            input.value = string;
        } 
        else if (btnText === 'DEL') {
            string = string.slice(0, -1);
            input.value = string;
        } 
        else {
            string += btnText;
            input.value = string;
        }
    });
});
