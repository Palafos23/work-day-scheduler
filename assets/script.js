var saveButton = $('.saveBtn');
var clearButton = $('.clearBtn');
var  timeBlock = $('.time-block');
var currentHour = dayjs().hour();

$(document).ready(function () {
 
 saveButton.on("click", function () {
  var userText = $(this).siblings(".description").val();
  var timeBlockId = $(saveButton).parent().attr("id");

 
  localStorage.setItem(timeBlockId, JSON.stringify(userText));
  
  var savedInput = JSON.parse(localStorage.getItem(userText));
if (savedInput) {
  this.children(1).append(savedInput);
}

})

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

  var currentDay = dayjs().format('dddd, MMMM D');
  $('#currentDay').text(currentDay);
})
  
  