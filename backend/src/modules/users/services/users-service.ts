import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm"
import { User } from "../users.entity";
import { Repository } from "typeorm";
import { UsersDto } from "../dto/users-dto";

@Injectable()
export class UsersService {
 
    constructor(
        @InjectRepository(User)
        private readonly userRepo: Repository<User>,
    ) {}
    
    async getAllUsers() {
        return await this.userRepo.find();
    }
    
    async getUserId(id: number) {
        return await this.userRepo.findOne({ where: {id}});
    }

    async createUser(body: UsersDto) {
        const user = this.userRepo.create(body);
        return this.userRepo.save(user);
    }

    async updateUser(id: number, body: Partial<UsersDto>) {
        const user = await this.getUserId(id);
        
        if(!user) throw new NotFoundException('Utilisateur introuvable.');

        Object.assign(user, body);
        return this.userRepo.save(user);
    }

    async deleteUser(id: number) {
        const user = await this.getUserId(id);

        if(!user) throw new NotFoundException('Utilisateur introuvable.');

        return this.userRepo.delete(user);
    }

    async deleteAllUsers() {
        return await this.userRepo.deleteAll();
    }
}