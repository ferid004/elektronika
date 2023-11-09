// navbar in engilsi  and usd 
const english_buton=document.getElementById('english')
const english=document.querySelector('.english')
english_buton.addEventListener('click',(e)=>{
    e.stopPropagation()
    if (usd.classList.contains('active')) {
        usd.classList.remove('active')
    }
    english.classList.toggle('active')
})
const usd_buton=document.getElementById('usd')
const usd=document.querySelector('.usd')
usd_buton.addEventListener('click',(e)=>{
    e.stopPropagation()
    if (english.classList.contains('active')) {
        english.classList.remove('active')
    }
    usd.classList.toggle('active')
})

window.addEventListener('click', () => {
    if (usd.classList.contains('active')){usd.classList.remove('active')}
    if (english.classList.contains('active')) {english.classList.remove('active')}
})
// navbar in engilsi  and usd end



