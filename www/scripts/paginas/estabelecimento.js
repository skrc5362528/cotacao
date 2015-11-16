function BuscarEstabelecimento(ID_MOEDA) {
    var dt = new Date();
    var DIA = dt.getDate();
    var MES = (dt.getMonth() + 1);
    var ANO = dt.getFullYear();

    function PreencheSelect() {
        var data = jQuery.parseJSON(RetornaListaEstabelecimentoEcotacao(ID_MOEDA,DIA,MES,ANO,null, null));
        if (data.length > 0) {
            jQuery.each(data, function () {
                jQuery('#DIVESTABELECIMENTO').append(CarregaEstabelecimento(this));
            });
        }
    }


  

}


//function CarregaEstabelecimento(ID_ESTABELECIMENTO, ID_MOEDA) {

//    var html = "  <div class='static-notification'>                                                                                                                " +
//                "    <div class='toggle-1'>                                                                                                                         " +
//                "        <div class='tab-content tab-content-1'>                                                                                                    " +
//                "            <div class='one-half-responsive'>                                                                                                      " +
//                "                <div class='static-notification'>                                                                                                  " +
//                "                    <iframe id='FRMCONTATO' src='pg_contato.html?ID_ESTABELECIMENTO=" + ID_ESTABELECIMENTO + "&ID_MOEDA="+ID_MOEDA+"' class='' height='260' weight='200' frameborder='0'></iframe> " +
//                //"                    <br />                                                                                                                         " +
//                //"                    <p>                                                                                                                            " +
//               // "                        <div class='one-third-responsive last-column full-bottom '>                                                                " +
//                "                            <a class='button button-red' id='"+ ID_ESTABELECIMENTO + "' onclick='check(this);'><i class='fa fa-square'></i></a>                " +
//               // "                        </div>                                                                                                                     " +
//               // "                    </p>                                                                                                                           " +
//                "                </div>                                                                                                                             " +
//                "            </div>                                                                                                                                 " +
//                "        </div>                                                                                                                                     " +
//                "    </div>                                                                                                                                         " +
//                "</div>                                                                                                                                             " +
//                "<br />";

//    return html;

//}

function CarregaEstabelecimento(data) {
        var html = "<div class='static-notification'>" +
                    "<div class='toggle-1'>" +
                    "<div class='tab-content tab-content-1'>" +
                    "<div class='one-half-responsive'>" +
                    "<div class='static-notification'>  " +
                    " <strong id='NOME_ESTABELECIMENTO'>"+data.NOME_ESTABELECIMENTO+"</strong><br>" +
                    "<a href='#' class='contact-text'><i class='fa fa-phone'></i>Phone: " + data.NOME_ESTABELECIMENTO + "" +
                    "<a href='#' class='contact-text'><i class='fa fa-comments'></i>Message: +" + data.NOME_ESTABELECIMENTO + "</a>" +
                    "<a href='#' class='contact-text'><i class='fa fa-envelope'></i>Email: " + data.NOME_ESTABELECIMENTO + "</a>" +
                    "<a href='#' class='contact-text'><i class='fa fa-facebook'></i>Fanpage:" + data.NOME_ESTABELECIMENTO + "</a>" +
                    "<a href='#' class='contact-text'><i class='fa fa-twitter'></i>Twitter:" + data.NOME_ESTABELECIMENTO + "</a>" +
                    "<div id='DIVCOTACAO'>" +
                    "<div href='#' class='contact-text'>Moeda:</div>" +
                    "<label class='contact-text' id='LBLMOEDA' >" + data.NOME_MOEDA + "</label>" +
                    "<div href='#' class='contact-text'>Cotação :</div>" +
                    "<label class='contact-text' id='LBLVALOR'>R$ " + data.VALOR_COTACAO + "</label>" +
                    "</div>" +
                    "<a class='button button-red' id='" + data.ID_ESTABELECIMENTO + "' onclick='check(this);'><i class='fa fa-square'></i></a>" +
                    "</div>" +
                    "</div>" +
                    "</div>" +
                    "</div>" +
                    "</div>" +
                    "<br />";
    return html;
}

function check(obj) {

    var id = obj.id;

    if (jQuery(obj).html() == '<i class="fa fa-square"></i>')
    { 
        jQuery(obj).html('<i class="fa fa-check-square"></i>');
        jQuery(obj).removeClass('button button-red');
        jQuery(obj).addClass('button button-green');
    }
    else {
        jQuery(obj).html('<i class="fa fa-square"></i>')
        jQuery(obj).removeClass('button button-green');
        jQuery(obj).addClass('button button-red');
    }

}

function PreencheSelect() {
    var data = jQuery.parseJSON(ListaMoeda(null, null));
    if (data.length > 0) {
        jQuery.each(data, function () {
            MontaSelect(this.CODIGO, this.NOME);
        });
        jQuery('#MOEDA').append('<option value="" selected>Selecione uma moeda</option>');
    }
}

function MontaSelect(CODIGO, NOME) {
    jQuery('#MOEDA').append('<option value=' + CODIGO + '>' + NOME + '</option>');
}

jQuery(document).ready(function () {

    PreencheSelect();

});