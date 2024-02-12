const button=document.querySelector('#button')
const showmenu = document.querySelector('#myMenu')
const xMark = document.querySelector('#xMark')
const search = document.querySelector('#search')

button.addEventListener('click',()=>{
    showmenu.classList.remove('hidden')
    showmenu.classList.add('absolute')
    search.classList.remove('relative')
    // showmenu.classList.add('md:static')
    


   
})

xMark.addEventListener('click',()=>{
    showmenu.classList.add('hidden')
    search.classList.add('relative')
    showmenu.classList.remove('absolute')
   
    

    
})


