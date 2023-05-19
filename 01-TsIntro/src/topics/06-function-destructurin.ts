


interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: 'Nokia A1',
    price: 150 
}

const tablet: Product = {
    description: 'iPad Air',
    price: 350
}


interface taxCalculationOptiopns {
    tax: number;
    products: Product[];
}

function taxCalculation( options : taxCalculationOptiopns ): number {
    
    let total= 0
    options.products.forEach((product) => {
        total += product.price;
    });
    return total * options.tax;
}


const shoppingCar = [phone, tablet];
const tax = 0.15;