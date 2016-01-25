//-------------------------------------------------------------------------------
// Generate By NO2AjaxGenerator.
// No2don is no warranty for this document works correctly.
// If you have any questions.You can  feel free mail to no2don@gmail.com
// Github: https://github.com/donma/JqueryAjaxGenerator
//-------------------------------------------------------------------------------//---------------------------------------------------------------------------//
//-----------------------------Object Models--------------------------------//
//--------------------------------------------------------------------------//



//-----------------------------Methods---------------------------------//

// -- ListaMoeda
function ListaMoeda(successFunc, errorFunc) {
    /// <summary></summary>

    /// <param name='successFunc' type='function'>Success Function</param>
    /// <param name='errorFunc' type='function'>Error Function</param>
    /// <returns type='string'>ListaMoedaResult as string</returns>
    var $res = '';
   jQuery.ajax({
        type: 'POST',
        url: 'http://www.visional.com.br/wscotacao/cotacao.asmx/ListaMoeda',
        contentType: 'application/json; charset=utf-8',
        async: false,
        cache: false,
        dataType: 'json',
        data: '',
        success: function (data) {
            if (data.hasOwnProperty('d')) {
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
                errorFunc(data);
        }


    });
    return $res;
}

// -- EnviaEmail
function EnviaEmail(MENSAGEM, ASSUNTO, successFunc, errorFunc) {
    /// <summary></summary>
    /// <param name="MENSAGEM" type="string">MENSAGEM</param>
    /// <param name="ASSUNTO" type="string">ASSUNTO</param>

    /// <param name='successFunc' type='function'>Success Function</param>
    /// <param name='errorFunc' type='function'>Error Function</param>
    /// <returns type='string'>EnviaEmailResult as string</returns>
    var $res = '';
   jQuery.ajax({
        type: 'POST',
        url: 'http://www.visional.com.br/wscotacao/cotacao.asmx/EnviaEmail',
        contentType: 'application/json; charset=utf-8',
        async: false,
        cache: false,
        dataType: 'json',
        data: "{MENSAGEM:" + JSON.stringify(MENSAGEM) + ",ASSUNTO:" + JSON.stringify(ASSUNTO) + "}",
        success: function (data) {
            if (data.hasOwnProperty('d')) {
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
                errorFunc(data);
        }


    });
    return $res;
}

// -- InsereUsuario
function InsereUsuario(LOGIN, NOME, SENHA, ID_TP_USUARIO, EMAIL, successFunc, errorFunc) {
    /// <summary></summary>
    /// <param name="LOGIN" type="string">LOGIN</param>
    /// <param name="NOME" type="string">NOME</param>
    /// <param name="SENHA" type="string">SENHA</param>
    /// <param name="ID_TP_USUARIO" type="string">ID_TP_USUARIO</param>
    /// <param name="EMAIL" type="string">EMAIL</param>

    /// <param name='successFunc' type='function'>Success Function</param>
    /// <param name='errorFunc' type='function'>Error Function</param>
    /// <returns type='string'>InsereUsuarioResult as string</returns>
    var $res = '';
   jQuery.ajax({
        type: 'POST',
        url: 'http://www.visional.com.br/wscotacao/cotacao.asmx/InsereUsuario',
        contentType: 'application/json; charset=utf-8',
        async: false,
        cache: false,
        dataType: 'json',
        data: "{LOGIN:" + JSON.stringify(LOGIN) + ",NOME:" + JSON.stringify(NOME) + ",SENHA:" + JSON.stringify(SENHA) + ",ID_TP_USUARIO:" + JSON.stringify(ID_TP_USUARIO) + ",EMAIL:" + JSON.stringify(EMAIL) + "}",
        success: function (data) {
            if (data.hasOwnProperty('d')) {
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
                errorFunc(data);
        }


    });
    return $res;
}

// -- InsereEstabelecimento
function InsereEstabelecimento(NOME, FONE, LATITUDE, LONGITUDE, RAZAO_SOCIAL, UF, BAIRRO, CEP, CIDADE, CNPJ, EMAIL, ENDERECO, NUMERO, COMPLEMENTO, successFunc, errorFunc) {
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

    /// <param name='successFunc' type='function'>Success Function</param>
    /// <param name='errorFunc' type='function'>Error Function</param>
    /// <returns type='string'>InsereEstabelecimentoResult as string</returns>
    var $res = '';
   jQuery.ajax({
        type: 'POST',
        url: 'http://www.visional.com.br/wscotacao/cotacao.asmx/InsereEstabelecimento',
        contentType: 'application/json; charset=utf-8',
        async: false,
        cache: false,
        dataType: 'json',
        data: "{NOME:" + JSON.stringify(NOME) + ",FONE:" + JSON.stringify(FONE) + ",LATITUDE:" + JSON.stringify(LATITUDE) + ",LONGITUDE:" + JSON.stringify(LONGITUDE) + ",RAZAO_SOCIAL:" + JSON.stringify(RAZAO_SOCIAL) + ",UF:" + JSON.stringify(UF) + ",BAIRRO:" + JSON.stringify(BAIRRO) + ",CEP:" + JSON.stringify(CEP) + ",CIDADE:" + JSON.stringify(CIDADE) + ",CNPJ:" + JSON.stringify(CNPJ) + ",EMAIL:" + JSON.stringify(EMAIL) + ",ENDERECO:" + JSON.stringify(ENDERECO) + ",NUMERO:" + JSON.stringify(NUMERO) + ",COMPLEMENTO:" + JSON.stringify(COMPLEMENTO) + "}",
        success: function (data) {
            if (data.hasOwnProperty('d')) {
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
                errorFunc(data);
        }


    });
    return $res;
}

// -- RetornaListaEstabelecimentos
function RetornaListaEstabelecimentos(successFunc, errorFunc) {
    /// <summary></summary>

    /// <param name='successFunc' type='function'>Success Function</param>
    /// <param name='errorFunc' type='function'>Error Function</param>
    /// <returns type='string'>RetornaListaEstabelecimentosResult as string</returns>
    var $res = '';
   jQuery.ajax({
        type: 'POST',
        url: 'http://www.visional.com.br/wscotacao/cotacao.asmx/RetornaListaEstabelecimentos',
        contentType: 'application/json; charset=utf-8',
        async: false,
        cache: false,
        dataType: 'json',
        data: '',
        success: function (data) {
            if (data.hasOwnProperty('d')) {
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
                errorFunc(data);
        }


    });
    return $res;
}

// -- RetornaListaEstabelecimentoEcotacao
function RetornaListaEstabelecimentoEcotacao(SIMBOLO, dia, mes, ano, successFunc, errorFunc) {
    /// <summary></summary>
    /// <param name="SIMBOLO" type="string">SIMBOLO</param>
    /// <param name="dia" type="int">dia</param>
    /// <param name="mes" type="int">mes</param>
    /// <param name="ano" type="int">ano</param>

    /// <param name='successFunc' type='function'>Success Function</param>
    /// <param name='errorFunc' type='function'>Error Function</param>
    /// <returns type='string'>RetornaListaEstabelecimentoEcotacaoResult as string</returns>
    var $res = '';
   jQuery.ajax({
        type: 'POST',
        url: 'http://www.visional.com.br/wscotacao/cotacao.asmx/RetornaListaEstabelecimentoEcotacao',
        contentType: 'application/json; charset=utf-8',
        async: false,
        cache: false,
        dataType: 'json',
        data: "{SIMBOLO:" + JSON.stringify(SIMBOLO) + ",dia:" + JSON.stringify(dia) + ",mes:" + JSON.stringify(mes) + ",ano:" + JSON.stringify(ano) + "}",
        success: function (data) {
            if (data.hasOwnProperty('d')) {
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
                errorFunc(data);
        }


    });
    return $res;
}

// -- Login
function Login(email, senha, successFunc, errorFunc) {
    /// <summary></summary>
    /// <param name="email" type="string">email</param>
    /// <param name="senha" type="string">senha</param>

    /// <param name='successFunc' type='function'>Success Function</param>
    /// <param name='errorFunc' type='function'>Error Function</param>
    /// <returns type='string'>LoginResult as string</returns>
    var $res = '';
   jQuery.ajax({
        type: 'POST',
        url: 'http://www.visional.com.br/wscotacao/cotacao.asmx/Login',
        contentType: 'application/json; charset=utf-8',
        async: false,
        cache: false,
        dataType: 'json',
        data: "{email:" + JSON.stringify(email) + ",senha:" + JSON.stringify(senha) + "}",
        success: function (data) {
            if (data.hasOwnProperty('d')) {
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
                errorFunc(data);
        }


    });
    return $res;
}

// -- ValidaUsuario
function ValidaUsuario(email, successFunc, errorFunc) {
    /// <summary></summary>
    /// <param name="email" type="string">email</param>

    /// <param name='successFunc' type='function'>Success Function</param>
    /// <param name='errorFunc' type='function'>Error Function</param>
    /// <returns type='string'>ValidaUsuarioResult as string</returns>
    var $res = '';
   jQuery.ajax({
        type: 'POST',
        url: 'http://www.visional.com.br/wscotacao/cotacao.asmx/ValidaUsuario',
        contentType: 'application/json; charset=utf-8',
        async: false,
        cache: false,
        dataType: 'json',
        data: "{email:" + JSON.stringify(email) + "}",
        success: function (data) {
            if (data.hasOwnProperty('d')) {
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
                errorFunc(data);
        }


    });
    return $res;
}

// -- AlteraUsuario
function AlteraUsuario(ID_USUARIO, LOGIN, NOME, SENHA, ID_TP_USUARIO, EMAIL, CPF, RG, DATA_NASCIMENTO, successFunc, errorFunc) {
    /// <summary></summary>
    /// <param name="ID_USUARIO" type="int">ID_USUARIO</param>
    /// <param name="LOGIN" type="string">LOGIN</param>
    /// <param name="NOME" type="string">NOME</param>
    /// <param name="SENHA" type="string">SENHA</param>
    /// <param name="ID_TP_USUARIO" type="string">ID_TP_USUARIO</param>
    /// <param name="EMAIL" type="string">EMAIL</param>
    /// <param name="CPF" type="string">CPF</param>
    /// <param name="RG" type="string">RG</param>
    /// <param name="DATA_NASCIMENTO" type="string">DATA_NASCIMENTO</param>

    /// <param name='successFunc' type='function'>Success Function</param>
    /// <param name='errorFunc' type='function'>Error Function</param>
    /// <returns type='string'>AlteraUsuarioResult as string</returns>
    var $res = '';
   jQuery.ajax({
        type: 'POST',
        url: 'http://www.visional.com.br/wscotacao/cotacao.asmx/AlteraUsuario',
        contentType: 'application/json; charset=utf-8',
        async: false,
        cache: false,
        dataType: 'json',
        data: "{ID_USUARIO:" + JSON.stringify(ID_USUARIO) + ",LOGIN:" + JSON.stringify(LOGIN) + ",NOME:" + JSON.stringify(NOME) + ",SENHA:" + JSON.stringify(SENHA) + ",ID_TP_USUARIO:" + JSON.stringify(ID_TP_USUARIO) + ",EMAIL:" + JSON.stringify(EMAIL) + ",CPF:" + JSON.stringify(CPF) + ",RG:" + JSON.stringify(RG) + ",DATA_NASCIMENTO:" + JSON.stringify(DATA_NASCIMENTO) + "}",
        success: function (data) {
            if (data.hasOwnProperty('d')) {
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
                errorFunc(data);
        }


    });
    return $res;
}

// -- AlteraEstabelecimento
function AlteraEstabelecimento(ID_ESTABELECIMENTO, NOME, FONE, LATITUDE, LONGITUDE, RAZAO_SOCIAL, UF, BAIRRO, CEP, CIDADE, CNPJ, EMAIL, ENDERECO, NUMERO, COMPLEMENTO, successFunc, errorFunc) {
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

    /// <param name='successFunc' type='function'>Success Function</param>
    /// <param name='errorFunc' type='function'>Error Function</param>
    /// <returns type='string'>AlteraEstabelecimentoResult as string</returns>
    var $res = '';
   jQuery.ajax({
        type: 'POST',
        url: 'http://www.visional.com.br/wscotacao/cotacao.asmx/AlteraEstabelecimento',
        contentType: 'application/json; charset=utf-8',
        async: false,
        cache: false,
        dataType: 'json',
        data: "{ID_ESTABELECIMENTO:" + JSON.stringify(ID_ESTABELECIMENTO) + ",NOME:" + JSON.stringify(NOME) + ",FONE:" + JSON.stringify(FONE) + ",LATITUDE:" + JSON.stringify(LATITUDE) + ",LONGITUDE:" + JSON.stringify(LONGITUDE) + ",RAZAO_SOCIAL:" + JSON.stringify(RAZAO_SOCIAL) + ",UF:" + JSON.stringify(UF) + ",BAIRRO:" + JSON.stringify(BAIRRO) + ",CEP:" + JSON.stringify(CEP) + ",CIDADE:" + JSON.stringify(CIDADE) + ",CNPJ:" + JSON.stringify(CNPJ) + ",EMAIL:" + JSON.stringify(EMAIL) + ",ENDERECO:" + JSON.stringify(ENDERECO) + ",NUMERO:" + JSON.stringify(NUMERO) + ",COMPLEMENTO:" + JSON.stringify(COMPLEMENTO) + "}",
        success: function (data) {
            if (data.hasOwnProperty('d')) {
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
                errorFunc(data);
        }


    });
    return $res;
}

// -- RetornaEstabelecimentoPorId
function RetornaEstabelecimentoPorId(ID_ESTABELECIMENTO, successFunc, errorFunc) {
    /// <summary></summary>
    /// <param name="ID_ESTABELECIMENTO" type="int">ID_ESTABELECIMENTO</param>

    /// <param name='successFunc' type='function'>Success Function</param>
    /// <param name='errorFunc' type='function'>Error Function</param>
    /// <returns type='string'>RetornaEstabelecimentoPorIdResult as string</returns>
    var $res = '';
   jQuery.ajax({
        type: 'POST',
        url: 'http://www.visional.com.br/wscotacao/cotacao.asmx/RetornaEstabelecimentoPorId',
        contentType: 'application/json; charset=utf-8',
        async: false,
        cache: false,
        dataType: 'json',
        data: "{ID_ESTABELECIMENTO:" + JSON.stringify(ID_ESTABELECIMENTO) + "}",
        success: function (data) {
            if (data.hasOwnProperty('d')) {
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
                errorFunc(data);
        }


    });
    return $res;
}

// -- InsereMoedaEstabelecimento
function InsereMoedaEstabelecimento(ID_ESTABELECIMENTO, ID_MOEDA, CODIGO, NOME, SIMBOLO, successFunc, errorFunc) {
    /// <summary></summary>
    /// <param name="ID_ESTABELECIMENTO" type="int">ID_ESTABELECIMENTO</param>
    /// <param name="ID_MOEDA" type="int">ID_MOEDA</param>
    /// <param name="CODIGO" type="string">CODIGO</param>
    /// <param name="NOME" type="string">NOME</param>
    /// <param name="SIMBOLO" type="string">SIMBOLO</param>

    /// <param name='successFunc' type='function'>Success Function</param>
    /// <param name='errorFunc' type='function'>Error Function</param>
    /// <returns type='string'>InsereMoedaEstabelecimentoResult as string</returns>
    var $res = '';
   jQuery.ajax({
        type: 'POST',
        url: 'http://www.visional.com.br/wscotacao/cotacao.asmx/InsereMoedaEstabelecimento',
        contentType: 'application/json; charset=utf-8',
        async: false,
        cache: false,
        dataType: 'json',
        data: "{ID_ESTABELECIMENTO:" + JSON.stringify(ID_ESTABELECIMENTO) + ",ID_MOEDA:" + JSON.stringify(ID_MOEDA) + ",CODIGO:" + JSON.stringify(CODIGO) + ",NOME:" + JSON.stringify(NOME) + ",SIMBOLO:" + JSON.stringify(SIMBOLO) + "}",
        success: function (data) {
            if (data.hasOwnProperty('d')) {
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
                errorFunc(data);
        }


    });
    return $res;
}

// -- AlteraMoedaEstabelecimento
function AlteraMoedaEstabelecimento(ID_ESTABELECIMENTO, ID_MOEDA, ATIVO, successFunc, errorFunc) {
    /// <summary></summary>
    /// <param name="ID_ESTABELECIMENTO" type="int">ID_ESTABELECIMENTO</param>
    /// <param name="ID_MOEDA" type="int">ID_MOEDA</param>
    /// <param name="ATIVO" type="boolean">ATIVO</param>

    /// <param name='successFunc' type='function'>Success Function</param>
    /// <param name='errorFunc' type='function'>Error Function</param>
    /// <returns type='string'>AlteraMoedaEstabelecimentoResult as string</returns>
    var $res = '';
   jQuery.ajax({
        type: 'POST',
        url: 'http://www.visional.com.br/wscotacao/cotacao.asmx/AlteraMoedaEstabelecimento',
        contentType: 'application/json; charset=utf-8',
        async: false,
        cache: false,
        dataType: 'json',
        data: "{ID_ESTABELECIMENTO:" + JSON.stringify(ID_ESTABELECIMENTO) + ",ID_MOEDA:" + JSON.stringify(ID_MOEDA) + ",ATIVO:" + JSON.stringify(ATIVO) + "}",
        success: function (data) {
            if (data.hasOwnProperty('d')) {
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
                errorFunc(data);
        }


    });
    return $res;
}

// -- RetornaMoedaEstabelecimento
function RetornaMoedaEstabelecimento(ID_ESTABELECIMENTO, ID_MOEDA, successFunc, errorFunc) {
    /// <summary></summary>
    /// <param name="ID_ESTABELECIMENTO" type="int">ID_ESTABELECIMENTO</param>
    /// <param name="ID_MOEDA" type="int">ID_MOEDA</param>

    /// <param name='successFunc' type='function'>Success Function</param>
    /// <param name='errorFunc' type='function'>Error Function</param>
    /// <returns type='string'>RetornaMoedaEstabelecimentoResult as string</returns>
    var $res = '';
   jQuery.ajax({
        type: 'POST',
        url: 'http://www.visional.com.br/wscotacao/cotacao.asmx/RetornaMoedaEstabelecimento',
        contentType: 'application/json; charset=utf-8',
        async: false,
        cache: false,
        dataType: 'json',
        data: "{ID_ESTABELECIMENTO:" + JSON.stringify(ID_ESTABELECIMENTO) + ",ID_MOEDA:" + JSON.stringify(ID_MOEDA) + "}",
        success: function (data) {
            if (data.hasOwnProperty('d')) {
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
                errorFunc(data);
        }


    });
    return $res;
}

// -- RetornaListaMoedaEstabelecimento
function RetornaListaMoedaEstabelecimento(ID_ESTABELECIMENTO, successFunc, errorFunc) {
    /// <summary></summary>
    /// <param name="ID_ESTABELECIMENTO" type="int">ID_ESTABELECIMENTO</param>

    /// <param name='successFunc' type='function'>Success Function</param>
    /// <param name='errorFunc' type='function'>Error Function</param>
    /// <returns type='string'>RetornaListaMoedaEstabelecimentoResult as string</returns>
    var $res = '';
   jQuery.ajax({
        type: 'POST',
        url: 'http://www.visional.com.br/wscotacao/cotacao.asmx/RetornaListaMoedaEstabelecimento',
        contentType: 'application/json; charset=utf-8',
        async: false,
        cache: false,
        dataType: 'json',
        data: "{ID_ESTABELECIMENTO:" + JSON.stringify(ID_ESTABELECIMENTO) + "}",
        success: function (data) {
            if (data.hasOwnProperty('d')) {
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
                errorFunc(data);
        }


    });
    return $res;
}

// -- InsereCotacaoEstabelecimento
function InsereCotacaoEstabelecimento(ID_ESTABELECIMENTO, VALOR_COTACAO, VALOR_COTACAO_COMPRA, ID_MOEDA, COD_MOEDA, SIMBOLO, DIA, MES, ANO, successFunc, errorFunc) {
    /// <summary></summary>
    /// <param name="ID_ESTABELECIMENTO" type="int">ID_ESTABELECIMENTO</param>
    /// <param name="VALOR_COTACAO" type="string">VALOR_COTACAO</param>
    /// <param name="VALOR_COTACAO_COMPRA" type="string">VALOR_COTACAO_COMPRA</param>
    /// <param name="ID_MOEDA" type="int">ID_MOEDA</param>
    /// <param name="COD_MOEDA" type="string">COD_MOEDA</param>
    /// <param name="SIMBOLO" type="string">SIMBOLO</param>
    /// <param name="DIA" type="int">DIA</param>
    /// <param name="MES" type="int">MES</param>
    /// <param name="ANO" type="int">ANO</param>

    /// <param name='successFunc' type='function'>Success Function</param>
    /// <param name='errorFunc' type='function'>Error Function</param>
    /// <returns type='string'>InsereCotacaoEstabelecimentoResult as string</returns>
    var $res = '';
   jQuery.ajax({
        type: 'POST',
        url: 'http://www.visional.com.br/wscotacao/cotacao.asmx/InsereCotacaoEstabelecimento',
        contentType: 'application/json; charset=utf-8',
        async: false,
        cache: false,
        dataType: 'json',
        data: "{ID_ESTABELECIMENTO:" + JSON.stringify(ID_ESTABELECIMENTO) + ",VALOR_COTACAO:" + JSON.stringify(VALOR_COTACAO) + ",VALOR_COTACAO_COMPRA:" + JSON.stringify(VALOR_COTACAO_COMPRA) + ",ID_MOEDA:" + JSON.stringify(ID_MOEDA) + ",COD_MOEDA:" + JSON.stringify(COD_MOEDA) + ",SIMBOLO:" + JSON.stringify(SIMBOLO) + ",DIA:" + JSON.stringify(DIA) + ",MES:" + JSON.stringify(MES) + ",ANO:" + JSON.stringify(ANO) + "}",
        success: function (data) {
            if (data.hasOwnProperty('d')) {
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
                errorFunc(data);
        }


    });
    return $res;
}

// -- AlteraCotacaoEstabelecimento
function AlteraCotacaoEstabelecimento(ID_COTACAO, VALOR_COTACAO, VALOR_COTACAO_COMPRA, ID_ESTABELECIMENTO, ID_MOEDA, DIA, MES, ANO, successFunc, errorFunc) {
    /// <summary></summary>
    /// <param name="ID_COTACAO" type="int">ID_COTACAO</param>
    /// <param name="VALOR_COTACAO" type="string">VALOR_COTACAO</param>
    /// <param name="VALOR_COTACAO_COMPRA" type="string">VALOR_COTACAO_COMPRA</param>
    /// <param name="ID_ESTABELECIMENTO" type="int">ID_ESTABELECIMENTO</param>
    /// <param name="ID_MOEDA" type="int">ID_MOEDA</param>
    /// <param name="DIA" type="int">DIA</param>
    /// <param name="MES" type="int">MES</param>
    /// <param name="ANO" type="int">ANO</param>

    /// <param name='successFunc' type='function'>Success Function</param>
    /// <param name='errorFunc' type='function'>Error Function</param>
    /// <returns type='string'>AlteraCotacaoEstabelecimentoResult as string</returns>
    var $res = '';
   jQuery.ajax({
        type: 'POST',
        url: 'http://www.visional.com.br/wscotacao/cotacao.asmx/AlteraCotacaoEstabelecimento',
        contentType: 'application/json; charset=utf-8',
        async: false,
        cache: false,
        dataType: 'json',
        data: "{ID_COTACAO:" + JSON.stringify(ID_COTACAO) + ",VALOR_COTACAO:" + JSON.stringify(VALOR_COTACAO) + ",VALOR_COTACAO_COMPRA:" + JSON.stringify(VALOR_COTACAO_COMPRA) + ",ID_ESTABELECIMENTO:" + JSON.stringify(ID_ESTABELECIMENTO) + ",ID_MOEDA:" + JSON.stringify(ID_MOEDA) + ",DIA:" + JSON.stringify(DIA) + ",MES:" + JSON.stringify(MES) + ",ANO:" + JSON.stringify(ANO) + "}",
        success: function (data) {
            if (data.hasOwnProperty('d')) {
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
                errorFunc(data);
        }


    });
    return $res;
}

// -- RetornaListaMoedaEstabelecimentoCotacao
function RetornaListaMoedaEstabelecimentoCotacao(ID_ESTABELECIMENTO, successFunc, errorFunc) {
    /// <summary></summary>
    /// <param name="ID_ESTABELECIMENTO" type="int">ID_ESTABELECIMENTO</param>

    /// <param name='successFunc' type='function'>Success Function</param>
    /// <param name='errorFunc' type='function'>Error Function</param>
    /// <returns type='string'>RetornaListaMoedaEstabelecimentoCotacaoResult as string</returns>
    var $res = '';
   jQuery.ajax({
        type: 'POST',
        url: 'http://www.visional.com.br/wscotacao/cotacao.asmx/RetornaListaMoedaEstabelecimentoCotacao',
        contentType: 'application/json; charset=utf-8',
        async: false,
        cache: false,
        dataType: 'json',
        data: "{ID_ESTABELECIMENTO:" + JSON.stringify(ID_ESTABELECIMENTO) + "}",
        success: function (data) {
            if (data.hasOwnProperty('d')) {
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
                errorFunc(data);
        }


    });
    return $res;
}

// -- RetornaCotacaoEstabelecimentoPorMoeda
function RetornaCotacaoEstabelecimentoPorMoeda(ID_ESTABELECIMENTO, SIMBOLO, successFunc, errorFunc) {
    /// <summary></summary>
    /// <param name="ID_ESTABELECIMENTO" type="int">ID_ESTABELECIMENTO</param>
    /// <param name="SIMBOLO" type="string">SIMBOLO</param>

    /// <param name='successFunc' type='function'>Success Function</param>
    /// <param name='errorFunc' type='function'>Error Function</param>
    /// <returns type='string'>RetornaCotacaoEstabelecimentoPorMoedaResult as string</returns>
    var $res = '';
   jQuery.ajax({
        type: 'POST',
        url: 'http://www.visional.com.br/wscotacao/cotacao.asmx/RetornaCotacaoEstabelecimentoPorMoeda',
        contentType: 'application/json; charset=utf-8',
        async: false,
        cache: false,
        dataType: 'json',
        data: "{ID_ESTABELECIMENTO:" + JSON.stringify(ID_ESTABELECIMENTO) + ",SIMBOLO:" + JSON.stringify(SIMBOLO) + "}",
        success: function (data) {
            if (data.hasOwnProperty('d')) {
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
                errorFunc(data);
        }


    });
    return $res;
}

// -- RetornaListaEstabelecimentoPorMoeda
function RetornaListaEstabelecimentoPorMoeda(SIMBOLO, successFunc, errorFunc) {
    /// <summary></summary>
    /// <param name="SIMBOLO" type="string">SIMBOLO</param>

    /// <param name='successFunc' type='function'>Success Function</param>
    /// <param name='errorFunc' type='function'>Error Function</param>
    /// <returns type='string'>RetornaListaEstabelecimentoPorMoedaResult as string</returns>
    var $res = '';
   jQuery.ajax({
        type: 'POST',
        url: 'http://www.visional.com.br/wscotacao/cotacao.asmx/RetornaListaEstabelecimentoPorMoeda',
        contentType: 'application/json; charset=utf-8',
        async: false,
        cache: false,
        dataType: 'json',
        data: "{SIMBOLO:" + JSON.stringify(SIMBOLO) + "}",
        success: function (data) {
            if (data.hasOwnProperty('d')) {
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
                errorFunc(data);
        }


    });
    return $res;
}

// -- RetornaListaMoedasUtilizadas
function RetornaListaMoedasUtilizadas(successFunc, errorFunc) {
    /// <summary></summary>

    /// <param name='successFunc' type='function'>Success Function</param>
    /// <param name='errorFunc' type='function'>Error Function</param>
    /// <returns type='string'>RetornaListaMoedasUtilizadasResult as string</returns>
    var $res = '';
   jQuery.ajax({
        type: 'POST',
        url: 'http://www.visional.com.br/wscotacao/cotacao.asmx/RetornaListaMoedasUtilizadas',
        contentType: 'application/json; charset=utf-8',
        async: false,
        cache: false,
        dataType: 'json',
        data: '',
        success: function (data) {
            if (data.hasOwnProperty('d')) {
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
                errorFunc(data);
        }


    });
    return $res;
}

// -- ValidaFavoritosUsuario
function ValidaFavoritosUsuario(ID_USUARIO, ID_ESTABELECIMENTO, SIMBOLO, successFunc, errorFunc) {
    /// <summary></summary>
    /// <param name="ID_USUARIO" type="int">ID_USUARIO</param>
    /// <param name="ID_ESTABELECIMENTO" type="int">ID_ESTABELECIMENTO</param>
    /// <param name="SIMBOLO" type="string">SIMBOLO</param>

    /// <param name='successFunc' type='function'>Success Function</param>
    /// <param name='errorFunc' type='function'>Error Function</param>
    /// <returns type='string'>ValidaFavoritosUsuarioResult as string</returns>
    var $res = '';
   jQuery.ajax({
        type: 'POST',
        url: 'http://www.visional.com.br/wscotacao/cotacao.asmx/ValidaFavoritosUsuario',
        contentType: 'application/json; charset=utf-8',
        async: false,
        cache: false,
        dataType: 'json',
        data: "{ID_USUARIO:" + JSON.stringify(ID_USUARIO) + ",ID_ESTABELECIMENTO:" + JSON.stringify(ID_ESTABELECIMENTO) + ",SIMBOLO:" + JSON.stringify(SIMBOLO) + "}",
        success: function (data) {
            if (data.hasOwnProperty('d')) {
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
                errorFunc(data);
        }


    });
    return $res;
}

// -- InsereFavoritosUsuario
function InsereFavoritosUsuario(ID_USUARIO, ID_ESTABELECIMENTO, SIMBOLO, successFunc, errorFunc) {
    /// <summary></summary>
    /// <param name="ID_USUARIO" type="int">ID_USUARIO</param>
    /// <param name="ID_ESTABELECIMENTO" type="int">ID_ESTABELECIMENTO</param>
    /// <param name="SIMBOLO" type="string">SIMBOLO</param>

    /// <param name='successFunc' type='function'>Success Function</param>
    /// <param name='errorFunc' type='function'>Error Function</param>
    /// <returns type='string'>InsereFavoritosUsuarioResult as string</returns>
    var $res = '';
   jQuery.ajax({
        type: 'POST',
        url: 'http://www.visional.com.br/wscotacao/cotacao.asmx/InsereFavoritosUsuario',
        contentType: 'application/json; charset=utf-8',
        async: false,
        cache: false,
        dataType: 'json',
        data: "{ID_USUARIO:" + JSON.stringify(ID_USUARIO) + ",ID_ESTABELECIMENTO:" + JSON.stringify(ID_ESTABELECIMENTO) + ",SIMBOLO:" + JSON.stringify(SIMBOLO) + "}",
        success: function (data) {
            if (data.hasOwnProperty('d')) {
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
                errorFunc(data);
        }


    });
    return $res;
}

// -- RetornaFavoritosUsuario
function RetornaFavoritosUsuario(ID_USUARIO, successFunc, errorFunc) {
    /// <summary></summary>
    /// <param name="ID_USUARIO" type="int">ID_USUARIO</param>

    /// <param name='successFunc' type='function'>Success Function</param>
    /// <param name='errorFunc' type='function'>Error Function</param>
    /// <returns type='string'>RetornaFavoritosUsuarioResult as string</returns>
    var $res = '';
   jQuery.ajax({
        type: 'POST',
        url: 'http://www.visional.com.br/wscotacao/cotacao.asmx/RetornaFavoritosUsuario',
        contentType: 'application/json; charset=utf-8',
        async: false,
        cache: false,
        dataType: 'json',
        data: "{ID_USUARIO:" + JSON.stringify(ID_USUARIO) + "}",
        success: function (data) {
            if (data.hasOwnProperty('d')) {
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
                errorFunc(data);
        }


    });
    return $res;
}

// -- ExcluiFavorito
function ExcluiFavorito(ID_USUARIO, ID_ESTABELECIMENTO, SIMBOLO, successFunc, errorFunc) {
    /// <summary></summary>
    /// <param name="ID_USUARIO" type="int">ID_USUARIO</param>
    /// <param name="ID_ESTABELECIMENTO" type="int">ID_ESTABELECIMENTO</param>
    /// <param name="SIMBOLO" type="string">SIMBOLO</param>

    /// <param name='successFunc' type='function'>Success Function</param>
    /// <param name='errorFunc' type='function'>Error Function</param>
    /// <returns type='string'>ExcluiFavoritoResult as string</returns>
    var $res = '';
   jQuery.ajax({
        type: 'POST',
        url: 'http://www.visional.com.br/wscotacao/cotacao.asmx/ExcluiFavorito',
        contentType: 'application/json; charset=utf-8',
        async: false,
        cache: false,
        dataType: 'json',
        data: "{ID_USUARIO:" + JSON.stringify(ID_USUARIO) + ",ID_ESTABELECIMENTO:" + JSON.stringify(ID_ESTABELECIMENTO) + ",SIMBOLO:" + JSON.stringify(SIMBOLO) + "}",
        success: function (data) {
            if (data.hasOwnProperty('d')) {
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
                errorFunc(data);
        }


    });
    return $res;
}

// -- RetornaEstabelecimentoPorIdUsuario
function RetornaEstabelecimentoPorIdUsuario(ID_USUARIO, successFunc, errorFunc) {
    /// <summary></summary>
    /// <param name="ID_USUARIO" type="int">ID_USUARIO</param>

    /// <param name='successFunc' type='function'>Success Function</param>
    /// <param name='errorFunc' type='function'>Error Function</param>
    /// <returns type='string'>RetornaEstabelecimentoPorIdUsuarioResult as string</returns>
    var $res = '';
   jQuery.ajax({
        type: 'POST',
        url: 'http://www.visional.com.br/wscotacao/cotacao.asmx/RetornaEstabelecimentoPorIdUsuario',
        contentType: 'application/json; charset=utf-8',
        async: false,
        cache: false,
        dataType: 'json',
        data: "{ID_USUARIO:" + JSON.stringify(ID_USUARIO) + "}",
        success: function (data) {
            if (data.hasOwnProperty('d')) {
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
                errorFunc(data);
        }


    });
    return $res;
}

// -- InsereOperacao
function InsereOperacao(ID_USUARIO, ID_ESTABELECIMENTO, ID_STATUS_VENDA, OBS_COMPRA, SITUACAO_COMPRA, ID_ENDERECO_ENTREGA, SIMBOLO, DESCRICAO_DETALHADA, QUANTIDADE, VALOR_PRODUTO, ID_TIPO_VENDA, successFunc, errorFunc) {
    /// <summary></summary>
    /// <param name="ID_USUARIO" type="int">ID_USUARIO</param>
    /// <param name="ID_ESTABELECIMENTO" type="int">ID_ESTABELECIMENTO</param>
    /// <param name="ID_STATUS_VENDA" type="int">ID_STATUS_VENDA</param>
    /// <param name="OBS_COMPRA" type="string">OBS_COMPRA</param>
    /// <param name="SITUACAO_COMPRA" type="string">SITUACAO_COMPRA</param>
    /// <param name="ID_ENDERECO_ENTREGA" type="int">ID_ENDERECO_ENTREGA</param>
    /// <param name="SIMBOLO" type="string">SIMBOLO</param>
    /// <param name="DESCRICAO_DETALHADA" type="string">DESCRICAO_DETALHADA</param>
    /// <param name="QUANTIDADE" type="int">QUANTIDADE</param>
    /// <param name="VALOR_PRODUTO" type="int">VALOR_PRODUTO</param>
    /// <param name="ID_TIPO_VENDA" type="int">ID_TIPO_VENDA</param>

    /// <param name='successFunc' type='function'>Success Function</param>
    /// <param name='errorFunc' type='function'>Error Function</param>
    /// <returns type='string'>InsereOperacaoResult as string</returns>
    var $res = '';
   jQuery.ajax({
        type: 'POST',
        url: 'http://www.visional.com.br/wscotacao/cotacao.asmx/InsereOperacao',
        contentType: 'application/json; charset=utf-8',
        async: false,
        cache: false,
        dataType: 'json',
        data: "{ID_USUARIO:" + JSON.stringify(ID_USUARIO) + ",ID_ESTABELECIMENTO:" + JSON.stringify(ID_ESTABELECIMENTO) + ",ID_STATUS_VENDA:" + JSON.stringify(ID_STATUS_VENDA) + ",OBS_COMPRA:" + JSON.stringify(OBS_COMPRA) + ",SITUACAO_COMPRA:" + JSON.stringify(SITUACAO_COMPRA) + ",ID_ENDERECO_ENTREGA:" + JSON.stringify(ID_ENDERECO_ENTREGA) + ",SIMBOLO:" + JSON.stringify(SIMBOLO) + ",DESCRICAO_DETALHADA:" + JSON.stringify(DESCRICAO_DETALHADA) + ",QUANTIDADE:" + JSON.stringify(QUANTIDADE) + ",VALOR_PRODUTO:" + JSON.stringify(VALOR_PRODUTO) + ",ID_TIPO_VENDA:" + JSON.stringify(ID_TIPO_VENDA) + "}",
        success: function (data) {
            if (data.hasOwnProperty('d')) {
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
                errorFunc(data);
        }


    });
    return $res;
}

// -- AlteraOperacao
function AlteraOperacao(ID_USUARIO, ID_PRODUTO, ID_VENDA, ID_ESTABELECIMENTO, ID_STATUS_VENDA, OBS_COMPRA, SITUACAO_COMPRA, ID_ENDERECO_ENTREGA, SIMBOLO, DESCRICAO_DETALHADA, QUANTIDADE, VALOR_PRODUTO, ID_TIPO_VENDA, successFunc, errorFunc) {
    /// <summary></summary>
    /// <param name="ID_USUARIO" type="int">ID_USUARIO</param>
    /// <param name="ID_PRODUTO" type="int">ID_PRODUTO</param>
    /// <param name="ID_VENDA" type="int">ID_VENDA</param>
    /// <param name="ID_ESTABELECIMENTO" type="int">ID_ESTABELECIMENTO</param>
    /// <param name="ID_STATUS_VENDA" type="int">ID_STATUS_VENDA</param>
    /// <param name="OBS_COMPRA" type="string">OBS_COMPRA</param>
    /// <param name="SITUACAO_COMPRA" type="string">SITUACAO_COMPRA</param>
    /// <param name="ID_ENDERECO_ENTREGA" type="int">ID_ENDERECO_ENTREGA</param>
    /// <param name="SIMBOLO" type="string">SIMBOLO</param>
    /// <param name="DESCRICAO_DETALHADA" type="string">DESCRICAO_DETALHADA</param>
    /// <param name="QUANTIDADE" type="int">QUANTIDADE</param>
    /// <param name="VALOR_PRODUTO" type="int">VALOR_PRODUTO</param>
    /// <param name="ID_TIPO_VENDA" type="int">ID_TIPO_VENDA</param>

    /// <param name='successFunc' type='function'>Success Function</param>
    /// <param name='errorFunc' type='function'>Error Function</param>
    /// <returns type='string'>AlteraOperacaoResult as string</returns>
    var $res = '';
   jQuery.ajax({
        type: 'POST',
        url: 'http://www.visional.com.br/wscotacao/cotacao.asmx/AlteraOperacao',
        contentType: 'application/json; charset=utf-8',
        async: false,
        cache: false,
        dataType: 'json',
        data: "{ID_USUARIO:" + JSON.stringify(ID_USUARIO) + ",ID_PRODUTO:" + JSON.stringify(ID_PRODUTO) + ",ID_VENDA:" + JSON.stringify(ID_VENDA) + ",ID_ESTABELECIMENTO:" + JSON.stringify(ID_ESTABELECIMENTO) + ",ID_STATUS_VENDA:" + JSON.stringify(ID_STATUS_VENDA) + ",OBS_COMPRA:" + JSON.stringify(OBS_COMPRA) + ",SITUACAO_COMPRA:" + JSON.stringify(SITUACAO_COMPRA) + ",ID_ENDERECO_ENTREGA:" + JSON.stringify(ID_ENDERECO_ENTREGA) + ",SIMBOLO:" + JSON.stringify(SIMBOLO) + ",DESCRICAO_DETALHADA:" + JSON.stringify(DESCRICAO_DETALHADA) + ",QUANTIDADE:" + JSON.stringify(QUANTIDADE) + ",VALOR_PRODUTO:" + JSON.stringify(VALOR_PRODUTO) + ",ID_TIPO_VENDA:" + JSON.stringify(ID_TIPO_VENDA) + "}",
        success: function (data) {
            if (data.hasOwnProperty('d')) {
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
                errorFunc(data);
        }


    });
    return $res;
}

<<<<<<< HEAD
// -- RetornaOperacaoPorEstabelecimento
function RetornaOperacaoPorEstabelecimento(ID_ESTABELECIMENTO, ID_TIPO_VENDA, ID_STATUS_VENDA, successFunc, errorFunc) {
    /// <summary></summary>
    /// <param name="ID_ESTABELECIMENTO" type="int">ID_ESTABELECIMENTO</param>
    /// <param name="ID_TIPO_VENDA" type="int">ID_TIPO_VENDA</param>
    /// <param name="ID_STATUS_VENDA" type="int">ID_STATUS_VENDA</param>

    /// <param name='successFunc' type='function'>Success Function</param>
    /// <param name='errorFunc' type='function'>Error Function</param>
    /// <returns type='string'>RetornaOperacaoPorEstabelecimentoResult as string</returns>
    var $res = '';
   jQuery.ajax({
        type: 'POST',
        url: 'http://www.visional.com.br/wscotacao/cotacao.asmx/RetornaOperacaoPorEstabelecimento',
        contentType: 'application/json; charset=utf-8',
        async: false,
        cache: false,
        dataType: 'json',
        data: "{ID_ESTABELECIMENTO:" + JSON.stringify(ID_ESTABELECIMENTO) + ",ID_TIPO_VENDA:" + JSON.stringify(ID_TIPO_VENDA) + ",ID_STATUS_VENDA:" + JSON.stringify(ID_STATUS_VENDA) + "}",
        success: function (data) {
            if (data.hasOwnProperty('d')) {
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
                errorFunc(data);
        }


    });
    return $res;
}

// -- RetornaOperacaoPorUsuario
function RetornaOperacaoPorUsuario(ID_USUARIO, ID_TIPO_VENDA, ID_STATUS_VENDA, successFunc, errorFunc) {
    /// <summary></summary>
    /// <param name="ID_USUARIO" type="int">ID_USUARIO</param>
    /// <param name="ID_TIPO_VENDA" type="int">ID_TIPO_VENDA</param>
    /// <param name="ID_STATUS_VENDA" type="int">ID_STATUS_VENDA</param>

    /// <param name='successFunc' type='function'>Success Function</param>
    /// <param name='errorFunc' type='function'>Error Function</param>
    /// <returns type='string'>RetornaOperacaoPorUsuarioResult as string</returns>
    var $res = '';
   jQuery.ajax({
        type: 'POST',
        url: 'http://www.visional.com.br/wscotacao/cotacao.asmx/RetornaOperacaoPorUsuario',
        contentType: 'application/json; charset=utf-8',
        async: false,
        cache: false,
        dataType: 'json',
        data: "{ID_USUARIO:" + JSON.stringify(ID_USUARIO) + ",ID_TIPO_VENDA:" + JSON.stringify(ID_TIPO_VENDA) + ",ID_STATUS_VENDA:" + JSON.stringify(ID_STATUS_VENDA) + "}",
        success: function (data) {
            if (data.hasOwnProperty('d')) {
=======


function EnviaEmail(MENSAGEM, ASSUNTO, successFunc, errorFunc) {
    var $res = '';
    jQuery.ajax({
        type: "POST",
        url: "http://www.visional.com.br/wscotacao/cotacao.asmx/EnviaEmail",
        contentType: "application/json; charset=utf-8",
        async: false,
        cache: false,
        dataType: 'json',
        data: "{MENSAGEM:" + JSON.stringify(MENSAGEM) + ",ASSUNTO:" + JSON.stringify(ASSUNTO) +"}",
        success: function (data) {
            if (data.hasOwnProperty("d")) {
>>>>>>> e51f103b6ab89a992813a70f05f990c116556dcc
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
                errorFunc(data);
        }


    });
    return $res;
<<<<<<< HEAD
}

// -- InsereEnderecoUsuario
function InsereEnderecoUsuario(ID_USUARIO,ENDERECO_ENTREGA, COMPLEMENTO_ENTREGA, BAIRRO_ENTREGA, CEP_ENTREGA, UF_ENTREGA, CIDADE_ENTREGA, FONE_ENTREGA, NOME_ENTREGA, SOBRENOME_ENTREGA, NUMERO_ENTREGA, successFunc, errorFunc) {
    /// <summary></summary>
    /// <param name="ENDERECO_ENTREGA" type="string">ENDERECO_ENTREGA</param>
    /// <param name="COMPLEMENTO_ENTREGA" type="string">COMPLEMENTO_ENTREGA</param>
    /// <param name="BAIRRO_ENTREGA" type="string">BAIRRO_ENTREGA</param>
    /// <param name="CEP_ENTREGA" type="string">CEP_ENTREGA</param>
    /// <param name="UF_ENTREGA" type="string">UF_ENTREGA</param>
    /// <param name="CIDADE_ENTREGA" type="string">CIDADE_ENTREGA</param>
    /// <param name="FONE_ENTREGA" type="string">FONE_ENTREGA</param>
    /// <param name="NOME_ENTREGA" type="string">NOME_ENTREGA</param>
    /// <param name="SOBRENOME_ENTREGA" type="string">SOBRENOME_ENTREGA</param>
    /// <param name="NUMERO_ENTREGA" type="string">NUMERO_ENTREGA</param>

    /// <param name='successFunc' type='function'>Success Function</param>
    /// <param name='errorFunc' type='function'>Error Function</param>
    /// <returns type='string'>InsereEnderecoUsuarioResult as string</returns>
    var $res = '';
   jQuery.ajax({
        type: 'POST',
        url: 'http://www.visional.com.br/wscotacao/cotacao.asmx/InsereEnderecoUsuario',
        contentType: 'application/json; charset=utf-8',
        async: false,
        cache: false,
        dataType: 'json',
        data: "{ID_USUARIO:" + JSON.stringify(ID_USUARIO) + ",ENDERECO_ENTREGA:" + JSON.stringify(ENDERECO_ENTREGA) + ",COMPLEMENTO_ENTREGA:" + JSON.stringify(COMPLEMENTO_ENTREGA) + ",BAIRRO_ENTREGA:" + JSON.stringify(BAIRRO_ENTREGA) + ",CEP_ENTREGA:" + JSON.stringify(CEP_ENTREGA) + ",UF_ENTREGA:" + JSON.stringify(UF_ENTREGA) + ",CIDADE_ENTREGA:" + JSON.stringify(CIDADE_ENTREGA) + ",FONE_ENTREGA:" + JSON.stringify(FONE_ENTREGA) + ",NOME_ENTREGA:" + JSON.stringify(NOME_ENTREGA) + ",SOBRENOME_ENTREGA:" + JSON.stringify(SOBRENOME_ENTREGA) + ",NUMERO_ENTREGA:" + JSON.stringify(NUMERO_ENTREGA) + "}",
        success: function (data) {
            if (data.hasOwnProperty('d')) {
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
                errorFunc(data);
        }
    });
    return $res;
}

// -- RetornaEnderecoPorCep
function RetornaEnderecoPorCep(CEP, successFunc, errorFunc) {
    /// <summary></summary>
    /// <param name="CEP" type="string">CEP</param>

    /// <param name='successFunc' type='function'>Success Function</param>
    /// <param name='errorFunc' type='function'>Error Function</param>
    /// <returns type='string'>RetornaEnderecoPorCepResult as string</returns>
    var $res = '';
   jQuery.ajax({
        type: 'POST',
        url: 'http://www.visional.com.br/wscotacao/cotacao.asmx/RetornaEnderecoPorCep',
        contentType: 'application/json; charset=utf-8',
        async: false,
        cache: false,
        dataType: 'json',
        data: "{CEP:" + JSON.stringify(CEP) + "}",
        success: function (data) {
            if (data.hasOwnProperty('d')) {
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
                errorFunc(data);
        }


    });
    return $res;
}

// -- AlteraEnderecoUsuario
function AlteraEnderecoUsuario(ID_ENDERECO_ENTREGA,ID_USUARIO, ENDERECO_ENTREGA, COMPLEMENTO_ENTREGA, BAIRRO_ENTREGA, CEP_ENTREGA, UF_ENTREGA, CIDADE_ENTREGA, FONE_ENTREGA, NOME_ENTREGA, SOBRENOME_ENTREGA, NUMERO_ENTREGA, successFunc, errorFunc) {
    /// <summary></summary>
    /// <param name="ID_USUARIO" type="int">ID_USUARIO</param>
    /// <param name="ENDERECO_ENTREGA" type="string">ENDERECO_ENTREGA</param>
    /// <param name="COMPLEMENTO_ENTREGA" type="string">COMPLEMENTO_ENTREGA</param>
    /// <param name="BAIRRO_ENTREGA" type="string">BAIRRO_ENTREGA</param>
    /// <param name="CEP_ENTREGA" type="string">CEP_ENTREGA</param>
    /// <param name="UF_ENTREGA" type="string">UF_ENTREGA</param>
    /// <param name="CIDADE_ENTREGA" type="string">CIDADE_ENTREGA</param>
    /// <param name="FONE_ENTREGA" type="string">FONE_ENTREGA</param>
    /// <param name="NOME_ENTREGA" type="string">NOME_ENTREGA</param>
    /// <param name="SOBRENOME_ENTREGA" type="string">SOBRENOME_ENTREGA</param>
    /// <param name="NUMERO_ENTREGA" type="string">NUMERO_ENTREGA</param>

    /// <param name='successFunc' type='function'>Success Function</param>
    /// <param name='errorFunc' type='function'>Error Function</param>
    /// <returns type='string'>AlteraEnderecoUsuarioResult as string</returns>
    var $res = '';
   jQuery.ajax({
        type: 'POST',
        url: 'http://www.visional.com.br/wscotacao/cotacao.asmx/AlteraEnderecoUsuario',
        contentType: 'application/json; charset=utf-8',
        async: false,
        cache: false,
        dataType: 'json',
        data: "{ID_ENDERECO_ENTREGA:" + JSON.stringify(ID_ENDERECO_ENTREGA) + ",ID_USUARIO:" + JSON.stringify(ID_USUARIO) + ",ENDERECO_ENTREGA:" + JSON.stringify(ENDERECO_ENTREGA) + ",COMPLEMENTO_ENTREGA:" + JSON.stringify(COMPLEMENTO_ENTREGA) + ",BAIRRO_ENTREGA:" + JSON.stringify(BAIRRO_ENTREGA) + ",CEP_ENTREGA:" + JSON.stringify(CEP_ENTREGA) + ",UF_ENTREGA:" + JSON.stringify(UF_ENTREGA) + ",CIDADE_ENTREGA:" + JSON.stringify(CIDADE_ENTREGA) + ",FONE_ENTREGA:" + JSON.stringify(FONE_ENTREGA) + ",NOME_ENTREGA:" + JSON.stringify(NOME_ENTREGA) + ",SOBRENOME_ENTREGA:" + JSON.stringify(SOBRENOME_ENTREGA) + ",NUMERO_ENTREGA:" + JSON.stringify(NUMERO_ENTREGA) + "}",
        success: function (data) {
            if (data.hasOwnProperty('d')) {
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
                errorFunc(data);
        }
    });
    return $res;
}

// -- RetornaEnderecoUsuario
function RetornaEnderecoUsuario(ID_USUARIO, successFunc, errorFunc) {
    /// <summary></summary>
    /// <param name="ID_USUARIO" type="int">ID_USUARIO</param>

    /// <param name='successFunc' type='function'>Success Function</param>
    /// <param name='errorFunc' type='function'>Error Function</param>
    /// <returns type='string'>RetornaEnderecoUsuarioResult as string</returns>
    var $res = '';
   jQuery.ajax({
        type: 'POST',
        url: 'http://www.visional.com.br/wscotacao/cotacao.asmx/RetornaEnderecoUsuario',
        contentType: 'application/json; charset=utf-8',
        async: false,
        cache: false,
        dataType: 'json',
        data: "{ID_USUARIO:" + JSON.stringify(ID_USUARIO) + "}",
        success: function (data) {
            if (data.hasOwnProperty('d')) {
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
                errorFunc(data);
        }


    });
    return $res;
}

=======
}
>>>>>>> e51f103b6ab89a992813a70f05f990c116556dcc
