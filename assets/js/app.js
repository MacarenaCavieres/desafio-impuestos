import { Cliente } from "./cliente.js";
import { Impuestos } from "./impuesto.js";

const mark = new Cliente("Mark Anthony");

const brutoAnual1 = new Impuestos(500000, 100000);
const brutoAnual2 = new Impuestos(600000, 200000);
const brutoAnual3 = new Impuestos(700000, 300000);
const brutoAnual4 = new Impuestos(800000, 400000);

mark.agregarImpuesto(brutoAnual1);
mark.agregarImpuesto(brutoAnual2);
mark.agregarImpuesto(brutoAnual3);
mark.agregarImpuesto(brutoAnual4);

console.log(mark.calcularImpuesto());
