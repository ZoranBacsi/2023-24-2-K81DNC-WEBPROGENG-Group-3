const ul = document.querySelector('ul')
let firstLi = null

/*
function handleClick(s) {
    if(!s.target.matches('li'))
        return;
    
    if(firstLi !== null){
        let secondLi = s.target;
        [firstLi.innerText,secondLi.innerText] = [secondLi.innerText,firstLi.innerText]
        firstLi = null
    }else{
        firstLi = s.target
    }

}
ul.addEventListener('click', handleClick)
*/

function handleClick() {  
    if(firstLi !== null){
        let secondLi = this;
        [firstLi.innerText,secondLi.innerText] = [secondLi.innerText,firstLi.innerText]
        firstLi = null
    }else{
        firstLi = this
    }
}

delegate(ul,'click','li',handleClick)

function delegate(parent, type, selector, handler) {
    parent.addEventListener(type, function (event) {
      const targetElement = event.target.closest(selector);
  
      if (this.contains(targetElement)) {
        handler.call(targetElement, event);
      }
    });
  }