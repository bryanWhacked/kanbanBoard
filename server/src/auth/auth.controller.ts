import { AuthDto } from './dto/auth.dto';
import { AuthService } from './auth.service';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {

    constructor(
        private authService: AuthService
    ) {}

    @Post('login')
    signInLocal(
        @Body('username') username: string,
        @Body('password') password: string
    ) {
        return this.authService.signInLocal(username, password)
    }

}
