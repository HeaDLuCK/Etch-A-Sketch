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



let button = document.createElement('button')
button.setAttribute("id", "btn");
button.textContent = 'Click to  choose how many grids you want :D'
document.body.prepend(button);
let confirmGrids = 16
let container = document.createElement('div');
container.classList.add('container');

for (let i = 1; i <= confirmGrids; i++) {
    let row = document.createElement('div');
    row.classList.add('row');
    for (let j = 1; j <= confirmGrids; j++) {
        let col = document.createElement('div');
        col.classList.add('col');
        // black Blocks here 
        
        // col.addEventListener('mouseover', () => {
        //     blackBlock(col);
        // })


        // rainbow Blocks here 

        // col.addEventListener('mouseover', () => {
        //     rainbowBlock(col);
        // })


        // faded Blocks here 

        // let count = 0
        // col.addEventListener('mouseover', () => {
            
        //     fadedBlackBlock(col, count)
        //     count+=10
        // })

        row.appendChild(col);

    };
    container.appendChild(row);
};
button.after(container);

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
    checkDiv = document.querySelector('.container')
    if (checkDiv) {
        checkDiv.remove()
        let container = document.createElement('div');
        container.classList.add('container');

        for (let i = 1; i <= confirmGrids; i++) {
            let row = document.createElement('div');
            row.classList.add('row');
            for (let j = 1; j <= confirmGrids; j++) {
                let col = document.createElement('div');
                col.classList.add('col');

                // black Blocks here 
                
                // col.addEventListener('mouseover', () => {
                //     blackBlock(col);
                // })


                // rainbow Blocks here 


                // col.addEventListener('mouseover', () => {
                //     rainbowBlock(col);
                // })

                // fadedd Blocks here 
                // let count = 0
                // col.addEventListener('mouseover', () => {

                //     fadedBlackBlock(col, count)
                //     count += 10
                // })
                row.appendChild(col);

            };
            container.appendChild(row);
        };
        button.after(container);
    };




})

// console.log(confirmGrids);

