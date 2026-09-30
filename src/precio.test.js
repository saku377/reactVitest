import { describe, it, expect} from "vitest";
import {formatearPrecio, aplicarDescuento} from "./precio";

describe('Prueba formatear precio', () =>{
    it("precio correctamente", ()=>{
        expect(formatearPrecio(1000)).toBe('$1.000');
    });

    it("debe regresar un error si el valor no es un numero entero", ()=>{
        expect(()=>formatearPrecio('roxana')).toThrow('Valor inválido');
        expect(()=>formatearPrecio('$100')).toThrow('Valor inválido');

    });
});


describe('Prueba de aplicar descuento', () =>{
    it("descuento correctamente", ()=>{
        expect(()=>aplicarDescuento(1000, -10)).toThrow('Porcentaje inválido');
    });

    it("descuento correctamente", ()=>{
        expect(aplicarDescuento(500, 0)).toBe(500);
    });
});