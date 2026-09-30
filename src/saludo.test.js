import { describe, it, expert} from "vitest";
import {saludo, suma} from "./saludo";

describe('Prueba de saludo', () =>{
    it("saluda correctamente", ()=>{
        expect(saludo()).toBe('hola profe');
    });
});

describe('Prueba de suma', () =>{
    it("suma correctamente", ()=>{
        expect(suma(5,5)).toBe(10)
    });
});