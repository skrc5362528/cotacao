var ID_ESTABELECIMENTO = '';
var ID_USUARIO = '';
var ID_ENDERECO_ENTREGA = '';
var SIMBOLO = '';
var DATA_COTACAO = '';
var DATA_USU = '';
var DATA_ESTABELECIMENTO = '';
var V_PASSO = 0;
function BuscaCotacaoEstabelecimento() {
    DATA_COTACAO = jQuery.parseJSON(RetornaCotacaoEstabelecimentoPorMoeda(ID_ESTABELECIMENTO, SIMBOLO, null, null));
    CarregaUltimaCotacao(DATA_COTACAO);
}

function MostraMapa(obj) {

    sessionStorage.setItem('VIEWMAP', obj.id)
    CarregaMenu('mapa.html');
}

function RecebeValores() {
    var obj = sessionStorage.getItem('VIEWRESERVA');
    var id = obj.split("_");
    ID_ESTABELECIMENTO = id[0];
    SIMBOLO = id[1];
    ID_USUARIO = jQuery.parseJSON(localStorage.getItem("USUARIO")).ID_USUARIO;
}

function formataDinheiro(valor) {
    valor.value = parseFloat(valor.value).toFixed(2);
    CalculaCotacao(valor.value, jQuery('#VALOR_COTACAO').val())
}

function MontaConversao(valordesejado, valorcotacao) {
    formataDinheiro(valordesejado);
    CalculaCotacao(jQuery('#VALOR_DESEJADO').val(), jQuery('#VALOR_COTACAO').val());
}

function CalculaCotacao(VALOR, VALOR_COTACAO) {
    var VALOR = parseFloat(parseFloat(VALOR) * parseFloat(VALOR_COTACAO)).toFixed(2);
    jQuery('#VALOR_CONVERTIDO').val(VALOR);
}

function formataDinheiroInverso(valor) {
    valor.value = parseFloat(valor.value).toFixed(2);
    CalculaCotacaoInversa(valor.value, jQuery('#VALOR_COTACAO').val())
}

function MontaConversaoInversa(valorconvertido, valorcotacao) {
    formataDinheiroInverso(valorconvertido);
    CalculaCotacaoInversa(jQuery('#VALOR_CONVERTIDO').val(), jQuery('#VALOR_COTACAO').val());
}

function CalculaCotacaoInversa(VALOR, VALOR_COTACAO) {
    var VALOR = (parseFloat(parseFloat(VALOR) / parseFloat(VALOR_COTACAO)).toFixed(2));
    jQuery('#VALOR_DESEJADO').val(VALOR);
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
                if (PASSO == 1 && jQuery('#FORMA_ENTREGA').val() == 'DEL') {
                    jQuery('#DIVDADOSVALORES').hide();
                    jQuery('#DIVDADOSENDERECO').show();
                    jQuery('#DIVDADOSUSUARIO').hide();
                    jQuery('#DIVDADOSOPERACAO').hide();
                    jQuery('#DIVDADOSCONFIRMACAO').hide();
                    V_PASSO = PASSO;
                }
                else
                {
                    jQuery('#DIVDADOSVALORES').hide();
                    jQuery('#DIVDADOSENDERECO').hide();
                    jQuery('#DIVDADOSUSUARIO').show();
                    jQuery('#DIVDADOSOPERACAO').hide();
                    jQuery('#DIVDADOSCONFIRMACAO').hide();
                    jQuery('#DIVDADOSCONFIRMACAO').hide();
                    V_PASSO = PASSO + 1;
                }

                break;
            case 2:
                jQuery('#DIVDADOSVALORES').hide();
                jQuery('#DIVDADOSENDERECO').hide();
                jQuery('#DIVDADOSUSUARIO').show();
                jQuery('#DIVDADOSOPERACAO').hide();
                jQuery('#DIVDADOSCONFIRMACAO').hide();
                V_PASSO = PASSO;

                break;
            case 3:
                jQuery('#DIVDADOSVALORES').hide();
                jQuery('#DIVDADOSENDERECO').hide();
                jQuery('#DIVDADOSUSUARIO').hide();
                jQuery('#DIVDADOSOPERACAO').show();
                jQuery('#DIVDADOSCONFIRMACAO').hide();

                CarregaDivOperacao();
                V_PASSO = PASSO;
                break;
        }
    }
}

function ConfirmarCompra()
{
    //BloqueiaTela('Processando operação...')
    var ret = GravaPedidoCompra();
    if (ret.length > 0)
    {
        DesbloqueiaTela();
        ExibeMensagem('Operação realizada com sucesso!');
                CarregaDivConfirmacao(DATA_COTACAO[0]);
        jQuery('#DIVDADOSVALORES').hide();
        jQuery('#DIVDADOSENDERECO').hide();
        jQuery('#DIVDADOSUSUARIO').hide();
        jQuery('#DIVDADOSOPERACAO').hide();
        jQuery('#DIVDADOSCONFIRMACAO').show();
    }
    else {
        DesbloqueiaTela();
        ExibeMensagem('Operação não realizada!');
        CarregaMenu("estabelecimento.html");
    }
}

function CalculaValorTotal(IOF, TAXA, VALOR_CONVERTIDO, ENTREGA)
{

    var valIOF = parseFloat(IOF).toFixed(2);
    //alert(valIOF.toString());
    var valTAXA = parseFloat(TAXA).toFixed(2);
    //alert(valTAXA);
    var valCONVER = parseFloat(VALOR_CONVERTIDO).toFixed(2);
    //alert(valCONVER);
    var valEntrega = parseFloat(ENTREGA).toFixed(2);
    //alert(valEntrega);
    var valorTotalIof = (parseFloat(((valIOF/100) * valCONVER)).toFixed(2));
    //alert(valEntrega);
    var valortot = '';
    return valortot = parseFloat(parseFloat(valCONVER) + parseFloat(valTAXA) + parseFloat(valEntrega) + parseFloat(valorTotalIof)).toFixed(2);
}

function CarregaDivOperacao() {
    var html = "<div class='container no-bottom'>" +
            "<div class='no-bottom'>   " +
            "<div>  " +
            "<fieldset>" +
            " <div class='big-notification static-notification-white' id='38'> " +
            "<strong><h2>Resumo da compra</h2></strong>" +
            "<strong><label class='contact-text' >" + jQuery('#NOME_ESTABELECIMENTO').val() + "</label></strong></br>" +
            " <strong><label class='contact-text' >Moeda : " + jQuery('#NOME_MOEDA').val() + "</label></strong>  " +
            " <strong><label class='contact-text' >Valor desejado : " + jQuery('#VALOR_DESEJADO').val() + "</label></strong>   " +
            " <strong><label class='contact-text' >Cotação do dia (REAL) : " + jQuery('#VALOR_COTACAO').val() + "</label></strong>   " +
            " <strong><label class='contact-text' >Valor convertido (REAL) : " + jQuery('#VALOR_CONVERTIDO').val() + "</label></strong>   " +
            " <strong><label class='contact-text' >IOF % : " + jQuery('#IOF').val() + "</label></strong>   " +
            "<strong><label class='contact-text' >Serviço eXchange R$ : " + jQuery('#TAXA_SERVICO').val() + "</label></strong>   " +
            "<strong><label class='contact-text' >Taxa de Entrega R$ : " + jQuery('#TAXA_ENTREGA').val() + "</label></strong>   " +
            " <strong><label class='contact-text' >Total R$ : " + CalculaValorTotal(jQuery('#IOF').val(), jQuery('#TAXA_SERVICO').val(), jQuery('#VALOR_CONVERTIDO').val(), jQuery('#TAXA_ENTREGA').val()) + "</label></strong>   " +
            MontaInforRetirada(jQuery('#SELECIONA_RETIRADA').val())+
            "<strong><h3 style='color:black;'>Dados do comprador</h3></strong>  " +
            " <strong><label class='contact-text' >Nome : " + jQuery('#NOME').val() + "</label> " +
            " <strong><label class='contact-text' >Cpf : " + jQuery('#CPF').val() + "</label>  " +
            " <strong><label class='contact-text' >Rg : " + jQuery('#RG').val() + "</label>   " +
            "<div class='static-notification-exchange'  onclick='ConfirmarCompra()'>" +
           "<p class='center-text' style='color: white;'><strong>Finalizar Compra</strong></p>" +
           "</div>" +
            "</div>" +
            "</fieldset>" +   
            "</div>" +
            "</div>" +
            "</div>";

    jQuery('#DIVDADOSOPERACAO').html(html);
}

function CarregaDivConfirmacao()
{
    var html = "<div class='container no-bottom'>" +
        "<div class='no-bottom'>   " +
        "<div>  " +
        "<fieldset>" +
        " <div class='big-notification static-notification-white' id='38'> " +
        CarregaEstabelecimento(DATA_COTACAO[0])+
        "<div class='static-notification-exchange'  id='" + ID_ESTABELECIMENTO + "_" + SIMBOLO + "' onclick='MostraMapa(this);'>" +
        "<p class='center-text' style='color: white;'><strong>Ver no mapa</strong></p>" +
        "</div>" +
        "<h2 style='color:black;'><p class='center-text' style='font-size:22px;'><strong>Compra Finalizada</strong></p></h2>" +
        "<p class='center-text' ><strong><i class='fa fa-check' style='font-size: 128px; color:#0489B1;'></i></strong></p>" +
        "<strong><h4 style='color:black;'>Dados bancários para depósito</h4></strong>  " +
        " <strong><label class='contact-text' >Banco : " + DATA_ESTABELECIMENTO[0].BANCO + "</label></strong>  " +
        " <strong><label class='contact-text' >Agência : " + DATA_ESTABELECIMENTO[0].AGENCIA+ "</label></strong>   " +
        " <strong><label class='contact-text' >Conta corrente : " + DATA_ESTABELECIMENTO[0].CONTA + "</label></strong>   " +
        " <strong><label class='contact-text' >CNPJ : " + DATA_ESTABELECIMENTO[0].CNPJ + "</label></strong>   " +
        "</div>" +
        "</fieldset>" +
        "</div>" +
        "</div>" +
        "</div>";
    jQuery('#DIVDADOSCONFIRMACAO').html(html);
}

function GravaPedidoCompra() {


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
    var DESCRICAO_DETALHADA = jQuery('#DIVDADOSOPERACAO').html();
    //=========================================================
    var BANCOS = jQuery('#BANCOS').val();
    var AGENCIA = jQuery('#AGENCIA').val();
    var CONTA = jQuery('#CONTA').val();
    var CPF = jQuery('#CPF').val();
    var RG = jQuery('#RG').val();

    if (ID_ENDERECO_ENTREGA == '' && jQuery('#FORMA_ENTREGA').val() == 'DEL')
    {
        var ret = ValidaDadosOperacao(BANCOS,AGENCIA,CONTA,CPF,RG);
        ret = ValidaEndereco(CEP, ENDERECO, NUMERO, COMPLEMENTO, BAIRRO, CIDADE, UF);

        if (ret = '') {
            AlteraDadosUsuario();
            InsereEndereco();
            return InsereOperacao(ID_USUARIO, ID_ESTABELECIMENTO, STATUS_VENDA, OBS_COMPRA, SITUACAO_COMPRA, ID_ENDERECO_ENTREGA, SIMBOLO, DESCRICAO_DETALHADA, VALOR_DESEJADO, VALOR_COTACAO, 2, null, ERROCONEXAO);
        } else {
            ExibeMensagem(ret);
            return false;
        }
    }
    else {
        AlteraDadosUsuario();
        ID_ENDERECO_ENTREGA = null;
        return InsereOperacao(ID_USUARIO, ID_ESTABELECIMENTO, STATUS_VENDA, OBS_COMPRA, SITUACAO_COMPRA, ID_ENDERECO_ENTREGA, SIMBOLO, DESCRICAO_DETALHADA, VALOR_DESEJADO, VALOR_COTACAO, 2, null, ERROCONEXAO);
    }

}

function ValidaDadosOperacao(BANCOS,
                             AGENCIA, 
                             CONTA, 
                             CPF,
                             RG)
    {
    var msg = ''
    if (BANCOS==''||AGENCIA==''||CONTA=='') {

        msg = 'Dados bancário incompletos'
    }
    if (CPF == '' || RG== '' ) {

        msg = 'Documentos incompletos'
    }
        return msg;
    }
function ValidaEndereco(CEP,
                        ENDERECO ,
                        NUMERO,
                        COMPLEMENTO,
                        BAIRRO ,
                        CIDADE ,
                        UF)
   {
    var msg = ''
    if (CEP == '' || ENDERECO === '' || NUMERO == '' || BAIRRO == '' || CIDADE == '' || UF == '')
    {
        msg='Endereço incompleto'
    }
   return msg;
}

function RetornaEstabelecimento(ID_ESTABELECIMENTO) {
   return jQuery.parseJSON(RetornaEstabelecimentoPorId(ID_ESTABELECIMENTO, null, null));
}

function CarregaUltimaCotacao(data) {

    var VALOR_VENDA = calculoVenda(data[0].TAXA_VENDA, data[0].VALOR_COTACAO).toFixed(2);

    var html = "  <div class='container no-bottom'>" +
           "      <div class='no-bottom'>" +
           "          <div>" +
           "              <fieldset>" +
           "                  <div class='big-notification static-notification-white' id='38'> " +
                                CarregaEstabelecimento(data[0])+
           "                  <label class='contact-text'>Moeda Escolhida :" + data[0].NOME_MOEDA + "</label>" +
           "                  <input type='hidden' name='NOME_MOEDA' class='contactFieldExchange' value='" + data[0].NOME_MOEDA + "' id='NOME_MOEDA' readonly />" +
           "                  <label class='contact-text'>Cotação :" + VALOR_VENDA + "</label>" +
           "                  <input type='hidden' name='VALOR_COTACAO' class='contactFieldExchange' value='" + VALOR_VENDA + "' id='VALOR_COTACAO' readonly />" +
           "                  <label class='contact-text'>Valor em " + data[0].NOME_MOEDA + "</label>" +
           "                  <input type='number' name='VALOR_DESEJADO'  class='contactFieldExchange'  onchange='MontaConversao(this,\"" + VALOR_VENDA + "\" );'   id='VALOR_DESEJADO'   />" +
           "                  <label class='contact-text'>Valor em REAL</label>" +
           "                  <input type='number' name='VALOR_CONVERTIDO' class='contactFieldExchange' onchange='MontaConversaoInversa(this,\"" + VALOR_VENDA + "\" );' id='VALOR_CONVERTIDO'  />" +
           "                  <label class='contact-text'>Forma de recebimento</label>" +
                               CarregaFormaRecebimento(data[0]) +
           "                  <label class='contact-text'>Forma de pagamento</label>" +
                               CarregaFormaPagamento()+
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

function VoltarEtapa()
{
    var PASSO = '';

    if (V_PASSO == 2 && jQuery('#FORMA_ENTREGA').val() == 'DEL') {

        V_PASSO = PASSO -1;
    }
    else {

        V_PASSO = PASSO + 1;
    }
     PASSO = (V_PASSO - 1);
    Confirmar(PASSO)
}

jQuery(document).ready(function () {

    EqualizaTamanhoTela();
    RecebeValores();
    DATA_ESTABELECIMENTO = RetornaEstabelecimento(ID_ESTABELECIMENTO);
    BuscaCotacaoEstabelecimento();

    CarregaPerfil();
    CarregaEndereco(ID_USUARIO);
    PreencheSelectBancos();

    jQuery('#DIVDADOSVALORES').show();
    jQuery('#DIVDADOSENDERECO').hide();
    jQuery('#DIVDADOSOPERACAO').hide();
    jQuery('#DIVDADOSUSUARIO').hide();
}

);

function CarregaFormaRecebimento(data)
{
    var html = "<select class='contactFieldExchange' id='FORMA_ENTREGA' >";
  
    if(data.RETIRADA = 'RET')
    {
        html+=  "<option value='RET'>Retirada na Agência</option>" ;
     }
    if(data.DELIVERY = 'DEL'){
       html+= "<option value='DEL'>Delivery</option>" ;
    }
    if (data.RECARGA = 'REC') {
        html+= "<option value='REC'>Recarga de Cartão</option>"
    }
   html+= "</select>";
    return html;
}

function CarregaFormaPagamento() {
    var html = "<select class='contactFieldExchange' id='FORMA_PAGAMENTO' >";
        html += "<option value='DEP'> Depósito em C/C </option>";
        html += "<option value='DEL'> Transferência </option>";
    html += "</select>";
    return html;
}

 function MontaInforRetirada(FORMA_RETIRADA) {
        var ret = '';
        if (FORMA_RETIRADA == 'RET') {
            ret += '<a class="base-text one-third"><i class="fa fa-university"></i> Retirada </a>';
        }
        if (FORMA_RETIRADA == 'DEL') {
            ret += '<a class="base-text one-third"><i class="fa fa-motorcycle"></i> Delivery </a>'; //'Delivery';
        }
        if (FORMA_RETIRADA == 'REC') {
            ret += '<a class="base-text one-third last-column"><i class="fa fa-credit-card"></i> Recarga </a>'//'Recarga'; 
        }
        ret += "";
        return ret;
    }

function MontaMapa(data) {

    var html = "<strong class='contact-text'>" + data.NOME + "</strong><br>" +
       "<a class='contact-text' href='#'>Tel :" + data.FONE + "</a>" +
       "<a class='contact-mail' href='#'>Email: " + data.EMAIL + "</a>" +
       "<a class='contact-text' href='#'>Endereço :" + data.ENDERECO + "," + data.NUMERO + "</a>" +
       "<a class='contact-text' href='#'>" + data.COMPLEMENTO + " - " + data.BAIRRO + "</a>" +
       "<a class='contact-text' href='#'>" + data.CIDADE + "," + data.UF + "</a>";

    jQuery('#DIVINFO').html(html);
}

function CarregaDivCotacao(data) {

    var html = "<a class='contact-text' href='#'>Moeda :" + data.NOME_MOEDA + "</a>" +
     "<a class='contact-text' href='#'>Compra :R$ " + calculoCompra(data.TAXA_COMPRA, data.VALOR_COTACAO_COMPRA).toFixed(2) + "</a>" +
     "<a class='contact-text' href='#'>Venda :R$ " + calculoVenda(data.TAXA_VENDA, data.VALOR_COTACAO).toFixed(2) + "</a>";
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
    var FONE_ENTREGA = jQuery('#FONE').val();
    var NOME_ENTREGA = jQuery('#NOME').val();
    var SOBRENOME_ENTREGA = '';
    var NUMERO_ENTREGA = jQuery('#NUMERO').val();
    //InsereEnderecoUsuario(ID_USUARIO,ENDERECO_ENTREGA, COMPLEMENTO_ENTREGA, BAIRRO_ENTREGA, CEP_ENTREGA, UF_ENTREGA, CIDADE_ENTREGA, FONE_ENTREGA, NOME_ENTREGA, SOBRENOME_ENTREGA, NUMERO_ENTREGA, successFunc, ERROCONEXAO);
   return  InsereEnderecoUsuario(ID_USUARIO, ENDERECO_ENTREGA, COMPLEMENTO_ENTREGA, BAIRRO_ENTREGA, CEP_ENTREGA, UF_ENTREGA, CIDADE_ENTREGA, FONE_ENTREGA, NOME_ENTREGA, SOBRENOME_ENTREGA, NUMERO_ENTREGA, null, ERROCONEXAO);

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

  if(ID_ENDERECO_ENTREGA != '')
    {
        var data = jQuery.parseJSON(RetornaEnderecoPorCep(obj.value, null, ERROCONEXAO));

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
    var data = BANCOS;
    if (data.length > 0) {
        jQuery.each(data, function () {
            MontaSelect('BANCOS', this.CODIGO, this.BANCO);
        });
    }
}

function MontaSelect(OBJETO, CODIGO, NOME) {
    jQuery('#' + OBJETO + '').append('<option value=' + CODIGO + '>' + NOME + '</option>');
}

function CarregaEstabelecimento(dados) {
    
    //if (DATA_ESTABELECIMENTO.length == 0) {
    //    DATA_ESTABELECIMENTO = RetornaEstabelecimento(ID_ESTABELECIMENTO);
    //}
    var DISTANCIA = parseFloat(calculoDistancia(DATA_ESTABELECIMENTO[0].LATITUDE, DATA_ESTABELECIMENTO[0].LONGITUDE));

    var html =
    "<div id='" + dados.ID_ESTABELECIMENTO + "' class='big-notification static-notification-white-header'>" +
    "<div>" +
    "<strong><label class='contact-text'>" + dados.NOME + "</label></strong> " +
    "<input type='hidden' name='NOME_ESTABELECIMENTO' value='" + dados.NOME + "' id='NOME_ESTABELECIMENTO' readonly />" +
    "</div>" +
    "<div class='one-half'>" +
    "<label class='contact-text'>Venda : R$ " + parseFloat(dados.VALOR_COTACAO).toFixed(2) + " </label>" +
    "</div>" +
    "<div class='two-half last-column'>" +
    "<span class='span-stars'>" +
    "<i class='fa fa-star'></i>" +
    "<i class='fa fa-star'></i>" +
    "<i class='fa fa-star'></i>" +
    "<i class='fa fa-star'></i>" +
    "<i class='fa fa-star-o'></i>" +
    "</span>" +
    "<label class='contact-text'>Km " + DISTANCIA + "</label>" +
    "</div>" +
    "<div>" +
    "</div>" +
    "</div>";

    return html;

}

function AlteraDadosUsuario() {
    var ID_USUARIO = jQuery.parseJSON(localStorage.getItem("USUARIO")).ID_USUARIO;
    var NOME =  jQuery.parseJSON(localStorage.getItem("USUARIO")).NOME
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
    var usu = AlteraUsuario(ID_USUARIO, LOGIN, NOME, SENHA, ID_TP_USUARIO, EMAIL, CPF, RG, DATA_NASCIMENTO, BANCO,CONTA,AGENCIA,null, ERROCONEXAO);
}