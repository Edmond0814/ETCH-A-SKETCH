const content = document.querySelector('BODY');
content.setAttribute('style', "margin:0;padding:0;")

const container = document.createElement('div')

container.classList.add('container')
content.appendChild(container);

const div = document.createElement('div');
div.classList.add('box')

for (let i=0;i<16*16;i++){
    container.appendChild(div.cloneNode(true))
}

const boxes = document.querySelectorAll('.box')
boxes.forEach(function(box){
    box.addEventListener('mouseover',function(e){
        box.classList.add('sketch');
    })
})