import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
    private products = [
        { id: 1, name: "laptop", price: 300 },
        { id: 2, name: "Tablet", price: 500 },
    ];
    getAllProducts(){
        return this.products;
    }
    getProductById(id :number){
        return this.products.find((product) => product.id === id)
    }
}
