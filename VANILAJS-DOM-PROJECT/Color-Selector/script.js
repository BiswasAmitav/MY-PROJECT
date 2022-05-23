const block=document.querySelectorAll('.color-block');

const display=document.querySelectorAll('.color-display-block');

// console.log(block);

block[0].addEventListener('click',function(){
    display.forEach( function (el) {
        el.style.backgroundColor='red';
        el.innerHTML="Hello..! I am red"
    });
});

// for(let i=0;i<block.length;i++){
//     var element=block[i];
//     element.addEventListener('click',function(){
//         // element.function (el) {
            
//         // }
//         display.forEach(function (el) {
//             el.style.backgroundColor='red'
//             el.innerHTML="Hello ! I am Red";
//             el.style.color:
//         });
//         // display.
//     });

//     // element.style.color=
// };

block[1].addEventListener('click',function(){
    display.forEach( function (el) {
        el.style.backgroundColor='green';
        el.innerHTML="Hello..! I am green"
    });
});

block[2].addEventListener('click',function(){
    display.forEach( function (el) {
        el.style.backgroundColor='#00FFFF';
        el.innerHTML="Hello..! I am cyan"
    });
});
block[3].addEventListener('click',function(){
    display.forEach( function (el) {
        el.style.backgroundColor='purple';
        el.innerHTML="Hello..! I am Purple"
    });
});
block[4].addEventListener('click',function(){
    display.forEach( function (el) {
        el.style.backgroundColor='lime';
        el.innerHTML="Hello..! I am LIme"
    });
});
block[5].addEventListener('click',function(){
    display.forEach( function (el) {
        el.style.backgroundColor='magenta';
        el.innerHTML="Hello..! I am magenta"
    });
});
block[6].addEventListener('click',function(){
    display.forEach( function (el) {
        el.style.backgroundColor='yellow';
        el.innerHTML="Hello..! I am yellow"
    });
});
block[7].addEventListener('click',function(){
    display.forEach( function (el) {
        el.style.backgroundColor='olive';
        el.innerHTML="Hello..! I am Olive"
    });
});
block[8].addEventListener('click',function(){
    display.forEach( function (el) {
        el.style.backgroundColor='rgb(30, 144, 255';
        el.innerHTML="Hello..! I am Dogger Blue"
    });
});

block[9].addEventListener('click',function(){
    display.forEach( function (el) {
        el.style.backgroundColor='silver';
        el.innerHTML="Hello..! I am  Silver"
    });
});
block[10].addEventListener('click',function(){
    display.forEach( function (el) {
        el.style.backgroundColor='navy';
        el.innerHTML="Hello..! I am Navy"
    });
});

block[11].addEventListener('click',function(){
    display.forEach( function (el) {
        el.style.backgroundColor='teal';
        el.innerHTML="Hello..! I am Teal"
    });
});