

function PreencheSelect()
{
    var ret = true;

    var url = 'http://www.visional.com.br/wscotacao/cotacao.asmx/ListaMoeda';

    jQuery.ajax({
        url: url,
        //data: {format: 'json'},
        async: false,
        type: 'GET',
        dataType: 'xml',
        success: function (xml) {
            CarregaMoeda(xml);

        },
        error: function (xml) {
            //alert(xml.statusText);
            ret = false;
        }
    });

    return ret;
}




function PreencheMapa() {



    jQuery.getJSON("http://dadosabertos.rio.rj.gov.br/apiTransporte/apresentacao/rest/index.cfm/obterTodasPosicoes.json'", 
        function (data) {
        var items = [];
        jQuery.each(data, function (key, val) {
            items.push("<li id='" + key + "'>" + val + "</li>");
        });

            jQuery("<ul/>", {
            "class": "my-new-list",
            html: items.join("")
        }).appendTo("body");
    });



    var ret = true;

    var url = 'http://dadosabertos.rio.rj.gov.br/apiTransporte/apresentacao/rest/index.cfm/obterTodasPosicoes.json';

    jQuery.ajax({
        url: url,
        //data: {format: 'json'},
        contentType:"application/json; charset=utf-8",
        async: false,
        type: 'GET',
        dataType: 'json',
        data:'',
        success: function (data) {
            ret = data; 
           
            //CarregaMoeda(xml);

        },
        error: function (data) {
            //alert(xml.statusText);
            ret = false;
        }
    });

    return ret;


    
}

function CarregaMoeda(xml) {


    jQuery(xml).find('MOEDA').each(function () {

        var CODIGO = jQuery(this).find('CODIGO').text();
        var NOME = jQuery(this).find('NOME').text();
   
        jQuery('#MOEDA').append('<option value=' + CODIGO + '>' + NOME + '</option>');

    });
}
 
function BuscaValores() {

    var moeda = jQuery('#MOEDA').val();
    var data = jQuery('#DATA_COTACAO').val();


    BuscaDadosMoeda(moeda);
    BuscaCotacaoMoeda(moeda, data);
 
}

function BuscaDadosMoeda(moeda){

    var ret = true;

    var url = 'http://www.visional.com.br/wscotacao/cotacao.asmx/ListaSerieVO?COD_MOEDA=' + moeda + '';

    jQuery.ajax({
        url: url,
        //data: {format: 'json'},
        async: false,
        type: 'GET',
        dataType: 'xml',
        success: function (xml) {
            CarregaDadosMoeda(xml);

        },
        error: function (xml) {
            alert("ERRO");
            ret = false;
        }
    });

    return ret;
}

function CarregaDadosMoeda(xml) {

    jQuery(xml).find('SERIE_VO').each(function () {

        jQuery('#NOMEABREVIADOFIELD').text(jQuery(this).find('NOMEABREVIADOFIELD').text());
        jQuery('#UNIDADEPADRAOFIELD').text(jQuery(this).find('UNIDADEPADRAOFIELD').text());
        jQuery('#FULLNAMEFIELD').text( jQuery(this).find('FULLNAMEFIELD').text());
        jQuery('#NOMEABREVIADOFIELD').text(jQuery(this).find('NOMEABREVIADOFIELD').text());
        jQuery('#PERIODICIDADEFIELD').text(jQuery(this).find('PERIODICIDADEFIELD').text());
    });
}

function BuscaCotacaoMoeda(moeda, data) {


    var ret = true;
    var dia = '';
    var mes = '';
    var ano = '';

    
   
    if (data == '')
    {
        var dt = new Date();
        dia =dt.getDate();
        mes = (dt.getMonth()+1);
        ano = dt.getFullYear();
    }
    else
    {
        data = data.match(/\d+/g);
        mes = data[1];
        ano = data[0];
        dia = data[2];
    }
    
  
    var url = 'http://www.visional.com.br/wscotacao/cotacao.asmx/ListaValorCotacao?COD_MOEDA='+moeda+'&dia='+dia+'&mes='+mes+'&ano='+ano+'';

    jQuery.ajax({
        url: url,
        //data: {format: 'json'},
        async: false,
        type: 'GET',
        dataType: 'xml',
        success: function (xml) {
            CarregaCotacaoMoeda(xml);

        },
        error: function () {
            alert("ERRO");
            ret = false;
        }
    });

    return ret;

}

function CarregaCotacaoMoeda(xml) {

    if (jQuery(xml).find('VALOR_SERIE_VO').length > 0)
    {
        jQuery(xml).find('VALOR_SERIE_VO').each(function ()
        {

            var dia =  jQuery(this).find('DIAFIELD').text();
            var mes = jQuery(this).find('MESFIELD').text();
            var ano = jQuery(this).find('ANOFIELD').text()
            jQuery('#DATACOTACAO').text(dia + '/' + mes + '/' + ano);
            jQuery('#SVALORFIELD ').text('R$ '+jQuery(this).find('SVALORFIELD').text());

       });

        jQuery('#DIVCOTACAO').css('visibility', 'visible');
    }
    else
    {
        alert('OS VALORES PARA ESTA DATA NÃO ESTÃO DISPONÍVEIS'); //MESAGEM DE alerta
    }

}