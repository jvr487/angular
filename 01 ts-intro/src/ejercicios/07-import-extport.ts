import { Producto, CalcularISV } from './06-desestructuracion-funcion';

 const carritoCompras: Producto[] = [
    {
        desc:'t1',
        precio:100
    },
    {
        desc:'t2',
        precio:150
    }
]

const [total, isv] = CalcularISV(carritoCompras);
// nota: aquí se ejecutarán los otros console.log del archivo 06-desestructuracion-funcion, esto es una funcionalidad por defecto de las importaciones, ejecuta el archivo completo
console.log('Total:', total);
console.log('ISV:', isv);