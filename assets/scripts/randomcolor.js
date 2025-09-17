const colors = ['#093145', '#107896', '#829356', '#BCA136', '#C2571A', '#9A2617']

function randomColor() {
    const i = Math.floor(Math.random() * colors.length)
    document.body.style.backgroundColor = colors[i]
}

randomColor()