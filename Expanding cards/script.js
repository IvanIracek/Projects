const panels = document.querySelectorAll('.panel')



document.addEventListener('mousemove', event => {
    const under = document.elementFromPoint(event.clientX,event.clientY)

   
     if(under.classList.contains('panel')){
        removeActive()
        under.classList.add('active')
        console.log(under)
    }
    else{
        removeActive()
        console.log(under)
    }

   })


function removeActive(){
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}