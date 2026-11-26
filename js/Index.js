const carousel = document.querySelector('#carousel')
const cards = [...carousel.querySelectorAll('.card')]
const n = cards.length


const espaco = 460
const escalaCentro = 1.25
const escalaLado = 0.85
const escalaFundo = 0.7
const pixel = 250


let pos = 0
let alvo = 1
let animando = false
let arrastando = false
let startX = 0
let startPos = 0
let move = false

function distancia() {
    if (carousel.clientWidth < 600) {
        return Math.min(150, carousel.clientWidth * 0.36)
    }

    return Math.min(espaco, carousel.clientWidth * 0.45)
}

function render() {

    const e = distancia()
    const meio = n / 2

    for (let i = 0; i < n; i++) {
        const card = cards[i]


        let d = (((i - pos) % n) + n) % n
        if (d > meio) { d -= n }

        const abs = Math.abs(d)
        const sinal = Math.sign(d)

        let x, scale, blur

        if (abs <= 1) {

            x = d * e
            scale = carousel.clientWidth < 600
                ? 1 + (0.72 - 1) * abs
                : escalaCentro + (escalaLado - escalaCentro) * abs
            blur = 0
        } else {

            const t = (abs - 1) / (meio - 1)
            x = sinal * e * (1 - t)
            scale = escalaLado + (escalaFundo - escalaLado) * t
            blur = t * 5
        }

        card.style.transform =
            `translate(-50%, -50%) translateX(${x}px) scale(${scale})`
        card.style.zIndex = Math.round(1000 - abs * 100)
        card.style.filter = blur > 0.1 ? `blur(${blur}px)` : 'none'
        card.style.pointerEvents = abs < 1.3 ? 'auto' : 'none'
    }
}

function animar() {
    pos += (alvo - pos) * 0.15

    if (Math.abs(alvo - pos) < 0.001) {
        pos = alvo
        animando = false
    }

    render()

    if (animando) { requestAnimationFrame(animar) }
}

function iniciarAnimacao() {
    if (animando) { return }
    animando = true
    requestAnimationFrame(animar)
}

function go(step) {
    alvo = Math.round(alvo) + step
    iniciarAnimacao()
}

for (let i = 0; i < n; i++) {
    cards[i].onclick = () => {
        if (move) { return }

        const atual = Math.round(alvo)
        let delta = (((i - atual) % n) + n) % n
        if (delta > n / 2) { delta -= n }

        alvo = atual + delta
        iniciarAnimacao()
    }
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') { go(1) }
    if (e.key === 'ArrowLeft') { go(-1) }
})

carousel.addEventListener('pointerdown', (e) => {
    arrastando = true
    startX = e.clientX
    startPos = alvo
    move = false
})

window.addEventListener('pointermove', (e) => {
    if (!arrastando) { return }

    const dx = e.clientX - startX
    if (Math.abs(dx) > 5) { move = true }

    alvo = startPos - dx / distancia()
    iniciarAnimacao()
})

function endDrag() {
    if (!arrastando) { return }
    arrastando = false

    alvo = Math.round(alvo)
    iniciarAnimacao()

    setTimeout(() => (move = false), 0)
}

window.addEventListener('pointerup', endDrag)
window.addEventListener('pointercancel', endDrag)
window.addEventListener('resize', render)
carousel.addEventListener('dragstart', (e) => e.preventDefault())

render()
