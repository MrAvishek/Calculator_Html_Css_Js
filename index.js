let screen = document.getElementById('search-box');
let buttons = Array.from(document.getElementsByClassName('button'));
buttons.map(button => {
    button.addEventListener('click', (e) => {

        switch (e.target.innerText) {
            case 'Go':
                screen.innerText = eval(screen.innerText);
                break;
            case 'Cl':
                screen.innerText= String(screen.innerText).slice(0,-1);
                break;

            default:
                screen.innerText += e.target.innerText;

        }
    });
});
