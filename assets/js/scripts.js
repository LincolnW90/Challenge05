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
    console.log('task load test')
    var saved0700 = JSON.parse(localStorage.getItem("7am"));
    task0700.innerHTML = saved0700;

    var saved0800 = JSON.parse(localStorage.getItem('8am'));
    task0800.innerHTML = saved0800;

    var saved0900 = JSON.parse(localStorage.getItem('9am'));
    task0900.innerHTML = saved0900;

    var saved1000 = JSON.parse(localStorage.getItem('10am'));
    task1000.innerHTML = saved1000;

    var saved1100 = JSON.parse(localStorage.getItem('11am'));
    task1100.innerHTML = saved1100;

    var saved1200 = JSON.parse(localStorage.getItem('12pm'));
    task1200.innerHTML = saved1200;

    var saved1300 = JSON.parse(localStorage.getItem('1pm'));
    task1300.innerHTML = saved1300;

    var saved1400 = JSON.parse(localStorage.getItem('2pm'));
    task1400.innerHTML = saved1400;

    var saved1500 = JSON.parse(localStorage.getItem('3pm'));
    task1500.innerHTML = saved1500;

    var saved1600 = JSON.parse(localStorage.getItem('4pm'));
    task1600.innerHTML = saved1600;

    var saved1700 = JSON.parse(localStorage.getItem('5pm'));
    task1700.innerHTML = saved1700;

    var saved1800 = JSON.parse(localStorage.getItem('6pm'));
    task1800.innerHTML = saved1800;

    var saved1900 = JSON.parse(localStorage.getItem('7pm'));
    task1900.innerHTML = saved1900;
}

// color changes based on scheduled time vs momentJS
var hour = moment().hours();
function timeKeeper(){
    console.log('timekeeper activate');
    $('.task-holder').each(function(){
        var timeTest = parseInt($(this).attr("id"));
        hour = parseInt(hour);

        if (hour>timeTest) {
            $(this).addClass('past');
            $(this).removeClass('present');
            $(this).removeClass('future');
        } else if (hour<timeTest) {
            $(this).removeClass('past');
            $(this).removeClass('present');
            $(this).addClass('future');
        } else {
            $(this).removeClass('past');
            $(this).addClass('present');
            $(this).removeClass('future');
        };
    });
}

// save task button function
$('.saveBtn').on('click', function(){
    userInput = $(this).siblings('.task-holder').val().trim();
    taskHour = $(this).siblings('.hour-box').text().trim();
    localStorage.setItem(taskHour, JSON.stringify(userInput));
});

// clear calendar button
$('.clearBtn').on('click', function(){
    localStorage.clear()
    loadTasks();

})


loadTasks();
timeKeeper();

// dynamic update background colors every 5 minutes
setInterval(function(){
    timeKeeper();
}, 300000);