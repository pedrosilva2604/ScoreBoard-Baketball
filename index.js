let countHome = document.getElementById("count-home");
let countGuest = document.getElementById("count-guest");
let countScoreHome = 0;
let countScoreGuest = 0;

function incrementHome() {
    countScoreHome += 1;
    countHome.textContent = countScoreHome;
};

function incrementGuest() {
    countScoreGuest += 1;
    countGuest.textContent = countScoreGuest;
};

function resetBtnHome() {
    countHome.textContent = 0;
    countScoreHome = 0;
};

function resetBtnGuest() {
    countGuest.textContent = 0;
    countScoreGuest = 0;
};

function incrementPlusTwoHome() {
    countScoreHome += 2;
    countHome.textContent = countScoreHome; 
};

function incrementPlusThreeHome() {
    countScoreHome += 3;
    countHome.textContent = countScoreHome;
};

function incrementPlusTwoGuest() {
    countScoreGuest += 2;
    countGuest.textContent = countScoreGuest;
};

function incrementPlusThreeGuest() {
    countScoreGuest += 3;
    countGuest.textContent = countScoreGuest;
};