
function BuscaMapa()
{
    navigator.geolocation.getCurrentPosition(AtualizaMapa, error, optionsWatchPosition);
}

function AtualizaMapa(pos)
{
    
    var crd = pos.coords;
   //alert("AtualizaMapa");

    var map = L.map('map').setView([crd.latitude, crd.longitude], 14);
    var marker = L.marker([crd.latitude, crd.longitude]).addTo(map);
    //L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    //    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    //    maxZoom: 18,
    //    id: 'vitorcastro.cigoy6vp700eyusm1aljj8ifi',
    //    accessToken: 'pk.eyJ1Ijoidml0b3JjYXN0cm8iLCJhIjoiY2lnb3k2d3ZoMDBmMnVzbTFqc3VhajMybSJ9._iZ9ySIFcj7si5opBAwDwA'
    //}).addTo(map);

    sessionStorage.setItem('mapflag', '0');

    return map;

} 

function CarregaMapa(pos) {

    var crd = pos.coords;
   // alert("CarregaMapa");

    var map = L.map('map').setView([crd.latitude, crd.longitude], 14);
    var marker = L.marker([crd.latitude, crd.longitude]).addTo(map);

   L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
       attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
       maxZoom: 18,
       id: 'vitorcastro.cigoy6vp700eyusm1aljj8ifi',
       accessToken: 'pk.eyJ1Ijoidml0b3JjYXN0cm8iLCJhIjoiY2lnb3k2d3ZoMDBmMnVzbTFqc3VhajMybSJ9._iZ9ySIFcj7si5opBAwDwA'
   }).addTo(map);

   sessionStorage.setItem('mapflag', '1');

    return map;
}

var optionsWatchPosition = { frequency: 3000, enableHighAccuracy: true };
//var optionsGetCurrentPosition = { maximumAge: 3000, enableHighAccuracy: true };


function error(err)
{
    alert('ERROR(' + err.code + '): ' + err.message);
};

function iniciaMapa()
{
    navigator.geolocation.getCurrentPosition(CarregaMapa, error, optionsWatchPosition);
}


