const h2count = document.getElementById('h2count');
const increaseButton = document.getElementById('slide_right')
const resetButton = document.getElementById('slide_down')
const decreaseButton = document.getElementById('slide_left')
let currentCount = parseInt(h2count.innerText);


increaseButton.addEventListener('click', function() {
    currentCount++;
    h2count.innerHTML = currentCount;
}

);

resetButton.addEventListener('click', function() {
h2count.innerHTML = 0;

}
);

decreaseButton.addEventListener('click', function(){
currentCount--;
h2count.innerHTML = currentCount
})