let countHome = document.getElementById("count-home");
let countGuest = document.getElementById("count-guest");
let count = 0

function incrementHome() {
    count += 1;
    countHome.textContent = count;
};

function incrementGuest() {
    count += 1;
    countGuest.textContent = count;
}