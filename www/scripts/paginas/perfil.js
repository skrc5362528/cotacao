var ID_ENDERECO_ENTREGA = '';
function GravaUsuario() {
    var ID_USUARIO = jQuery.parseJSON(localStorage.getItem("USUARIO")).ID_USUARIO;
    var NOME = jQuery('#NOME').val();
    var LOGIN = jQuery.parseJSON(localStorage.getItem("USUARIO")).LOGIN;/// jQuery('#LOGIN').val();
    var EMAIL = jQuery('#EMAIL').val();
    var SENHA = jQuery('#SENHA').val();
    var CPF = jQuery('#CPF').val();
    var RG = jQuery('#RG').val();
    var DATA_NASCIMENTO = jQuery('#DATA_NASCIMENTO').val();
    var ID_TP_USUARIO = 1;
    var usu =  AlteraUsuario(ID_USUARIO, LOGIN, NOME, SENHA, ID_TP_USUARIO, EMAIL, CPF, RG, DATA_NASCIMENTO, null, ERROCONEXAO)

    if (ID_ENDERECO_ENTREGA == '')
        InsereEndereco();
    else {
        AlteraEndereco();
    }
  
}

function ValidaEntrada() {
    var res = '';

    if (jQuery('#NOME').val() == '') {
        res = 'NOME OBRIGATÓRIO';
    }
    if (jQuery('#LOGIN').val() == '') {
        res = 'LOGIN OBRIGATÓRIO';
    }
    if (jQuery('#EMAIL').val() == '') {
        res = 'EMAIL OBRIGATÓRIO';
    }
    if (jQuery('#SENHA').val() == '') {
        res = 'SENHA OBRIGATÓRIO';
    }
    if (jQuery('#CONFIRMA_SENHA').val() == '') {
        res = 'CONFIRMAÇÃO OBRIGATÓRIA';
    }
    if (jQuery('#CONFIRMA_SENHA').val() != jQuery('#SENHA').val()) {
        res = 'SENHA DIFERENTE DA CONFIRMAÇÃO';
    }
    return res;
}

function CarregaUSUARIO(data) {

    if (data.ID_USUARIO == '') {
        return false;
    }
    else {
        localStorage.setItem("USUARIO", data);
    }
}

jQuery(document).ready(function () {

    CarregaPerfil();
    EqualizaTamanhoTela();
    CarregaEndereco(jQuery.parseJSON(localStorage.getItem("USUARIO")).ID_USUARIO);

});

function CarregaPerfil() {


    var data = jQuery.parseJSON(localStorage.getItem("USUARIO"));

            jQuery('#NOME').val(data.NOME);
            jQuery('#EMAIL').val(data.EMAIL);
            jQuery('#SENHA').val(data.SENHA);
            jQuery('#CONFIRMA_SENHA').val(data.CONFIRMA_SENHA);
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
            jQuery('#NOME').val(this.NOME_ENTREGA);
            jQuery('#NUMERO').val(this.NUMERO_ENTREGA);
        });
    }
}

function InsereEndereco() {
    var ID_USUARIO = jQuery.parseJSON(localStorage.getItem("USUARIO")).ID_USUARIO;
    var ENDERECO_ENTREGA = jQuery('#ENDERECO').val();
    var COMPLEMENTO_ENTREGA = jQuery('#COMPLEMENTO').val();
    var BAIRRO_ENTREGA = jQuery('#BAIRRO').val();
    var CEP_ENTREGA = jQuery('#CEP').val().replace('-','');
    var UF_ENTREGA = jQuery('#UF').val();
    var CIDADE_ENTREGA = jQuery('#CIDADE').val();
    var FONE_ENTREGA = jQuery('#FONE').val();
    var NOME_ENTREGA = jQuery('#NOME').val();
    var SOBRENOME_ENTREGA = '';
    var NUMERO_ENTREGA = jQuery('#NUMERO').val();
    //InsereEnderecoUsuario(ID_USUARIO,ENDERECO_ENTREGA, COMPLEMENTO_ENTREGA, BAIRRO_ENTREGA, CEP_ENTREGA, UF_ENTREGA, CIDADE_ENTREGA, FONE_ENTREGA, NOME_ENTREGA, SOBRENOME_ENTREGA, NUMERO_ENTREGA, successFunc, ERROCONEXAO);
    var endusu =  jQuery.parseJSON(InsereEnderecoUsuario(ID_USUARIO,ENDERECO_ENTREGA, COMPLEMENTO_ENTREGA, BAIRRO_ENTREGA, CEP_ENTREGA, UF_ENTREGA, CIDADE_ENTREGA, FONE_ENTREGA, NOME_ENTREGA, SOBRENOME_ENTREGA, NUMERO_ENTREGA, null, ERROCONEXAO));
    ID_ENDERECO_ENTREGA = endusu.ID_ENDERECO_ENTREGA;
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

    endusu =  jQuery.parseJSON(AlteraEnderecoUsuario(ID_ENDERECO_ENTREGA,ID_USUARIO, ENDERECO_ENTREGA, COMPLEMENTO_ENTREGA, BAIRRO_ENTREGA, CEP_ENTREGA, UF_ENTREGA, CIDADE_ENTREGA, FONE_ENTREGA, NOME_ENTREGA, SOBRENOME_ENTREGA, NUMERO_ENTREGA, null, ERROCONEXAO));
    ID_ENDERECO_ENTREGA = endusu.ID_ENDERECO_ENTREGA;
}

function CarregaEnderecoPorCep(obj) {
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