class Cliente {
    #nombre;
    #impuesto;
    constructor(nombre) {
        this.#nombre = nombre;
        this.#impuesto = {};
    }
    get getNombre() {
        return this.#nombre;
    }

    set setNombre(nombre) {
        this.#nombre = nombre;
    }

    calcularImpuesto() {
        const resultado = (getMontoBrutoAnual - getDeducciones) * 0.21;
        return resultado;
    }
}

class Impuestos {
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
