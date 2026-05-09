import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getHello(): string {
    return this.usersService.getHello();
  }

  @MessagePattern('create_user')
  createUser(data: any) {
    console.log('Received user data:', data);
    // Here you can add logic to process the user, e.g., save it to a database
    return { status: 'User created successfully', data };
  }

  @MessagePattern('get_user')
  getUser(id: number) {
    console.log('Received request for user data:', id);
    // Here you can add logic to retrieve user information, e.g., from a database
    return {
      status: 'User data retrieved successfully',
      data: { id, name: 'Sample User', email: 'sampleuser@example.com' },
    };
  }
}
