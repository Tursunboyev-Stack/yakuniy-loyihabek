document.querySelectorAll('.arrows').forEach(function (arrows) {
    var row = arrows.previousElementSibling;
    var buttons = arrows.querySelectorAll('span');
    if (!row || buttons.length < 2) return;

    buttons[0].addEventListener('click', function () {
        row.scrollBy({ left: -360, behavior: 'smooth' });
    });
    buttons[1].addEventListener('click', function () {
        row.scrollBy({ left: 360, behavior: 'smooth' });
    });
});

document.querySelectorAll('.tabs').forEach(function (tabs) {
    tabs.querySelectorAll('span').forEach(function (tab) {
        tab.addEventListener('click', function () {
            tabs.querySelector('.active').classList.remove('active');
            tab.classList.add('active');
        });
    });
});

var nav = document.getElementById('nav');
var burger = document.getElementById('burger');

function setMenu(open) {
    nav.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open);
    burger.querySelector('i').className = open ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
}