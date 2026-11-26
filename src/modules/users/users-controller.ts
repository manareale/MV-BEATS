import { Controller, Get, Post, Patch, Delete } from '@nestjs/common';
import { UsersService } from './services/users-service';
import { UsersDto } from './dto/users-dto';

@Controller('users')
export class UsersController {
    constructor (
        private usersService: UsersService,
    ) {}

    @Get()
    getAllUsers() {
        return this.usersService.getAllUsers();
    }

    @Get('/:id')
    getUserById(id: number) {
        return this.usersService.getUserId(id);
    }

    @Post()
    create(body: UsersDto) {
        return this.usersService.createUser(body);
    }

    @Patch('/:id')
    update(id: number, body: Partial<UsersDto>) {
        return this.usersService.updateUser(id, body);
    }

    @Delete()
    removeAllUsers() {
        return this.usersService.deleteAllUsers();
    }

    @Delete('/:id')
    removeUserById(id: number) {
        return this.usersService.deleteUser(id);
    } 
}