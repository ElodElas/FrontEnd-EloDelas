let btnTop = document.querySelector('#btn-top')

window.onscroll = function () { scrollPage() }

function scrollPage() {
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        btnTop.style.display = "block"
    } else {
        btnTop.style.display = "none"
    }
}

function goTop() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
}



const carousel = document.querySelector('#carousel')
const cards = [...document.querySelectorAll('.card')]

let cont = 0
let move = false

function render() {
    const n = cards.length

    for (let i = 0; i < n; i++) {
        const card = cards[i]

        let d = i - cont

        if (d > n / 2) { d -= n }
        if (d < -n / 2) { d += n }

        const abs = Math.abs(d)

        const x = d * 470
        const scale = d === 0 ? 1.25 : 0.85
        const z = d === 0 ? 0 : -150

        card.style.transform =
            `translate(-50%, -50%) translateX(${x}px) translateZ(${z}px) scale(${scale})`

        card.style.zIndex = 10 - abs
        card.style.opacity = abs > 1 ? 0 : 1
        card.style.pointerEvents = abs > 1 ? 'none' : 'auto'
        card.style.filter = abs > 1 ? 'blur(6px)' : 'none'

        card.classList.toggle('active', d === 0)
    }
}

function go(step) {
    cont = (cont + step + cards.length) % cards.length

    render()
}

for(let i = 0; i < cards.length; i++) {
    cards[i].onclick = () => {
        if(move) { return }

        cont = i
        render()
    }
}

document.addEventListener('keydown', (e) => {
    if(e.key === 'ArrowRight') { go(1) }
    if(e.key === 'ArrowLeft') { go(-1) }
})

const pixel = 70
let startX = null

carousel.addEventListener('pointerdown', (e) => {
    startX = e.clientX
    move = false
})

window.addEventListener('pointermove', (e) => {
    if(startX === null) { return }
    const dx = e.clientX - startX
    if(Math.abs(dx) >= pixel) {
        move = true
        go(dx < 0 ? 1 : -1)
        startX = e.clientX
    }
})

function endDrag() {
    startX = null
    setTimeout(() => (move = false), 0)
}

window.addEventListener('pointerup', endDrag)
window.addEventListener('pointercancel', endDrag)
carousel.addEventListener('dragstart', (e) => e.preventDefault())

render()