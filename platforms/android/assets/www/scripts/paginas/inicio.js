//=============================================
var pictureSource;
var destinationType; // sets the format of returned value
var optionsWatchPosition; 

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    optionsWatchPosition = { timeout: 10000, maximumAge: 11000, enableHighAccuracy: true };
    pictureSource = navigator.camera.PictureSourceType;
    destinationType = navigator.camera.DestinationType;
}

//============================================




navigator.geolocation.watchPosition(success, error, optionsWatchPosition);


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




function FotoDocumentoCPF() {
    navigator.camera.getPicture(sucessoCPF, onFail, {
        quality: 50,
        destinationType: destinationType.DATA_URL
    });
}
function FotoDocumentoRG() {
    navigator.camera.getPicture(sucessoRG, onFail, {
        quality: 50,
        destinationType: destinationType.DATA_URL
    });
}
function FotoDocumentoComprovante() {
    navigator.camera.getPicture(sucessoComprovante, onFail, {
        quality: 50,
        destinationType: destinationType.DATA_URL
    });
}

//===========================================


function sucessoCPF(imageData) {
    IMAGEM_BASE64_CPF = imageData;
    // jQuery('#iconeCPF').removeClass("icon-red-exchange").addClass("icon-green-exchange");
    jQuery('#iconeTimesCPF').addClass("fa-check");
}

function sucessoComprovante(imageData) {
    IMAGEM_BASE64_COMPROVANTE = imageData
    //jQuery('#iconeComprovante').removeClass("icon-red-exchange").addClass("icon-green-exchange");
    jQuery('#iconeTimesComprovante').addClass("fa-check");
}

function sucessoRG(imageData) {
    IMAGEM_BASE64_RG = imageData
    //jQuery('#iconeRG').removeClass("icon-red-exchange").addClass("icon-green-exchange");
    jQuery('#iconeTimesRG').addClass("fa-check");
}

function onFail(message) {
    alert('Failed because: ' + message);
}

//===========================================