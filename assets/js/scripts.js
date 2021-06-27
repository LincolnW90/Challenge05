// set up date and clock
    var todaysDate = document.querySelector('#currentDate');
    var date = moment().format('dddd, MMMM Do YYYY');
    todaysDate.innerHTML = date;

    var currentTime = document.querySelector('#currentTime');
    var hours = moment().format('hh:mm:ss a')
    currentTime.innerHTML = hours
    // update time function
    var updateClock = setInterval(function(){
        var currentHour = moment().format('hh:mm:ss a');
        currentTime.innerHTML = currentHour
    }, 1000);
// end date and clock

// variables for text boxes
var task0700 = document.getElementById('0700');
var task0800 = document.getElementById('0800');
var task0900 = document.getElementById('0900');
var task1000 = document.getElementById('1000');
var task1100 = document.getElementById('1100');
var task1200 = document.getElementById('1200');
var task1300 = document.getElementById('1300');
var task1400 = document.getElementById('1400');
var task1500 = document.getElementById('1500');
var task1600 = document.getElementById('1600');
var task1700 = document.getElementById('1700');
var task1800 = document.getElementById('1800');
var task1900 = document.getElementById('1900');

// load saved tasks
function loadTasks(){
    var saved0700 = JSON.parse(localStorage.getItem('0700Task'));
    task0700.textContent = saved0700;

    var saved0800 = JSON.parse(localStorage.getItem('0800Task'));
    task0800.textContent = saved0800;

    var saved0900 = JSON.parse(localStorage.getItem('0900Task'));
    task0900.textContent = saved0900;

    var saved1000 = JSON.parse(localStorage.getItem('1000Task'));
    task1000.textContent = saved1000;

    var saved1100 = JSON.parse(localStorage.getItem('1100Task'));
    task1100.textContent = saved1100;

    var saved1200 = JSON.parse(localStorage.getItem('1200Task'));
    task1200.textContent = saved1200;

    var saved1300 = JSON.parse(localStorage.getItem('1300Task'));
    task1300.textContent = saved1300;

    var saved1400 = JSON.parse(localStorage.getItem('1400Task'));
    task1400.textContent = saved1400;

    var saved1500 = JSON.parse(localStorage.getItem('1500Task'));
    task1500.textContent = saved1500;

    var saved1600 = JSON.parse(localStorage.getItem('1600Task'));
    task1600.textContent = saved1600;

    var saved1700 = JSON.parse(localStorage.getItem('1700Task'));
    task1700.textContent = saved1700;

    var saved1800 = JSON.parse(localStorage.getItem('1800Task'));
    task1800.textContent = saved1800;

    var saved1900 = JSON.parse(localStorage.getItem('1900Task'));
    task1900.textContent = saved1900;
}

// color changes based on scheduled time vs momentJS
function timeKeeper(){

    

}

// save task button function
function saveTask(){
    console.log('savetask activated')
};

// click listener for save buttons
var saveBtn = document.querySelector('.storeBtn');
saveBtn.addEventListener('click',saveTask());

