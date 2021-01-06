const progress = document.getElementById("progress")
const next = document.getElementById("next")
const prev = document.getElementById("prev")

// we want all 5 .circles so we use querySelectorAll which returns all elements with that class in a Node List - which is basically an Array
const circles = document.querySelectorAll(".circle")


// a counter for the active class
let currentActive = 1;

// listens for click event on next button 
next.addEventListener('click', () => {
    // increments currentactive when heard
    currentActive++
    // if currentActive is greater than circles.length which is 4 then we are at the end so 
    // stop incrementing by setting currentActive to 4 
    if (currentActive > circles.length) {
        currentActive = circles.length
    }
    // call update function
    update()

})

prev.addEventListener('click', () => {
    // if prev is clicked decrement currentActive
    currentActive--
    // if current active is less than 1 then we are at the begining so set currentActive to 1
    if (currentActive < 1) {
        currentActive = 1
    }
    // call update function
    update()
})

function update() {
    // forEach is an array method - we can call it on circles becuase it's basically an array. 
    // It executes the provided function once for each element. The arrow function we provide takes a circle which is one of the circles and an idx
    // which is the index of the Node List or Array. If the index is lower than currentActive then it adds the active class.
    circles.forEach((circle, idx) => {
        if (idx < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + "%"

    // console.log((actives.length - 1) / (circles.length - 1) * 100)

    if (currentActive === 1) {
        prev.disabled = true

    } else if (currentActive === circles.length) {
        next.disabled = true
    } else {
        next.disabled = false
        prev.disabled = false
    }

}


