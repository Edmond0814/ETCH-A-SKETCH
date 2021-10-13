const content = document.querySelector('BODY');
content.setAttribute('style', "margin:0;padding:0;")

const header = document.createElement('header')
const button = document.createElement('button')
button.classList.add('button')
button.textContent="Reset"
header.appendChild(button)
content.appendChild(header)

const sand_box = document.createElement('div')
sand_box.classList.add('sand_box')
const container = document.createElement('div')
container.classList.add('container')
sand_box.appendChild(container);
content.appendChild(sand_box)

const div = document.createElement('div');
div.classList.add('box')

for (let i=0;i<3**2;i++){
    container.appendChild(div.cloneNode(true))
}

container.addEventListener('mouseover',function(e){
    if(e.target.className=='box'){
        e.target.classList.add('sketch')
    }
})

const reset = document.querySelector('.button')
reset.addEventListener('click', function(){
    while(container.firstElementChild){
        container.removeChild(container.firstElementChild);
    }
    
    let user_input = prompt("Number of squares per side?")
    let box_size = Math.min(document.documentElement.clientWidth/user_input,(document.documentElement.clientHeight-50)/user_input)
    container.setAttribute('style',`grid-template-columns: repeat(${user_input},${box_size}px)`)

    for (let i=0;i<user_input**2;i++){
        container.appendChild(div.cloneNode(true))
    }
})