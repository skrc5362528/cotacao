function RSS() {

    var IDRSS;
    var URL;
    var DESCRICAO;
    var PRIORIDADE;

    this.setIDRSS = function (value) {
        this.IDRSS = value;
    }

    this.setURL = function (value) {
        this.URL = value;
    }

    this.setDESCRICAO = function (value) {
        this.DESCRICAO = value;
    }

    this.setPRIORIDADE = function (value) {
        this.PRIORIDADE = value;
    }

    this.getPRIORIDADE = function () {
        return this.PRIORIDADE;
    }

    this.getDESCRICAO = function () {
        return this.DESCRICAO;
    }

    this.getURL = function () {
        return this.URL;
    }

    this.getIDRSS = function () {
        return this.IDRSS;
    }
}