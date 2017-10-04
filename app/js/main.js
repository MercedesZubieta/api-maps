var map ;
var marker;
var markers = [] ;
var icons ;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom : 13,
        center : new google.maps.LatLng(-12.1055011,-77.0589999),
        mapTypeId : 'roadmap'
    }) ;

    var iconBase = 'img/';
    icons = {
        parking : {
          icon : iconBase + 'orange.png'
        } ,
        info : {
          icon : iconBase + 'purple.png'
        }
    } ;

    purple = [
        {
            position : new google.maps.LatLng(-12.0677349, -77.0967019),
            type : 'info',
            title : 'Titulo Purple 1',
            description : 'Aquí va la información del tooltip'
        }, 
        {
            position : new google.maps.LatLng(-12.0671961, -77.1178952),
            type : 'info',
            title : 'Titulo Purple 1',
            description : 'Aquí va la información del tooltip'
        }
    ] ;

    orange = [
        {
            position: new google.maps.LatLng(-12.0870742, -77.0352733),
            type: 'parking',
            title : 'Titulo Orange 2',
            description : 'Aquí va la información del tooltip'
        }, 
        {
            position: new google.maps.LatLng(-12.0956306, -77.0321242),
            type: 'parking',
            title : 'Titulo Purple 2',
            description : 'Aquí va la información del tooltip'
        }
    ] ;
}

$("input#btnOrange").click(function () {
    orange.forEach(function(orange) {
        var marker = new google.maps.Marker({
            position : orange.position ,
            icon : icons[orange.type].icon ,
            map : map,
            title: orange.title
        }) ;
        markers.push(marker) ;
    }) ;
}) ;

$("input#btnPurple").click(function () {
    purple.forEach(function(purple) {
        var marker = new google.maps.Marker({
            position : purple.position ,
            icon : icons[purple.type].icon ,
            map : map,
            title: purple.title
        }) ;
    }) ;
}) ;

$("input#btnDelete").click(function () {
    for (var i = 0 ; i < markers.length ; i++) {
        markers[i].setMap(null) ;
    }
}) ;
