let ul = document.querySelector('ul');
ul.removeChild(ul.lastElementChild)
let li1 = document.createElement('li')
let li2 = document.createElement('li')
li1.textContent = 'Projects'
li2.textContent = 'Hire Me'
ul.appendChild(li1)
ul.appendChild(li2)

let footer = document.querySelector('footer')
footer = document.body.querySelector('footer').lastElementChild.style.display = 'none'
