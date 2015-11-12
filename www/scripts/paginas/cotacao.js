

function PreencheSelect() {
    var data = jQuery.parseJSON(ListaMoeda(null, null));
    if (data.length > 0) {
        jQuery.each(data, function () {
            MontaSelect(this.CODIGO, this.NOME);
        });
    }
}
function MontaSelect(CODIGO, NOME) {
    jQuery('#MOEDA').append('<option value=' + CODIGO + '>' + NOME + '</option>');
}
function BuscaValores() {

    var moeda = jQuery('#MOEDA').val();
    var data = jQuery('#DATA_COTACAO').val();


    BuscaDadosMoeda(moeda);
    BuscaCotacaoMoeda(moeda, data);



}

function BuscaDadosMoeda(COD_MOEDA) {
    var data = jQuery.parseJSON(ListaSerieVO(COD_MOEDA, null, null));
    CarregaDadosMoeda(data.NOMEABREVIADOFIELD, data.UNIDADEPADRAOFIELD, data.FULLNAMEFIELD, data.NOMEABREVIADOFIELD, data.PERIODICIDADEFIELD);
}


function CarregaDadosMoeda(NOMEABREVIADOFIELD, UNIDADEPADRAOFIELD, FULLNAMEFIELD, NOMEABREVIADOFIELD, PERIODICIDADEFIELD) {

    jQuery('#NOMEABREVIADOFIELD').val(NOMEABREVIADOFIELD);
    jQuery('#UNIDADEPADRAOFIELD').val(UNIDADEPADRAOFIELD);
    jQuery('#FULLNAMEFIELD').val(FULLNAMEFIELD);
    jQuery('#NOMEABREVIADOFIELD').val(NOMEABREVIADOFIELD);
    jQuery('#PERIODICIDADEFIELD').val(PERIODICIDADEFIELD);

}

function BuscaCotacaoMoeda(moeda, data) {


    var ret = true;
    var dia = '';
    var mes = '';
    var ano = '';

    if (data == '') {
        var dt = new Date();
        dia = dt.getDate();
        mes = (dt.getMonth() + 1);
        ano = dt.getFullYear();
    }
    else {
        data = data.match(/\d+/g);
        mes = data[1];
        ano = data[0];
        dia = data[2];
    }

    var data = jQuery.parseJSON(ListaValorCotacao(moeda, dia, mes, ano, null, null));
    CarregaCotacaoMoeda(data);
    
}

function CarregaCotacaoMoeda(data) {

    if (data != null) {
        jQuery.each(data, function () {
            var dia = jQuery(this).find('DIAFIELD').text();
            var mes = jQuery(this).find('MESFIELD').text();
            var ano = jQuery(this).find('ANOFIELD').text()
            jQuery('#DATACOTACAO').text(data.DIAFIELD + '/' + data.MESFIELD + '/' + data.ANOFIELD);
            jQuery('#SVALORFIELD ').text('R$ ' + data.SVALORFIELD);
        });
    }
    else {
        alert('OS VALORES PARA ESTA DATA NÃO ESTÃO DISPONÍVEIS'); //MESAGEM DE alerta
    }
    jQuery('#DIVCOTACAO').css('visibility', 'visible');

}