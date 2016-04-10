var OPERACAO = '';
var COD_VENDA = '';
var OP_REALIZADA = '';


jQuery(document).ready(function myfunction() {
    EqualizaTamanhoTela();
    MontaTela();

});

function MontaTela() {
    var usu = jQuery.parseJSON(localStorage.getItem("USUARIO"));
    COD_VENDA = RecebeValores();
    BuscaOperacaoUsuario(COD_VENDA);
    CarregaDivConfirmacao(OPERACAO);
}

function CarregaDivConfirmacao(OPERACAO) {
    var html = "<div class='container no-bottom'>" +
        "<div class='no-bottom'>   " +
        "<div>  " +
        "<fieldset>" +
        " <div class='big-notification static-notification-white'> " +
        CarregaEstabelecimento(OPERACAO[0]) +
        "<div class='static-notification-exchange'  id='" + ID_ESTABELECIMENTO + "_" + SIMBOLO + "' onclick='MostraMapa(this);'>" +
        "<p class='center-text' style='color: white;'><strong>Ver no mapa</strong></p>" +
        "</div>" +
        "<h2 style='color:black;'><p class='center-text' style='font-size:22px;'><strong>Compra Finalizada</strong></p></h2>" +
        "<p class='center-text' ><strong><i class='fa fa-check' style='font-size: 128px; color:#0489B1;'></i></strong></p>" +
        "<strong><h4 style='color:black;'>Dados bancários para depósito</h4></strong>  " +
        " <strong><label  >Banco : " + OPERACAO[0].BANCO1 + "</label></strong>  " +
        " <strong><label  >Agência : " + OPERACAO[0].AGENCIA + "</label></strong>   " +
        " <strong><label  >Conta corrente : " + OPERACAO[0].CONTA + "</label></strong>   " +
        " <strong><label  >CNPJ : " + OPERACAO[0].CNPJ + "</label></strong>   " +
        "</div>" +
        "</fieldset>" +
        "</div>" +
        "</div>" +
        "</div>";
    jQuery('#DIVDADOSRANKING').html(html);
}


function RecebeValores() {
    return localStorage.getItem('VIEWCODVENDA');
}

function BuscaOperacaoUsuario(COD_VENDA) {
    OPERACAO = jQuery.parseJSON(RetornaOperacaoPorCodigo(COD_VENDA, null, null));
    CarregaOperacao(OPERACAO);
}

function CarregaOperacao(OPERACAO) {
    jQuery('#NOME').val(OPERACAO[0].NOME);
    jQuery('#BANCO').val(OPERACAO[0].BANCO1);
    jQuery('#AGENCIA').val(OPERACAO[0].AGENCIA);
    jQuery('#CONTA').val(OPERACAO[0].CONTA);
    jQuery('#CPF').val(OPERACAO[0].CPF);
    jQuery('#VALOR').val(OPERACAO[0].VALOR_TOTAL_OPERACAO);

    jQuery('#DATA').val();
    jQuery('#NUM_DOC').val();
}

function ClkConfirmarDeposito() {
    ConfirmaDeposito();
}

function ConfirmaDeposito() {
    if (OP_REALIZADA == '') {
        var msg = ValidaDadosBancarios();



        if (msg == '') {

            var VALOR_PRODUTO = OPERACAO[0].VALOR_TOTAL_OPERACAO;
            var ID_VENDA = OPERACAO[0].ID_VENDA;
            var ID_STATUS_VENDA = 6;
            var ID_TIPO_VENDA = OPERACAO[0].ID_TIPO_VENDA;


            var BANCOS = jQuery('#BANCOS').val();
            var AGENCIA = jQuery('#AGENCIA').val();
            var CONTA = jQuery('#CONTA').val();
            var DATA = jQuery('#DATA').val();
            var NUM_DOC = jQuery('#NUM_DOC').val();
            var ID_TIPO_DEPOSITO = jQuery('#DEPOSITO').val();


            var ret = AlteraDepositoOperacao(ID_VENDA, COD_VENDA, ID_STATUS_VENDA, NUM_DOC, DATA, ID_TIPO_DEPOSITO, VALOR_PRODUTO, ID_TIPO_VENDA, null, ERROCONEXAO);
            OP_REALIZADA = ret;
            if (ret > 0) {

                ExibeMensagem('Depósito informado com sucesso');
            }
        }
        else {

            ExibeMensagem(msg);
        }
    }
    else {
        ExibeMensagem("Este depósito já foi informado!")
    }
}

function MontaSelect(OBJETO, CODIGO, NOME) {
    jQuery('#' + OBJETO + '').append('<option value=' + CODIGO + '>' + NOME + '</option>');
}


