var num = 1;
var str = 'Pratish';
var arr = [1, 2, 3];
var obj = {
  a: 1,
  b: 1
};

let a = function () {
  console.log('hello world');
}

a();

for (var loop = 1; loop < 10; loop++) {
  console.log(loop);
}


setTimeout(function () {
  console.log('Yo');
}, 1000);

setInterval(function () {
  console.log('ma chaldai chu')
}, 1000);


var title = document.getElementById('title');
var secondTitles = document.getElementsByClassName('secondTitle');

console.log(title);
console.log(secondTitles);

var marginLeft = 0;

setInterval(function () {
  title.style.marginLeft = marginLeft;
  marginLeft += 10;
}, 1000 / 60)

var yoButton = document.getElementById('yo');

yoButton.addEventListener('click', function () {
  alert('yo');
});

