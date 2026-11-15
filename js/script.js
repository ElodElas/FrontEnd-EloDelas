let btnTop = document.querySelector('#btn-top')

window.onscroll = function() { scrollPage() }

function scrollPage() {
    if(document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        btnTop.style.display = "block"
    } else {
        btnTop.style.display = "none"
    }
}

function goTop() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
}