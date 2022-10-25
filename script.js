import Dog from './Dog.js'
import dogsData from './data.js'
let currentDogIndex = 0
let currentDog = new Dog(dogsData[currentDogIndex])
document.getElementById("accept-button").addEventListener('click', yes)
document.getElementById("reject-button").addEventListener('click', no)


render()

function render() {
    document.getElementById('card').innerHTML = currentDog.getDogHtml()
}

function getNewDog() {
    currentDogIndex+=1
    currentDog = new Dog(dogsData[currentDogIndex])
    render()
    // when the current index is at the last position
    // restart to first index
    if(currentDogIndex === 2) {
        return currentDogIndex = -1 
    }
}

function yes() {
    currentDog.setMatchStatus(true)
    document.getElementById("like").style.display = "block"
    setTimeout(()=> {
    document.getElementById("like").style.display = "none"
    setTimeout(() => {
        getNewDog()
        }, 600)
    }, 3000)
}

function no() {
    currentDog.setMatchStatus(false)
    document.getElementById("nope").style.display = "block"
    setTimeout(() => {
    document.getElementById("nope").style.display = "none"
    setTimeout(() => {
        getNewDog()
        }, 600)
    }, 3000)


}
