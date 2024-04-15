let plus = document.querySelector('.btn1');
let minus = document.querySelector('.btn2');
let num = document.getElementById('num');
let a = 1;
plus.addEventListener('click', ()=>{
    a++;
    console.log(a);
    num.innerHTML = a;

})
minus.addEventListener('click', ()=>{
    a--;
    console.log(a);
    num.innerHTML = a;

})
