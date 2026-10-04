
interface Producto {
    readonly id : string;
    nombre: string;
    precio: number;

}

interface ProductoConGarantia extends Producto {
    mesesGarantia: number;

}

const producto: Producto = {
    id: "p101",
    nombre: "Teclado Mecánico",
    precio: 89.99
};

const productoConGarantia: ProductoConGarantia = {
    id: "p102",
    nombre: "Monitor 4K",
    precio: 350,
    mesesGarantia: 24
};


function calcularPrecioConDescuento(producto: Producto, porcentaje: number) : number {
    return producto.precio * (1 - porcentaje / 100);
}