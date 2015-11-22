

function Grava() {

        var NOME =          jQuery('#NOME').val();
        var FONE =          jQuery('#FONE').val();
        var RAZAO_SOCIAL =  jQuery('#RAZAO_SOCIAL').val();
        var UF =            jQuery('#UF').val();
        var BAIRRO =        jQuery('#BAIRRO').val();
        var CEP =           jQuery('#CEP').val();
        var CIDADE =        jQuery('#CIDADE').val();
        var CNPJ =          jQuery('#CNPJ').val();
        var EMAIL =         jQuery('#EMAIL').val();
        var ENDERECO =      jQuery('#ENDERECO').val();
        var NUMERO =        jQuery('#NUMERO').val();
        var COMPLEMENTO =   jQuery('#COMPLEMENTO').val();

    if(NOME != "" || FONE != ""){
        var resp = jQuery.parseJSON(InsereEstabelecimento(NOME, FONE, LATITUDE, LONGITUDE, RAZAO_SOCIAL, UF, BAIRRO, CEP, CIDADE, CNPJ, EMAIL, ENDERECO, NUMERO, COMPLEMENTO, null, null));
        if (resp.ID_ESTABELECIMENTO != '')
        {
            sessionStorage.setItem("ESTABELECIMENTO", JSON.stringify(resp));
            alert("Estabelecimnento incluído com sucesso!");
        }
    }
    else {
        alert("Campos todos os campos são obrigatórios");
    }
}


