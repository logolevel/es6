var buttons = document.querySelectorAll('button');
console.log(buttons)

for (let i = 0; i < buttons.length; i++) {
    var button = buttons[i];
    button.innerText = i;
    button.onclick = function(e) {
        console.log(i);
    }
}