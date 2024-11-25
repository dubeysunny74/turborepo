import { CreateProductRequest } from "@repo/types";
import { ProductsService } from './products.service';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    createProduct(createProductRequest: CreateProductRequest): Promise<import("@repo/types").Product>;
    getProducts(): import("@repo/types").Product[];
}
//# sourceMappingURL=products.controller.d.ts.map