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
  }); //show-trips on click end


  ///////////////////////////////////////
  ///////////// SHOW A TRIP /////////////
  ///////////////////////////////////////




  ///////////////////////////////////////
  ///////////// CREATE NEW TRIP /////////
  ///////////////////////////////////////

  $('#create-trip').on('click', function(e){
    e.preventDefault;
    $('#new-trip').show();
  }); //create-trip on click end


  // Add Form Submit Post Request - have it show a message.


  //  Hides Form
  $('#new-trip p').on('click', function(){
    $('#new-trip').hide();
  });


  ///////////////////////////////////////
  ////////  "HOMEPAGE" REDIRECT  ///////
  // clicking on header h1 brings    //
  // original page state           //
  //////////////////////////////////


  $('header h1').on('click', function(e){
    e.preventDefault;
    $('#trips-list').empty();
  });


  /////////////////////////////
  //////////// FIN. //////////
  ///////////////////////////
  ///////*cue applause*/////
  /////////////////////////

}); // $(document).ready end
