


function BuscaRss(maxcount, FeedUrl) {

    var ret = true;
    var url = "http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=" + maxcount + "&output=json&q=" + encodeURIComponent(FeedUrl) + "&hl=en&callback=?";


    jQuery.ajax({
        url: url,
        //data: {format: 'json'},
        async: false,
        type: 'GET',
        dataType: 'json',
        success: function (xml) {

            CarregaRss(xml);
        },
        error: function () {
            alert("ERRO");
            ret = false;
        }
    });

    return ret;
}

function CarregaRss(xml) {

    var html = "";

    jQuery.each(xml.responseData.feed.entries, function (e, item)
    {
        var titulo = item.title;
        var link = item.link;
        var descricao = item.content;
        var datapub = item.publishedDate;
       html += MontaFeed(titulo,link,descricao,datapub);       
    });
    jQuery('#rss').append(html);

    ApresentaFeed();

}

function MontaFeed(titulo, link, descricao, datapub) {

    var html = '<div class="static-notification tap-dismiss-notification">' +
                  '<div class="toggle-1">' +
                      '<a href="#" class="deploy-toggle-1">'+titulo+'</a>' +
                       '<div class="toggle-content">' +
                          '<div class="tab-content tab-content-1">' +
                              '<div class="one-half-responsive">' +
                                  '<div class="static-notification">' +
                                  descricao+
                                   '</div>' +
                               '</div>' +
                           '</div>' +
                       '</div>' +
                   '</div>' +
                    '<div class="decoration"></div>' +
               '</div>';
  return html;
}

function ApresentaFeed() {

  //  BuscaRss(100, 'http://www.infomoney.com.br/mercados/cambio/rss')


    jQuery('.tap-dismiss-notification').click(function () {
        jQuery(this).fadeOut();
        return false;
    });

    jQuery('.deploy-toggle-1').click(function () {
        jQuery(this).parent().find('.toggle-content').toggle(100);
        jQuery(this).toggleClass('toggle-1-active');
        return false;
    });

}