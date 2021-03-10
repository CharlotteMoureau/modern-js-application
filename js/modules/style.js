// change pin color randomly
function changePinColor() {
    const pins = Array.from(document.getElementsByClassName('fa-thumbtack'))
    const colors = ['red', 'blue', 'green', 'yellow', 'black', 'orange', 'purple', 'gray']
    pins.forEach(pin => {
        pin.style.color = colors[Math.floor(Math.random() * colors.length)]
    })
}

// change style of the cards
function randomRotation() {
    const cards = Array.from(document.getElementsByClassName('card'))
    const rotate = ['rotate(1deg)', 'rotate(-1deg)', 'rotate(0deg)', 'rotate(0deg)', 'rotate(0deg)']
    cards.forEach(card => {
        card.style.transform = rotate[Math.floor(Math.random() * rotate.length)]
    })
}

export { changePinColor, randomRotation }