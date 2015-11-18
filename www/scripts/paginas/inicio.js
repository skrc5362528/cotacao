
var optionsWatchPosition = { frequency: 3000, enableHighAccuracy: true };
navigator.geolocation.watchPosition(success, error, optionsWatchPosition);





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

function success(pos) {

    var crd = pos.coords;

    localStorage.setItem('latitude', crd.latitude);
    localStorage.setItem('longitude', crd.longitude);
};

function error(err) {
    alert('ERROR(' + err.code + '): ' + err.message);
};

//function onDeviceReady() {
   
//}


function ExibeMensagem(texto) {

    navigator.notification.alert(
    texto,                  // message
    alertDismissed,         // callback
    'Atenção',            // title
    'Ok'                  // buttonName
);
}

function alertDismissed() {

}