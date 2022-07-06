export interface Producto{
    desc: string;
    precio: number;
}

const tableta: Producto = {
    desc:'Tablet',
    precio: 50
}
const telefono: Producto = {
    desc: 'Samsung x5',
    precio: 50
}

export function CalcularISV(productos: Producto[]): [number, number]{
    let total = 0;

    productos.forEach(({precio}) =>{
        total += precio;
    });

    return [total, total * 0.15];
}

const productosISV = [tableta,telefono];
const [total, isv] = CalcularISV(productosISV);
console.log('total:',total);
console.log('isv:',isv);