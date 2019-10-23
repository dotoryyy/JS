var candidate = Array(45).fill().map(function(ele, idx) { 
    //forEach: array 객체의 요소들이 callback함수에 순서대로 호출
    //map: array 객체의 요소들을 순서대로 매핑
    return idx + 1;
});
console.log(candidate);

var shuffle = [];
//빈 배열 생성

while (candidate.length > 0) {
    //while: 기준값이 계속 바뀔 때 (뽑은 숫자의 개수가 점점 줄어야함)
    //splice: 배열에서 특정 범위의 값들을 추출하고, 그 자리에 새로운 값을 넣음
    var moveVal = candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0];
    //실제 로또추첨기에는 진짜 랜덤을 쓰면 안됨
    shuffle.push(moveVal);
}

var bonus = shuffle[shuffle.length - 1];
var winNum = shuffle.slice(0, 6);
console.log(winNum.sort(function(p,c) {return p - c;}), bonus);
//sort: 0보다 크면 순서를 바꿈



function ballColor(num) {
    var resultArea = document.getElementById('result');
    var ball = document.createElement('div');
    ball.textContent = winNum[num];
    ball.style.display = 'inline-block';
    ball.style.border = '1px solid black';
    ball.style.borderRadius = '50%';
    ball.style.width = '20px';
    ball.style.height = '20px';
    ball.style.textAlign = 'center';
    resultArea.appendChild(ball);
}

setTimeout(function callbackFunc() {
    ballColor(0)
}, 500);
setTimeout(function callbackFunc() {
    ballColor(1)
}, 1000);
setTimeout(function callbackFunc() {
    ballColor(2)
}, 1500);
setTimeout(function callbackFunc() {
    ballColor(3)
}, 2000);
setTimeout(function callbackFunc() {
    ballColor(4)
}, 2500);
setTimeout(function callbackFunc() {
    ballColor(5)
}, 3000);

// for (var i = 0; i < winNum.length; i += 1) {
    
// }
setTimeout(function callbackFunc() {
    var resultArea = document.getElementsByClassName('bonus')[0];
    var ball = document.createElement('div');
    ball.textContent = winNum[num];
    ball.style.display = 'inline-block';
    ball.style.border = '1px solid black';
    ball.style.borderRadius = '50%';
    ball.style.width = '20px';
    ball.style.height = '20px';
    ball.style.textAlign = 'center';
    bonusBall.textContent = bonus;
    resultArea.appendChild(ball);
}, 3500);

