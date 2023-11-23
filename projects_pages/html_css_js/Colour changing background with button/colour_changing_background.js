const button = document.querySelector("#clickme")
const body = document.querySelector("#inner_display")
const color = ['red', 'green', 'lightblue', 'pink', 'yellow', 'purple']

body.style.backgroundColor = '#6c63ff'
button.addEventListener('click', change)

function change(){
    const colorIndex = parseInt(Math.random()*color.length)
    body.style.backgroundColor = color[colorIndex]
}