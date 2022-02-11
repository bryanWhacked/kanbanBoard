import { UserDto } from './dto/user.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './users.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UserEntity)
        private usersRepository: Repository<UserEntity>
    ) {}

    async signup(data: UserDto) {
        const newUser = this.usersRepository.create({
            username: data.username,
            email: data.email,
            password: data.password
        })
        await this.usersRepository.save(newUser);
        return newUser;
    }

    async getAllUser() {
        const listOfUsers = await this.usersRepository.find();
        return listOfUsers;
    }

    /**async findByUsername(username: string): Promise<UserEntity> {
        const authUser =  await this.usersRepository.findOne({
            where: {
                username: username,
            }
        })
        return authUser;
    }*/

    async findOne(condition: any): Promise<UserEntity> {
        return this.usersRepository.findOne(condition)
    }

    /**findByUser(username: string): Observable<User> {
        return from(this.usersRepository.findOne({username})).pipe(
            map((user: User) => {
                const {password, ...result} = user;
                return result;
            })
        )
    }*/

    /**async findByUsername(username: string): Promise<UserEntity> {
        try {
            const authUser = await this.usersRepository.findOneOrFail({
                where: {
                    username: username
                }
            });
            return authUser;
        } catch (err) {
            throw err;
        }
    }*/

}
