function CarregaSelectEstabelecimentos() {
    jQuery('#ESTABELECIMENTO_').append('<option value="" selected> Que estabelecimento você procura? </option>');
    var data = jQuery.parseJSON(RetornaListaEstabelecimentos(null, ERROCONEXAO));
    if (data.length > 0) {
        jQuery.each(data, function () {
            MontaSelectEstabelecimento('ESTABELECIMENTO_', this.ID_ESTABELECIMENTO, this.NOME);
        });
    }
}

function PreencheSelectMoeda() {
    jQuery('#MOEDA').append('<option value="" selected> Que moeda você procura? </option>');
    var data = jQuery.parseJSON(ListaMoeda(null, ERROCONEXAO));
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
    var data = jQuery.parseJSON(RetornaEstabelecimentoPorId(ID_ESTABELECIMENTO, null, ERROCONEXAO));
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
    var data = jQuery.parseJSON(RetornaCotacaoEstabelecimentoPorMoeda(ID_ESTABELECIMENTO, SIMBOLO, null, ERROCONEXAO));

    if (data.length == 0) {

        InsereMoedaEstabelecimento(ID_ESTABELECIMENTO, ID_MOEDA, CODIGO, NOME, SIMBOLO, null, ERROCONEXAO)
        InsereCotacaoEstabelecimento(ID_ESTABELECIMENTO, VALOR_COTACAO, VALOR_COTACAO_COMPRA, ID_MOEDA, CODIGO, SIMBOLO, dt.getDate(), (dt.getMonth() + 1), dt.getFullYear(), null, null);
    }
    else {
        ExibeMensagem('Moeda já cadastrada!');
    }
    PreencheMoedasTrabalhadas(ID_ESTABELECIMENTO);
}

function CarregaMoedaTrabalhada(ID_ESTABELECIMENTO, SIMBOLO) {
    var data = jQuery.parseJSON(RetornaCotacaoEstabelecimentoPorMoeda(ID_ESTABELECIMENTO, SIMBOLO, null, ERROCONEXAO));
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
    var data = jQuery.parseJSON(RetornaListaMoedaEstabelecimentoCotacao(ID_ESTABELECIMENTO, null, ERROCONEXAO));
    if (data.length > 0) {
        jQuery.each(data, function () {
            html += MontaMoedasTrabalhadas(this);
        });
    }
    jQuery('#DIVESTABELECIMENTO').html(html);
}

function MontaMoedasTrabalhadas(data) {

    var status = verificaAtivo(data.ATIVO);



    var html =
   "<div id='" + data.ID_COTACAO + "' class='big-notification static-notification-white'>" +
    "<div>" +
    "<strong><label class='contact-text'>" + data.NOME_MOEDA + "</label></strong> " +
    "</div>" +
    "<div class='one-third center-text'>" +
     "<a  onclick='AlteraCotacao(this);' id='ALTERA_" + data.ID_COTACAO + "'   class='button button-white'><i class='fa fa-pencil' style='font-size:18px; color:#0489B1;'></i></a>" +
   "</div>" +
   "<div class='one-third center-text'>" +
     "<a  onclick='AlteraCotacao(this);' id='CANCELA_" + data.ID_COTACAO + "'  class='button button-white'><i class='fa fa-times' style='font-size:18px; color:#0489B1;'></i></a>" +
  "</div>" +
   "<div class='one-third last-column center-text'>" +
   "<a  onclick='AlteraCotacao(this);' id='GRAVA_" + data.ID_COTACAO + "' class='button button-white'><i class='fa fa-floppy-o' style='font-size:18px; color:#0489B1;'></i></a>" +
   "</div>" +
   "<div class='one-half'>" +
   "<fieldset>" +
   "<label class='contact-text'> Cod.:" + data.SIMBOLO + "</label>" +
   "<label class='contact-text'>Perc. Venda:</label>" +
    "<input type='number' name='VALOR_COTACAO' value='" + data.VALOR_COTACAO + "' class='contactField' id='VALOR_COTACAO_" + data.ID_COTACAO + "' placeholder='Percentual de valoração' required readonly />" +
    "<fieldset>" +
    "</div>" +
    "<div class='one-half last-column'>" +
    "<fieldset>" +
    "<label class='contact-text'>Status:" + status + "</label>" +
    "<label class='contact-text'>Perc. Compra: </label>" +
    "<input type='number' name='VALOR_COTACAO_COMPRA' value='" + data.VALOR_COTACAO_COMPRA + "' class='contactField' id='VALOR_COTACAO_COMPRA_" + data.ID_COTACAO + "' placeholder='Percentual de valoração' required readonly />" +
    "<fieldset>" +
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

function AlteraCotacao(obj) {
    var ob = obj.id.split("_");
    var ACAO = ob[0];
    var ID = ob[1];

    alert(ACAO);
    alert(ID);

    if (ACAO == "ALTERA")
    {
        jQuery('#VALOR_COTACAO_' + ID + '').attr("readonly", false);
        jQuery('#VALOR_COTACAO_COMPRA_' + ID + '').attr("readonly", false);
    }
    if (ACAO == "CANCELA")
    {
        jQuery('#VALOR_COTACAO_' + ID + '').attr("readonly", true);
        jQuery('#VALOR_COTACAO_COMPRA_' + ID + '').attr("readonly", true);
    }
    if (ACAO == "GRAVA")
    {

    }
}
