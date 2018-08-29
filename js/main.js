
var reservationData = {};

var config = {
    apiKey: "AIzaSyDFHp_dFnyGr75E-XV7tcQfaXR56S5GggA",
    authDomain: "reservation-site-3564e.firebaseapp.com",
    databaseURL: "https://reservation-site-3564e.firebaseio.com",
    projectId: "reservation-site-3564e",
    storageBucket: "reservation-site-3564e.appspot.com",
    messagingSenderId: "57477367586"
  };
  firebase.initializeApp(config);

//Step 2 - create empty object using object literal notation
  var database = firebase.database();


//Step 3 - add click event to each of your reservation options
  $('.reservation-day li').on('click', function(){
      reservationData.day = $(this).text();
});



 //Step 4 - update the 'name' property
 //add event listener
 //prevent default
 //add the name to 'reservationData' object
 $('.reservations').on('submit', function(e){
    e.preventDefault();
    reservationData.name = $('.reservation-name').val();

 //Step 5 - post reservation information to database
 //create section for reservations data
 //POST 'reservationData' object using push()
    database.ref('reservations').push(reservationData);
 });

//Step 6 - update view using Handlebars

function getReservations(){

database.ref('reservations').on('child_added', function(results){

var reservationList = $('.reservation-list');

var reservations = results.val();
var source = $('#reservation-template').html();
var template = Handlebars.compile(source);
var reservationTable = template(reservations);

reservationList.append(reservationTable);
});

}

getReservations();

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.8054491, lng: -73.9654415},
    zoom: 10,
    scrollwheel: false
  });

  var marker = new google.maps.Marker({
    position: {lat: 40.8054491, lng: -73.9654415},
    map: map,
    title: 'Tin Mug'
  });
}
initMap();