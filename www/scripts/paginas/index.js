
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
var optionsWatchPosition = { frequency: 3000, enableHighAccuracy: true };
//var optionsGetCurrentPosition = { maximumAge: 3000, enableHighAccuracy: true };

function success(pos) {

    var crd = pos.coords;

        localStorage.setItem('latitude', crd.latitude);
        localStorage.setItem('longitude', crd.longitude);
};

function error(err) {
    alert('ERROR(' + err.code + '): ' + err.message);
};

function onDeviceReady() {
    navigator.geolocation.watchPosition(success, error, optionsWatchPosition);
    //navigator.geolocation.getCurrentPosition(success, error, optionsWatchPosition);
}
