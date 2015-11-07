
function CarregaMenu(pagina) {
    jQuery("#maincontent").load(pagina + '#content');
}

function CarregaTela() {
    var usu = sessionStorage.getItem("Usuario");
    jQuery("#infousu").text(usu);
}

function PreparaSistema(pagina) {
    CarregaMenu(pagina);
    CarregaTela();
}


document.addEventListener("deviceready", onDeviceReady, false);
var optionsWatchPosition = { frequency: 3000, enableHighAccuracy: true, maximumAge: 60000 };
//var optionsGetCurrentPosition = { maximumAge: 3000, enableHighAccuracy: true};

function success(pos) {
    var crd = pos.coords;
    // crd.latitude
    // crd.longitude
    var lat = '-8.0968439';
    var long = '-34.970715';

    localStorage.setItem('latitude',lat);
    localStorage.setItem('longitude', long);

    alert('Sua posição atual é: Latitude : ' + crd.latitude + ' Longitude: ' + crd.longitude + ' Mais ou menos ' + crd.accuracy + ' metros.');
};

function error(err) {
    alert('ERROR(' + err.code + '): ' + err.message);
};



// device APIs are available
//
function onDeviceReady() {
    navigator.geolocation.watchPosition(success, error, optionsWatchPosition);

}