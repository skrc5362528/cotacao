var map = L.map('map');

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
        '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="http://mapbox.com">Mapbox</a>',
    id: 'vitorcastro.cigoy6vp700eyusm1aljj8ifi',
    accessToken: 'pk.eyJ1Ijoidml0b3JjYXN0cm8iLCJhIjoiY2lnb3k2d3ZoMDBmMnVzbTFqc3VhajMybSJ9._iZ9ySIFcj7si5opBAwDwA'
}).addTo(map);

function onLocationFound(e) {
    var ID_ESTABELECIMENTO = 'TESTE DE QUERYSTRING';
    var radius = e.accuracy / 2;
    L.marker(e.latlng).addTo(map).bindPopup("<iframe id='FRMCONTATO' src='pg_contato.html?ID_ESTABELECIMENTO=" + ID_ESTABELECIMENTO + "' class='' height='260'  weight='200' frameBorder='0'></iframe>").openPopup();
    //CarregaEstabelecimentos(10);
    map.panTo(new L.LatLng(e.latlng.lat, e.latlng.lng));
}

function onLocationError(e) {
    alert(e.message);
}

map.on('locationfound', onLocationFound);
map.on('locationerror', onLocationError);

map.locate({ setView: true, maxZoom: 16 });

function CarregaEstabelecimentos(ID_ESTABELECIMENTO) {
    L.marker(e.latlng).addTo(map).bindPopup("<iframe id='FRMCONTATO' src='pg_contato.html?ID_ESTABELECIMENTO=" + ID_ESTABELECIMENTO + "' class='' height='260'  weight='200' frameBorder='0'></iframe>");
}