const h2count = document.getElementById('h2count');
const increaseButton = document.getElementById('slide_right')
const resetButton = document.getElementById('slide_down')
const decreaseButton = document.getElementById('slide_left')
let currentCount = parseInt(h2count.innerText);
let innerH = h2count.innerHTML

decreaseButton.addEventListener('click', function(){
    currentCount--;
    h2count.innerHTML = currentCount;
    return (currentCount<0) ? document.getElementById("h2count").style.color = "red"
    : (currentCount>0) ? document.getElementById("h2count").style.color = "green"
    : document.getElementById("h2count").style.color = "black"
    
    
    })


increaseButton.addEventListener('click', function() {
    currentCount++;
    h2count.innerHTML = currentCount;
    h2count.innerHTML = currentCount;
    return (currentCount<0) ? document.getElementById("h2count").style.color = "red"
    : (currentCount>0) ? document.getElementById("h2count").style.color = "green"
    : document.getElementById("h2count").style.color = "black"
    
}
);

resetButton.addEventListener('click', function() {
currentCount = 0;
h2count.innerHTML = currentCount;
document.getElementById("h2count").style.color = "black"
}
);

