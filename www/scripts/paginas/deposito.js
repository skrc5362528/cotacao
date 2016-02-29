var OPERACAO = '';



jQuery(document).ready(function () {
    EqualizaTamanhoTela();
    BuscaOperacaoUsuario(RecebeValores());
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
    jQuery('#CPF').val(OPERACAO[0].BANCO1);
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

    var msg = ''
    if (BANCOS == '' || AGENCIA == '' || CONTA == '') {
        msg = 'Dados bancário incompletos';
    }
    if (DATA == '' || NUM_DOC == '') {
        msg = 'Documentos incompletos';
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
{ }


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
