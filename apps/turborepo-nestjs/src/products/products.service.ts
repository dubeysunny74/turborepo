import { Injectable } from '@nestjs/common';
import {CreateProductRequest,Product} from "@repo/types"

@Injectable()
export class ProductsService {
    private readonly products: Product[] =[];
    
    createProduct(createProductRequest:CreateProductRequest)
    {
        const product: Product ={
            ...CreateProductRequest,
            id: Math.random().toString().substring(7),
            name: '',
            price: 0
        };
        this.products.push(product);
        return product;
    }
    getProducts()
    {
        return this.products;
    }
}
