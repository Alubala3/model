const Open = document.getElementById('Open');
const modal_container = document.getElementById('modal_container');
const Close = document.getElementById('Close');

Open.addEventListener('click',() =>{
    modal_container.classList.add('show')
})

Close.addEventListener('click',() =>{
    modal_container.classList.remove('show')
})