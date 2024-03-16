export class Impuestos {
    #montoBrutoAnual;
    #deducciones;
    constructor(montoBrutoAnual, deducciones) {
        this.#montoBrutoAnual = montoBrutoAnual;
        this.#deducciones = deducciones;
    }

    get getMontoBrutoAnual() {
        return this.#montoBrutoAnual;
    }

    get getDeducciones() {
        return this.#deducciones;
    }

    set setMontoBrutoAnual(monto) {
        this.#montoBrutoAnual = monto;
    }

    set setDeducciones(montoDeduccion) {
        this.#deducciones = montoDeduccion;
    }
}
