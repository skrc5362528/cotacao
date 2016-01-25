jQuery(document).ready(function myfunction() {
    EqualizaTamanhoTela();
    MontaTela();
});

function MontaTela() {
    var usu = jQuery.parseJSON(localStorage.getItem("USUARIO"));

  jQuery("#EMAIL").val(usu.EMAIL);
  jQuery("#NOME").val(usu.NOME);
}

function EnviaMensagem() {

<<<<<<< HEAD
=======
  

>>>>>>> e51f103b6ab89a992813a70f05f990c116556dcc
    BloqueiaTela("Enviando a sua mensagem...");

    var NOME = jQuery("#NOME").val();
    var EMAIL = jQuery("#EMAIL").val();
    var MENSAGEM = jQuery("#MENSAGEM").val();
    var ASSUNTO = jQuery("#ASSUNTO").val();

    if (ValidaMensagem(MENSAGEM, ASSUNTO)) {
        var HTML = "<div>" +
        "<div>Nome : " + NOME + " </div> " +
        "<div>Email : " + EMAIL + "</div> " +
        "<div>Assunto : " + ASSUNTO + " </div> " +
        "<div><p>" + MENSAGEM + "</p></div></div>";

        var resp = jQuery.parseJSON(EnviaEmail(HTML, ASSUNTO, null, ERROCONEXAO));
        DesbloqueiaTela(2000);

        if (resp == 'OK') {
            ExibeMensagem("Mensagem enviada com sucesso");
        }
        else {
            ExibeMensagem("Ocorreu um problema ao enviar sua mensagem, tente novamente");
        }
    } else {

        ExibeMensagem("Dados de assunto e mensagem são obrigatórios");
    }
    
}

function ValidaMensagem(MENSAGEM,ASSUNTO) {

    if (MENSAGEM == ''|| ASSUNTO == '') {
        return false;
    }
    else {
        return true;
    }

}