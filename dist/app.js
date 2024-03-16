"use strict";

var _cliente = require("./cliente.js");
var _impuesto = require("./impuesto.js");
var mark = new _cliente.Cliente("Mark Anthony");
var brutoAnual1 = new _impuesto.Impuestos(500000, 100000);
var brutoAnual2 = new _impuesto.Impuestos(600000, 200000);
var brutoAnual3 = new _impuesto.Impuestos(700000, 300000);
var brutoAnual4 = new _impuesto.Impuestos(800000, 400000);
mark.agregarImpuesto(brutoAnual1);
mark.agregarImpuesto(brutoAnual2);
mark.agregarImpuesto(brutoAnual3);
mark.agregarImpuesto(brutoAnual4);
console.log(mark.calcularImpuesto());