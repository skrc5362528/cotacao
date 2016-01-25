var ID_ESTABELECIMENTO = '';
var ID_USUARIO = '';
var ID_ENDERECO_ENTREGA = '';
var SIMBOLO = '';
var DATA_COTACAO = '';
var DATA_USU = '';

function BuscaCotacaoEstabelecimento() {
    DATA_COTACAO = jQuery.parseJSON(RetornaCotacaoEstabelecimentoPorMoeda(ID_ESTABELECIMENTO, SIMBOLO, null, null));
    CarregaUltimaCotacao(DATA_COTACAO);
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

function Confirmar(PASSO) {
    switch (PASSO) {
        case '1':
            jQuery('#DIVDADOSVALORES').hide();
            jQuery('#DIVDADOSENDERECO').show();
            jQuery('#DIVDADOSUSUARIO').hide();
            jQuery('#DIVDADOSOPERACAO').hide();

            break;
        case '2':
            jQuery('#DIVDADOSVALORES').hide();
            jQuery('#DIVDADOSENDERECO').hide();
            jQuery('#DIVDADOSUSUARIO').show();
            jQuery('#DIVDADOSOPERACAO').hide();


            break;
        case '3':
            jQuery('#DIVDADOSVALORES').hide();
            jQuery('#DIVDADOSENDERECO').hide();
            jQuery('#DIVDADOSUSUARIO').hide();
            jQuery('#DIVDADOSOPERACAO').show();

            CarregaDivOperacao();

            break;
    }
}

function ConfirmarCompra()
{
    var ret = GravaPedidoCompra();
    if (ret.length > 0)
    {
        ExibeMensagem("Operação relaizada com sucesso!");
        CarregaMenu("historico.html");
    }
}

function CarregaDivOperacao() {

    var html = "<div class='container no-bottom'>" +
            "<div class='no-bottom'>   " +
            "<div>  " +
            "<fieldset>" +
            " <div class='big-notification static-notification-white' id='38'> " +
            " <h4><label>Dados do comprador :</label></h4>  " +
            " <strong><label class='contact-text' >Nome : " + jQuery('#NOME').val() + "</label></strong> " +
            " <strong><label class='contact-text' >Tel. Contato : " + jQuery('#FONE').val() + "</label></strong>  " +
            " <strong><label class='contact-text' >Data de nascimento : " + jQuery('#DATA_NASCIMENTO').val() + "</label></strong>  " +
            " <strong><label class='contact-text' >Cpf : " + jQuery('#CPF').val() + "</label></strong>   " +
            " <strong><label class='contact-text' >Rg : " + jQuery('#RG').val() + "</label></strong>   " +
            " <h4><label>Dados da Transação :</label></h4>  " +
            " <strong><label class='contact-text' >Estabelecimento : " + jQuery('#NOME_ESTABELECIMENTO').val() + "</label></strong> " +
            " <strong><label class='contact-text' >Moeda : " + jQuery('#NOME_MOEDA').val() + "</label></strong>  " +
            " <strong><label class='contact-text' >Valor desejado (" + jQuery('#NOME_MOEDA').val() + ") : " + jQuery('#VALOR_DESEJADO').val() + "</label></strong>   " +
            " <strong><label class='contact-text' >Cotação do dia (REAL) : " + jQuery('#VALOR_COTACAO').val() + "</label></strong>   " +
            " <strong><label class='contact-text' >Valor convertido (REAL) : " + jQuery('#VALOR_CONVERTIDO').val() + "</label></strong>   " +
            " <h4><label>Endereço de entrega:</label></h4>  " +
            " <strong><label class='contact-text' >Cep : " + jQuery('#CEP').val() + "</label></strong>   " +
            " <strong><label class='contact-text' >Endereço : " + jQuery('#ENDERECO').val() + "</label></strong> " +
            " <strong><label class='contact-text' >Complemento : " + jQuery('#COMPLEMENTO').val() + "</label></strong>  " +
            " <strong><label class='contact-text' >Numero : " + jQuery('#NUMERO').val() + "</label></strong>   " +
            " <strong><label class='contact-text' >Bairro : " + jQuery('#BAIRRO').val() + "</label></strong>   " +
            " <strong><label class='contact-text' >Cidade : " + jQuery('#CIDADE').val() + "</label></strong>   " +
            " <strong><label class='contact-text' >Estado : " + jQuery('#UF').val() + "</label></strong>   " +
            "                  <div class='static-notification-green' id='38_XCD' style='border-radius: 10px;' onclick='ConfirmarCompra()'>                                                  " +
           "                      <p class='center-text uppercase' style='color: white; font-size: 15px;'>Finalizar Compra</p>                                                                  " +
           "                  </div> "+
            "</div>" +
            "</fieldset>" +   
            "</div>" +
            "</div>" +
            "</div>";

    jQuery('#DIVDADOSOPERACAO').html(html);

    
  

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
    var CPF = jQuery('#CPF').val();
    var RG = jQuery('#RG').val();
    var STATUS_VENDA = '1';
    var SITUACAO_COMPRA = 'EM ANÁLISE'
    var OBS_COMPRA = '';
    var DESCRICAO_DETALHADA = jQuery('#DIVDADOSOPERACAO').html();


    return InsereOperacao(ID_USUARIO, ID_ESTABELECIMENTO, STATUS_VENDA, OBS_COMPRA, SITUACAO_COMPRA, ID_ENDERECO_ENTREGA, SIMBOLO, DESCRICAO_DETALHADA, VALOR_DESEJADO, VALOR_COTACAO, 2, null, ERROCONEXAO);
}

function RetornaEstabelecimento(ID_ESTABELECIMENTO) {
    var data = jQuery.parseJSON(RetornaEstabelecimentoPorId(ID_ESTABELECIMENTO, null, null));
}

function CarregaUltimaCotacao(data) {

    var VALOR_VENDA = calculoVenda(data[0].TAXA_VENDA, data[0].VALOR_COTACAO).toFixed(2);

    var html = "  <div class='container no-bottom'>																																			" +
           "      <div class='no-bottom'>                                                                                                                                                " +
           "          <div>                                                                                                                                                              " +
           "              <fieldset>                                                                                                                                                     " +
           "                  <label class='input-label'>Casa de Câmbio</label>                                                                                                          " +
           "                  <input type='text' name='NOME_ESTABELECIMENTO' class='contactField' value='" + data[0].NOME + "' id='NOME_ESTABELECIMENTO' readonly />                                                  " +
           "                  <label class='input-label'>Moeda</label>                                                                                                                   " +
           "                  <input type='text' name='NOME_MOEDA' class='contactField' value='" + data[0].NOME_MOEDA + "' id='NOME_MOEDA' readonly />                                                                      " +
           "                  <label class='input-label'>Valor da cotação (REAL)</label>                                                                                                 " +
           "                  <input type='number' name='VALOR_COTACAO' class='contactField' value='" + VALOR_VENDA + "' id='VALOR_COTACAO' readonly />                                                              " +
           "                  <label class='input-label'>Valor desejado (" + data[0].NOME_MOEDA + ")</label>                                                                                                      " +
           "                  <input type='number' name='VALOR_DESEJADO'  class='contactField'  onchange='MontaConversao(this,\"" + VALOR_VENDA + "\" );'   id='VALOR_DESEJADO'   />    " +
           "                  <label class='input-label'>Valor convertido (REAL)</label>                                                                                                        " +
           "                  <input type='number' name='VALOR_CONVERTIDO' class='contactField' id='VALOR_CONVERTIDO'  />                                                                " +
           "                  <div class='static-notification-green' id='38_XCD' style='border-radius: 10px;' onclick='Confirmar(\"" + 1 + "\")'>                                                  " +
           "                      <p class='center-text uppercase' style='color: white; font-size: 15px;'>confirmar</p>                                                                  " +
           "                  </div>                                                                                                                                                     " +
           "              </fieldset>                                                                                                                                                    " +
           "          </div>                                                                                                                                                             " +
           "      </div>                                                                                                                                                                 " +
           "  </div>                                                                                                                                                                     ";
    
    jQuery('#DIVDADOSVALORES').html(html);
}


jQuery(document).ready(function () {

    EqualizaTamanhoTela();
    RecebeValores();
    BuscaCotacaoEstabelecimento();
    
    CarregaPerfil();
    CarregaEndereco(ID_USUARIO);


    jQuery('#DIVDADOSVALORES').show();
    jQuery('#DIVDADOSENDERECO').hide();
    jQuery('#DIVDADOSOPERACAO').hide();
    jQuery('#DIVDADOSUSUARIO').hide();
}
);

function MontaMapa(data) {

    var html = "<strong class='contact-text'>" + data.NOME + "</strong><br>" +
       "<a class='contact-text' href='#'>Tel :" + data.FONE + "</a>" +
       //"<a class='contact-mail' href='#'>Email: " + data.EMAIL + "</a>" +
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

    var ID_USUARIO = jQuery.parseJSON(localStorage.getItem("USUARIO"))[0].ID_USUARIO;
    var ENDERECO_ENTREGA = jQuery('#ENDERECO').val();
    var COMPLEMENTO_ENTREGA = jQuery('#COMPLEMENTO').val();
    var BAIRRO_ENTREGA = jQuery('#BAIRRO').val();
    var CEP_ENTREGA = jQuery('#CEP').val();
    var UF_ENTREGA = jQuery('#UF').val();
    var CIDADE_ENTREGA = jQuery('#CIDADE').val();
    var FONE_ENTREGA = jQuery('#FONE').val();
    var NOME_ENTREGA = jQuery('#NOME').val();
    var SOBRENOME_ENTREGA = '';
    var NUMERO_ENTREGA = jQuery('#NUMERO').val();
    //InsereEnderecoUsuario(ID_USUARIO,ENDERECO_ENTREGA, COMPLEMENTO_ENTREGA, BAIRRO_ENTREGA, CEP_ENTREGA, UF_ENTREGA, CIDADE_ENTREGA, FONE_ENTREGA, NOME_ENTREGA, SOBRENOME_ENTREGA, NUMERO_ENTREGA, successFunc, ERROCONEXAO);
    var endusu = InsereEnderecoUsuario(ID_USUARIO, ENDERECO_ENTREGA, COMPLEMENTO_ENTREGA, BAIRRO_ENTREGA, CEP_ENTREGA, UF_ENTREGA, CIDADE_ENTREGA, FONE_ENTREGA, NOME_ENTREGA, SOBRENOME_ENTREGA, NUMERO_ENTREGA, null, ERROCONEXAO);

}

function AlteraEndereco() {

    var ID_USUARIO = jQuery.parseJSON(localStorage.getItem("USUARIO")).ID_USUARIO;
    var ENDERECO_ENTREGA = jQuery('#ENDERECO').val();
    var COMPLEMENTO_ENTREGA = jQuery('#COMPLEMENTO').val();
    var BAIRRO_ENTREGA = jQuery('#BAIRRO').val();
    var CEP_ENTREGA = jQuery('#CEP').val();
    var UF_ENTREGA = jQuery('#UF').val();
    var CIDADE_ENTREGA = jQuery('#CIDADE').val();
    var FONE_ENTREGA = jQuery('#FONE').val();
    var NOME_ENTREGA = jQuery('#NOME').val();
    var SOBRENOME_ENTREGA = '';
    var NUMERO_ENTREGA = jQuery('#NUMERO').val();

    endusu = AlteraEnderecoUsuario(ID_USUARIO, ENDERECO_ENTREGA, COMPLEMENTO_ENTREGA, BAIRRO_ENTREGA, CEP_ENTREGA, UF_ENTREGA, CIDADE_ENTREGA, FONE_ENTREGA, NOME_ENTREGA, SOBRENOME_ENTREGA, NUMERO_ENTREGA, null, ERROCONEXAO);

}

function CarregaEnderecoPorCep(obj) {
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