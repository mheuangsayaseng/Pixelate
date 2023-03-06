// Your code here
const grid = document.getElementById("grid")

function makeRow () {
    const row = document.createElement('tr')
    for (let i = 0; i < 20; i++) {
        const td = document.createElement('td')
        row.appendChild(td)
    }
    grid.appendChild(row)
}

// makeRow()
// makeRow()

const button = document.getElementById("add-row")
button.addEventListener('click', makeRow)


grid.addEventListener('click', colorize)
function colorize(click){
    const target = event.target
    if(target.className.length){
        target.className = ''
    }else {
        target.className = 'red'
    }
    
}