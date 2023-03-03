let ul = document.querySelector('ul')
let li = document.createElement('li')
li.textContent = 'Projects'
ul.removeChild(ul.lastElementChild)
ul.appendChild(li)

let input = document.querySelector('input').placeholder = 'Search My Project'
console.log(input);

let footer = document.querySelector('footer')
footer = document.body.querySelector('footer').lastElementChild.style.display = 'none'