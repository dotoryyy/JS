var body = document.body;

 숫자후보 = [1,2,3,4,5,6,7,8,9];
 숫자배열 = [];

for (var i=0; i < 4; i += 1) {
    var 뽑은것 = 숫자후보.splice(Math.floor(Math.random() * (9 - i)), 1)[0];  //shift, unshift, pop
    숫자배열.push(뽑은것);
}

console.log(숫자배열);

var result = document.createElement('h1');
body.append(result);

var form = document.createElement('form');
body.append(form);

var inputbox = document.createElement('input');
inputbox.type = 'number';
form.append(inputbox);

var button = document.createElement('button')
button.textContent = '입력';
form.append(button);

var 틀린횟수 = 0;
form.addEventListener('submit', function 비동기(이벤트) {
    이벤트.preventDefault();
    var answer = inputbox.value;
    if (answer == 숫자배열.join('')) {
        result.textContent = '홈런~!';
        inputbox.value = '';
        inputbox.focus();   
         숫자후보 = [1,2,3,4,5,6,7,8,9];
         숫자배열 = [];

        for (var i = 0; i < 4; i += 1) {
            var 뽑은것 = 숫자후보.splice(Math.floor(Math.random() * (9 - i)), 1)[0];  //shift, unshift, pop
            숫자배열.push(뽑은것);
        }
        틀린횟수 = 0;
    } else {
        var 답배열 = answer.split('');
        var 스트라이크 = 0;
        var 볼 = 0;
        틀린횟수 += 1;
        if (틀린횟수 > 10) {
            result.textContent = '넘마니 틀려서 아웃 답은 ' + 숫자배열2 + '임';
            inputbox.value = '';
            inputbox.focus();

             숫자후보 = [1,2,3,4,5,6,7,8,9];
             숫자배열 = [];

            for (var i=0; i < 4; i += 1) {
                var 뽑은것 = 숫자후보.splice(Math.floor(Math.random() * (9 - i)), 1)[0];  //shift, unshift, pop
                숫자배열.push(뽑은것);
            }
        }

        console.log('답이 틀리면', 답배열);
        for (var i = 0; i < 4; i += 1) {
            if (Number(답배열[i]) === 숫자배열[i]) { //같은 자리 확인
                스트라이크 += 1;
            } else if (숫자배열.indexOf(Number(답배열[i])) > -1 ) { //숫자 겹치는지 확인
                볼 += 1;
            }
        }
        result.textContent = 스트라이크 + '스트라이크' + 볼 + '볼입니다.';
        inputbox.value = '';
        inputbox.focus();
    }
});