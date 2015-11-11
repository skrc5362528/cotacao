document.addEventListener("deviceready", onDeviceReady, false);
var optionsWatchPosition = { frequency: 3000, enableHighAccuracy: true};

function success(pos) {
    var crd = pos.coords;
    sessionStorage.setItem('latitude', crd.latitude);
    sessionStorage.setItem('longitude', crd.longitude);

   // alert(crd.latitude, crd.longitude);
};

function error(err) {
    alert('ERROR(' + err.code + '): ' + err.message);
};

function onDeviceReady() {
    navigator.geolocation.watchPosition(success, error, optionsWatchPosition);
}
    //navigator.geolocation.getCurrentPosition(success, error, optionsWatchPosition);
    //cordova.plugins.locationServices.geolocation.watchPosition(success, error, optionsWatchPosition);
    //alert('tentativa location services');
    //var optionsGetCurrentPosition = { maximumAge: 3000, enableHighAccuracy: true};
