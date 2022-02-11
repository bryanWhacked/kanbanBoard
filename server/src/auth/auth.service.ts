import { UserEntity } from './../users/users.entity';
import { UsersService } from './../users/users.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) {}

    async signInLocal(username: string, password: string): Promise<any> {
        const user = await this.usersService.findOne({username});

        if(!user) throw new UnauthorizedException('wrong username');

        if(user.password !== password) throw new UnauthorizedException('wrong password');

        return this.signUser(user.id, user.username, 'user');
    }

    signUser(userId: number, username: string, type: string) {
        return this.jwtService.sign({
            sub: userId,
            username,
            type: type,
        })
    }
} 
