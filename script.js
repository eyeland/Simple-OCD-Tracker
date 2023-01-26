const box1 = document.getElementById('box1')
const box2 = document.getElementById('box2')
const box3 = document.getElementById('box3')
const box4 = document.getElementById('box4')
const box5 = document.getElementById('box5')

const totalItemsToCheck = 5


const itemSafe = 'green'
const itemNotSafe = 'red'

// Set items to "not safe on app load"
box1.style.backgroundColor = itemNotSafe
box2.style.backgroundColor = itemNotSafe
box3.style.backgroundColor = itemNotSafe
box4.style.backgroundColor = itemNotSafe
box5.style.backgroundColor = itemNotSafe



box1.addEventListener('click', () => {
    if (box1.style.backgroundColor === itemSafe) {
        box1.style.backgroundColor = itemNotSafe
    } else {
        box1.style.backgroundColor = itemSafe
    }
    
})
box2.addEventListener('click', () => {
      if (box2.style.backgroundColor === itemSafe) {
        box2.style.backgroundColor = itemNotSafe
    } else {
        box2.style.backgroundColor = itemSafe
    }
})
box3.addEventListener('click', () => {
      if (box3.style.backgroundColor === itemSafe) {
        box3.style.backgroundColor = itemNotSafe
    } else {
        box3.style.backgroundColor = itemSafe
    }
})
box4.addEventListener('click', () => {
      if (box4.style.backgroundColor === itemSafe) {
        box4.style.backgroundColor = itemNotSafe
    } else {
        box4.style.backgroundColor = itemSafe
    }
})
box5.addEventListener('click', () => {
      if (box5.style.backgroundColor === itemSafe) {
        box5.style.backgroundColor = itemNotSafe
    } else {
        box5.style.backgroundColor = itemSafe
    }
})