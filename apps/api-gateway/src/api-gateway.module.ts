import { Module } from '@nestjs/common';
import { ApiGatewayController } from './api-gateway.controller';
import { ApiGatewayService } from './api-gateway.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MICROSERVICE_CLIENTS } from './constants';
import { OrderController } from '../order/order.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: MICROSERVICE_CLIENTS.PRODUCT_SERVICE,
        transport: Transport.TCP,
        options: { port: 4002 },
      },
      {
        name: MICROSERVICE_CLIENTS.USER_SERVICE,
        transport: Transport.TCP,
        options: { port: 4003 },
      },
      {
        name: MICROSERVICE_CLIENTS.ORDER_SERVICE,
        transport: Transport.TCP,
        options: { port: 4001 },
      },
    ]),
  ],
  controllers: [ApiGatewayController, OrderController],
  providers: [ApiGatewayService],
})
export class ApiGatewayModule {}
