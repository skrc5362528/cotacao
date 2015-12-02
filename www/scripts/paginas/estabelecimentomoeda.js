function CarregaSelectEstabelecimentos() {
    jQuery('#ESTABELECIMENTO').append('<option value="" selected> Que estabelecimento você procura? </option>');
    var data = jQuery.parseJSON(RetornaListaEstabelecimentos(null, null));
    if (data.length > 0) {
        jQuery.each(data, function () {
            MontaSelectEstabelecimento('ESTABELECIMENTO', this.ID_ESTABELECIMENTO, this.NOME);
        });
    }
}

function PreencheSelectMoeda() {
    jQuery('#MOEDA').append('<option value="" selected> Que moeda você procura? </option>');
    var data = jQuery.parseJSON(ListaMoeda(null, null));
    if (data.length > 0) {
        jQuery.each(data, function () {
            MontaSelect('MOEDA', this.SIMBOLO, this.NOME, this.PAIS);
        });
    }
}

function MontaSelect(OBJETO, SIMBOLO, NOME, PAIS) {

    jQuery('#' + OBJETO + '').append('<option value=' + SIMBOLO + '>' + NOME + '</option>');
}

function MontaSelectEstabelecimento(OBJETO, CODIGO, NOME) {
    jQuery('#' + OBJETO + '').append('<option value=' + CODIGO + '>' + NOME + ' </option>');
}

function CarregaEstabelecimento(data) {

    var html =
    "<div id='" + data.ID_ESTABELECIMENTO + "' class='big-notification static-notification-white'>" +
    "<strong><label class='busca-text'>" + data.NOME + "</label></strong> " +
    "<div class='one-half'>" +
    "<label class='contact-text'> " + data.FONE + "</label>" +
    "<label class='contact-text'>R$: 10,00 </label>" +// + + data.VALOR_COTACAO + "</label>" +
    "</div>" +
    "<div class='two-half last-column'>" +
    "<label class='contact-text'></label>" +
    "</div>" +
     "<div>" +
    "</div>" +
    "</div>" +
    "</br>";

    return html;
}

function RetornaEstabelecimento(ID_ESTABELECIMENTO) {
    var data = jQuery.parseJSON(RetornaEstabelecimentoPorId(ID_ESTABELECIMENTO, null, null));
    if (data.length > 0) {
        jQuery.each(data, function () {
            CarregaEstabelecimento(data);
        });
    }
}

function AdicionaMoeda(ID_ESTABELECIMENTO) {

    var ID_MOEDA = '';
    var SIMBOLO = '';
    var NOME = '';
    var CODIGO = '';
    jQuery.each(MOEDA, function () {
        if (this.SIMBOLO == jQuery('#MOEDA').val()) {
            ID_MOEDA = this.ID_MOEDA;
            SIMBOLO = this.SIMBOLO;
            NOME = this.NOME;
            CODIGO = this.CODIGO;
        }
    });
    var VALOR_COTACAO = jQuery('#VALOR_COTACAO').val();
    var VALOR_COTACAO_COMPRA = jQuery('#VALOR_COTACAO_COMPRA').val();


    var dt = new Date();
    var data = jQuery.parseJSON(RetornaCotacaoEstabelecimentoPorMoeda(ID_ESTABELECIMENTO, SIMBOLO, null, null));

    if (data.length == 0) {

        InsereMoedaEstabelecimento(ID_ESTABELECIMENTO, ID_MOEDA, CODIGO, NOME, SIMBOLO, null, null)
        InsereCotacaoEstabelecimento(ID_ESTABELECIMENTO, VALOR_COTACAO,VALOR_COTACAO_COMPRA, ID_MOEDA, CODIGO, SIMBOLO, dt.getDate(), (dt.getMonth() + 1), dt.getFullYear(), null, null);
    }
    else {
        ExibeMensagem('Moeda já cadastrada!');
    }
    PreencheMoedasTrabalhadas(ID_ESTABELECIMENTO);
}

function CarregaMoedaTrabalhada(ID_ESTABELECIMENTO, SIMBOLO)
{
    var data = jQuery.parseJSON(RetornaCotacaoEstabelecimentoPorMoeda(ID_ESTABELECIMENTO, SIMBOLO, null, null));
    if (data.length > 0) {
        jQuery.each(data, function () {
            jQuery('#VALOR_COTACAO').val(this.VALOR_COTACAO);
            jQuery('#VALOR_COTACAO_COMPRA').val(this.VALOR_COTACAO_COMPRA);
            jQuery('#STATUS').val(this.STATUS);
        });
    }



}

function PreencheMoedasTrabalhadas(ID_ESTABELECIMENTO) {

    var html = '';
    var data = jQuery.parseJSON(RetornaListaMoedaEstabelecimentoCotacao(ID_ESTABELECIMENTO, null, null));
    if (data.length > 0) {
        jQuery.each(data, function () {
            html += MontaMoedasTrabalhadas(this);
        });
    }
    jQuery('#DIVESTABELECIMENTO').html(html);

}

function MontaMoedasTrabalhadas(data) {

    var html =
   "<div id='" + data.ID_ESTABELECIMENTO_MOEDA + "' class='big-notification static-notification-white'>" +
   "<strong><label class='busca-text'>Moeda:" + data.NOME_MOEDA + "</label></strong> " +
   "<div class='one-half'>" +
   "<label class='contact-text'> Cod.:" + data.SIMBOLO + "</label>" +
   // "<input type='number' name='PERCENTUAL' value='"+ data.VALOR_COTACAO +"' class='contactField' id='PERCENTUAL' placeholder='Percentual de valoração' required />"+
    "<label class='contact-text'>Perc.:" + data.VALOR_COTACAO + "%</label>" +
    "</div>" +
    "</div>";

    return html;
}

jQuery(document).ready(function () {

    CarregaSelectEstabelecimentos();
    PreencheSelectMoeda();


});

function verificaAtivo(ATIVO) {

    var ret = '';

    if (ATIVO == true)
        ret = 'ATIVO';
    else
        ret = 'DESATIVADO';

    return ret;

}