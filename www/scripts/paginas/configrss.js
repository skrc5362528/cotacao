
function Gravanovorss() {

    var ListRSS = new generic.list();

    if (localStorage.ListRSS == null) {
        localStorage.setItem("ListRSS", ListRSS);
    }
    else {
        ListRSS = localStorage.ListRSS;
    }

    var rss = new RSS();
    rss.setIDRSS(localStorage.ListRSS.lenght + 1);
    rss.setURL(jQuery('#URL').val());
    rss.setDESCRICAO(jQuery('#DESCRICAO').val());
    rss.setPRIORIDADE(jQuery('#PRIORIDADE').val());
    ListRSS.add(rss);
    localStorage.setItem("ListRSS", ListRSS);
}


