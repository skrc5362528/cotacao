function BuscaMapa() {
    var Long = localStorage.getItem('longitude');
    var Lat = localStorage.getItem('latitude');
    if (Long!= '' &&  Lat!= '') {
        IniciaMapa(Lat, Long);
    }
    else {
        alert('Não há localização disponível');
    }
}

function IniciaMapa(latitude, longitude) {

    //alert(latitude);
    //alert(longitude);
    var map = L.map('map').setView([latitude, longitude], 13);

   L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
       attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
       maxZoom: 18,
       id: 'vitorcastro.cigoy6vp700eyusm1aljj8ifi',
       accessToken: 'pk.eyJ1Ijoidml0b3JjYXN0cm8iLCJhIjoiY2lnb3k2d3ZoMDBmMnVzbTFqc3VhajMybSJ9._iZ9ySIFcj7si5opBAwDwA'
   }).addTo(map);

    //L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    //    attribution: '© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    //}).addTo(map);

    return map;
}



