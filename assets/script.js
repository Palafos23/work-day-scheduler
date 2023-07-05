var saveButton = $('.saveBtn');
var clearButton = $('.clearBtn');
var  timeBlock = $('.time-block');
var currentHour = dayjs().hour();
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {
 
 saveButton.on("click", function () {
  // Get nearby values of the description in JQuery
  var userText = $(this).siblings(".description").val();
  var timeBlockId = $(saveButton).parent().attr("id");

  // Save text in local storage
  localStorage.setItem(timeBlockId, JSON.stringify(userText));
 


 })
  //display current hour as presnt, hours before as past and upcoming hours as future.
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?- dayjs().format('ha')= current time


  for (var i = 0; i < timeBlock.length; i++){
    var schedulerFixedHour = $(timeBlock[i]).attr("id").split('hour-')[1];

    if (schedulerFixedHour < currentHour ){
      $(timeBlock[i]).children().eq(1).addClass('past');

    }else if ( schedulerFixedHour == currentHour) {
      $(timeBlock[i]).children().eq(1).addClass('present');
  
    }else {
       $(timeBlock[i]).children().eq(1).addClass('future');
      
    }
}

    
  
  

  // $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  // $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  // $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  // $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  
  var currentDay = dayjs().format('dddd, MMMM D');
  $('#currentDay').text(currentDay);
  })
  
  //


  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this

  //

console.log($('.container-lg').children())
console.log($('.container-lg').children().attr('id'));