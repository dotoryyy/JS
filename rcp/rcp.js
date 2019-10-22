var left = 0;
setInterval( function() {
    if (left === 0) {
        left = '-150px';
    } else if ( left === '-150px' ) {
        left = '-280px';
    } else {
        left = 0;
    }
    document.querySelector('#computer').style.background =
    ' url(13045F404D7C365D23.gif)' + left + ' 0';
}, 100);

for (var i = 0; i < document.querySelectorAll('.btn'); i +=1) {
    document.querySelectorAll('.btn')[i].addEventListener('click', function() {
        console.log(this.textContent)
    });
}