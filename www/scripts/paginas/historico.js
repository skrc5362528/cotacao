var ID_USUARIO = jQuery.parseJSON(localStorage.getItem("USUARIO")).ID_USUARIO;
var data = '';
var ordem = '';


function BuscarEstabelecimento() {
 //   BloqueiaTela("Carregando...");
    var html = '';    
    data = jQuery.parseJSON(RetornaOperacaoPorUsuario(ID_USUARIO,0,0,null,ERROCONEXAO));
    if (data.length > 0) {
        jQuery.each(data, function () {
            html+= CarregaDivOperacao(this);
        });
    }
    jQuery('#DIVHISTORICO').html(html);
    //DesbloqueiaTela();
}

function CarregaDivOperacao(data) {


                    //+data.COD_VENDA+
                    //+data.DATA_VENDA+
                    //+data.ESTABELECIMENTO.NOME+
                    //+data.ESTABELECIMENTO.FONE+
                    //+data.ESTABELECIMENTO.ENDERECO+
                    //+data.ESTABELECIMENTO.CIDADE+
                    //+data.ESTABELECIMENTO.BAIRRO+             
                    //+data.ESTABELECIMENTO.LATITUDE+
                    //+data.ESTABELECIMENTO.LONGITUDE+                 
                    //+data.STATUS_VENDA.DESCRICAO+
                    //+data.PRODUTO.SIMBOLO+
                    //+data.PRODUTO.DESCRICAO_DETALHADA+
                    //+data.PRODUTO.QUANTIDADE+
                    //+data.PRODUTO.VALOR_PRODUTO+
                    //+data.OBS_COMPRA+
                    //+data.SITUACAO_COMPRA+

    var html =
    "<div id='" + data.ID_ESTABELECIMENTO + "' class='big-notification static-notification-white'>" +
    "<div>" +
    "<strong><label class='contact-text'>Cod.Venda: " + data.COD_VENDA + "</label></strong> " +
    "<strong><label class='contact-text'>" + data.NOME + "</label></strong> " +
    "</div>" +
    //"<div class='one-half'>" +
    "<label class='contact-text'>Data:" + data.DATA_VENDA + "</label>" +
    "<label class='contact-text'>Moeda:" + data.SIMBOLO + "</label>" +
    "<label class='contact-text'>Cotação:R$" + parseFloat(data.VALOR_PRODUTO).toFixed(2) + " </label>" +
    "<label class='contact-text'>Requerido:R$" + parseFloat(data.QUANTIDADE).toFixed(2) + " </label>" +
    "<label class='contact-text'>total:R$" + parseFloat((data.QUANTIDADE * data.VALOR_PRODUTO)).toFixed(2)+ " </label>" +
    "<div>" +
    "<strong><label class='contact-text'>Status:" + data.DESCRICAO + "</label></strong> " +
    "</div>" +
      "<div class='one-half'>" +
      "<a onclick='MostraMapa(this);' id='" + data.ID_ESTABELECIMENTO + "_" + data.SIMBOLO + "' class='button button-white'><i class='fa fa-map-marker' style='font-size:18px; color:#0489B1;'></i></a>" +
      "</div>" +
     "<div class='two-half last-column'>" +
       "<a onclick='check(this);' id='" + data.ID_ESTABELECIMENTO + "_" + data.SIMBOLO + "' class='button button-white'><i class='fa fa-star-o' style='font-size:18px; color:#0489B1;'></i></a>" +
    "</div>" +
    "</div>";

                    return html;

    //var html = "<div class='container no-bottom'>" +
    //        "<div class='no-bottom'>   " +
    //        "<div>  " +
    //        "<fieldset>" +
    //        " <div class='big-notification static-notification-white' id='38'> " +
    //        " <h4><label>Dados do comprador :</label></h4>  " +
    //        " <strong><label class='contact-text' >Nome : " + jQuery('#NOME').val() + "</label></strong> " +
    //        " <strong><label class='contact-text' >Tel. Contato : " + jQuery('#FONE').val() + "</label></strong>  " +
    //        " <strong><label class='contact-text' >Data de nascimento : " + jQuery('#DATA_NASCIMENTO').val() + "</label></strong>  " +
    //        " <strong><label class='contact-text' >Cpf : " + jQuery('#CPF').val() + "</label></strong>   " +
    //        " <strong><label class='contact-text' >Rg : " + jQuery('#RG').val() + "</label></strong>   " +
    //        " <h4><label>Dados da Transação :</label></h4>  " +
    //        " <strong><label class='contact-text' >Estabelecimento : " + jQuery('#NOME_ESTABELECIMENTO').val() + "</label></strong> " +
    //        " <strong><label class='contact-text' >Moeda : " + jQuery('#NOME_MOEDA').val() + "</label></strong>  " +
    //        " <strong><label class='contact-text' >Valor desejado (" + jQuery('#NOME_MOEDA').val() + ") : " + jQuery('#VALOR_DESEJADO').val() + "</label></strong>   " +
    //        " <strong><label class='contact-text' >Cotação do dia (REAL) : " + jQuery('#VALOR_COTACAO').val() + "</label></strong>   " +
    //        " <strong><label class='contact-text' >Valor convertido (REAL) : " + jQuery('#VALOR_CONVERTIDO').val() + "</label></strong>   " +
    //        " <h4><label>Endereço de entrega:</label></h4>  " +
    //        " <strong><label class='contact-text' >Cep : " + jQuery('#CEP').val() + "</label></strong>   " +
    //        " <strong><label class='contact-text' >Endereço : " + jQuery('#ENDERECO').val() + "</label></strong> " +
    //        " <strong><label class='contact-text' >Complemento : " + jQuery('#COMPLEMENTO').val() + "</label></strong>  " +
    //        " <strong><label class='contact-text' >Numero : " + jQuery('#NUMERO').val() + "</label></strong>   " +
    //        " <strong><label class='contact-text' >Bairro : " + jQuery('#BAIRRO').val() + "</label></strong>   " +
    //        " <strong><label class='contact-text' >Cidade : " + jQuery('#CIDADE').val() + "</label></strong>   " +
    //        " <strong><label class='contact-text' >Estado : " + jQuery('#UF').val() + "</label></strong>   " +
    //        "</div>" +
    //        "</fieldset>" +
    //        "</div>" +
    //        "</div>" +
    //        "</div>";

    return  html;

}

jQuery(document).ready(function () {
    EqualizaTamanhoTela();
    BuscarEstabelecimento();
});

function MostraMapa(obj) {

    sessionStorage.setItem('VIEWMAP', obj.id)
    CarregaMenu('mapa.html');
}

//function FiltraBusca(campo+ ordena) {

//    data = OrdenaResultados(campo+ ordena+ data);
//    jQuery('#DIVESTABELECIMENTO').html('');
//   // CarregaFiltros();
//    CarregaDados(data);
//}

function CarregaDados(data) {

    if (data.length > 0) {
        jQuery.each(data, function () {
            jQuery('#DIVESTABELECIMENTO').append(CarregaEstabelecimento(this));
        });
    }

}
