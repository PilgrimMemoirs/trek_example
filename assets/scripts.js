$(document).ready(function(){

///////////////////////////////////////
///////////// SHOW ALL TRIPS /////////
///////////////////////////////////////

  $('#show-trips').on('click', function(e){

    e.preventDefault();

    var url = 'https://trektravel.herokuapp.com/trips';

    $.get(url, function(data){
      // console.log(data);
      $.each(data, function(index, trip) {
        // console.log(trip.name);
        $("<li><a href='#' class='pet' data-id=" + trip.id + ">" + trip.name + "</a>" + "<p> Continent: " + trip.continent + "</p>" + "<p> Weeks:" + trip.weeks + "</p></li>").appendTo($("#trips-list"));
      }); // .each end
    }); // .get end
  }); //show-trip on click end



  ///////////////////////////////////////
  ///////////// CREATE NEW TRIP /////////
  ///////////////////////////////////////




});
