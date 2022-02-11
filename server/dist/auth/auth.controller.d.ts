import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signInLocal(username: string, password: string): Promise<any>;
}
