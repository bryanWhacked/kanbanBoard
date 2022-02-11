import { JwtAuthGuard } from './../auth/jwt-auth.guard';
import { User } from './../../dist/users/dto/user.interface.d';
import { Observable } from 'rxjs';
import { UserDto } from './dto/user.dto';
import { Body, Controller, Post, Get, Param, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserEntity } from './users.entity';

@Controller('users')
export class UsersController {

    constructor(
        private readonly usersService: UsersService
    ) {}

    @Post()
    signup(
        @Body() userDto: UserDto
    ) {
        return this.usersService.signup(userDto)
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    getAllUser() {
        return this.usersService.getAllUser();
    }

    /**@Post('find')
    findUser(
        @Body() username: string
    ) {
        return this.usersService.findByUsername(username);
    }*/

    /**@Get('username')
    findByUser(@Param() params): Observable<User> {
        return this.usersService.findByUser(params.username);
    }*/

    @Post('find')
    findByUsename(
        @Body('username') username: string
    ): Promise<UserEntity> {
        const user = this.usersService.findOne({username});
        return user;
    }
}
