import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  getHello(): string {
    return this.productService.getHello();
  }

  @MessagePattern('create_product')
  createProduct(data: any) {
    console.log('Received product data:', data);
    // Here you can add logic to process the product, e.g., save it to a database
    return { status: 'Product created successfully', data };
  }

  @MessagePattern('get_product')
  getProduct(id: number) {
    console.log('Received request for product data:', id);
    // Here you can add logic to retrieve product information, e.g., from a database
    return {
      status: 'Product data retrieved successfully',
      data: { id, name: 'Sample Product', price: 99.99 },
    };
  }
}
