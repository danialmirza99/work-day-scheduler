// current day is displayed at the top of the calendar
var currentDate = moment().format('dddd MMMM Do YYYY');
$("#currentDay").text("Current Date: " + currentDate);

// color calendar based on past, present, future
var time = moment().format("h a");
var tasks = document.querySelector(".list-group-item");
for(var i = 0; i < tasks.clientHeight; i++){
    console.log(tasks);
}



