function BuscaMapa() {
    var Long = sessionStorage.getItem('longitude');
    var Lat = sessionStorage.getItem('latitude');
    if (Long!= '' &&  Lat!= '') {
        IniciaMapa(Lat, Long);
    }
    else {
        alert('Não há localização disponível');
    }
}

function AtualizaMapa() {

    var Long = sessionStorage.getItem('longitude');
    var Lat = sessionStorage.getItem('latitude');;
    var newLatLng = new L.LatLng(Lat, Long);
    marker.setLatLng(newLatLng);

    marker.setLatLng(e.latlng);
    map.setView(marker.getLatLng(), map.getZoom());
    alert('Marker has been set to position :' + marker.getLatLng().toString());
} 

function IniciaMapa(latitude, longitude) {

    var map = L.map('map').setView([latitude, longitude], 13);

   L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
       attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
       maxZoom: 18,
       id: 'vitorcastro.cigoy6vp700eyusm1aljj8ifi',
       accessToken: 'pk.eyJ1Ijoidml0b3JjYXN0cm8iLCJhIjoiY2lnb3k2d3ZoMDBmMnVzbTFqc3VhajMybSJ9._iZ9ySIFcj7si5opBAwDwA'
   }).addTo(map);

    return map;
}



//document.addEventListener("deviceready", onDeviceReady, false);
//var optionsWatchPosition = { frequency: 3000, enableHighAccuracy: true };

//function success(pos) {
//    if (sessionStorage.getItem('longitude') == '' || sessionStorage.getItem('latitude') == '') {
//        IniciaMapa(crd.latitude, crd.longitude);
//    }
//    else {
//        AtualizaMapa();
//    }
//};

//function error(err) {
//    alert('ERROR(' + err.code + '): ' + err.message);
//};

//function onDeviceReady() {
//    navigator.geolocation.watchPosition(success, error, optionsWatchPosition);
//}
//navigator.geolocation.getCurrentPosition(success, error, optionsWatchPosition);
//cordova.plugins.locationServices.geolocation.watchPosition(success, error, optionsWatchPosition);
//alert('tentativa location services');
//var optionsGetCurrentPosition = { maximumAge: 3000, enableHighAccuracy: true};
