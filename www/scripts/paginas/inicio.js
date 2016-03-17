//=============================================
var optionsWatchPosition; 
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    optionsWatchPosition = { timeout: 10000, maximumAge: 11000, enableHighAccuracy: true };
}
navigator.geolocation.watchPosition(success, error, optionsWatchPosition);
//============================================



function CarregaMenu(pagina) {
    jQuery("#maincontent").load(pagina + '#content');
}

function CarregaTela() {
    var usu = localStorage.getItem("Usuario");
    jQuery("#infousu").text(usu);
}

function PreparaSistema(pagina) {
    CarregaMenu(pagina);
   // CarregaTela();
   // MenuAdmin();
}

function success(pos) {

    var crd = pos.coords;

    localStorage.setItem('latitude', crd.latitude);
    localStorage.setItem('longitude', crd.longitude);
};

function error(err) {
    ExibeMensagem('Localização desabilitada, favor habilitar a localização');
};

function MenuAdmin() {

    var usu = jQuery.parseJSON(localStorage.getItem("USUARIO"));


    jQuery("#ESTABELECIMENTO").hide();
    jQuery("#ADMINAREA").hide();


    if (usu.ID_TP_USUARIO == '2') {
        jQuery("#ADMINAREA").show();
    }

    if (usu.ID_TP_USUARIO == '3') {
        jQuery("#ESTABELECIMENTO").show();
    }
   
}

