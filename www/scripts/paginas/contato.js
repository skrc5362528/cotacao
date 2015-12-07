jQuery(document).ready(function myfunction() {
    EqualizaTamanhoTela();
    MontaTela();
});

function MontaTela() {
    var usu = jQuery.parseJSON(localStorage.getItem("USUARIO"));

  jQuery("#EMAIL").val(usu.EMAIL);
  jQuery("#NOME").val(usu.NOME);
}