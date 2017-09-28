$(document).ready(function(){
  // $('#meetingTypeDropDown li').hide();

  $('.tabs span').on('click', function(){
    $('.tabs span').removeClass('selected');
    $(this).addClass('selected');
  })


$('#commentsTab').on('click', function(){
  $('#notificationsPortion').hide();
  $('#actionsPortion').hide();
  $('#commentsPortion').show();
})

$('#notificationsTab').on('click', function(){
  $('#notificationsPortion').show();
  $('#actionsPortion').hide();
  $('#commentsPortion').hide();
})

$('#actionItemsTab').on('click', function(){
  $('#notificationsPortion').hide();
  $('#actionsPortion').show();
  $('#commentsPortion').hide();

})

$('#attendeesInput').on('click', function(){
  $('#attendeesPopout').show();
})

$('#attendeesPopout .mdi-close').on('click', function(){
  $('#attendeesPopout').hide();
})

// :checked ~ .check
$('label[for = "n5"]').click(function() {
    console.log("yo, i been checked");
        console.log($(this).attr("value"))
        $('.distributionLocations input').attr('checked', true);
   
});


$('.checkboxGroupHack label input').click(function() {
    console.log("yo, i been checked");
        
        $(this).attr('checked', true);
        console.log($(this).attr("value"))
   
});







function triggerDropDown(dropTitleID, titleOfUl) {
    $('#' + titleOfUl+ ' li').show();
    $('#' + titleOfUl).show();

    $('#' + titleOfUl).on('mouseleave', function() {
        $('#' + titleOfUl + ' li').hide();
        $('#' + titleOfUl).hide();

    });

    $('#' + titleOfUl + ' .field1').click(function() {
        var inputText = $(this).text();
        $('#' + dropTitleID + '').text(inputText);
        $('#' + titleOfUl + ' li').hide();
        $('#' + titleOfUl).hide();
    });

    $('#' + titleOfUl + ' .field2').click(function() {
        var inputText = $(this).text();
        $('#' + dropTitleID + '').text(inputText);
        $('#' + titleOfUl + ' li').hide();
        $('#' + titleOfUl).hide();
    });

    $('#' + titleOfUl + ' .field3').click(function() {
        var inputText = $(this).text();
        $('#' + dropTitleID + '').text(inputText);
        $('#' + titleOfUl + ' li').hide();
        $('#' + titleOfUl).hide();
    });

    $('#' + titleOfUl + ' .field4').click(function() {
        var inputText = $(this).text();
        $('#' + dropTitleID + '').text(inputText);
        $('#' + titleOfUl + ' li').hide();
        $('#' + titleOfUl).hide();
    });

    $('#' + titleOfUl + ' .field5').click(function() {
        var inputText = $(this).text();
        $('#' + dropTitleID + '').text(inputText);
        $('#' + titleOfUl + ' li').hide();
        $('#' + titleOfUl).hide();
    });

    $('#' + titleOfUl + ' .field6').click(function() {
        var inputText = $(this).text();
        $('#' + dropTitleID + '').text(inputText);
        $('#' + titleOfUl + ' li').hide();
        $('#' + titleOfUl).hide();
    });

    
}



$('.dropDownMenu #meetingType.dropDownTitle').on('click', function(event) {
  event.preventDefault();
  $('#meetingTypeDropDown li').show();

        triggerDropDown('meetingType', 'meetingTypeDropDown');

        });

$('#meetingDriver.dropDownTitle').on('click', function() {
  $('#meetingDriverDropDown li').show();
            triggerDropDown('meetingDriver', 'meetingDriverDropDown');

        });

// onclick="document.getElementById("meetingTypeDropDown").style.visibility='visible'";

 $('#turnOffDropTitle.popUpdropDown').click(function() {
            triggerDropDown('turnOffDropTitle', 'popUpRestrictionsDropDown');


        });




function getDate() {
            console.log('the time is ' + Date());
        }

        getDate();





var dateTotal;
var year;
var month;
var day;
var time;
var formattedDateForInput;

function getDateFormat() {
            // var dateFormat = require('dateformat');
          dateTotal = new Date();
          time = dateTotal.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
          year = dateTotal.getFullYear();
          month = (dateTotal.getMonth()+1);
          if (month < 10){
            month.toString();
            month = ("0" + month);
          }
          else { month.toString()};

          day = dateTotal.getDate();
          if (day < 10){
            day.toString();
            day = ("0" + day);
          }
          else { day.toString()};

          

          // now.format("YYYY-MM-DD");
          // dateFormat(now, "dddd, mmmm dS, yyyy, h:MM TT");

          console.log(year)
          console.log(month)
          console.log(day)
          console.log(time)
          formattedDateForInput = (year + '-' + month + '-' + day);
          console.log(formattedDateForInput);
        }

        getDateFormat();

function displayNiceTime(date){
    // getHours returns the hours in local time zone from 0 to 23
    var hours = date.getHours()
    
    // getMinutes returns the minutes in local time zone from 0 to 59
    var minutes =  date.getMinutes();
    var meridiem = " AM"

    // convert to 12-hour time format
    // if (hours > 12) {
    //   hours = hours - 12
    //   meridiem = ' PM'
    // }
    // else if (hours === 0){
    //   hours = 12
    // }
    if (hours < 10){
            hours.toString();
            hours = ("0" + hours);
          }
          else { hours.toString()};
    // minutes should always be two digits long
    if (minutes < 10) {
      minutes = "0" + minutes.toString()
    }
    // return hours + ':' + minutes + meridiem
    return hours + ':' + minutes; 
  }

var newTime = displayNiceTime(dateTotal);
console.log(newTime);

// document.getElementById("date").innerHTML.value = formattedDateForInput;
document.getElementById("date").value = formattedDateForInput;
document.getElementById("startTime").value = newTime;







});
// end of the javascripting
