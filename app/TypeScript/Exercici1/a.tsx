function calcularTotal(precio : number, cantidad : number, descuento?: number): number {
    if (descuento) {
        return (precio * cantidad) - descuento;
    }
    return precio * cantidad;
    }
    
    const total1 = calcularTotal(100, 2, 10);
    const total2 = calcularTotal(50, 3);
