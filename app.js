let wrd = document.getElementById('word');
console.log(wrd);
let spn1 = document.getElementById('spn1');
let spn2 = document.getElementById('spn2');
let spn3 = document.getElementById('spn3');
let spn4 = document.getElementById('spn4');
let spn5 = document.getElementById('spn5');

console.log(spn1);
console.log(spn2);
console.log(spn3);
console.log(spn4);
console.log(spn5);



function fun() {

    let inp = document.getElementById('UserInp').value;
    let user = inp.slice(0);

    if (user.indexOf('a') || user.indexOf('e') || user.indexOf('i') || user.indexOf('o') || user.indexOf('u')) {

        wrd.innerText = user;

        spn1.innerText = user.indexOf('a');
        spn2.innerText = user.indexOf('e');
        spn3.innerText = user.indexOf('i');
        spn4.innerText = user.indexOf('o');
        spn5.innerText = user.indexOf('u');
    }
}