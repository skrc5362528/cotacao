
var ID_ESTABELECIMENTO = '';
var ID_USUARIO = '';
var ID_ENDERECO_ENTREGA = '';
var SIMBOLO = '';
var DATA_COTACAO = '';
var ID_VENDA = '';
var DATA_USU = '';
var DATA_ESTABELECIMENTO = '';
var V_PASSO = 0;
var SYSCONFIG = '';

var IOF = jQuery.parseJSON(localStorage.getItem('SYSCONFIG'))[0].IOF;

//=============================================
var pictureSource;
var destinationType; // sets the format of returned value
var optionsWatchPosition;

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    optionsWatchPosition = { timeout: 10000, maximumAge: 11000, enableHighAccuracy: true };
    pictureSource = navigator.camera.PictureSourceType;
    destinationType = navigator.camera.DestinationType;
}
//================================================

function BuscaCotacaoEstabelecimento() {
    DATA_COTACAO = jQuery.parseJSON(RetornaCotacaoEstabelecimentoPorMoeda(ID_ESTABELECIMENTO, SIMBOLO, null, null));
    CarregaUltimaCotacao(DATA_COTACAO);
}

function MostraMapa(obj) {
    localStorage.setItem('VIEWMAP', obj.id)
    CarregaMenu('mapa.html');
}

function RecebeValores() {
    var obj = localStorage.getItem('VIEWRESERVA');
    var id = obj.split("_");
    ID_ESTABELECIMENTO = id[0];
    SIMBOLO = id[1];
    ID_USUARIO = jQuery.parseJSON(localStorage.getItem("USUARIO")).ID_USUARIO;
}

function formataDinheiro(valor) {
    valor.value = ValidaValoresNumericos(valor.value);
    CalculaCotacao(valor.value, jQuery('#VALOR_COTACAO').val())
}

function MontaConversao(valordesejado, valorcotacao, valorMaximo, valorMinimo) {

    var val1 = ValidaValoresNumericos(jQuery('#VALOR_DESEJADO').val());
    var val2 = ValidaValoresNumericos(valorMaximo);
    var val3 = ValidaValoresNumericos(valorMinimo);


    if (parseFloat(val1) > parseFloat(val2)) {
        ExibeMensagem("Valor desejado maior que o máximo");
        jQuery('#VALOR_DESEJADO').val('');
        jQuery('#VALOR_CONVERTIDO').val('');
        return;
    }
    if (parseFloat(val1) < parseFloat(val3)) {
        ExibeMensagem("Valor desejado menor que o mínimo");
        jQuery('#VALOR_DESEJADO').val('');
        jQuery('#VALOR_CONVERTIDO').val('');
        return;
    }
    else {
        formataDinheiro(valordesejado);
        CalculaCotacao(jQuery('#VALOR_DESEJADO').val(), jQuery('#VALOR_COTACAO').val());
    }

}

function CalculaCotacao(VALOR, VALOR_COTACAO) {

    var VALOR = parseFloat(parseFloat(VALOR) * parseFloat(VALOR_COTACAO)).toFixed(2);
    jQuery('#VALOR_CONVERTIDO').val(formataValores(VALOR, ''));
}

function Confirmar(PASSO) {

    if (PASSO >= 0) {
        switch (PASSO) {
            case 0:
                jQuery('#DIVDADOSVALORES').show();
                jQuery('#DIVDADOSENDERECO').hide();
                jQuery('#DIVDADOSOPERACAO').hide();
                jQuery('#DIVDADOSUSUARIO').hide();
                jQuery('#DIVDADOSCONFIRMACAO').hide();
                V_PASSO = PASSO;

                break;
            case 1:

                if (PASSO == 1 && jQuery('#FORMA_ENTREGA').val() == '3') {
                    var ret = ValidaDadosOperacao();
                    if (ret == '') {
                        jQuery('#DIVDADOSVALORES').hide();
                        jQuery('#DIVDADOSENDERECO').show();
                        jQuery('#DIVDADOSUSUARIO').hide();
                        jQuery('#DIVDADOSOPERACAO').hide();
                        jQuery('#DIVDADOSCONFIRMACAO').hide();
                        V_PASSO = PASSO + 1;
                    } else {
                        ExibeMensagem(ret);
                    }
                }
                else {
                    var ret = ValidaDadosOperacao();
                    if (ret == '') {
                        jQuery('#DIVDADOSVALORES').hide();
                        jQuery('#DIVDADOSENDERECO').hide();
                        jQuery('#DIVDADOSUSUARIO').show();
                        jQuery('#DIVDADOSOPERACAO').hide();
                        jQuery('#DIVDADOSCONFIRMACAO').hide();
                        jQuery('#DIVDADOSCONFIRMACAO').hide();
                        V_PASSO = PASSO + 1;
                    } else {
                        ExibeMensagem(ret);
                    }
                }

                break;
            case 2:

                var ret = ValidaEndereco();

                if (ret == '') {
                    jQuery('#DIVDADOSVALORES').hide();
                    jQuery('#DIVDADOSENDERECO').hide();
                    jQuery('#DIVDADOSUSUARIO').show();
                    jQuery('#DIVDADOSOPERACAO').hide();
                    jQuery('#DIVDADOSCONFIRMACAO').hide();
                    V_PASSO = PASSO;
                } else {
                    ExibeMensagem(ret);
                }
                break;
            case 3:
                var ret = ValidaDadosBancarios();

                if (ret == '') {
                    jQuery('#DIVDADOSVALORES').hide();
                    jQuery('#DIVDADOSENDERECO').hide();
                    jQuery('#DIVDADOSUSUARIO').hide();
                    jQuery('#DIVDADOSOPERACAO').show();
                    jQuery('#DIVDADOSCONFIRMACAO').hide();

                    CarregaDivOperacao();
                    V_PASSO = PASSO;
                } else {
                    ExibeMensagem(ret);
                }
                break;
        }
    }
}

function ConfirmarCompra() {
    ExibeMensagem('Processando operação...');
    var ret = GravaPedidoCompra();
    if (ret.length > 0) {
        ExibeMensagem('Operação realizada com sucesso!');
        CarregaDivConfirmacao(DATA_COTACAO[0]);
        jQuery('#DIVDADOSVALORES').hide();
        jQuery('#DIVDADOSENDERECO').hide();
        jQuery('#DIVDADOSUSUARIO').hide();
        jQuery('#DIVDADOSOPERACAO').hide();
        jQuery('#DIVDADOSCONFIRMACAO').show();
    }
    else {
        ExibeMensagem('Operação não realizada!');
        CarregaMenu("estabelecimento.html");
    }
}

function RetornaValoresCompra() {
    var valTAXA = parseFloat(SYSCONFIG[0].VALOR_SERVICO).toFixed(2);

    var valCONVER = ValidaValoresNumericos(jQuery('#VALOR_CONVERTIDO').val());

    var valEntrega = parseFloat(jQuery('#TAXA_ENTREGA').val()).toFixed(2);

    var total = parseFloat(parseFloat(valCONVER) + parseFloat(valTAXA) + parseFloat(valEntrega))

    return formataValores(parseFloat(total).toFixed(2), '');
}

function CarregaDivOperacao() {
    //  debugger;

   

    var html = "<div class='container no-bottom'>" +
            "<div class='no-bottom'>   " +
            "<div>  " +
            "<fieldset>" +
            " <div class='big-notification static-notification-white'> " +
            "<strong><h3 style='color:black;'>Resumo da compra</h3></strong>" +
            "<strong><h3 style='color:black;'>" + jQuery('#NOME_ESTABELECIMENTO').val() + "</h3></strong>" +
            " <strong>Moeda:</strong> " + jQuery('#NOME_MOEDA').val() + "<br/>" +
            " <strong>Valor desejado: </strong> " + formataValores(parseFloat(jQuery('#VALOR_DESEJADO').val()), '') + "<br/>" +
            " <strong>Cotação do dia (REAL):</strong>  " + jQuery('#VALOR_COTACAO').val() + "<br/>" +
            " <strong>Valor convertido (REAL):</strong>  " + jQuery('#VALOR_CONVERTIDO').val() + "<br/>" +
            " <strong>IOF %:</strong>  " + SYSCONFIG[0].IOF + "<br/>" +
            "<strong>Serviço eXchange R$:</strong>  " + formataValores(parseFloat(SYSCONFIG[0].VALOR_SERVICO).toFixed(2), '') +
            MontaInforRetirada(jQuery('#FORMA_ENTREGA').val()) + "<br/>" +
            " <strong>Total R$:</strong>  <span style='background-color:green;color:white;'>" + RetornaValoresCompra() + "</span><br/>" +
            "<strong><h3 style='color:black;'>Dados do comprador</h3></strong>" + //"<label><strong>" + "<br/>" +
            " <strong>Nome:</strong>  " + jQuery('#NOME').val() + "<br/>" +
            " <strong>CPF:</strong>  " + jQuery('#CPF').val() + "<br/>" +

           //"<div>" +
           //"<div class='one-half-exchange' >" +
           //"<div class='btn' onclick='FotoDocumentoCPF();'>" +
           //"<i class='fa fa-camera'></i><strong> Tirar foto do CPF</strong>" +
           //"</div>" +
           //"</div>" +
           //"</div>" +

           //"<div class='two-half last-column' >" +
           //"<div class='btn' onclick='getPhotoCPF(pictureSource.SAVEDPHOTOALBUM);'>" +
           //"<i class='fa fa-book'></i><strong> Selecionar CPF do album</strong>" +
           //" <img style='display:none;width:60px;height:60px;' id='cpfImagem' src='' />" +
           //"</div>" + 



           // //"<br/> <strong>RG:</strong>  " + jQuery('#RG').val() + "<br/>" +
           ////==========================================
           //"<div>" +
           //"<div class='one-half-exchange' >" +
           //"<div class='btn' onclick='FotoDocumentoRG();'>" +
           //"<i class='fa fa-camera'></i><strong> Tirar foto da Identidade</strong>" +

           //"</div>" +
           //"</div>" +
           //"</div>" +

           //"<div class='two-half last-column' >" +
           //"<div class='btn' onclick='getPhoto(pictureSource.SAVEDPHOTOALBUM);'>" +
           //"<i class='fa fa-book'></i><strong> Selecionar Identidade do album</strong>" +

           //       " <img style='display:none;width:60px;height:60px;' id='rgImagem' src='' />" +

           //"</div>" +
       
    



           //"<div>" +
           //"<div class='two-half last-column' >" +
           //"<i id='iconeTimesRG'></i>" +
           //"</div>" +
           //"</div>" +
            //==========================================
            "<div>" +
           "<div class='one-half-exchange' >" +
           "<div class='btn'  onclick='FotoDocumentoCPF()'>" +
           "<i class='fa fa-camera'></i><strong> C.P.F</strong>" +
           "</div>" +
           "</div>" +
           //"<div class='two-half last-column' >" +
           //"<i id='iconeTimesCPF'></i>" +
           //"</div>" +
           "</div>" +
                //==========================================
            "<div>" +
           "<div class='one-half-exchange' >" +
           "<div class='btn'  onclick='FotoDocumentoRG()'>" +
           "<i class='fa fa-camera'></i><strong> R.G.</strong>" +
           "</div>" +
           "</div>" +
           //"<div class='two-half last-column' >" +
           //"<i id='iconeTimesCPF'></i>" +
           //"</div>" +
           "</div>" +
            //==========================================
            "<div>" +
           "<div class='one-half-exchange' >" +
           "<div class='btn'  onclick='FotoDocumentoComprovante()'>" +
           "<i class='fa fa-camera'></i><strong> Comp. Residência</strong>" +
           "</div>" +
           "</div>" +
           //"<div class='two-half last-column' >" +
           //"<i id='iconeTimesComprovante'></i>" +
           //"</div>" +
           "</div>" +
           "<div class='static-notification-exchange'  onclick='ConfirmarCompra()'>" +
           "<p class='center-text' style='color: white;'><strong>Finalizar Compra</strong></p>" +
           "</div>" +

           //==========================================

            "</div>" +
            "</fieldset>" +
            "</div>" +
            "</div>" +
            "</div>";

    jQuery('#DIVDADOSOPERACAO').html(html);
}

function CarregaDivConfirmacao() {
    var html = "<div class='container no-bottom'>" +
        "<div class='no-bottom'>   " +
        "<div>  " +
        "<fieldset>" +
        " <div class='big-notification static-notification-white'> " +
        CarregaEstabelecimento(DATA_COTACAO[0]) +
        "<div class='static-notification-exchange'  id='" + ID_ESTABELECIMENTO + "_" + SIMBOLO + "' onclick='MostraMapa(this);'>" +
        "<p class='center-text' style='color: white;'><strong>Ver no mapa</strong></p>" +
        "</div>" +
        "<h2 style='color:black;'><p class='center-text' style='font-size:22px;'><strong>Compra Finalizada</strong></p></h2>" +
        "<p class='center-text' ><strong><i class='fa fa-check' style='font-size: 128px; color:#0489B1;'></i></strong></p>" +
        "<strong><h4 style='color:black;'>Dados bancários para depósito</h4></strong>  " +
        " <strong><label  >Banco : " + DATA_ESTABELECIMENTO[0].BANCO1 + "</label></strong>  " +
        " <strong><label  >Agência : " + DATA_ESTABELECIMENTO[0].AGENCIA + "</label></strong>   " +
        " <strong><label  >Conta corrente : " + DATA_ESTABELECIMENTO[0].CONTA + "</label></strong>   " +
        " <strong><label  >CNPJ : " + DATA_ESTABELECIMENTO[0].CNPJ + "</label></strong>   " +
        "</div>" +
        "</fieldset>" +
        "</div>" +
        "</div>" +
        "</div>";
    jQuery('#DIVDADOSCONFIRMACAO').html(html);
}

function GravaPedidoCompra() {

    //debugger;

    var valTAXA = parseFloat(SYSCONFIG[0].VALOR_SERVICO).toFixed(2);
    var valCONVER = ValidaValoresNumericos(jQuery('#VALOR_CONVERTIDO').val());
    var valEntrega = parseFloat(jQuery('#TAXA_ENTREGA').val()).toFixed(2);
    var valortot = formataValores(parseFloat(valCONVER + valTAXA + valEntrega).toFixed(2), '');


    var VALOR_COTACAO = DATA_COTACAO[0].TAXA_VENDA;
    var VALOR_DESEJADO = jQuery('#VALOR_DESEJADO').val();
    var VALOR_CONVERTIDO = jQuery('#VALOR_CONVERTIDO').val();
    var VALOR_TOTAL_OPERACAO = ValidaValoresNumericos(RetornaValoresCompra());//CalculaValorTotal(parseFloat(SYSCONFIG[0].IOF).toFixed(2), parseFloat(SYSCONFIG[0].VALOR_SERVICO).toFixed(2), jQuery('#VALOR_CONVERTIDO').val(), jQuery('#TAXA_ENTREGA').val())
    var VARLOR_PERC_ESTABELEC = DATA_COTACAO[0].VALOR_COTACAO;
    var VALOR_EXCHANGE = jQuery('#TAXA_SERVICO').val();
    var VALOR_IOF = jQuery('#IOF').val();
    var TAXA_ENTREGA = jQuery('#TAXA_ENTREGA').val();

    //=========================================================
    var VALOR_VENDA = valCONVER;
    var VALOR_COTACAO = jQuery('#VALOR_COTACAO').val();
    var VALOR_DESEJADO = jQuery('#VALOR_DESEJADO').val();
    var VALOR_CONVERTIDO = jQuery('#VALOR_CONVERTIDO').val();
    //=========================================================
    var CEP = jQuery('#CEP').val();
    var ENDERECO = jQuery('#ENDERECO').val();
    var NUMERO = jQuery('#NUMERO').val();
    var COMPLEMENTO = jQuery('#COMPLEMENTO').val();
    var BAIRRO = jQuery('#BAIRRO').val();
    var CIDADE = jQuery('#CIDADE').val();
    var UF = jQuery('#UF').val();
    //=========================================================
    var NOME = jQuery('#NOME').val();
    var DATA_NASCIMENTO = jQuery('#DATA_NASCIMENTO').val();
    //=========================================================
    var STATUS_VENDA = '1';
    var SITUACAO_COMPRA = 'EM ANÁLISE'
    var OBS_COMPRA = '';
    var DESCRICAO_DETALHADA = '';
    var ID_TIPO_VENDA = jQuery('#FORMA_ENTREGA').val();
    //=========================================================
    var BANCOS = jQuery('#BANCOS').val();
    var AGENCIA = jQuery('#AGENCIA').val();
    var CONTA = jQuery('#CONTA').val();
    var CPF = jQuery('#CPF').val();
    var RG = jQuery('#RG').val();
    var ID_TIPO_DEPOSITO = jQuery('#FORMA_PAGAMENTO').val();
    var COD_VENDA = '';

    if (ID_ENDERECO_ENTREGA == '' && jQuery('#FORMA_ENTREGA').val() == '3') {
        AlteraDadosUsuario();
        InsereEndereco();
        COD_VENDA = InsereOperacao(ID_USUARIO, ID_ESTABELECIMENTO, STATUS_VENDA, OBS_COMPRA, SITUACAO_COMPRA, ID_ENDERECO_ENTREGA, SIMBOLO, DESCRICAO_DETALHADA, VALOR_DESEJADO, VALOR_COTACAO, ID_TIPO_VENDA, VALOR_TOTAL_OPERACAO, VARLOR_PERC_ESTABELEC, VALOR_DESEJADO, VALOR_COTACAO, null, ERROCONEXAO);
        InsereImagens(ID_USUARIO, COD_VENDA);
        return COD_VENDA;
    }
    else {
        AlteraDadosUsuario();
        ID_ENDERECO_ENTREGA = null;
        COD_VENDA = InsereOperacao(ID_USUARIO, ID_ESTABELECIMENTO, STATUS_VENDA, OBS_COMPRA, SITUACAO_COMPRA, ID_ENDERECO_ENTREGA, SIMBOLO, DESCRICAO_DETALHADA, VALOR_DESEJADO, VALOR_COTACAO, ID_TIPO_VENDA, VALOR_TOTAL_OPERACAO, VARLOR_PERC_ESTABELEC, VALOR_DESEJADO, VALOR_COTACAO, null, ERROCONEXAO);
        InsereImagens(ID_USUARIO, COD_VENDA);
        return COD_VENDA;
    }

}

function InsereImagens(ID_USUARIO, COD_VENDA, NOME_USUARIO) {
    var DESCRICAO = 'Imagem do cpf de :' + NOME_USUARIO;
    InsereImagemVendaCPF(DESCRICAO, ID_USUARIO, COD_VENDA, IMAGEM_BASE64_CPF, null, ERROCONEXAO);
    DESCRICAO = 'Imagem do RG de :' + NOME_USUARIO;
    InsereImagemVendaRG(DESCRICAO, ID_USUARIO, COD_VENDA, IMAGEM_BASE64_RG, null, ERROCONEXAO);
    DESCRICAO = 'Imagem do comprovante de residência de :' + NOME_USUARIO;
    InsereImagemVendaComprovante(DESCRICAO, ID_USUARIO, COD_VENDA, IMAGEM_BASE64_COMPROVANTE, null, ERROCONEXAO);
}

function ValidaDadosOperacao() {

    var VALOR_COTACAO = jQuery('#VALOR_COTACAO').val();
    var VALOR_DESEJADO = jQuery('#VALOR_DESEJADO').val();
    var VALOR_CONVERTIDO = jQuery('#VALOR_CONVERTIDO').val();

    var msg = ''
    if (BANCOS == '' || AGENCIA == '' || CONTA == '') {
        msg = 'Dados bancário incompletos';
    }
    if (CPF == '' || RG == '') {
        msg = 'Documentos incompletos';
    }
    if (VALOR_COTACAO == '' || VALOR_DESEJADO == '' || VALOR_CONVERTIDO == '') {
        msg = 'Dados da transação incompletos'
    }
    return msg;
}

function ValidaDadosBancarios() {

    var BANCOS = jQuery('#BANCOS').val();
    var AGENCIA = jQuery('#AGENCIA').val();
    var CONTA = jQuery('#CONTA').val();
    var CPF = jQuery('#CPF').val();
    var RG = jQuery('#RG').val();

    var msg = ''
    if (BANCOS == '' || AGENCIA == '' || CONTA == '') {
        msg = 'Dados bancário incompletos';
    }
    if (CPF == '' || RG == '') {
        msg = 'Documentos incompletos';
    }

    return msg;

}

function ValidaEndereco() {

    var CEP = jQuery('#CEP').val();
    var ENDERECO = jQuery('#ENDERECO').val();
    var NUMERO = jQuery('#NUMERO').val();
    var COMPLEMENTO = jQuery('#COMPLEMENTO').val();
    var BAIRRO = jQuery('#BAIRRO').val();
    var CIDADE = jQuery('#CIDADE').val();
    var UF = jQuery('#UF').val();

    var msg = ''
    if (CEP == '' || ENDERECO === '' || NUMERO == '' || BAIRRO == '' || CIDADE == '' || UF == '') {
        msg = 'Endereço incompleto'
    }
    return msg;
}

function RetornaEstabelecimento(ID_ESTABELECIMENTO) {
    return jQuery.parseJSON(RetornaEstabelecimentoPorId(ID_ESTABELECIMENTO, null, null));
}

function CarregaUltimaCotacao(data) {

    var VALOR_VENDA = calculoVenda(data[0].TAXA_VENDA, data[0].VALOR_COTACAO, IOF).toFixed(2);

    var html = "  <div class='container no-bottom'>" +
           "      <div class='no-bottom'>" +
           "          <div>" +
           "              <fieldset>" +
           "                  <div class='big-notification static-notification-white'> " +
                                CarregaEstabelecimento(data[0]) +
           "                <strong> Moeda desejada: </strong>" + data[0].NOME_MOEDA + "" +
           "                  <input type='hidden' name='NOME_MOEDA' class='contactFieldExchange' value='" + data[0].NOME_MOEDA + "' id='NOME_MOEDA' readonly />" +
           "                <br/> <strong> Cotação: </strong>" + VALOR_VENDA + "<br/>" +
           "                  <input type='hidden' name='VALOR_COTACAO' class='contactFieldExchange' value='" + VALOR_VENDA + "' id='VALOR_COTACAO'/>" +
           "                <br/>  <label >Valor em " + data[0].NOME_MOEDA + "</label>" +
           "                  <input type='text' name='VALOR_DESEJADO'  class='contactFieldExchange'  onblur='MontaConversao(this,\"" + VALOR_VENDA + "\",\"" + data[0].VALOR_MAXIMO + "\",\"" + data[0].VALOR_MINIMO + "\");'   id='VALOR_DESEJADO' placeholder='Digite o valor desejado' />" +
           "                  <label >Valor em REAL</label>" +
           //"                  <input type='number' name='VALOR_CONVERTIDO' class='contactFieldExchange' onchange='MontaConversaoInversa(this,\"" + VALOR_VENDA + "\",\"" + data[0].VALOR_MAXIMO + "\",\"" + data[0].VALOR_MINIMO + "\");'  id='VALOR_CONVERTIDO' readonly   />" +
           "                  <input type='text' name='VALOR_CONVERTIDO' class='contactFieldExchange' id='VALOR_CONVERTIDO' readonly   />" +
           "                  <label >Forma de recebimento</label>" +
                               CarregaFormaRecebimento(data[0]) +
           "                  <label >Forma de transação</label>" +
                               CarregaFormaPagamento() +
           "                   <div class='static-notification-exchange'  onclick='Confirmar(1)' >" +
           "                   <p class='center-text' style='font-size:15px; color:white;'>Prosseguir</p>" +
           "                   </div>" +
           "              </fieldset>" +
           "          </div>" +
           "      </div>" +
           "      </div>" +
           "  </div>";



    jQuery('#DIVDADOSVALORES').html(html);
}

function VoltarEtapa() {
    var PASSO = 0;
    PASSO = V_PASSO;
    if (V_PASSO != 0) {
        if (V_PASSO == 2 && jQuery('#FORMA_ENTREGA').val() == '3') {

            V_PASSO = PASSO - 1;
        }
        else {

            V_PASSO = PASSO + 1;
        }
        PASSO = (V_PASSO - 1);
        Confirmar(PASSO)
    }
    else {
        CarregaMenu('estabelecimento.html');
    }
}

jQuery(document).ready(function () {

    //jQuery(document).ajaxStart(BloqueiaTela("Carregando...")).ajaxStop(DesbloqueiaTela());
    EqualizaTamanhoTela();
    RecebeValores();
    SYSCONFIG = jQuery.parseJSON(localStorage.getItem("SYSCONFIG"));
    DATA_ESTABELECIMENTO = RetornaEstabelecimento(ID_ESTABELECIMENTO);
    BuscaCotacaoEstabelecimento();

    CarregaPerfil();
    CarregaPerfilEstabelecimento();
    CarregaEndereco(ID_USUARIO);
    PreencheSelectBancos();

    jQuery('#DIVDADOSVALORES').show();
    jQuery('#DIVDADOSENDERECO').hide();
    jQuery('#DIVDADOSOPERACAO').hide();
    jQuery('#DIVDADOSUSUARIO').hide();

    jQuery('.spinner').hide();
});

function CarregaPerfilEstabelecimento() {
    if (DATA_ESTABELECIMENTO[0].VALOR_DELIVERY == null || DATA_ESTABELECIMENTO[0].VALOR_DELIVERY == '') {
        jQuery('#TAXA_ENTREGA').val(parseFloat('0').toFixed(2));
    }
    else {
        jQuery('#TAXA_ENTREGA').val(parseFloat(DATA_ESTABELECIMENTO[0].VALOR_DELIVERY).toFixed(2));
    }
}

function CarregaFormaRecebimento(data) {
    var html = "<select class='contactFieldExchange' id='FORMA_ENTREGA' >";

    if (data.RETIRADA == 'S') {
        html += "<option value='1'>Retirada na Agência</option>";
    }
    if (data.DELIVERY == 'S') {
        html += "<option value='3'>Delivery</option>";
    }
    if (data.RECARGA == 'S') {
        html += "<option value='2'>Recarga de Cartão</option>"
    }
    html += "</select>";
    return html;
}

function CarregaFormaPagamento() {

    var html = "<select class='contactFieldExchange' id='FORMA_PAGAMENTO' >";
    var ret = jQuery.parseJSON(ListaDeposito(null, ERROCONEXAO));
    for (var i = 0; i < ret.length; i++) {
        html += "<option value='" + ret[i].ID_TIPO_DEPOSITO + "'>" + ret[i].DESCRICAO + "</option>";
    }
    html += "</select>";
    return html;
}

function MontaInforRetirada(FORMA_RETIRADA) {
    //debugger;

    var ret = '';
    if (FORMA_RETIRADA == '3') {
        ret = "<br/><strong>Taxa de Entrega R$:</strong>" + jQuery('#TAXA_ENTREGA').val();
    }
    else {
        jQuery('#TAXA_ENTREGA').val('0');
    }
    ret += "";
    return ret;
}

function MontaMapa(data) {

    var html = "<strong >" + data.NOME + "</strong><br>" +
       "<a  href='#'>Tel :" + data.FONE + "</a>" +
       "<a class='contact-mail' href='#'>Email: " + data.EMAIL + "</a>" +
       "<a  href='#'>Endereço :" + data.ENDERECO + "," + data.NUMERO + "</a>" +
       "<a  href='#'>" + data.COMPLEMENTO + " - " + data.BAIRRO + "</a>" +
       "<a  href='#'>" + data.CIDADE + "," + data.UF + "</a>";

    jQuery('#DIVINFO').html(html);
}

function CarregaDivCotacao(data) {

    var html = "<a  href='#'>Moeda :" + data.NOME_MOEDA + "</a>" +
     "<a  href='#'>Compra :R$ " + calculoCompra(data.TAXA_COMPRA, data.VALOR_COTACAO_COMPRA).toFixed(2) + "</a>" +
     "<a  href='#'>Venda :R$ " + calculoVenda(data.TAXA_VENDA, data.VALOR_COTACAO, IOF).toFixed(2) + "</a>";
    return html;
}

function CarregaPerfil() {

    var data = jQuery.parseJSON(localStorage.getItem("USUARIO"));


    jQuery('#NOME').val(data.NOME);
    jQuery('#DATA_NASCIMENTO').val(data.DATA_NASCIMENTO);
    jQuery('#CPF').val(data.CPF);
    jQuery('#RG').val(data.RG);
}

function CarregaEndereco(ID_USUARIO) {

    var data = jQuery.parseJSON(RetornaEnderecoUsuario(ID_USUARIO, null, null));
    if (data.length > 0) {
        jQuery.each(data, function () {
            ID_ENDERECO_ENTREGA = this.ID_ENDERECO_ENTREGA;
            jQuery('#ENDERECO').val(this.ENDERECO_ENTREGA1);
            jQuery('#COMPLEMENTO').val(this.COMPLEMENTO_ENTREGA);
            jQuery('#BAIRRO').val(this.BAIRRO_ENTREGA);
            jQuery('#CEP').val(this.CEP_ENTREGA);
            jQuery('#UF').val(this.UF_ENTREGA);
            jQuery('#CIDADE').val(this.CIDADE_ENTREGA);
            jQuery('#FONE').val(this.FONE_ENTREGA);
            jQuery('#NUMERO').val(this.NUMERO_ENTREGA);
        });
    }
}

function InsereEndereco() {

    var ID_USUARIO = jQuery.parseJSON(localStorage.getItem("USUARIO")).ID_USUARIO;
    var ENDERECO_ENTREGA = jQuery('#ENDERECO').val();
    var COMPLEMENTO_ENTREGA = jQuery('#COMPLEMENTO').val();
    var BAIRRO_ENTREGA = jQuery('#BAIRRO').val();
    var CEP_ENTREGA = jQuery('#CEP').val().replace('-', '');
    var UF_ENTREGA = jQuery('#UF').val();
    var CIDADE_ENTREGA = jQuery('#CIDADE').val();
    var FONE_ENTREGA = '';
    var NOME_ENTREGA = jQuery('#NOME').val();
    var SOBRENOME_ENTREGA = '';
    var NUMERO_ENTREGA = jQuery('#NUMERO').val();
    //InsereEnderecoUsuario(ID_USUARIO,ENDERECO_ENTREGA, COMPLEMENTO_ENTREGA, BAIRRO_ENTREGA, CEP_ENTREGA, UF_ENTREGA, CIDADE_ENTREGA, FONE_ENTREGA, NOME_ENTREGA, SOBRENOME_ENTREGA, NUMERO_ENTREGA, successFunc, ERROCONEXAO);
    return InsereEnderecoUsuario(ID_USUARIO, ENDERECO_ENTREGA, COMPLEMENTO_ENTREGA, BAIRRO_ENTREGA, CEP_ENTREGA, UF_ENTREGA, CIDADE_ENTREGA, FONE_ENTREGA, NOME_ENTREGA, SOBRENOME_ENTREGA, NUMERO_ENTREGA, null, ERROCONEXAO);

}

function AlteraEndereco() {

    var ID_USUARIO = jQuery.parseJSON(localStorage.getItem("USUARIO")).ID_USUARIO;
    var ENDERECO_ENTREGA = jQuery('#ENDERECO').val();
    var COMPLEMENTO_ENTREGA = jQuery('#COMPLEMENTO').val();
    var BAIRRO_ENTREGA = jQuery('#BAIRRO').val();
    var CEP_ENTREGA = jQuery('#CEP').val().replace('-', '');
    var UF_ENTREGA = jQuery('#UF').val();
    var CIDADE_ENTREGA = jQuery('#CIDADE').val();
    var FONE_ENTREGA = jQuery('#FONE').val();
    var NOME_ENTREGA = jQuery('#NOME').val();
    var SOBRENOME_ENTREGA = '';
    var NUMERO_ENTREGA = jQuery('#NUMERO').val();

    endusu = AlteraEnderecoUsuario(ID_USUARIO, ENDERECO_ENTREGA, COMPLEMENTO_ENTREGA, BAIRRO_ENTREGA, CEP_ENTREGA, UF_ENTREGA, CIDADE_ENTREGA, FONE_ENTREGA, NOME_ENTREGA, SOBRENOME_ENTREGA, NUMERO_ENTREGA, null, ERROCONEXAO);

}

function CarregaEnderecoPorCep(obj) {


    if (ID_ENDERECO_ENTREGA == '') {
        var cep = obj.value.replace('-', '');
        var data = jQuery.parseJSON(RetornaEnderecoPorCep(cep, null, ERROCONEXAO));

        if (data.length > 0) {
            jQuery.each(data, function () {
                jQuery('#CEP').val(this.CEP);
                jQuery('#ENDERECO').val(this.LOGRADOURO1);
                jQuery('#BAIRRO').val(this.BAIRRO1);
                jQuery('#CIDADE').val(this.CIDADE1);
                jQuery('#UF').val(this.UF1);
            });
        }
    }

}

function PreencheSelectBancos() {
    jQuery('#BANCOS').append('<option value="" selected> Escolha seu banco</option>');
    var data = jQuery.parseJSON(ListaBanco(null, null));
    if (data.length > 0) {
        jQuery.each(data, function () {
            MontaSelect('BANCOS', this.ID, this.BANCO1);
        });
    }
}

function MontaSelect(OBJETO, CODIGO, NOME) {
    jQuery('#' + OBJETO + '').append('<option value=' + CODIGO + '>' + NOME + '</option>');
}

function CarregaEstabelecimento(dados) {


    var DISTANCIA = parseFloat(calculoDistancia(DATA_ESTABELECIMENTO[0].LATITUDE, DATA_ESTABELECIMENTO[0].LONGITUDE));

    var html =
    "<div id='" + dados.ID_ESTABELECIMENTO + "'>" +
    "<div>" +
    "<strong><label><h3 style='color:black;'>" + dados.NOME + "</h3></label></strong> " +
    "<input type='hidden' name='NOME_ESTABELECIMENTO' value='" + dados.NOME + "' id='NOME_ESTABELECIMENTO' readonly />" +
    "</div>" +


    "<div class='two-half last-column' style='top:-10px;'>" +
    "<span class='span-stars'>" +
    "<i class='fa fa-star'></i>" +
    "<i class='fa fa-star'></i>" +
    "<i class='fa fa-star'></i>" +
    "<i class='fa fa-star'></i>" +
    "<i class='fa fa-star-o'></i>" +
    "</span>" +
    "</div>" +

    "<div>" +
    "<div class='one-half'>" +
    "<strong>Distância</strong>: " + DISTANCIA + " Km <br/>" +
    "</div>" +
    
    "</div>" +

    "<div>" +
    "<div class='one-half'>" +
    "<strong>Valor mínimo:</strong> " + formataValores(dados.VALOR_MINIMO, '') +
    "</div><br/>" +
    "<div class='two-half last-column'>" +
    "<strong>Valor máximo:</strong> " + formataValores(dados.VALOR_MAXIMO, '') +
    "</div>" +
    "</div>" +
    "</div>";

    //var DISTANCIA = parseFloat(calculoDistancia(DATA_ESTABELECIMENTO[0].LATITUDE, DATA_ESTABELECIMENTO[0].LONGITUDE));

    //var html =
    //"<div id='" + dados.ID_ESTABELECIMENTO + "'>" +
    //"<div>" +
    //"<strong><label>" + dados.NOME + "</label></strong> " +
    //"<input type='hidden' name='NOME_ESTABELECIMENTO' value='" + dados.NOME + "' id='NOME_ESTABELECIMENTO' readonly />" +
    //"</div>" +

    //"<div>" +
    //"<div class='one-half'>" +
    //"Km " + DISTANCIA +
    //"</div>" +
    //"<div class='two-half last-column'>" +
    //"<span class='span-stars'>" +
    //"<i class='fa fa-star'></i>" +
    //"<i class='fa fa-star'></i>" +
    //"<i class='fa fa-star'></i>" +
    //"<i class='fa fa-star'></i>" +
    //"<i class='fa fa-star-o'></i>" +
    //"</span>" +
    //"</div>" +
    //"</div>" +

    //"<div>" +
    //"<div class='one-half'>" +
    //"Máx: " + formataValores(dados.VALOR_MAXIMO, '') +
    //"</div>" +
    //"<div class='two-half last-column'>" +
    //"Min: " + formataValores(dados.VALOR_MINIMO, '') +
    //"</div>" +
    //"</div>" +
    //"</div>";

    return html;

}

function AlteraDadosUsuario() {
    var ID_USUARIO = jQuery.parseJSON(localStorage.getItem("USUARIO")).ID_USUARIO;
    var NOME = jQuery.parseJSON(localStorage.getItem("USUARIO")).NOME
    var LOGIN = jQuery.parseJSON(localStorage.getItem("USUARIO")).LOGIN;/// jQuery('#LOGIN').val();
    var EMAIL = jQuery.parseJSON(localStorage.getItem("USUARIO")).EMAIL;
    var SENHA = jQuery.parseJSON(localStorage.getItem("USUARIO")).SENHA;
    var CPF = jQuery('#CPF').val();
    var RG = jQuery('#RG').val();
    var BANCO = jQuery('#BANCOS').val();
    var CONTA = jQuery('#CONTA').val();
    var AGENCIA = jQuery('#AGENCIA').val();
    var DATA_NASCIMENTO = jQuery('#DATA_NASCIMENTO').val();
    var ID_TP_USUARIO = 1;
    var usu = AlteraUsuario(ID_USUARIO, LOGIN, NOME, SENHA, ID_TP_USUARIO, EMAIL, CPF, RG, DATA_NASCIMENTO, BANCO, CONTA, AGENCIA, null, ERROCONEXAO);
}






//===========================================