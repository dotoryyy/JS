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


var resultArea = document.querySelector('#result');
function ballColor(num, resultArea) {
    var ball = document.createElement('div');
    ball.textContent = num;
    ball.style.display = 'inline-block';
    ball.style.border = '1px solid black';
    ball.style.borderRadius = '50%';
    ball.style.width = '40px';
    ball.style.height = '40px';
    ball.style.textAlign = 'center';
    ball.style.fontWeight = 'bold';
    ball.style.lineHeight = '40px';
    ball.style.color = 'white';
    ball.style.textAlign = 'center';
    ball.style.marginRight = '10px';
    //ball.id = 'ballID' + num;
    var backClr;
    if (num<= 10) {
        backClr = 'red';
    } else if (num<= 20) {
        backClr = 'orange';
    } else if (num<= 30) {
        backClr = 'yellow';
        ball.style.color = 'black';
    } else if (num<= 40) {
        backClr = 'blue';
    } else {
        backClr = 'green';
    }
    ball.style.background = backClr;
    resultArea.appendChild(ball);
}


// setTimeout(function callbackFunc() {
//     ballColor(winNum[0], resultArea)
// }, 500);
// setTimeout(function callbackFunc() {
//     ballColor(winNum[1], resultArea)
// }, 1000);
// setTimeout(function callbackFunc() {
//     ballColor(winNum[2], resultArea)
// }, 1500);
// setTimeout(function callbackFunc() {
//     ballColor(winNum[3], resultArea)
// }, 2000);
// setTimeout(function callbackFunc() {
//     ballColor(winNum[4], resultArea)
// }, 2500);
// setTimeout(function callbackFunc() {
//     ballColor(winNum[5], resultArea)
// }, 3000);

for (let i = 0; i < winNum.length; i += 1) {
    setTimeout(function callbackFunc() {
        ballColor(winNum[i], resultArea)
    }, 500*i);
};

//let과 var의 차이가 몬데
//재귀함수에 대해 생각해보기


//얘도 넣으려면???
setTimeout(function callbackFunc() {
    var area = document.querySelector('.bonus');
    ballColor(bonus, area);
}, 3500);

