let buttonsContainer = document.createElement('div')
buttonsContainer.classList.add('btnContainer')

let black = document.createElement('button')
let rainbow = document.createElement('button')
let faded = document.createElement('button')

black.setAttribute('class', 'function')
rainbow.setAttribute('class', 'function')
faded.setAttribute('class', 'function')

black.textContent = 'Black'
rainbow.textContent = 'rainbow'
faded.textContent = 'faded'

buttonsContainer.append(black, rainbow, faded)
document.body.append(buttonsContainer);


let confirmGrids = 16
let whichGame = 1



function blackBlock(elm) {
    return elm.style.backgroundColor = 'black'
}

function rainbowBlock(elm) {
    return elm.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)},
    ${Math.floor(Math.random() * 255)},
    ${Math.floor(Math.random() * 255)})`
}

function fadedBlackBlock(elm, fade) {
    if (fade >= 100) {
        elm.style.backgroundColor = 'rgba(0,0,0,1)'
    } else {
        elm.style.backgroundColor = 'rgba(0,0,0,0.' + fade + ')'
    }
}

function gridGame(confirmGrids, test) {
    let container = document.createElement('div');
    container.classList.add('container');

    for (let i = 1; i <= confirmGrids; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        for (let j = 1; j <= confirmGrids; j++) {
            let col = document.createElement('div');
            col.classList.add('col');
            let count = 0
            switch (test) {

                // black Blocks here 

                case 1:


                    col.addEventListener('mouseover', () => {
                        blackBlock(col);
                    })
                    break;

                // rainbow Blocks here 

                case 2:
                    col.addEventListener('mouseover', () => {
                        rainbowBlock(col);
                    })
                    break;

                // faded Blocks here 

                case 3:

                    col.addEventListener('mouseover', () => {

                        fadedBlackBlock(col, count)
                        count += 10
                    })
                    break;
            }

            row.appendChild(col);

        };
        container.appendChild(row);
    };
    button.after(container);
};

function newGame() {
    checkDiv = document.querySelector('.container')
    if (checkDiv) {
        checkDiv.remove()
        gridGame(confirmGrids, whichGame)
    };
}


black.onclick = () => {
    whichGame = 1;
    newGame()
};
rainbow.onclick = () => {
    whichGame = 2
    newGame()
};
faded.onclick = () => {
    whichGame = 3
    newGame()
};


let button = document.createElement('button')
button.setAttribute("id", "btn");
button.textContent = 'Click to  choose how many grids you want :D'
document.body.prepend(button);



gridGame(confirmGrids, whichGame)

button.addEventListener('click', () => {

    let check = true;
    do {
        confirmGrids = prompt('how many grids you want :', 16)
        if (+confirmGrids <= 100) {
            check = false;
        } else {
            alert('please choose something less than or equal to 100 ')
        };

    } while (check);
    newGame()
})

// console.log(confirmGrids);

