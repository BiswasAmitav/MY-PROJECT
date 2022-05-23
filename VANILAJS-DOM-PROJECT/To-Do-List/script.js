// const btn=document.querySelector('button');

// const list=document.querySelector('ul');


// const inputs=document.querySelector('input')


// console.log(newList);
// btn.addEventListener('click',function(){
//     const newList=document.createElement('li');
//     newList.innerText="I am new element";
//     list.appendChild(newList);
//     // list.prepend(newList);
// });







// const newTask = document.createElement('li');

// newTask.innerText = inputs[0].value;



// allTask.appendChild(newTask);


// console.log(newTask)
// console.log(displayTime);




const allTask = document.querySelector('ol');

const inputs = document.querySelectorAll('input');

const form = document.querySelector('form');


form.addEventListener('submit', function (e) {

    e.preventDefault();

    const newTask = document.createElement('li');
    const displayTime = document.createElement('span');
    const dueDate = document.createElement('span');


    newTask.innerText = inputs[0].value + "  -----";

    dueDate.innerText = " Date : " + inputs[1].value + "  ----";

    displayTime.innerHTML = " Time: " + inputs[2].value;

    newTask.appendChild(dueDate);

    newTask.appendChild(displayTime);

    allTask.appendChild(newTask);



});