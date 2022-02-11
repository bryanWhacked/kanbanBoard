import { UserDto } from './dto/user.dto';
import { UsersService } from './users.service';
import { UserEntity } from './users.entity';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    signup(userDto: UserDto): Promise<UserEntity>;
    getAllUser(): Promise<UserEntity[]>;
    findByUsename(username: string): Promise<UserEntity>;
}
