var OPERACAO = '';
var COD_VENDA = '';
var OP_REALIZADA = '';
jQuery(document).ready(function () {

    COD_VENDA = RecebeValores();
    EqualizaTamanhoTela();
    PreencheSelectBancos();
    PreencheSelectDeposito();
    BuscaOperacaoUsuario(COD_VENDA);
});
 
function RecebeValores()
{
 return  localStorage.getItem('VIEWCODVENDA');
}

function BuscaOperacaoUsuario(COD_VENDA) {
    OPERACAO = jQuery.parseJSON(RetornaOperacaoPorCodigo(COD_VENDA, null, null));
    CarregaOperacao(OPERACAO);
}

function CarregaOperacao(OPERACAO)
{
    jQuery('#NOME').val(OPERACAO[0].NOME);
    jQuery('#BANCO').val(OPERACAO[0].BANCO1);
    jQuery('#AGENCIA').val(OPERACAO[0].AGENCIA);
    jQuery('#CONTA').val(OPERACAO[0].CONTA);
    jQuery('#CPF').val(OPERACAO[0].CPF);
    jQuery('#VALOR').val(OPERACAO[0].VALOR_TOTAL_OPERACAO);
    
    jQuery('#DATA').val();
    jQuery('#NUM_DOC').val();
}

function ValidaDadosBancarios()
{

    var BANCOS =  jQuery('#BANCOS').val();
    var AGENCIA = jQuery('#AGENCIA').val();
    var CONTA =   jQuery('#CONTA').val();
    var DATA =    jQuery('#DATA').val();
    var NUM_DOC = jQuery('#NUM_DOC').val();
    var DEPOSITO = jQuery('#DEPOSITO').val();

    var msg = ''
    if (BANCOS == '' || AGENCIA == '' || CONTA == '') {
        msg = 'Dados bancário incompletos';
    }
    if (DATA == '' || NUM_DOC == '' || DEPOSITO=='') {
        msg = 'Dados da transação incompletos';
    }
   
    return msg;

}

//function CarregaFormaPagamento() {
//    var html = "<select class='contactFieldExchange' id='FORMA_PAGAMENTO' >";
//    html += "<option value='DEP'> Depósito em C/C </option>";
//    html += "<option value='DEL'> Transferência </option>";
//    html += "</select>";
//    return html;
//}

function ClkConfirmarDeposito()
{
    ConfirmaDeposito();
}

function ConfirmaDeposito() {
    if (OP_REALIZADA == '')
    {
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

function PreencheSelectBancos() {
    jQuery('#BANCOS').append('<option value="" selected> Escolha seu banco</option>');
    var data = jQuery.parseJSON(ListaBanco(null,null));
    if (data.length > 0) {
        jQuery.each(data, function () {
            MontaSelect('BANCOS', this.CODIGO, this.BANCO1);
        });
    }
}

function MontaSelect(OBJETO, CODIGO, NOME) {
    jQuery('#' + OBJETO + '').append('<option value=' + CODIGO + '>' + NOME + '</option>');
}

function PreencheSelectDeposito() {
    jQuery('#DEPOSITO').append('<option value="" selected> Escolha seu tipo de depósito</option>');
    var data = jQuery.parseJSON(ListaDeposito(null, null));
    if (data.length > 0) {
        jQuery.each(data, function () {
            MontaSelect('DEPOSITO', this.ID_TIPO_DEPOSITO, this.DESCRICAO);
        });
    }
}

