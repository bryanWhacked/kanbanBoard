import { UserDto } from './dto/user.dto';
import { Repository } from 'typeorm';
import { UserEntity } from './users.entity';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<UserEntity>);
    signup(data: UserDto): Promise<UserEntity>;
    getAllUser(): Promise<UserEntity[]>;
    findOne(condition: any): Promise<UserEntity>;
}
