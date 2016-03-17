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
    /// <returns type=''>ListaMoedaResult as </returns>
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

// -- ListaBanco
function ListaBanco(successFunc, errorFunc) {
    /// <summary></summary>

    /// <param name='successFunc' type='function'>Success Function</param>
    /// <param name='errorFunc' type='function'>Error Function</param>
    /// <returns type=''>ListaBancoResult as </returns>
    var $res = '';
    jQuery.ajax({
        type: 'POST',
        url: 'http://www.visional.com.br/wscotacao/cotacao.asmx/ListaBanco',
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


// -- ListaBanco
function ListaDeposito(successFunc, errorFunc) {
    /// <summary></summary>

    /// <param name='successFunc' type='function'>Success Function</param>
    /// <param name='errorFunc' type='function'>Error Function</param>
    /// <returns type=''>ListaBancoResult as </returns>
    var $res = '';
    jQuery.ajax({
        type: 'POST',
        url: 'http://www.visional.com.br/wscotacao/cotacao.asmx/ListaDeposito',
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

// -- EnviaEmailContato
function EnviaEmailContato(MENSAGEM, ASSUNTO, successFunc, errorFunc) {
    /// <summary></summary>
    /// <param name="MENSAGEM" type="string">MENSAGEM</param>
    /// <param name="ASSUNTO" type="string">ASSUNTO</param>

    /// <param name='successFunc' type='function'>Success Function</param>
    /// <param name='errorFunc' type='function'>Error Function</param>
    /// <returns type=''>EnviaEmailContatoResult as </returns>
    var $res = '';
    jQuery.ajax({
        type: 'POST',
        url: 'http://www.visional.com.br/wscotacao/cotacao.asmx/EnviaEmailContato',
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

// -- EnviaEmailOperacao
function EnviaEmailOperacao(NUM_PEDIDO, ID_TIPO_OPERACAO, successFunc, errorFunc) {
    /// <summary></summary>
    /// <param name="NUM_PEDIDO" type="string">NUM_PEDIDO</param>
    /// <param name="ID_TIPO_OPERACAO" type="int">ID_TIPO_OPERACAO</param>

    /// <param name='successFunc' type='function'>Success Function</param>
    /// <param name='errorFunc' type='function'>Error Function</param>
    /// <returns type=''>EnviaEmailOperacaoResult as </returns>
    var $res = '';
    jQuery.ajax({
        type: 'POST',
        url: 'http://www.visional.com.br/wscotacao/cotacao.asmx/EnviaEmailOperacao',
        contentType: 'application/json; charset=utf-8',
        async: false,
        cache: false,
        dataType: 'json',
        data: "{NUM_PEDIDO:" + JSON.stringify(NUM_PEDIDO) + ",ID_TIPO_OPERACAO:" + JSON.stringify(ID_TIPO_OPERACAO) + "}",
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
    /// <returns type=''>InsereUsuarioResult as </returns>
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
    /// <returns type=''>InsereEstabelecimentoResult as </returns>
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
    /// <returns type=''>RetornaListaEstabelecimentosResult as </returns>
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
    /// <returns type=''>RetornaListaEstabelecimentoEcotacaoResult as </returns>
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
    /// <returns type=''>LoginResult as </returns>
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
    /// <returns type=''>ValidaUsuarioResult as </returns>
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
function AlteraUsuario(ID_USUARIO, LOGIN, NOME, SENHA, ID_TP_USUARIO, EMAIL, CPF, RG, DATA_NASCIMENTO, BANCO, CONTA, AGENCIA, successFunc, errorFunc) {
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
    /// <param name="BANCO" type="int">BANCO</param>
    /// <param name="CONTA" type="string">CONTA</param>
    /// <param name="AGENCIA" type="string">AGENCIA</param>

    /// <param name='successFunc' type='function'>Success Function</param>
    /// <param name='errorFunc' type='function'>Error Function</param>
    /// <returns type=''>AlteraUsuarioResult as </returns>
    var $res = '';
    jQuery.ajax({
        type: 'POST',
        url: 'http://www.visional.com.br/wscotacao/cotacao.asmx/AlteraUsuario',
        contentType: 'application/json; charset=utf-8',
        async: false,
        cache: false,
        dataType: 'json',
        data: "{ID_USUARIO:" + JSON.stringify(ID_USUARIO) + ",LOGIN:" + JSON.stringify(LOGIN) + ",NOME:" + JSON.stringify(NOME) + ",SENHA:" + JSON.stringify(SENHA) + ",ID_TP_USUARIO:" + JSON.stringify(ID_TP_USUARIO) + ",EMAIL:" + JSON.stringify(EMAIL) + ",CPF:" + JSON.stringify(CPF) + ",RG:" + JSON.stringify(RG) + ",DATA_NASCIMENTO:" + JSON.stringify(DATA_NASCIMENTO) + ",BANCO:" + JSON.stringify(BANCO) + ",CONTA:" + JSON.stringify(CONTA) + ",AGENCIA:" + JSON.stringify(AGENCIA) + "}",
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
function AlteraEstabelecimento(ID_ESTABELECIMENTO, NOME, FONE, LATITUDE, LONGITUDE, RAZAO_SOCIAL, UF, BAIRRO, CEP, CIDADE, CNPJ, EMAIL, ENDERECO, NUMERO, COMPLEMENTO, DELIVERY, RECARGA, RETIRADA, AGENCIA, CONTA, ID_BANCO, VALOR_DELIVERY, VALOR_MAXIMO, VALOR_MINIMO, successFunc, errorFunc) {
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
    /// <param name="DELIVERY" type="string">DELIVERY</param>
    /// <param name="RECARGA" type="string">RECARGA</param>
    /// <param name="RETIRADA" type="string">RETIRADA</param>
    /// <param name="AGENCIA" type="string">AGENCIA</param>
    /// <param name="CONTA" type="string">CONTA</param>
    /// <param name="ID_BANCO" type="int">ID_BANCO</param>
    /// <param name="VALOR_DELIVERY" type="decimal">VALOR_DELIVERY</param>
    /// <param name="VALOR_MAXIMO" type="decimal">VALOR_MAXIMO</param>
    /// <param name="VALOR_MINIMO" type="decimal">VALOR_MINIMO</param>

    /// <param name='successFunc' type='function'>Success Function</param>
    /// <param name='errorFunc' type='function'>Error Function</param>
    /// <returns type=''>AlteraEstabelecimentoResult as </returns>
    var $res = '';
    jQuery.ajax({
        type: 'POST',
        url: 'http://www.visional.com.br/wscotacao/cotacao.asmx/AlteraEstabelecimento',
        contentType: 'application/json; charset=utf-8',
        async: false,
        cache: false,
        dataType: 'json',
        data: "{ID_ESTABELECIMENTO:" + JSON.stringify(ID_ESTABELECIMENTO) + ",NOME:" + JSON.stringify(NOME) + ",FONE:" + JSON.stringify(FONE) + ",LATITUDE:" + JSON.stringify(LATITUDE) + ",LONGITUDE:" + JSON.stringify(LONGITUDE) + ",RAZAO_SOCIAL:" + JSON.stringify(RAZAO_SOCIAL) + ",UF:" + JSON.stringify(UF) + ",BAIRRO:" + JSON.stringify(BAIRRO) + ",CEP:" + JSON.stringify(CEP) + ",CIDADE:" + JSON.stringify(CIDADE) + ",CNPJ:" + JSON.stringify(CNPJ) + ",EMAIL:" + JSON.stringify(EMAIL) + ",ENDERECO:" + JSON.stringify(ENDERECO) + ",NUMERO:" + JSON.stringify(NUMERO) + ",COMPLEMENTO:" + JSON.stringify(COMPLEMENTO) + ",DELIVERY:" + JSON.stringify(DELIVERY) + ",RECARGA:" + JSON.stringify(RECARGA) + ",RETIRADA:" + JSON.stringify(RETIRADA) + ",AGENCIA:" + JSON.stringify(AGENCIA) + ",CONTA:" + JSON.stringify(CONTA) + ",ID_BANCO:" + JSON.stringify(ID_BANCO) + ",VALOR_DELIVERY:" + JSON.stringify(VALOR_DELIVERY) + ",VALOR_MAXIMO:" + JSON.stringify(VALOR_MAXIMO) + ",VALOR_MINIMO:" + JSON.stringify(VALOR_MINIMO) + "}",
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

// -- AlteraDepositoOperacao
function AlteraDepositoOperacao(ID_VENDA,COD_VENDA, ID_STATUS_VENDA, NUM_DEPOSITO, DATA_DEPOSITO, ID_TIPO_DEPOSITO, VALOR_PRODUTO, ID_TIPO_VENDA, successFunc, errorFunc) {
    /// <summary></summary>
    /// <param name="ID_VENDA" type="int">ID_VENDA</param>
    /// <param name="ID_STATUS_VENDA" type="int">ID_STATUS_VENDA</param>
    /// <param name="NUM_DEPOSITO" type="string">NUM_DEPOSITO</param>
    /// <param name="DATA_DEPOSITO" type="string">DATA_DEPOSITO</param>
    /// <param name="ID_TIPO_DEPOSITO" type="int">ID_TIPO_DEPOSITO</param>
    /// <param name="VALOR_PRODUTO" type="decimal">VALOR_PRODUTO</param>
    /// <param name="ID_TIPO_VENDA" type="int">ID_TIPO_VENDA</param>

    /// <param name='successFunc' type='function'>Success Function</param>
    /// <param name='errorFunc' type='function'>Error Function</param>
    /// <returns type=''>AlteraDepositoOperacaoResult as </returns>
    var $res = '';
    jQuery.ajax({
        type: 'POST',
        url: 'http://www.visional.com.br/wscotacao/cotacao.asmx/AlteraDepositoOperacao',
        contentType: 'application/json; charset=utf-8',
        async: false,
        cache: false,
        dataType: 'json',
        data: "{ID_VENDA:" + JSON.stringify(ID_VENDA) + ",COD_VENDA:" + JSON.stringify(COD_VENDA) + ",ID_STATUS_VENDA:" + JSON.stringify(ID_STATUS_VENDA) + ",NUM_DEPOSITO:" + JSON.stringify(NUM_DEPOSITO) + ",DATA_DEPOSITO:" + JSON.stringify(DATA_DEPOSITO) + ",ID_TIPO_DEPOSITO:" + JSON.stringify(ID_TIPO_DEPOSITO) + ",VALOR_PRODUTO:" + JSON.stringify(VALOR_PRODUTO) + ",ID_TIPO_VENDA:" + JSON.stringify(ID_TIPO_VENDA) + "}",
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
    /// <returns type=''>RetornaEstabelecimentoPorIdResult as </returns>
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
function InsereMoedaEstabelecimento(ID_ESTABELECIMENTO, ID_MOEDA, CODIGO, NOME, SIMBOLO, VALOR_MAXIMO, VALOR_MINIMO, ATIVO, successFunc, errorFunc) {
    /// <summary></summary>
    /// <param name="ID_ESTABELECIMENTO" type="int">ID_ESTABELECIMENTO</param>
    /// <param name="ID_MOEDA" type="int">ID_MOEDA</param>
    /// <param name="CODIGO" type="string">CODIGO</param>
    /// <param name="NOME" type="string">NOME</param>
    /// <param name="SIMBOLO" type="string">SIMBOLO</param>
    /// <param name="VALOR_MAXIMO" type="decimal">VALOR_MAXIMO</param>
    /// <param name="VALOR_MINIMO" type="decimal">VALOR_MINIMO</param>
    /// <param name="ATIVO" type="boolean">ATIVO</param>

    /// <param name='successFunc' type='function'>Success Function</param>
    /// <param name='errorFunc' type='function'>Error Function</param>
    /// <returns type=''>InsereMoedaEstabelecimentoResult as </returns>
    var $res = '';
    jQuery.ajax({
        type: 'POST',
        url: 'http://www.visional.com.br/wscotacao/cotacao.asmx/InsereMoedaEstabelecimento',
        contentType: 'application/json; charset=utf-8',
        async: false,
        cache: false,
        dataType: 'json',
        data: "{ID_ESTABELECIMENTO:" + JSON.stringify(ID_ESTABELECIMENTO) + ",ID_MOEDA:" + JSON.stringify(ID_MOEDA) + ",CODIGO:" + JSON.stringify(CODIGO) + ",NOME:" + JSON.stringify(NOME) + ",SIMBOLO:" + JSON.stringify(SIMBOLO) + ",VALOR_MAXIMO:" + JSON.stringify(VALOR_MAXIMO) + ",VALOR_MINIMO:" + JSON.stringify(VALOR_MINIMO) + ",ATIVO:" + JSON.stringify(ATIVO) + "}",
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
function AlteraMoedaEstabelecimento(ID_ESTABELECIMENTO, ID_MOEDA, ATIVO, VALOR_MAXIMO, VALOR_MINIMO, successFunc, errorFunc) {
    /// <summary></summary>
    /// <param name="ID_ESTABELECIMENTO" type="int">ID_ESTABELECIMENTO</param>
    /// <param name="ID_MOEDA" type="int">ID_MOEDA</param>
    /// <param name="ATIVO" type="boolean">ATIVO</param>
    /// <param name="VALOR_MAXIMO" type="decimal">VALOR_MAXIMO</param>
    /// <param name="VALOR_MINIMO" type="decimal">VALOR_MINIMO</param>

    /// <param name='successFunc' type='function'>Success Function</param>
    /// <param name='errorFunc' type='function'>Error Function</param>
    /// <returns type=''>AlteraMoedaEstabelecimentoResult as </returns>
    var $res = '';
    jQuery.ajax({
        type: 'POST',
        url: 'http://www.visional.com.br/wscotacao/cotacao.asmx/AlteraMoedaEstabelecimento',
        contentType: 'application/json; charset=utf-8',
        async: false,
        cache: false,
        dataType: 'json',
        data: "{ID_ESTABELECIMENTO:" + JSON.stringify(ID_ESTABELECIMENTO) + ",ID_MOEDA:" + JSON.stringify(ID_MOEDA) + ",ATIVO:" + JSON.stringify(ATIVO) + ",VALOR_MAXIMO:" + JSON.stringify(VALOR_MAXIMO) + ",VALOR_MINIMO:" + JSON.stringify(VALOR_MINIMO) + "}",
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
    /// <returns type=''>RetornaMoedaEstabelecimentoResult as </returns>
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
    /// <returns type=''>RetornaListaMoedaEstabelecimentoResult as </returns>
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
    /// <returns type=''>InsereCotacaoEstabelecimentoResult as </returns>
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
    /// <returns type=''>AlteraCotacaoEstabelecimentoResult as </returns>
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
    /// <returns type=''>RetornaListaMoedaEstabelecimentoCotacaoResult as </returns>
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
    /// <returns type=''>RetornaCotacaoEstabelecimentoPorMoedaResult as </returns>
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
    /// <returns type=''>RetornaListaEstabelecimentoPorMoedaResult as </returns>
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
    /// <returns type=''>RetornaListaMoedasUtilizadasResult as </returns>
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
    /// <returns type=''>ValidaFavoritosUsuarioResult as </returns>
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
    /// <returns type=''>InsereFavoritosUsuarioResult as </returns>
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
    /// <returns type=''>RetornaFavoritosUsuarioResult as </returns>
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
    /// <returns type=''>ExcluiFavoritoResult as </returns>
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
    /// <returns type=''>RetornaEstabelecimentoPorIdUsuarioResult as </returns>
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
function InsereOperacao(ID_USUARIO, ID_ESTABELECIMENTO, ID_STATUS_VENDA, OBS_COMPRA, SITUACAO_COMPRA, ID_ENDERECO_ENTREGA, SIMBOLO, DESCRICAO_DETALHADA, QUANTIDADE, VALOR_PRODUTO, ID_TIPO_VENDA, VALOR_TOTAL_OPERACAO, VARLOR_PERC_ESTABELEC, VALOR_DESEJADO, VALOR_COTACAO, successFunc, errorFunc) {
    /// <summary></summary>

    var $res = '';
    jQuery.ajax({
        type: 'POST',
        url: 'http://www.visional.com.br/wscotacao/cotacao.asmx/InsereOperacao',
        contentType: 'application/json; charset=utf-8',
        async: false,
        cache: false,
        dataType: 'json',
        data: "{ID_USUARIO:" + JSON.stringify(ID_USUARIO) + ",ID_ESTABELECIMENTO:" + JSON.stringify(ID_ESTABELECIMENTO) + ",ID_STATUS_VENDA:" + JSON.stringify(ID_STATUS_VENDA) + ",OBS_COMPRA:" + JSON.stringify(OBS_COMPRA) + ",SITUACAO_COMPRA:" + JSON.stringify(SITUACAO_COMPRA) + ",ID_ENDERECO_ENTREGA:" + JSON.stringify(ID_ENDERECO_ENTREGA) + ",SIMBOLO:" + JSON.stringify(SIMBOLO) + ",DESCRICAO_DETALHADA:" + JSON.stringify(DESCRICAO_DETALHADA) + ",QUANTIDADE:" + JSON.stringify(QUANTIDADE) + ",VALOR_PRODUTO:" + JSON.stringify(VALOR_PRODUTO) + ",ID_TIPO_VENDA:" + JSON.stringify(ID_TIPO_VENDA) + ",VALOR_TOTAL_OPERACAO:" + JSON.stringify(VALOR_TOTAL_OPERACAO) + ",VARLOR_PERC_ESTABELEC:" + JSON.stringify(VARLOR_PERC_ESTABELEC) + ",VALOR_DESEJADO:" + JSON.stringify(VALOR_DESEJADO) + ",VALOR_COTACAO:" + JSON.stringify(VALOR_COTACAO) + "}",
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

// -- RetornaOperacaoPorEstabelecimento
function RetornaOperacaoPorEstabelecimento(ID_ESTABELECIMENTO, ID_TIPO_VENDA, ID_STATUS_VENDA, successFunc, errorFunc) {
    /// <summary></summary>
    /// <param name="ID_ESTABELECIMENTO" type="int">ID_ESTABELECIMENTO</param>
    /// <param name="ID_TIPO_VENDA" type="int">ID_TIPO_VENDA</param>
    /// <param name="ID_STATUS_VENDA" type="int">ID_STATUS_VENDA</param>

    /// <param name='successFunc' type='function'>Success Function</param>
    /// <param name='errorFunc' type='function'>Error Function</param>
    /// <returns type=''>RetornaOperacaoPorEstabelecimentoResult as </returns>
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
    /// <returns type=''>RetornaOperacaoPorUsuarioResult as </returns>
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

// -- InsereEnderecoUsuario
function InsereEnderecoUsuario(ID_USUARIO, ENDERECO_ENTREGA, COMPLEMENTO_ENTREGA, BAIRRO_ENTREGA, CEP_ENTREGA, UF_ENTREGA, CIDADE_ENTREGA, FONE_ENTREGA, NOME_ENTREGA, SOBRENOME_ENTREGA, NUMERO_ENTREGA, successFunc, errorFunc) {
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
    /// <returns type=''>InsereEnderecoUsuarioResult as </returns>
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
    /// <returns type=''>RetornaEnderecoPorCepResult as </returns>
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
function AlteraEnderecoUsuario(ID_ENDERECO_ENTREGA, ID_USUARIO, ENDERECO_ENTREGA, COMPLEMENTO_ENTREGA, BAIRRO_ENTREGA, CEP_ENTREGA, UF_ENTREGA, CIDADE_ENTREGA, FONE_ENTREGA, NOME_ENTREGA, SOBRENOME_ENTREGA, NUMERO_ENTREGA, successFunc, errorFunc) {
    /// <summary></summary>
    /// <param name="ID_ENDERECO_ENTREGA" type="int">ID_ENDERECO_ENTREGA</param>
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
    /// <returns type=''>AlteraEnderecoUsuarioResult as </returns>
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
    /// <returns type=''>RetornaEnderecoUsuarioResult as </returns>
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

// -- RetornaTipoVenda
function RetornaTipoVenda(successFunc, errorFunc) {
    /// <summary></summary>

    /// <param name='successFunc' type='function'>Success Function</param>
    /// <param name='errorFunc' type='function'>Error Function</param>
    /// <returns type=''>RetornaTipoVendaResult as </returns>
    var $res = '';
    jQuery.ajax({
        type: 'POST',
        url: 'http://www.visional.com.br/wscotacao/cotacao.asmx/RetornaTipoVenda',
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

// -- RetornaOperacaoPorEstabelecimentoCodigo
function RetornaOperacaoPorEstabelecimentoCodigo(ID_ESTABELECIMENTO, COD_VENDA, successFunc, errorFunc) {
    /// <summary></summary>
    /// <param name="ID_ESTABELECIMENTO" type="int">ID_ESTABELECIMENTO</param>
    /// <param name="COD_VENDA" type="string">COD_VENDA</param>

    /// <param name='successFunc' type='function'>Success Function</param>
    /// <param name='errorFunc' type='function'>Error Function</param>
    /// <returns type=''>RetornaOperacaoPorEstabelecimentoCodigoResult as </returns>
    var $res = '';
    jQuery.ajax({
        type: 'POST',
        url: 'http://www.visional.com.br/wscotacao/cotacao.asmx/RetornaOperacaoPorEstabelecimentoCodigo',
        contentType: 'application/json; charset=utf-8',
        async: false,
        cache: false,
        dataType: 'json',
        data: "{ID_ESTABELECIMENTO:" + JSON.stringify(ID_ESTABELECIMENTO) + ",COD_VENDA:" + JSON.stringify(COD_VENDA) + "}",
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

// -- AlteraStatusOperacao
function AlteraStatusOperacao(COD_VENDA, COD_STATUS_VENDA, successFunc, errorFunc) {
    /// <summary></summary>
    /// <param name="COD_VENDA" type="string">COD_VENDA</param>
    /// <param name="COD_STATUS_VENDA" type="int">COD_STATUS_VENDA</param>

    /// <param name='successFunc' type='function'>Success Function</param>
    /// <param name='errorFunc' type='function'>Error Function</param>
    /// <returns type=''>AlteraStatusOperacaoResult as </returns>
    var $res = '';
    jQuery.ajax({
        type: 'POST',
        url: 'http://www.visional.com.br/wscotacao/cotacao.asmx/AlteraStatusOperacao',
        contentType: 'application/json; charset=utf-8',
        async: false,
        cache: false,
        dataType: 'json',
        data: "{COD_VENDA:" + JSON.stringify(COD_VENDA) + ",COD_STATUS_VENDA:" + JSON.stringify(COD_STATUS_VENDA) + "}",
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

// -- RetronaStatusVenda
function RetronaStatusVenda(successFunc, errorFunc) {
    /// <summary></summary>

    /// <param name='successFunc' type='function'>Success Function</param>
    /// <param name='errorFunc' type='function'>Error Function</param>
    /// <returns type=''>RetronaStatusVendaResult as </returns>
    var $res = '';
    jQuery.ajax({
        type: 'POST',
        url: 'http://www.visional.com.br/wscotacao/cotacao.asmx/RetronaStatusVenda',
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

// -- RetornaOperacaoPorCodigo
function RetornaOperacaoPorCodigo(COD_VENDA, successFunc, errorFunc) {
    var $res = '';
    jQuery.ajax({
        type: 'POST',
        url: 'http://www.visional.com.br/wscotacao/cotacao.asmx/RetornaOperacaoPorCodigo',
        contentType: 'application/json; charset=utf-8',
        async: false,
        cache: false,
        dataType: 'json',
        data: "{COD_VENDA:" + JSON.stringify(COD_VENDA) + "}",
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
function RetornaConfiguracaoSistema(successFunc, errorFunc) {
    /// <summary></summary>
    /// <param name="ID_USUARIO" type="int">ID_USUARIO</param>

    /// <param name='successFunc' type='function'>Success Function</param>
    /// <param name='errorFunc' type='function'>Error Function</param>
    /// <returns type='string'>RetornaEnderecoUsuarioResult as string</returns>
    var $res = '';
    jQuery.ajax({
        type: 'POST',
        url: 'http://www.visional.com.br/wscotacao/cotacao.asmx/RetornaConfiguracaoSistema',
        contentType: 'application/json; charset=utf-8',
        async: false,
        cache: false,
        dataType: 'json',
        data: "{}",
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
function InsereImagemVendaCPF(DESCRICAO, ID_USUARIO, COD_VENDA, IMAGEM_BASE64, successFunc, errorFunc) {
    
    var $res = '';
    jQuery.ajax({
        type: 'POST',
        url: 'http://www.visional.com.br/wscotacao/cotacao.asmx/InsereImagemVendaCPF',
        contentType: 'application/json; charset=utf-8',
        async: true,
        cache: false,
        dataType: 'json',
        data: "{DESCRICAO:" + JSON.stringify(DESCRICAO) + ",ID_USUARIO:" + JSON.stringify(ID_USUARIO) + ",COD_VENDA:" + JSON.stringify(COD_VENDA) + ",IMAGEM_BASE64:" + JSON.stringify(IMAGEM_BASE64) + "}",
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

function InsereImagemVendaRG(DESCRICAO, ID_USUARIO, COD_VENDA, IMAGEM_BASE64, successFunc, errorFunc) {
 
    var $res = '';
    jQuery.ajax({
        type: 'POST',
        url: 'http://www.visional.com.br/wscotacao/cotacao.asmx/InsereImagemVendaRG',
        contentType: 'application/json; charset=utf-8',
        async: true,
        cache: false,
        dataType: 'json',
        data: "{DESCRICAO:" + JSON.stringify(DESCRICAO) + ",ID_USUARIO:" + JSON.stringify(ID_USUARIO) + ",COD_VENDA:" + JSON.stringify(COD_VENDA) + ",IMAGEM_BASE64:" + JSON.stringify(IMAGEM_BASE64) + "}",
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

function InsereImagemVendaComprovante(DESCRICAO, ID_USUARIO, COD_VENDA, IMAGEM_BASE64, successFunc, errorFunc) {

    var $res = '';
    jQuery.ajax({
        type: 'POST',
        url: 'http://www.visional.com.br/wscotacao/cotacao.asmx/InsereImagemVendaComprovante',
        contentType: 'application/json; charset=utf-8',
        async: true,
        cache: false,
        dataType: 'json',
        data: "{DESCRICAO:" + JSON.stringify(DESCRICAO) + ",ID_USUARIO:" + JSON.stringify(ID_USUARIO) + ",COD_VENDA:" + JSON.stringify(COD_VENDA) + ",IMAGEM_BASE64:" + JSON.stringify(IMAGEM_BASE64) + "}",
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