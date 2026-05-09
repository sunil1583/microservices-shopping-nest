import { Controller, Get } from '@nestjs/common';
import { OrderService } from './order.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get()
  getHello(): string {
    return this.orderService.getHello();
  }

  @MessagePattern('create_order')
  createOrder(data: any) {
    console.log({
      message: 'OrderController microservice Received order data:',
      data,
    });
    // Here you can add logic to process the order, e.g., save it to a database
    return { status: 'Order created successfully', data };
  }
}
