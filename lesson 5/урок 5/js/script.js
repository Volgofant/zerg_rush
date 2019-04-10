let menuItem = document.getElementsByClassName("menu-item"),
    li = document.createElement('li'),
    menu = document.querySelector('.menu'),
    body = document.querySelector('body'),
    title = document.querySelector('.title'),
    adv = document.querySelector('.adv'),
    column = document.querySelectorAll('.column'),
    quest = document.querySelector(".prompt"),
    funs = document.createElement('script');
    div = document.querySelectorAll('div');





li.classList.add('menu-item');
menu.appendChild(li);
menu.insertBefore(menuItem[1], menuItem[3]);
li.textContent = "Пятый пункт";
document.body.style.backgroundImage = 'url(img/apple_true.jpg)';
title.textContent = "Мы продаем только подлинную технику Apple";
window.onload = function() {
funs = function() {
let question = prompt("Как вы относитесь к технике Apple?");
return question;
};
quest.textContent = funs();
};
adv.remove();

