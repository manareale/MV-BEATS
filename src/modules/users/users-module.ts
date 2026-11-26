import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UsersService } from './services/users-service';
import { AuthService } from './services/auth-service'
import { UsersController }  from './users-controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users.entity';

@Module( {
    imports: [TypeOrmModule.forFeature([User])],
    providers: [UsersService, AuthService],
    controllers: [UsersController],
    exports: [UsersService],
})

export class UsersModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        throw new Error('Method not implemented.');
    }
    // A FAIRE WITH MIDDLEWARE
}