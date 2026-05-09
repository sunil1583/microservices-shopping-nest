import { Body, Controller, Inject, Post } from '@nestjs/common';
import { MICROSERVICE_CLIENTS } from '../src/constants';
import { ClientProxy } from '@nestjs/microservices';

@Controller('order')
export class OrderController {
  constructor(
    @Inject(MICROSERVICE_CLIENTS.ORDER_SERVICE)
    private orderService: ClientProxy,
  ) {}

  @Post()
  createOrder(@Body() orderData: any) {
    console.log({
      message: 'API Gateway Received order data:',
      orderData,
    });
    // Logic to create an order
    return this.orderService.send('create_order', orderData);
  }
}
