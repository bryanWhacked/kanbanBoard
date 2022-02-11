import { UsersService } from './../users/users.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    signInLocal(username: string, password: string): Promise<any>;
    signUser(userId: number, username: string, type: string): string;
}
