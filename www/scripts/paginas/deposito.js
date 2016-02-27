var ID_ESTABELECIMENTO = '';
var ID_USUARIO = '';
var ID_ENDERECO_ENTREGA = '';
var SIMBOLO = '';
var DATA_COTACAO = '';
var DATA_USU = '';
var DATA_ESTABELECIMENTO = '';
var V_PASSO = 0;


jQuery(document).ready(function () {
    EqualizaTamanhoTela();
    RetornaOperacaoPorCodigo(RecebeValores());
});
 
function RecebeValores()
{
 return  localStorage.getItem('VIEWCODVENDA');
}

function BuscaOperacaoEstabelecimento() {
    DATA_COTACAO = jQuery.parseJSON(RetornaCotacaoEstabelecimentoPorMoeda(ID_ESTABELECIMENTO, SIMBOLO, null, null));
    CarregaUltimaCotacao(DATA_COTACAO);
}

function ValidaDadosBancarios()
{

    var BANCOS = jQuery('#BANCOS').val();
    var AGENCIA = jQuery('#AGENCIA').val();
    var CONTA = jQuery('#CONTA').val();
    var DATA = jQuery('#DATA').val();
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

function CarregaFormaPagamento() {
    var html = "<select class='contactFieldExchange' id='FORMA_PAGAMENTO' >";
    html += "<option value='DEP'> Depósito em C/C </option>";
    html += "<option value='DEL'> Transferência </option>";
    html += "</select>";
    return html;
}

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
