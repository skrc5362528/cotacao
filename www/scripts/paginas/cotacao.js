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
    var data = '';

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

        //var dt = new Date(data);
        //dia = dt.getDate();
        //mes = (dt.getMonth() + 1);
        //ano = dt.getFullYear();

        //data = data.match(/\d+/g);
        //dia = data[2];
        //mes = data[1];
        //ano = data[0];
        
    }
    BuscaUltimoValorVO(moeda);
    BuscaCotacaoMoeda(moeda, dia, mes, ano)



}

function BuscaUltimoValorVO(moeda) {

    var data = UtlimoValorVO(moeda, null, null)
    if (data != '')
    {
    data = jQuery.parseJSON(data);
    CarregaUltimoVaorVO(data);
}
    else {
        alert('OS VALORES PARA ESTA DATA NÃO ESTÃO DISPONÍVEIS');
    }

}

function CarregaUltimoVaorVO(data) {

    jQuery('#NOMEABREVIADOFIELD').text(data.nomeAbreviado);
    jQuery('#UNIDADEPADRAOFIELD').text(data.unidadePadrao);
    jQuery('#FULLNAMEFIELD').text(data.fullName);
    jQuery('#NOMEABREVIADOFIELD').text(data.nomeAbreviado);
    jQuery('#PERIODICIDADEFIELD').text(data.periodicidade);

    jQuery('#DATACOTACAO').text(data.ultimoValor.dia + '/' + data.ultimoValor.mes + '/' + data.ultimoValor.ano);
    jQuery('#SVALORFIELD ').text('R$ ' + data.ultimoValor.svalor);

    jQuery('#DIVCOTACAO').css('visibility', 'visible');
}


function CarregaDadosMoeda(NOMEABREVIADOFIELD, UNIDADEPADRAOFIELD, FULLNAMEFIELD, NOMEABREVIADOFIELD, PERIODICIDADEFIELD) {

    jQuery('#NOMEABREVIADOFIELD').val(NOMEABREVIADOFIELD);
    jQuery('#UNIDADEPADRAOFIELD').val(UNIDADEPADRAOFIELD);
    jQuery('#FULLNAMEFIELD').val(FULLNAMEFIELD);
    jQuery('#NOMEABREVIADOFIELD').val(NOMEABREVIADOFIELD);
    jQuery('#PERIODICIDADEFIELD').val(PERIODICIDADEFIELD);

}

function BuscaCotacaoMoeda(moeda, dia, mes, ano) {

    var data = ValorPorData(moeda, dia, mes, ano, null, null);
    if (data != '') {
        data = jQuery.parseJSON(data);
        CarregaCotacaoMoeda(valor, dia, mes, ano);
    }
    else {
        alert('OS VALORES PARA ESTA DATA NÃO ESTÃO DISPONÍVEIS');
    }


}

function CarregaCotacaoMoeda(valor, dia, mes, ano) {

    if (valor != null) {
        jQuery('#SVALORFIELD ').text('R$ ' + valor);
        jQuery('#DATACOTACAO').text(dia + '/' + mes + '/' + ano);
    }
    else {
        alert('OS VALORES PARA ESTA DATA NÃO ESTÃO DISPONÍVEIS'); //MESAGEM DE alerta
    }
    jQuery('#DIVCOTACAO').css('visibility', 'visible');

}