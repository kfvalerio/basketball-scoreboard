let HomeEl = document.getElementById("home-el")
let GuestEl = document.getElementById("guest-el")
let countHome = 0
let countGuest = 0

function add1PointHome() {
    countHome += 1
    HomeEl.textContent = countHome
}
function add2PointsHome() {
    countHome += 2
    HomeEl.textContent = countHome
}

function add3PointsHome() {
    countHome += 3
    HomeEl.textContent = countHome
}

function add1PointGuest() {
    countGuest += 1
    GuestEl.textContent = countGuest
}
function add2PointsGuest() {
    countGuest += 2
    GuestEl.textContent = countGuest
}
function add3PointsGuest() {
    countGuest += 3
    GuestEl.textContent = countGuest
}

function newGame() {
    countHome = 0
    countGuest = 0
    HomeEl.textContent = countHome
    GuestEl.textContent = countGuest
}