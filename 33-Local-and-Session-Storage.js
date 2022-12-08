// set local storage item
// localStorage.setItem('name', 'John');
// localstorage.setItem('age', '30');

// set local storage item
// localStorage.setItem('name', 'Beth');

// remove from storage
// localStorage.removeItem('name');

// get from storage
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');

// // clear local storage
// localStorage.clear();

console.log(name, age);

document.querySelector('form').addEventListener('submit', function(e){
    const task = document.getElementById('task').value;

    let tasks;

    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    localStorage.setItem('task', JSON.stringify(task));
    
    alert('Task saved');

    e.preventDefault();
})

const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function(){
    console.log(task);
});