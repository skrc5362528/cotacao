

var APP_KEY = 'YFK7SPhPwnZ2KCHvDvLBFAGVzO4bi8FC';
var POST = 'http://open.mapquestapi.com/geocoding/v1/address?key=YFK7SPhPwnZ2KCHvDvLBFAGVzO4bi8FC&location=Alcides+Lima+103,freguesia,rio+de+janeiro,RJ&callback=retornoGeocode';


//function retornoGeocode(response) {
//    var location = response.results[0].locations[0];
//    jQuery('#LATITUDE').val(location.latLng.lat);
//    jQuery('#LONGITUDE').val(location.latLng.lng);
//}

//function RecuperaGeolocalizacao() {
//    var script = document.createElement('script');
//    script.type = 'text/javascript';

//    var data = jQuery.parseJSON(sessionStorage.getItem('ESTABELECIMENTO'));

//    var URL = 'http://open.mapquestapi.com/geocoding/v1/address?key=YFK7SPhPwnZ2KCHvDvLBFAGVzO4bi8FC&location=' + data.ENDERECO + ',' + data.BAIRRO + ',' + data.CIDADE + ',' + data.UF + '&callback=retornoGeocode';

//    script.src = URL;
//    document.body.appendChild(script);

//}

function PreencheSelect() {
    var data = jQuery.parseJSON(RetornaListaEstabelecimentos(null, null));
    if (data.length > 0) {
        jQuery.each(data, function () {
            jQuery('#ESTABELECIMENTO').append('<option value=' + this.ID_ESTABELECIMENTO + '>' + this.NOME + '</option>');
        });
    }
    jQuery('#ESTABELECIMENTO').append('<option value="" selected>Selecione o estabelecimento</option>');
}

jQuery(document).ready(function () {
    PreencheSelect();
    PreencheSelectSuaMoeda();

});


function RetornaEstabelecimento(ID_ESTABELECIMENTO) {
    var data = jQuery.parseJSON(RetornaEstabelecimentoPorId(ID_ESTABELECIMENTO, null, null));
    if (data.length > 0) {
        jQuery.each(data, function () {
            MontaTela(this);
        });
    }
}

function MontaTela(data) {
    jQuery('#NOME').val(data.NOME);
    jQuery('#RAZAO_SOCIAL').val(data.RAZAO_SOCIAL);
    jQuery('#EMAIL').val(data.EMAIL);
    jQuery('#FONE').val(data.FONE);
    jQuery('#CNPJ').val(data.CNPJ);
    jQuery('#LATITUDE').val(data.LATITUDE);
    jQuery('#LONGITUDE').val(data.LONGITUDE);
    jQuery('#UF').val(data.UF);
    jQuery('#BAIRRO').val(data.BAIRRO);
    jQuery('#CEP').val(data.CEP);
    jQuery('#CIDADE').val(data.CIDADE);
    jQuery('#CNPJ').val(data.CNPJ);
    jQuery('#ENDERECO').val(data.ENDERECO);
    jQuery('#NUMERO').val(data.NUMERO);
    jQuery('#COMPLEMENTO').val(data.COMPLEMENTO);

    sessionStorage.setItem("ESTABELECIMENTO",JSON.stringify(data));
}


function Grava() {

    var data = jQuery.parseJSON(sessionStorage.getItem('ESTABELECIMENTO'));
    var LATITUDE = jQuery('#LATITUDE').val();
    var LONGITUDE = jQuery('#LONGITUDE').val();
    var NOME = jQuery('#NOME').val();
    var RAZAO_SOCIAL = jQuery('#RAZAO_SOCIAL').val();
    var EMAIL = jQuery('#EMAIL').val();
    var FONE = jQuery('#FONE').val();
    var CNPJ = jQuery('#CNPJ').val();
    var UF = jQuery('#UF').val();
    var BAIRRO = jQuery('#BAIRRO').val();
    var CEP = jQuery('#CEP').val();
    var CIDADE = jQuery('#CIDADE').val();
    var CNPJ = jQuery('#CNPJ').val();
    var ENDERECO = jQuery('#ENDERECO').val();
    var NUMERO = jQuery('#NUMERO').val();
    var COMPLEMENTO = jQuery('#COMPLEMENTO').val();



    data = jQuery.parseJSON(AlteraEstabelecimento(data.ID_ESTABELECIMENTO, NOME, FONE, LATITUDE, LONGITUDE, RAZAO_SOCIAL, UF, BAIRRO, CEP, CIDADE, CNPJ, EMAIL, ENDERECO, NUMERO, COMPLEMENTO, null, null));
    if (data.ID_ESTABELECIMENTO = ! '')
    {
        RetornaEstabelecimento(data.ID_ESTABELECIMENTO);
        alert("Estabelecimento alterado com sucesso!");
    }
}


function PreencheSelectSuaMoeda() {
    jQuery('#MOEDA').append('<option value="" selected>Selecione uma moeda</option>');
        var data = MOEDA;
        if (data.length > 0) {
            jQuery.each(data, function () {
                MontaSelect('MOEDA', this.CODIGO, this.NOME, this.PAIS)
            });
        }
       
    }

    function AdicionaMoeda() {

    }

    function retornoGeocode(response) {
        var location = response.results[0].locations[0];
        jQuery('#LATITUDE').val(location.latLng.lat);
        jQuery('#LONGITUDE').val(location.latLng.lng);

        alert("Localizado com sucesso!");
    }

    function RecuperaGeolocalizacao() {
        var script = document.createElement('script');
        script.type = 'text/javascript';

        var BAIRRO = jQuery('#BAIRRO').val();
        var CIDADE = jQuery('#CIDADE').val();
        var ENDERECO = jQuery('#ENDERECO').val() + ',' + jQuery('#NUMERO').val();
        var UF = jQuery('#UF').val();
        var URL = 'http://open.mapquestapi.com/geocoding/v1/address?key=YFK7SPhPwnZ2KCHvDvLBFAGVzO4bi8FC&location=' + ENDERECO + ','+''+',' + CIDADE + ',' + UF + '&callback=retornoGeocode';

        script.src = URL;
        document.body.appendChild(script);

    }

    function PreencheSelectMoeda() {
        jQuery('#MOEDAS_TRABALHADAS').append('<option value="" selected> Selecione uma moeda </option>');
        var data = MOEDA;
        if (data.length > 0) {
            jQuery.each(data, function () {
                MontaSelect('MOEDAS_TRABALHADAS',this.CODIGO,this.NOME,this.PAIS)
            });
        }
        
    }

    function MontaSelect(OBJETO, CODIGO, NOME, PAIS) {
        jQuery('#' + OBJETO + '').append('<option value=' + CODIGO + '>' + NOME + ' ( ' + PAIS + ' )</option>');
    }