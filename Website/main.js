// NAV
    // change navbar styles on scroll 
    window.addEventListener('scroll', () => {
        document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
    })

    // show/hide nav menu
    const menu = document.querySelector('.nav_menu')
    const menuBtn = document.querySelector('#open-menu-btn')
    const closeBtn = document.querySelector('#close-menu-btn')

    menuBtn.addEventListener('click', () => {
        menu.style.display = 'flex'
        closeBtn.style.display = 'inline-block'
        menuBtn.style.display = "none"
    })

    // close nav menu
    closeBtn.addEventListener('click', () => {
        menu.style.display = 'none'
        closeBtn.style.display = 'none'
        menuBtn.style.display = "inline-block"
    })
// ENF OF NAV

// FAQ
    // show/hide faq answer
    const faqs = document.querySelectorAll('.faq')
    faqs.forEach(faq => {
        faq.addEventListener('click', () => {
            faq.classList.toggle('open')

            // change icon
            const div = faq.querySelector('.faq_icon')

            if (div.innerHTML == `<img class="iconSmall" src="./icons/Minus.SVG">`) {
                div.innerHTML = `<img class="iconSmall" src="./icons/Plus.SVG">`
            } else {
                div.innerHTML = `<img class="iconSmall" src="./icons/Minus.SVG">`
            }
        })
    })
// END OF FAQ

// SWIPER 
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        // when window width is >= 600
        breakpoints: {
            800: {
                slidesPerView: 2
            }
        }
    });
// END OF SWIPER 

