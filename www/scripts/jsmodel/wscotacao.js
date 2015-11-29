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
        error:function(){
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

// -- InsereUsuario
function InsereUsuario(LOGIN,NOME,SENHA,ID_TP_USUARIO,EMAIL,successFunc,errorFunc)
{
    /// <summary></summary>
    /// <param name="LOGIN" type="string">LOGIN</param>
    /// <param name="NOME" type="string">NOME</param>
    /// <param name="SENHA" type="string">SENHA</param>
    /// <param name="ID_TP_USUARIO" type="string">ID_TP_USUARIO</param>
    /// <param name="EMAIL" type="string">EMAIL</param>
   /// <param name="successFunc" type="function">Success Function</param>
    /// <param name="errorFunc" type="function">Error Function</param>
    /// <returns type="string">InsereUsuarioResult as string</returns>
    var $res = '';
    jQuery.ajax({
        type: "POST",
        url: "http://www.visional.com.br/wscotacao/cotacao.asmx/InsereUsuario",
        contentType: "application/json; charset=utf-8",
        async: false,
        cache: false,
        dataType: 'json',
        data: "{LOGIN:"+JSON.stringify(LOGIN)+",NOME:"+JSON.stringify(NOME)+",SENHA:"+JSON.stringify(SENHA)+",ID_TP_USUARIO:"+JSON.stringify(ID_TP_USUARIO)+",EMAIL:"+JSON.stringify(EMAIL)+"}",
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

// -- InsereEstabelecimento
function InsereEstabelecimento(NOME,FONE,LATITUDE,LONGITUDE,RAZAO_SOCIAL,UF,BAIRRO,CEP,CIDADE,CNPJ,EMAIL,ENDERECO,NUMERO,COMPLEMENTO,successFunc,errorFunc)
{
    /// <summary></summary>
    /// <param name="NOME" type="string">NOME</param>
    /// <param name="FONE" type="string">FONE</param>
    /// <param name="LATITUDE" type="string">LATITUDE</param>
    /// <param name="LONGITUDE" type="string">LONGITUDE</param>
    /// <param name="RAZAO_SOCIAL" type="string">RAZAO_SOCIAL</param>
    /// <param name="UF" type="string">UF</param>
    /// <param name="BAIRRO" type="string">BAIRRO</param>
    /// <param name="CEP" type="string">CEP</param>
    /// <param name="CIDADE" type="string">CIDADE</param>
    /// <param name="CNPJ" type="string">CNPJ</param>
    /// <param name="EMAIL" type="string">EMAIL</param>
    /// <param name="ENDERECO" type="string">ENDERECO</param>
    /// <param name="NUMERO" type="string">NUMERO</param>
    /// <param name="COMPLEMENTO" type="string">COMPLEMENTO</param>
   /// <param name="successFunc" type="function">Success Function</param>
    /// <param name="errorFunc" type="function">Error Function</param>
    /// <returns type="string">InsereEstabelecimentoResult as string</returns>
    var $res = '';
    jQuery.ajax({
        type: "POST",
        url: "http://www.visional.com.br/wscotacao/cotacao.asmx/InsereEstabelecimento",
        contentType: "application/json; charset=utf-8",
        async: false,
        cache: false,
        dataType: 'json',
        data: "{NOME:"+JSON.stringify(NOME)+",FONE:"+JSON.stringify(FONE)+",LATITUDE:"+JSON.stringify(LATITUDE)+",LONGITUDE:"+JSON.stringify(LONGITUDE)+",RAZAO_SOCIAL:"+JSON.stringify(RAZAO_SOCIAL)+",UF:"+JSON.stringify(UF)+",BAIRRO:"+JSON.stringify(BAIRRO)+",CEP:"+JSON.stringify(CEP)+",CIDADE:"+JSON.stringify(CIDADE)+",CNPJ:"+JSON.stringify(CNPJ)+",EMAIL:"+JSON.stringify(EMAIL)+",ENDERECO:"+JSON.stringify(ENDERECO)+",NUMERO:"+JSON.stringify(NUMERO)+",COMPLEMENTO:"+JSON.stringify(COMPLEMENTO)+"}",
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

// -- RetornaListaEstabelecimentos
function RetornaListaEstabelecimentos(successFunc,errorFunc)
{
    /// <summary></summary>
   /// <param name="successFunc" type="function">Success Function</param>
    /// <param name="errorFunc" type="function">Error Function</param>
    /// <returns type="string">RetornaListaEstabelecimentosResult as string</returns>
    var $res = '';
    jQuery.ajax({
        type: "POST",
        url: "http://www.visional.com.br/wscotacao/cotacao.asmx/RetornaListaEstabelecimentos",
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
        error:function(){
            if(errorFunc!=null)
				errorFunc();
        }


    });
    return  $res;
}

// -- RetornaEstabelecimentoEcotacao
function RetornaEstabelecimentoEcotacao(id_estabelecimento,id_moeda,dia,mes,ano,successFunc,errorFunc)
{
    /// <summary></summary>
    /// <param name="id_estabelecimento" type="int">id_estabelecimento</param>
    /// <param name="id_moeda" type="int">id_moeda</param>
    /// <param name="dia" type="int">dia</param>
    /// <param name="mes" type="int">mes</param>
    /// <param name="ano" type="int">ano</param>
   /// <param name="successFunc" type="function">Success Function</param>
    /// <param name="errorFunc" type="function">Error Function</param>
    /// <returns type="string">RetornaEstabelecimentoEcotacaoResult as string</returns>
    var $res = '';
    jQuery.ajax({
        type: "POST",
        url: "http://www.visional.com.br/wscotacao/cotacao.asmx/RetornaEstabelecimentoEcotacao",
        contentType: "application/json; charset=utf-8",
        async: false,
        cache: false,
        dataType: 'json',
        data: "{id_estabelecimento:"+JSON.stringify(id_estabelecimento)+",id_moeda:"+JSON.stringify(id_moeda)+",dia:"+JSON.stringify(dia)+",mes:"+JSON.stringify(mes)+",ano:"+JSON.stringify(ano)+"}",
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

// -- RetornaListaEstabelecimentoEcotacao
function RetornaListaEstabelecimentoEcotacao(id_moeda,dia,mes,ano,successFunc,errorFunc)
{
    /// <summary></summary>
    /// <param name="id_moeda" type="int">id_moeda</param>
    /// <param name="dia" type="int">dia</param>
    /// <param name="mes" type="int">mes</param>
    /// <param name="ano" type="int">ano</param>
   /// <param name="successFunc" type="function">Success Function</param>
    /// <param name="errorFunc" type="function">Error Function</param>
    /// <returns type="string">RetornaListaEstabelecimentoEcotacaoResult as string</returns>
    var $res = '';
    jQuery.ajax({
        type: "POST",
        url: "http://www.visional.com.br/wscotacao/cotacao.asmx/RetornaListaEstabelecimentoEcotacao",
        contentType: "application/json; charset=utf-8",
        async: false,
        cache: false,
        dataType: 'json',
        data: "{id_moeda:"+JSON.stringify(id_moeda)+",dia:"+JSON.stringify(dia)+",mes:"+JSON.stringify(mes)+",ano:"+JSON.stringify(ano)+"}",
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

// -- Login
function Login(email,senha,successFunc,errorFunc)
{
    /// <summary></summary>
    /// <param name="email" type="string">email</param>
    /// <param name="senha" type="string">senha</param>
   /// <param name="successFunc" type="function">Success Function</param>
    /// <param name="errorFunc" type="function">Error Function</param>
    /// <returns type="string">LoginResult as string</returns>
    var $res = '';
    jQuery.ajax({
        type: "POST",
        url: "http://www.visional.com.br/wscotacao/cotacao.asmx/Login",
        contentType: "application/json; charset=utf-8",
        async: false,
        cache: false,
        dataType: 'json',
        data: "{email:"+JSON.stringify(email)+",senha:"+JSON.stringify(senha)+"}",
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

// -- ValidaUsuario
function ValidaUsuario(email,successFunc,errorFunc)
{
    /// <summary></summary>
    /// <param name="email" type="string">email</param>
   /// <param name="successFunc" type="function">Success Function</param>
    /// <param name="errorFunc" type="function">Error Function</param>
    /// <returns type="string">ValidaUsuarioResult as string</returns>
    var $res = '';
    jQuery.ajax({
        type: "POST",
        url: "http://www.visional.com.br/wscotacao/cotacao.asmx/ValidaUsuario",
        contentType: "application/json; charset=utf-8",
        async: false,
        cache: false,
        dataType: 'json',
        data: "{email:"+JSON.stringify(email)+"}",
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

// -- AlteraUsuario
function AlteraUsuario(ID_USUARIO,LOGIN,NOME,SENHA,ID_TP_USUARIO,DATA_CADASTRO,EMAIL,ATIVO,successFunc,errorFunc)
{
    /// <summary></summary>
    /// <param name="ID_USUARIO" type="int">ID_USUARIO</param>
    /// <param name="LOGIN" type="string">LOGIN</param>
    /// <param name="NOME" type="string">NOME</param>
    /// <param name="SENHA" type="string">SENHA</param>
    /// <param name="ID_TP_USUARIO" type="string">ID_TP_USUARIO</param>
    /// <param name="DATA_CADASTRO" type="string">DATA_CADASTRO</param>
    /// <param name="EMAIL" type="string">EMAIL</param>
    /// <param name="ATIVO" type="string">ATIVO</param>
   /// <param name="successFunc" type="function">Success Function</param>
    /// <param name="errorFunc" type="function">Error Function</param>
    /// <returns type="string">AlteraUsuarioResult as string</returns>
    var $res = '';
    jQuery.ajax({
        type: "POST",
        url: "http://www.visional.com.br/wscotacao/cotacao.asmx/AlteraUsuario",
        contentType: "application/json; charset=utf-8",
        async: false,
        cache: false,
        dataType: 'json',
        data: "{ID_USUARIO:"+JSON.stringify(ID_USUARIO)+",LOGIN:"+JSON.stringify(LOGIN)+",NOME:"+JSON.stringify(NOME)+",SENHA:"+JSON.stringify(SENHA)+",ID_TP_USUARIO:"+JSON.stringify(ID_TP_USUARIO)+",DATA_CADASTRO:"+JSON.stringify(DATA_CADASTRO)+",EMAIL:"+JSON.stringify(EMAIL)+",ATIVO:"+JSON.stringify(ATIVO)+"}",
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

// -- AlteraEstabelecimento
function AlteraEstabelecimento(ID_ESTABELECIMENTO,NOME,FONE,LATITUDE,LONGITUDE,RAZAO_SOCIAL,UF,BAIRRO,CEP,CIDADE,CNPJ,EMAIL,ENDERECO,NUMERO,COMPLEMENTO,successFunc,errorFunc)
{
    /// <summary></summary>
    /// <param name="ID_ESTABELECIMENTO" type="int">ID_ESTABELECIMENTO</param>
    /// <param name="NOME" type="string">NOME</param>
    /// <param name="FONE" type="string">FONE</param>
    /// <param name="LATITUDE" type="string">LATITUDE</param>
    /// <param name="LONGITUDE" type="string">LONGITUDE</param>
    /// <param name="RAZAO_SOCIAL" type="string">RAZAO_SOCIAL</param>
    /// <param name="UF" type="string">UF</param>
    /// <param name="BAIRRO" type="string">BAIRRO</param>
    /// <param name="CEP" type="string">CEP</param>
    /// <param name="CIDADE" type="string">CIDADE</param>
    /// <param name="CNPJ" type="string">CNPJ</param>
    /// <param name="EMAIL" type="string">EMAIL</param>
    /// <param name="ENDERECO" type="string">ENDERECO</param>
    /// <param name="NUMERO" type="string">NUMERO</param>
    /// <param name="COMPLEMENTO" type="string">COMPLEMENTO</param>
   /// <param name="successFunc" type="function">Success Function</param>
    /// <param name="errorFunc" type="function">Error Function</param>
    /// <returns type="string">AlteraEstabelecimentoResult as string</returns>
    var $res = '';
    jQuery.ajax({
        type: "POST",
        url: "http://www.visional.com.br/wscotacao/cotacao.asmx/AlteraEstabelecimento",
        contentType: "application/json; charset=utf-8",
        async: false,
        cache: false,
        dataType: 'json',
        data: "{ID_ESTABELECIMENTO:"+JSON.stringify(ID_ESTABELECIMENTO)+",NOME:"+JSON.stringify(NOME)+",FONE:"+JSON.stringify(FONE)+",LATITUDE:"+JSON.stringify(LATITUDE)+",LONGITUDE:"+JSON.stringify(LONGITUDE)+",RAZAO_SOCIAL:"+JSON.stringify(RAZAO_SOCIAL)+",UF:"+JSON.stringify(UF)+",BAIRRO:"+JSON.stringify(BAIRRO)+",CEP:"+JSON.stringify(CEP)+",CIDADE:"+JSON.stringify(CIDADE)+",CNPJ:"+JSON.stringify(CNPJ)+",EMAIL:"+JSON.stringify(EMAIL)+",ENDERECO:"+JSON.stringify(ENDERECO)+",NUMERO:"+JSON.stringify(NUMERO)+",COMPLEMENTO:"+JSON.stringify(COMPLEMENTO)+"}",
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

// -- RetornaEstabelecimentoPorId
function RetornaEstabelecimentoPorId(ID_ESTABELECIMENTO,successFunc,errorFunc)
{
    /// <summary></summary>
    /// <param name="ID_ESTABELECIMENTO" type="int">ID_ESTABELECIMENTO</param>
   /// <param name="successFunc" type="function">Success Function</param>
    /// <param name="errorFunc" type="function">Error Function</param>
    /// <returns type="string">RetornaEstabelecimentoPorIdResult as string</returns>
    var $res = '';
    jQuery.ajax({
        type: "POST",
        url: "http://www.visional.com.br/wscotacao/cotacao.asmx/RetornaEstabelecimentoPorId",
        contentType: "application/json; charset=utf-8",
        async: false,
        cache: false,
        dataType: 'json',
        data: "{ID_ESTABELECIMENTO:"+JSON.stringify(ID_ESTABELECIMENTO)+"}",
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

// -- InsereMoedaEstabelecimento
function InsereMoedaEstabelecimento(ID_ESTABELECIMENTO,ID_MOEDA,CODIGO,NOME,SIMBOLO,successFunc,errorFunc)
{
    /// <summary></summary>
    /// <param name="ID_ESTABELECIMENTO" type="int">ID_ESTABELECIMENTO</param>
    /// <param name="ID_MOEDA" type="int">ID_MOEDA</param>
    /// <param name="CODIGO" type="string">CODIGO</param>
    /// <param name="NOME" type="string">NOME</param>
    /// <param name="SIMBOLO" type="string">SIMBOLO</param>
   /// <param name="successFunc" type="function">Success Function</param>
    /// <param name="errorFunc" type="function">Error Function</param>
    /// <returns type="string">InsereMoedaEstabelecimentoResult as string</returns>
    var $res = '';
    jQuery.ajax({
        type: "POST",
        url: "http://www.visional.com.br/wscotacao/cotacao.asmx/InsereMoedaEstabelecimento",
        contentType: "application/json; charset=utf-8",
        async: false,
        cache: false,
        dataType: 'json',
        data: "{ID_ESTABELECIMENTO:"+JSON.stringify(ID_ESTABELECIMENTO)+",ID_MOEDA:"+JSON.stringify(ID_MOEDA)+",CODIGO:"+JSON.stringify(CODIGO)+",NOME:"+JSON.stringify(NOME)+",SIMBOLO:"+JSON.stringify(SIMBOLO)+"}",
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

// -- AlteraMoedaEstabelecimento
function AlteraMoedaEstabelecimento(ID_ESTABELECIMENTO,ID_MOEDA,ATIVO,successFunc,errorFunc)
{
    /// <summary></summary>
    /// <param name="ID_ESTABELECIMENTO" type="int">ID_ESTABELECIMENTO</param>
    /// <param name="ID_MOEDA" type="int">ID_MOEDA</param>
    /// <param name="ATIVO" type="boolean">ATIVO</param>
   /// <param name="successFunc" type="function">Success Function</param>
    /// <param name="errorFunc" type="function">Error Function</param>
    /// <returns type="">AlteraMoedaEstabelecimentoResult as </returns>
    var $res = '';
    jQuery.ajax({
        type: "POST",
        url: "http://www.visional.com.br/wscotacao/cotacao.asmx/AlteraMoedaEstabelecimento",
        contentType: "application/json; charset=utf-8",
        async: false,
        cache: false,
        dataType: 'json',
        data: "{ID_ESTABELECIMENTO:"+JSON.stringify(ID_ESTABELECIMENTO)+",ID_MOEDA:"+JSON.stringify(ID_MOEDA)+",ATIVO:"+JSON.stringify(ATIVO)+"}",
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

// -- RetornaMoedaEstabelecimento
function RetornaMoedaEstabelecimento(ID_ESTABELECIMENTO,ID_MOEDA,successFunc,errorFunc)
{
    /// <summary></summary>
    /// <param name="ID_ESTABELECIMENTO" type="int">ID_ESTABELECIMENTO</param>
    /// <param name="ID_MOEDA" type="int">ID_MOEDA</param>
   /// <param name="successFunc" type="function">Success Function</param>
    /// <param name="errorFunc" type="function">Error Function</param>
    /// <returns type="">RetornaMoedaEstabelecimentoResult as </returns>
    var $res = '';
    jQuery.ajax({
        type: "POST",
        url: "http://www.visional.com.br/wscotacao/cotacao.asmx/RetornaMoedaEstabelecimento",
        contentType: "application/json; charset=utf-8",
        async: false,
        cache: false,
        dataType: 'json',
        data: "{ID_ESTABELECIMENTO:"+JSON.stringify(ID_ESTABELECIMENTO)+",ID_MOEDA:"+JSON.stringify(ID_MOEDA)+"}",
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

// -- RetornaListaMoedaEstabelecimento
function RetornaListaMoedaEstabelecimento(ID_ESTABELECIMENTO,successFunc,errorFunc)
{
    /// <summary></summary>
    /// <param name="ID_ESTABELECIMENTO" type="int">ID_ESTABELECIMENTO</param>
   /// <param name="successFunc" type="function">Success Function</param>
    /// <param name="errorFunc" type="function">Error Function</param>
    /// <returns type="">RetornaListaMoedaEstabelecimentoResult as </returns>
    var $res = '';
    jQuery.ajax({
        type: "POST",
        url: "http://www.visional.com.br/wscotacao/cotacao.asmx/RetornaListaMoedaEstabelecimento",
        contentType: "application/json; charset=utf-8",
        async: false,
        cache: false,
        dataType: 'json',
        data: "{ID_ESTABELECIMENTO:"+JSON.stringify(ID_ESTABELECIMENTO)+"}",
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

// -- RetornaCotacaoEstabelecimento
function RetornaCotacaoEstabelecimento(ID_ESTABELECIMENTO,ID_MOEDA,successFunc,errorFunc)
{
    /// <summary></summary>
    /// <param name="ID_ESTABELECIMENTO" type="int">ID_ESTABELECIMENTO</param>
    /// <param name="ID_MOEDA" type="int">ID_MOEDA</param>
   /// <param name="successFunc" type="function">Success Function</param>
    /// <param name="errorFunc" type="function">Error Function</param>
    /// <returns type="">RetornaCotacaoEstabelecimentoResult as </returns>
    var $res = '';
    jQuery.ajax({
        type: "POST",
        url: "http://www.visional.com.br/wscotacao/cotacao.asmx/RetornaCotacaoEstabelecimento",
        contentType: "application/json; charset=utf-8",
        async: false,
        cache: false,
        dataType: 'json',
        data: "{ID_ESTABELECIMENTO:"+JSON.stringify(ID_ESTABELECIMENTO)+",ID_MOEDA:"+JSON.stringify(ID_MOEDA)+"}",
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

// -- InsereCotacaoEstabelecimento
function InsereCotacaoEstabelecimento(ID_ESTABELECIMENTO,VALOR_COTACAO,ID_MOEDA,COD_MOEDA,SIMBOLO,DIA,MES,ANO,successFunc,errorFunc)
{
    /// <summary></summary>
    /// <param name="ID_ESTABELECIMENTO" type="int">ID_ESTABELECIMENTO</param>
    /// <param name="VALOR_COTACAO" type="string">VALOR_COTACAO</param>
    /// <param name="ID_MOEDA" type="int">ID_MOEDA</param>
    /// <param name="COD_MOEDA" type="string">COD_MOEDA</param>
    /// <param name="SIMBOLO" type="string">SIMBOLO</param>
    /// <param name="DIA" type="int">DIA</param>
    /// <param name="MES" type="int">MES</param>
    /// <param name="ANO" type="int">ANO</param>
   /// <param name="successFunc" type="function">Success Function</param>
    /// <param name="errorFunc" type="function">Error Function</param>
    /// <returns type="">InsereCotacaoEstabelecimentoResult as </returns>
    var $res = '';
    jQuery.ajax({
        type: "POST",
        url: "http://www.visional.com.br/wscotacao/cotacao.asmx/InsereCotacaoEstabelecimento",
        contentType: "application/json; charset=utf-8",
        async: false,
        cache: false,
        dataType: 'json',
        data: "{ID_ESTABELECIMENTO:"+JSON.stringify(ID_ESTABELECIMENTO)+",VALOR_COTACAO:"+JSON.stringify(VALOR_COTACAO)+",ID_MOEDA:"+JSON.stringify(ID_MOEDA)+",COD_MOEDA:"+JSON.stringify(COD_MOEDA)+",SIMBOLO:"+JSON.stringify(SIMBOLO)+",DIA:"+JSON.stringify(DIA)+",MES:"+JSON.stringify(MES)+",ANO:"+JSON.stringify(ANO)+"}",
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

// -- AlteraCotacaoEstabelecimento
function AlteraCotacaoEstabelecimento(ID_COTACAO,VALOR_COTACAO,ID_ESTABELECIMENTO,ID_MOEDA,DIA,MES,ANO,successFunc,errorFunc)
{
    /// <summary></summary>
    /// <param name="ID_COTACAO" type="int">ID_COTACAO</param>
    /// <param name="VALOR_COTACAO" type="string">VALOR_COTACAO</param>
    /// <param name="ID_ESTABELECIMENTO" type="int">ID_ESTABELECIMENTO</param>
    /// <param name="ID_MOEDA" type="int">ID_MOEDA</param>
    /// <param name="DIA" type="int">DIA</param>
    /// <param name="MES" type="int">MES</param>
    /// <param name="ANO" type="int">ANO</param>
   /// <param name="successFunc" type="function">Success Function</param>
    /// <param name="errorFunc" type="function">Error Function</param>
    /// <returns type="">AlteraCotacaoEstabelecimentoResult as </returns>
    var $res = '';
    jQuery.ajax({
        type: "POST",
        url: "http://www.visional.com.br/wscotacao/cotacao.asmx/AlteraCotacaoEstabelecimento",
        contentType: "application/json; charset=utf-8",
        async: false,
        cache: false,
        dataType: 'json',
        data: "{ID_COTACAO:"+JSON.stringify(ID_COTACAO)+",VALOR_COTACAO:"+JSON.stringify(VALOR_COTACAO)+",ID_ESTABELECIMENTO:"+JSON.stringify(ID_ESTABELECIMENTO)+",ID_MOEDA:"+JSON.stringify(ID_MOEDA)+",DIA:"+JSON.stringify(DIA)+",MES:"+JSON.stringify(MES)+",ANO:"+JSON.stringify(ANO)+"}",
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

// -- RetornaListaMoedaEstabelecimentoCotacao
function RetornaListaMoedaEstabelecimentoCotacao(ID_ESTABELECIMENTO,successFunc,errorFunc)
{
    /// <summary></summary>
    /// <param name="ID_ESTABELECIMENTO" type="int">ID_ESTABELECIMENTO</param>
   /// <param name="successFunc" type="function">Success Function</param>
    /// <param name="errorFunc" type="function">Error Function</param>
    /// <returns type="">RetornaListaMoedaEstabelecimentoCotacaoResult as </returns>
    var $res = '';
    jQuery.ajax({
        type: "POST",
        url: "http://www.visional.com.br/wscotacao/cotacao.asmx/RetornaListaMoedaEstabelecimentoCotacao",
        contentType: "application/json; charset=utf-8",
        async: false,
        cache: false,
        dataType: 'json',
        data: "{ID_ESTABELECIMENTO:"+JSON.stringify(ID_ESTABELECIMENTO)+"}",
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


// -- RetornaListaMoedaEstabelecimentoCotacao
function RetornaListaMoedasUtilizadas(successFunc, errorFunc) {
    /// <summary></summary>
    /// <param name="ID_ESTABELECIMENTO" type="int">ID_ESTABELECIMENTO</param>
    /// <param name="successFunc" type="function">Success Function</param>
    /// <param name="errorFunc" type="function">Error Function</param>
    /// <returns type="">RetornaListaMoedaEstabelecimentoCotacaoResult as </returns>
    var $res = '';
    jQuery.ajax({
        type: "POST",
        url: "http://www.visional.com.br/wscotacao/cotacao.asmx/RetornaListaMoedasUtilizadas",
        contentType: "application/json; charset=utf-8",
        async: false,
        cache: false,
        dataType: 'json',
        data: "",
        success: function (data) {
            if (data.hasOwnProperty("d")) {
                $res = data.d;
                if (successFunc != null)
                    successFunc(data.d);
            }
            else {
                $res = data;
                if (successFunc != null)
                    successFunc(data);
            }
        },
        error: function () {
            if (errorFunc != null)
                errorFunc();
        }


    });
    return $res;
}


// -- RetornaListaEstabelecimentoPorMoeda
function RetornaListaEstabelecimentoPorMoeda(SIMBOLO, successFunc, errorFunc) {
    /// <summary></summary>
    /// <param name="ID_ESTABELECIMENTO" type="int">ID_ESTABELECIMENTO</param>
    /// <param name="successFunc" type="function">Success Function</param>
    /// <param name="errorFunc" type="function">Error Function</param>
    /// <returns type="">RetornaListaMoedaEstabelecimentoCotacaoResult as </returns>
    var $res = '';
    jQuery.ajax({
        type: "POST",
        url: "http://www.visional.com.br/wscotacao/cotacao.asmx/RetornaListaEstabelecimentoPorMoeda",
        contentType: "application/json; charset=utf-8",
        async: false,
        cache: false,
        dataType: 'json',
        data: "{SIMBOLO:" + JSON.stringify(SIMBOLO) + "}",
        success: function (data) {
            if (data.hasOwnProperty("d")) {
                $res = data.d;
                if (successFunc != null)
                    successFunc(data.d);
            }
            else {
                $res = data;
                if (successFunc != null)
                    successFunc(data);
            }
        },
        error: function () {
            if (errorFunc != null)
                errorFunc();
        }


    });
    return $res;
}


// -- RetornaCotacaoEstabelecimento
function RetornaCotacaoEstabelecimentoPorMoeda(ID_ESTABELECIMENTO, SIMBOLO, successFunc, errorFunc) {
    /// <summary></summary>
    /// <param name="ID_ESTABELECIMENTO" type="int">ID_ESTABELECIMENTO</param>
    /// <param name="ID_MOEDA" type="int">ID_MOEDA</param>
    /// <param name="successFunc" type="function">Success Function</param>
    /// <param name="errorFunc" type="function">Error Function</param>
    /// <returns type="">RetornaCotacaoEstabelecimentoPorMoeda as </returns>
    var $res = '';
    jQuery.ajax({
        type: "POST",
        url: "http://www.visional.com.br/wscotacao/cotacao.asmx/RetornaCotacaoEstabelecimentoPorMoeda",
        contentType: "application/json; charset=utf-8",
        async: false,
        cache: false,
        dataType: 'json',
        data: "{ID_ESTABELECIMENTO:" + JSON.stringify(ID_ESTABELECIMENTO) + ",SIMBOLO:" + JSON.stringify(SIMBOLO) + "}",
        success: function (data) {
            if (data.hasOwnProperty("d")) {
                $res = data.d;
                if (successFunc != null)
                    successFunc(data.d);
            }
            else {
                $res = data;
                if (successFunc != null)
                    successFunc(data);
            }
        },
        error: function () {
            if (errorFunc != null)
                errorFunc();
        }


    });
    return $res;
}

// -- InsereCotacaoEstabelecimento
function InsereFavoritosUsuario(ID_USUARIO,ID_ESTABELECIMENTO, SIMBOLO, successFunc, errorFunc) {
    /// <summary></summary>
    /// <param name="ID_ESTABELECIMENTO" type="int">ID_ESTABELECIMENTO</param>
    /// <param name="VALOR_COTACAO" type="string">VALOR_COTACAO</param>
    /// <param name="ID_MOEDA" type="int">ID_MOEDA</param>
    /// <param name="COD_MOEDA" type="string">COD_MOEDA</param>
    /// <param name="SIMBOLO" type="string">SIMBOLO</param>
    /// <param name="DIA" type="int">DIA</param>
    /// <param name="MES" type="int">MES</param>
    /// <param name="ANO" type="int">ANO</param>
    /// <param name="successFunc" type="function">Success Function</param>
    /// <param name="errorFunc" type="function">Error Function</param>
    /// <returns type="">InsereCotacaoEstabelecimentoResult as </returns>
    var $res = '';
    jQuery.ajax({
        type: "POST",
        url: "http://www.visional.com.br/wscotacao/cotacao.asmx/InsereFavoritosUsuario",
        contentType: "application/json; charset=utf-8",
        async: false,
        cache: false,
        dataType: 'json',
        data: "{ID_USUARIO:" + JSON.stringify(ID_USUARIO) + ",ID_ESTABELECIMENTO:" + JSON.stringify(ID_ESTABELECIMENTO) + ",SIMBOLO:" + JSON.stringify(SIMBOLO) + "}",
        success: function (data) {
            if (data.hasOwnProperty("d")) {
                $res = data.d;
                if (successFunc != null)
                    successFunc(data.d);
            }
            else {
                $res = data;
                if (successFunc != null)
                    successFunc(data);
            }
        },
        error: function () {
            if (errorFunc != null)
                errorFunc();
        }


    });
    return $res;
}

function ExcluiFavorito(ID_USUARIO, ID_ESTABELECIMENTO, SIMBOLO, successFunc, errorFunc)
{
    var $res = '';
    jQuery.ajax({
        type: "POST",
        url: "http://www.visional.com.br/wscotacao/cotacao.asmx/ExcluiFavorito",
        contentType: "application/json; charset=utf-8",
        async: false,
        cache: false,
        dataType: 'json',
        data: "{ID_USUARIO:" + JSON.stringify(ID_USUARIO) + ",ID_ESTABELECIMENTO:" + JSON.stringify(ID_ESTABELECIMENTO) + ",SIMBOLO:" + JSON.stringify(SIMBOLO) + "}",
        success: function (data) {
            if (data.hasOwnProperty("d")) {
                $res = data.d;
                if (successFunc != null)
                    successFunc(data.d);
            }
            else {
                $res = data;
                if (successFunc != null)
                    successFunc(data);
            }
        },
        error: function () {
            if (errorFunc != null)
                errorFunc();
        }


    });
    return $res;
}

// -- RetornaCotacaoEstabelecimento
function RetornaFavoritosUsuario(ID_USUARIO, successFunc, errorFunc) {
    /// <summary></summary>
    /// <param name="ID_ESTABELECIMENTO" type="int">ID_ESTABELECIMENTO</param>
    /// <param name="ID_MOEDA" type="int">ID_MOEDA</param>
    /// <param name="successFunc" type="function">Success Function</param>
    /// <param name="errorFunc" type="function">Error Function</param>
    /// <returns type="">RetornaCotacaoEstabelecimentoPorMoeda as </returns>
    var $res = '';
    jQuery.ajax({
        type: "POST",
        url: "http://www.visional.com.br/wscotacao/cotacao.asmx/RetornaFavoritosUsuario",
        contentType: "application/json; charset=utf-8",
        async: false,
        cache: false,
        dataType: 'json',
        data: "{ID_USUARIO:" + JSON.stringify(ID_USUARIO) + "}",
        success: function (data) {
            if (data.hasOwnProperty("d")) {
                $res = data.d;
                if (successFunc != null)
                    successFunc(data.d);
            }
            else {
                $res = data;
                if (successFunc != null)
                    successFunc(data);
            }
        },
        error: function (data) {
            if (errorFunc != null)
                errorFunc();
        }


    });
    return $res;
}
