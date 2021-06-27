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

// check for saved tasks on load
function checktasks(){
    var savedtasks = localStorage.getItem('tasks');
    // no saved tasks creates array for new ones
    if (!savedtasks){
        console.log('no saved tasks')
        savedtasks = []
    } else {
        loadTasks();
    }
};

// loadTask function
function loadTask(){
    
}

