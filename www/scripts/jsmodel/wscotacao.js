//--------------------------------------------------------------------------------
// Generate By NO2AjaxGenerator.
// No2don is no warranty for this document works correctly.
// If you have any questions.You can  feel free mail to no2don@gmail.com
// Github: https://github.com/donma/JqueryAjaxGenerator
//--------------------------------------------------------------------------------


//---------------------------------------------------------------------------//
//-----------------------------Object Models--------------------------------//
//--------------------------------------------------------------------------//



//-----------------------------Methods---------------------------------//

// -- ListaMoeda
function ListaMoeda(successFunc,errorFunc)
{
    /// <summary></summary>
   /// <param name="successFunc" type="function">Success Function</param>
    /// <param name="errorFunc" type="function">Error Function</param>
    /// <returns type="string">ListaMoedaResult as string</returns>
    var $res = '';
    jQuery.ajax({
        type: "POST",
        url: "http://www.visional.com.br/wscotacao/cotacao.asmx/ListaMoeda",
        contentType: "application/json; charset=utf-8",
        async: false,
        cache: false,
        dataType: 'json',
        data: '',
        success: function (data) {
            if (data.hasOwnProperty("d")) {
                $res = data.d;
				if(successFunc!=null)
                successFunc(data.d);
            }
            else{
                $res = data;
				if(successFunc!=null)
                successFunc(data);
            }
        },
        error:function(data){
            if(errorFunc!=null)
				errorFunc();
        }


    });
    return  $res;
}

// -- ListaSerieVO
function ListaSerieVO(COD_MOEDA,successFunc,errorFunc)
{
    /// <summary></summary>
    /// <param name="COD_MOEDA" type="int">COD_MOEDA</param>
   /// <param name="successFunc" type="function">Success Function</param>
    /// <param name="errorFunc" type="function">Error Function</param>
    /// <returns type="string">ListaSerieVOResult as string</returns>
    var $res = '';
    jQuery.ajax({
        type: "POST",
        url: "http://www.visional.com.br/wscotacao/cotacao.asmx/ListaSerieVO",
        contentType: "application/json; charset=utf-8",
        async: false,
        cache: false,
        dataType: 'json',
        data: "{COD_MOEDA:"+JSON.stringify(COD_MOEDA)+"}",
        success: function (data) {
            if (data.hasOwnProperty("d")) {
                $res = data.d;
				if(successFunc!=null)
                successFunc(data.d);
            }
            else{
                $res = data;
				if(successFunc!=null)
                successFunc(data);
            }
        },
        error:function(){
            if(errorFunc!=null)
				errorFunc();
        }


    });
    return  $res;
}

// -- ListaValorCotacao
function ListaValorCotacao(COD_MOEDA,dia,mes,ano,successFunc,errorFunc)
{
    /// <summary></summary>
    /// <param name="COD_MOEDA" type="int">COD_MOEDA</param>
    /// <param name="dia" type="int">dia</param>
    /// <param name="mes" type="int">mes</param>
    /// <param name="ano" type="int">ano</param>
   /// <param name="successFunc" type="function">Success Function</param>
    /// <param name="errorFunc" type="function">Error Function</param>
    /// <returns type="string">ListaValorCotacaoResult as string</returns>
    var $res = '';
    jQuery.ajax({
        type: "POST",
        url: "http://www.visional.com.br/cotacao.asmx/ListaValorCotacao",
        contentType: "application/json; charset=utf-8",
        async: false,
        cache: false,
        dataType: 'json',
        data: "{COD_MOEDA:"+JSON.stringify(COD_MOEDA)+",dia:"+JSON.stringify(dia)+",mes:"+JSON.stringify(mes)+",ano:"+JSON.stringify(ano)+"}",
        success: function (data) {
            if (data.hasOwnProperty("d")) {
                $res = data.d;
				if(successFunc!=null)
                successFunc(data.d);
            }
            else{
                $res = data;
				if(successFunc!=null)
                successFunc(data);
            }
        },
        error:function(){
            if(errorFunc!=null)
				errorFunc();
        }


    });
    return  $res;
}

// -- UtlimoValorVO
function UtlimoValorVO(COD_MOEDA,successFunc,errorFunc)
{
    /// <summary></summary>
    /// <param name="COD_MOEDA" type="int">COD_MOEDA</param>
   /// <param name="successFunc" type="function">Success Function</param>
    /// <param name="errorFunc" type="function">Error Function</param>
    /// <returns type="string">UtlimoValorVOResult as string</returns>
    var $res = '';
    jQuery.ajax({
        type: "POST",
        url: "http://www.visional.com.br/wscotacao/cotacao.asmx/UtlimoValorVO",
        contentType: "application/json; charset=utf-8",
        async: false,
        cache: false,
        dataType: 'json',
        data: "{COD_MOEDA:"+JSON.stringify(COD_MOEDA)+"}",
        success: function (data) {
            if (data.hasOwnProperty("d")) {
                $res = data.d;
				if(successFunc!=null)
                successFunc(data.d);
            }
            else{
                $res = data;
				if(successFunc!=null)
                successFunc(data);
            }
        },
        error:function(data){
            if(errorFunc!=null)
				errorFunc();
        }


    });
    return  $res;
}

// -- ValorPorData
function ValorPorData(COD_MOEDA,dia,mes,ano,successFunc,errorFunc)
{
    /// <summary></summary>
    /// <param name="COD_MOEDA" type="int">COD_MOEDA</param>
    /// <param name="dia" type="int">dia</param>
    /// <param name="mes" type="int">mes</param>
    /// <param name="ano" type="int">ano</param>
   /// <param name="successFunc" type="function">Success Function</param>
    /// <param name="errorFunc" type="function">Error Function</param>
    /// <returns type="string">ValorPorDataResult as string</returns>
    var $res = '';
    jQuery.ajax({
        type: "POST",
        url: "http://www.visional.com.br/wscotacao/cotacao.asmx/ValorPorData",
        contentType: "application/json; charset=utf-8",
        async: false,
        cache: false,
        dataType: 'json',
        data: "{COD_MOEDA:"+JSON.stringify(COD_MOEDA)+",dia:"+JSON.stringify(dia)+",mes:"+JSON.stringify(mes)+",ano:"+JSON.stringify(ano)+"}",
        success: function (data) {
            if (data.hasOwnProperty("d")) {
                $res = data.d;
				if(successFunc!=null)
                successFunc(data.d);
            }
            else{
                $res = data;
				if(successFunc!=null)
                successFunc(data);
            }
        },
        error:function(){
            if(errorFunc!=null)
				errorFunc();
        }


    });
    return  $res;
}

// -- ValoresSerieVO
function ValoresSerieVO(COD_MOEDA,diaIni,mesIni,anoIni,diaFim,mesFim,anoFim,successFunc,errorFunc)
{
    /// <summary></summary>
    /// <param name="COD_MOEDA" type="int">COD_MOEDA</param>
    /// <param name="diaIni" type="int">diaIni</param>
    /// <param name="mesIni" type="int">mesIni</param>
    /// <param name="anoIni" type="int">anoIni</param>
    /// <param name="diaFim" type="int">diaFim</param>
    /// <param name="mesFim" type="int">mesFim</param>
    /// <param name="anoFim" type="int">anoFim</param>
   /// <param name="successFunc" type="function">Success Function</param>
    /// <param name="errorFunc" type="function">Error Function</param>
    /// <returns type="string">ValoresSerieVOResult as string</returns>
    var $res = '';
    jQuery.ajax({
        type: "POST",
        url: "http://www.visional.com.br/wscotacao/cotacao.asmx/ValoresSerieVO",
        contentType: "application/json; charset=utf-8",
        async: false,
        cache: false,
        dataType: 'json',
        data: "{COD_MOEDA:"+JSON.stringify(COD_MOEDA)+",diaIni:"+JSON.stringify(diaIni)+",mesIni:"+JSON.stringify(mesIni)+",anoIni:"+JSON.stringify(anoIni)+",diaFim:"+JSON.stringify(diaFim)+",mesFim:"+JSON.stringify(mesFim)+",anoFim:"+JSON.stringify(anoFim)+"}",
        success: function (data) {
            if (data.hasOwnProperty("d")) {
                $res = data.d;
				if(successFunc!=null)
                successFunc(data.d);
            }
            else{
                $res = data;
				if(successFunc!=null)
                successFunc(data);
            }
        },
        error:function(){
            if(errorFunc!=null)
				errorFunc();
        }


    });
    return  $res;
}

