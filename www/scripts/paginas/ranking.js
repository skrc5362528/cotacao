var OPERACAO = '';
var COD_VENDA = '';
var OP_REALIZADA = '';


jQuery(document).ready(function myfunction() {
    EqualizaTamanhoTela();
    debugger
    MontaTela();

});

function MontaTela() {
    //   var usu = jQuery.parseJSON(localStorage.getItem("USUARIO"));
    COD_VENDA = RecebeValores();
    BuscaOperacaoUsuario(COD_VENDA);
    CarregaDivConfirmacao(OPERACAO);
}

function CarregaDivConfirmacao(OPERACAO) {
    debugger;
    var html = "<div class='container no-bottom'>" +
        "<div class='no-bottom'>   " +
        "<div>  " +
        "<fieldset>" +
         " <div class='big-notification static-notification-white'> " +
        "<h4 style='color:black;'><strong><label>Estabelecimento : " + OPERACAO[0].CONTA + "</label></strong>  " +
        " <strong><label>Cod. Venda : " + OPERACAO[0].COD_VENDA + "</label></strong>  " +
        " <strong><label>Moeda : " + OPERACAO[0].SIMBOLO + "</label></strong>  " +
        " <strong><label>Valor Total : " +formataValores(parseFloat(OPERACAO[0].VALOR_TOTAL_OPERACAO).toFixed(2),"R$") + "</label></strong>   " +
        " <strong><label>Estabelecimento : " + OPERACAO[0].CONTA + "</label></strong> </h4>  " +


       // CarregaEstabelecimento(OPERACAO[0]) +

        "<h2 style='color:black;'><p class='center-text' style='font-size:22px;'><strong> Qualifique sua compra </strong></p></h2>" +
        "<p class='center-text' ><strong><i class='fa fa-check' style='font-size: 128px; color:#0489B1;'></i></strong></p>" +

        "</div>" +
        "</fieldset>" +
        "</div>" +
        "</div>" +
        "</div>";
    jQuery('#DIVDADOSRANKING').html(html);
}

function CarregaEstabelecimento(data) {

    var dt = new Date(data.DATA_COTACAO);
    var html =
 "<div id='" + data.ID_ESTABELECIMENTO + "' class='big-notification static-notification-white' style='height: 140px;'>" +
    "<div><img src='img/icon.png' style='float:left; width:60px;margin-right: 5px;'" +
    "</div>" +
    "<div class='two-half'>" +
    "<strong>" + data.NOME + "</strong> " +
    "</div>" +
    "<div>" +
    "<div class='one-half' style='width:95%;'>" +
    "<strong>Venda:</strong> R$ " + data.VALOR_COTACAO +
    "<strong>Dist.:</strong> " + data.DISTANCIA + " KM </div>" +
    "</div>" +
    "<div>" +
   "<div class='one-half' style='width:95%;'>" +
   "<strong>Atualização:</strong>" +
   "</div>" +
   "<div class='two-half' style='width:95%;margin-left: 70px;top: -20px;'>" +
    dt.getDate() + "/" + (dt.getMonth() + 1) + "/" + dt.getFullYear() + " ás " + data.HORA_COTACAO +
    "</div>" +
    "</div>" +
     "<div class='two-half last-column' style='margin-left: 1px;top: -19px;'>" +
    "<span class='span-stars'>" +
    "<i class='fa fa-star'></i>" +
    "<i class='fa fa-star'></i>" +
    "<i class='fa fa-star'></i>" +
    "<i class='fa fa-star'></i>" +
    "<i class='fa fa-star-o'></i>" +
    "</span>" +
    "</div>" +
    "<div style='width:95%;margin-left: 189px;top: -40px;'>" +
    "<strong>IOF 0,38% incluso </strong>    " +
    "</div>" +



    "<div class='static-notification-exchange' style='border-radius: 10px;top: -40px;' onclick='MostraReserva(this)' id='" + data.ID_ESTABELECIMENTO + "_" + data.SIMBOLO + "' >" +
    "<p class='center-text' style='font-size:15px; color:white;'>Comprar</p>" +
    "</div>" +


   "<div style='border-radius: 10px;top: -40px;'>" +
    MontaInfo(data.RETIRADA, data.DELIVERY, data.RECARGA);//"<label class='contact-text'>" + data.NOME + "</label>" +
    + "</div>"
    "</div>";
    return html;

}
function RecebeValores() {
    return localStorage.getItem('VIEWCODVENDA');
}

function 
    BuscaOperacaoUsuario(COD_VENDA) {
    OPERACAO = jQuery.parseJSON(RetornaOperacaoPorCodigo(COD_VENDA, null, null));
    CarregaDivConfirmacao(OPERACAO);
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


