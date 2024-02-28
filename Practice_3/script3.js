const table = document.querySelector('table')

function createTable(rows,cols) {
    let th = document.createElement('th')
    for (let index = 0; index < cols; index++) {
        let td = document.createElement('td')
        td.innerText = 'Cell Content ' + index
        th.appendChild(td)
    }
    table.appendChild(th)
    for (let i = 1; i < rows; i++) {
        let tr = document.createElement('tr')
        for (let j = 0; j < cols; j++) {
            let td = document.createElement('td')
            td.innerText = 'Cell Content ' + (j+rows*i)
            tr.appendChild(td)
        }
        table.appendChild(tr)
    }
}

createTable(5,5)

function handleMouseOver() {
    this.style.backgroundColor = "yellow"
}

function handleMouseOut() {
    this.style.backgroundColor = ""
}

delegate(table,"mouseover","td",handleMouseOver)
delegate(table,"mouseout","td",handleMouseOut)



function delegate(parent, type, selector, handler) {
    parent.addEventListener(type, function (event) {
      const targetElement = event.target.closest(selector);
  
      if (this.contains(targetElement)) {
        handler.call(targetElement, event);
      }
    });
  }