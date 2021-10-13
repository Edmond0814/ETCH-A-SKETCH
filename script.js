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
div.classList.add('box','sketch')

let box_size = Math.min(document.documentElement.clientWidth/16,(document.documentElement.clientHeight-50)/16)
container.setAttribute('style',`grid-template-columns: repeat(16,${box_size}px)`)

for (let i=0;i<16**2;i++){
    container.appendChild(div.cloneNode(true))
}

container.addEventListener('mouseover',function(e){
    if(e.target.className=='box sketch'){
        let opacity = Number(window.getComputedStyle(e.target).opacity) + 0.1;
        e.target.setAttribute('style',`opacity:${opacity}`)
    }
    else console.log("bazinga");
})

const reset = document.querySelector('.button')
reset.addEventListener('click', function sand_boxes(){
    while(container.firstElementChild){
        container.removeChild(container.firstElementChild);
    }
    
    let user_input=''

    do{
        user_input = prompt("Number of squares per side?", "maximum of 100")
        if (user_input>100||user_input<0){
            user_input=prompt("Please enter a number between 1-100!")
        }
    } while(user_input>100||user_input<0)

    let box_size = Math.min(document.documentElement.clientWidth/user_input,(document.documentElement.clientHeight-50)/user_input)
    container.setAttribute('style',`grid-template-columns: repeat(${user_input},${box_size}px)`)

    for (let i=0;i<user_input**2;i++){
        container.appendChild(div.cloneNode(true))
    }
})