// navbar in engilsi  and usd 
const english_buton = document.getElementById('english')
const english = document.querySelector('.english')
english_buton.addEventListener('click', (e) => {
    e.stopPropagation()
    if (usd.classList.contains('active')) {
        usd.classList.remove('active')
    }
    english.classList.toggle('active')
})
const usd_buton = document.getElementById('usd')
const usd = document.querySelector('.usd')
usd_buton.addEventListener('click', (e) => {
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




// tab open and close navbar
// open maneu
const manu=document.getElementById('manu')
const mid_tab=document.querySelector('.mid_tab')
manu.addEventListener('click',()=>{
    console.log('nur');
    mid_tab.classList.add("mid_active")
})
// open maneu end


// close manu 
const tab_nav = document.getElementById('nav_close')
tab_nav.addEventListener('click', () => {
    console.log('nikosh');
    mid_tab.classList.remove("mid_active")

})
// close manu end


//>>>>>>>>>home
const home_buton = document.getElementById('home_buton')
const t_home = document.querySelector('.t_home')

home_buton.addEventListener("click", (e) => {
    e.stopPropagation()
    if (t_shop.classList.contains('tab_active')) {
        t_shop.classList.remove('tab_active')
    }
    if (t_paces.classList.contains('tab_active')) {
        t_paces.classList.remove('tab_active')
    }
    if (t_blog.classList.contains('tab_active')) {
        t_blog.classList.remove('tab_active')
    }
    t_home.classList.toggle('tab_active')
})

//>>>>>>>>>shop
const shop_buton = document.getElementById('shop_buton')
const t_shop = document.querySelector('.t_shop')

shop_buton.addEventListener("click", (e) => {
    e.stopPropagation()
    if (t_home.classList.contains('tab_active')) {
        t_home.classList.remove('tab_active')
    }
    if (t_paces.classList.contains('tab_active')) {
        t_paces.classList.remove('tab_active')
    }
    if (t_blog.classList.contains('tab_active')) {
        t_blog.classList.remove('tab_active')
    }
    t_shop.classList.toggle('tab_active')
})

//>>>>>>>>>paces
const paces_buton = document.getElementById('paces_buton')
const t_paces = document.querySelector('.t_paces')

paces_buton.addEventListener("click", (e) => {
    e.stopPropagation()
    if (t_home.classList.contains('tab_active')) {
        t_home.classList.remove('tab_active')
    }
    if (t_shop.classList.contains('tab_active')) {
        t_shop.classList.remove('tab_active')
    }
    if (t_blog.classList.contains('tab_active')) {
        t_blog.classList.remove('tab_active')
    }
    t_paces.classList.toggle('tab_active')
})

//>>>>>>>>>paces
const blog_buton = document.getElementById('blog_buton')
const t_blog = document.querySelector('.t_blog')

blog_buton.addEventListener("click", (e) => {
    e.stopPropagation()
    if (t_home.classList.contains('tab_active')) {
        t_home.classList.remove('tab_active')
    }
    if (t_shop.classList.contains('tab_active')) {
        t_shop.classList.remove('tab_active')
    }
    if (t_paces.classList.contains('tab_active')) {
        t_paces.classList.remove('tab_active')
    }
    t_blog.classList.toggle('tab_active')
})

// window.addEventListener('click', () => {
//     if (t_home.classList.contains('tab_active')) { t_home.classList.remove('tab_active') }
//     if (t_shop.classList.contains('tab_active')) { t_shop.classList.remove('tab_active') }
//     if (t_paces.classList.contains('tab_active')) { t_paces.classList.remove('tab_active') }
//     if (t_blog.classList.contains('tab_active')) { t_blog.classList.remove('tab_active') }
// })

// tab open and close navbar end
