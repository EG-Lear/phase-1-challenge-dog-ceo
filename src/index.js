//console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded', () => {
    fetchDogs()
    fetchBreeds()
    document.getElementById('breed-dropdown').addEventListener('input', filter)
})

const baseUrl = 'https://dog.ceo/api/breeds/'
let simplified 

function fetchDogs() {
    fetch(baseUrl + 'image/random/4')
    .then(res => res.json())
    .then(data => postDogs(data))
}

function postDogs(event) {
    console.log(event)
    console.log(event.message[1])
    const loc = document.getElementById('dog image container')
    event.message.forEach(dog => {
        const pic = document.createElement('img')
        pic.src = dog
        loc.appendChild(pic)
    })
}

function fetchBreeds() {
    fetch(baseUrl + 'list/all')
    .then(res => res.json())
    .then(data => addBreeds(data))
}

function addBreeds(event) {
    console.log(event.message)
    simplified = Object.keys(event.message)
    listAdder(simplified)
}

function colorChange() {
    //console.log('working')
    this.style.color = "blue"
}

function filter(input) {
    document.getElementById('dog breeds').innerHTML = ""
    let x = input.target.value
    console.log(x)
    const array = []
    for (breed in simplified) {
        const y = simplified[breed].charAt(0)
        if (x === y) {
            array.push(simplified[breed])
        }
    }
    listAdder(array)
}

function listAdder(breeds) {
    let counter = 1
    breeds.forEach(breed => {
        const name = document.createElement('li')
        name.textContent = breed
        name.id = counter
        document.getElementById('dog breeds').appendChild(name)
        let count = counter.toString()
        document.getElementById(`${count}`).addEventListener('click', colorChange)
        counter++
    })
}