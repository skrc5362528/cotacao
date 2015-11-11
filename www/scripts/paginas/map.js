
function BuscaMapa()
{
    AtualizaMapa(localStorage.latitude, localStorage.longitude);
   // localStorage.setItem('longitude', crd.longitude);
}

function AtualizaMapa(latitude, longitude) {

    //alert("AtualizaMapa");
    var map = L.map('map').setView([latitude, longitude], 13);
    var marker = L.marker([latitude, longitude]).addTo(map);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18,
        id: 'vitorcastro.cigoy6vp700eyusm1aljj8ifi',
        accessToken: 'pk.eyJ1Ijoidml0b3JjYXN0cm8iLCJhIjoiY2lnb3k2d3ZoMDBmMnVzbTFqc3VhajMybSJ9._iZ9ySIFcj7si5opBAwDwA'
    }).addTo(map);

    sessionStorage.setItem('mapflag', '0');

    return map;

} 

function CarregaMapa(latitude, longitude) {


   // alert("CarregaMapa");

    var map = L.map('map').setView([latitude, longitude], 13);
   L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
       attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
       maxZoom: 18,
       id: 'vitorcastro.cigoy6vp700eyusm1aljj8ifi',
       accessToken: 'pk.eyJ1Ijoidml0b3JjYXN0cm8iLCJhIjoiY2lnb3k2d3ZoMDBmMnVzbTFqc3VhajMybSJ9._iZ9ySIFcj7si5opBAwDwA'
   }).addTo(map);

   sessionStorage.setItem('mapflag', '1');

    return map;
}


document.addEventListener("deviceready", onDeviceReady, false);
var optionsWatchPosition = { frequency: 3000, enableHighAccuracy: true };
//var optionsGetCurrentPosition = { maximumAge: 3000, enableHighAccuracy: true };

function success(pos) {

    var crd = pos.coords;

    if (sessionStorage.mapflag == null)
    {
        CarregaMapa(crd.latitude, crd.longitude);
    }
    else
    {
        AtualizaMapa(crd.latitude, crd.longitude)
    }

};

function error(err)
{
    alert('ERROR(' + err.code + '): ' + err.message);
};

function onDeviceReady()
{
    navigator.geolocation.watchPosition(success, error, optionsWatchPosition);
    //navigator.geolocation.getCurrentPosition(success, error, optionsWatchPosition);
}


