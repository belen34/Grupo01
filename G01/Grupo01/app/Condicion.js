"use strict";
var Condicion = (function () {
    function Condicion(condicionId, reglaId, operadorcomparacionId, operadorLogico1Id, operadorLogico2Id, texto1, texto2) {
        this.condicionId = condicionId;
        this.operadorcomparacionId = operadorcomparacionId;
        this.reglaId = reglaId;
        this.operadorLogico1Id = operadorLogico1Id;
        this.operadorLogico2Id = operadorLogico2Id;
        this.texto1 = texto1;
        this.texto2 = texto2;
    }
    return Condicion;
}());
exports.Condicion = Condicion;
//# sourceMappingURL=Condicion.js.map