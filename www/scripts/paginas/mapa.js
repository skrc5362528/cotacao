


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


function CarregaMapa() {
    var map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([51.5, -0.09]).addTo(map)
        .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
        .openPopup();
}

