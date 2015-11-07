document.addEventListener("deviceready", onDeviceReady, false);
var optionsWatchPosition = { frequency: 3000, enableHighAccuracy: true, maximumAge: 60000 };
//var optionsGetCurrentPosition = { maximumAge: 3000, enableHighAccuracy: true};

function success(pos) {
    var crd = pos.coords;

    sessionStorage.setItem('latitude', crd.latitude);
    sessionStorage.setItem('longitude', crd.longitude);

    alert('Sua posição atual é: Latitude : ' + crd.latitude + ' Longitude: ' + crd.longitude + ' Mais ou menos ' + crd.accuracy + ' metros.');
};

function error(err) {
    alert('ERROR(' + err.code + '): ' + err.message);
};



// device APIs are available
//
function onDeviceReady() {
    navigator.geolocation.getCurrentPosition(success, error, optionsWatchPosition);
    //navigator.geolocation.watchPosition(success, error, optionsWatchPosition);
    //cordova.plugins.locationServices.geolocation.watchPosition(success, error, optionsWatchPosition);
    //alert('tentativa location services');
}