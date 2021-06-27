// set up date and clock
    var todaysDate = document.querySelector('#currentDate');
    var date = moment().format('dddd, MMMM Do YYYY');
    todaysDate.innerHTML = date;

    var currentTime = document.querySelector('#currentTime');
    var hours = moment().format('Hmm')
    var seconds = moment().format('ss')
    currentTime.innerHTML = hours + " hours " + seconds + " seconds"
    // update time function
    var updateClock = setInterval(function(){
        var currentHour = moment().format('Hmm');
        var currentSecond = moment().format('ss')
        currentTime.innerHTML = currentHour + " hours " + currentSecond + " seconds"
    }, 1000);
// end date and clock

// variables for text boxes
var task0700 = document.getElementById('0700Task');
var task0800 = document.getElementById('0800Task');
var task0900 = document.getElementById('0900Task');
var task1000 = document.getElementById('1000Task');
var task1100 = document.getElementById('1100Task');
var task1200 = document.getElementById('1200Task');
var task1300 = document.getElementById('1300Task');
var task1400 = document.getElementById('1400Task');
var task1500 = document.getElementById('1500Task');
var task1600 = document.getElementById('1600Task');
var task1700 = document.getElementById('1700Task');

// check for saved tasks on load
function checktasks(){
    var savedtasks = localStorage.getItem('tasks');
    // no saved tasks creates array for new ones
    if (savedtasks === null){
        console.log('no saved tasks')
        savedtasks = []
    } else {
        loadTasks();
    }
};

// loadTask function
function loadTasks(){
    var tasks = [];
    tasks = JSON.parse(localStorage.getItem('tasks'))

    task0700.textContent = tasks[0];
    task0800.textContent = tasks[1];
    task0900.textContent = tasks[2];
    task1000.textContent = tasks[3];
    task1100.textContent = tasks[4];
    task1200.textContent = tasks[5];
    task1300.textContent = tasks[6];
    task1400.textContent = tasks[7];
    task1500.textContent = tasks[8];
    task1600.textContent = tasks[9];
    task1700.textContent = tasks[10];
}

