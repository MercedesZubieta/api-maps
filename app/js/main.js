var map ;
var marker;
var markersPurple = [] ;
var markersOrange = [] ;
var icons ;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom : 13,
        center : new google.maps.LatLng(-12.1055011,-77.0589999),
        mapTypeId : 'roadmap'
    }) ;

    var infowindow = new google.maps.InfoWindow({});


    var iconBase = 'img/';
    icons = {
        orange : {
          icon : iconBase + 'orange.png'
        } ,
        purple : {
          icon : iconBase + 'purple.png'
        }
    } ;

    purple = [
        {
            position : new google.maps.LatLng(-12.0677349, -77.0967019),
            type : 'purple',
            title : 'Titulo Purple 1',
            description : 'Aquí va la información del tooltip'
        }, 
        {
            position : new google.maps.LatLng(-12.0671961, -77.1178952),
            type : 'purple',
            title : 'Titulo Purple 1',
            description : 'Aquí va la información del tooltip'
        }
    ] ;



    orange = [
        {
            position: new google.maps.LatLng(-12.0870742, -77.0352733),
            type: 'orange',
            title : 'Titulo Orange 2',
            description : 'Aquí va la información del tooltip'
        }, 
        {
            position: new google.maps.LatLng(-12.0956306, -77.0321242),
            type: 'orange',
            title : 'Titulo Purple 2',
            description : 'Aquí va la información del tooltip'
        }
    ] ;

    $("input#btnOrange").click(function () {
        for (var i = 0; i < orange.length; i++) {
            marker = new google.maps.Marker({
                position: orange[i].position,
                icon : icons[orange[0].type].icon,
                map: map
            });

            google.maps.event.addListener(marker, 'click', (function (marker, i) {
                return function () {
                    infowindow.setContent(orange[i].description);
                    infowindow.open(map, marker);
                }
            })(marker, i));
             markersOrange.push(marker) ;   
        }
    });

    $("input#btnPurple").click(function () {
        for (var i = 0 ; i < purple.length ; i++ ) {
            marker = new google.maps.Marker({
                position: purple[i].position,
                icon : icons[purple[0].type].icon,
                map: map
            });

            google.maps.event.addListener(marker, 'click', (function (marker, i) {
                return function () {
                    infowindow.setContent(purple[i].description);
                    infowindow.open(map, marker);
                }
            })(marker, i));
            
             markersPurple.push(marker) ;
        }
    });
}

$("input#btnDelete").click(function () {
    for (var i = 0 ; i < markersPurple.length ; i++) {
        markersPurple[i].setMap(null) ;
    }
}) ;

$("#btnAddPurple").click(function () {
    google.maps.event.trigger(markersPurple[0], 'click');
}) ;

$("#btnAddOrange").click(function () {
    google.maps.event.trigger(markersOrange[1], 'click');
}) ;
