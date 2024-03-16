export class Cliente {
    #nombre;
    #impuesto;
    constructor(nombre) {
        this.#nombre = nombre;
        this.#impuesto = [];
    }

    agregarImpuesto(impuesto) {
        this.#impuesto.push(impuesto);
    }

    get getNombre() {
        return this.#nombre;
    }

    set setNombre(nombre) {
        this.#nombre = nombre;
    }

    calcularImpuesto() {
        let totalImpuestos = 0;
        this.#impuesto.forEach((item) => {
            let resultado = (item.getMontoBrutoAnual - item.getDeducciones) * 0.21;
            totalImpuestos += resultado;
        });
        return totalImpuestos;
    }
}
