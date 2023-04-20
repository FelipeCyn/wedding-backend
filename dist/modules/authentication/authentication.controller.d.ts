import { AuthenticationService } from './authentication.service';
import RegisterDto from './dto/register.dto';
import RequestWithUser from './requestWithUser.interface';
import { UsersService } from '../users/users.service';
export declare class AuthenticationController {
    private readonly authenticationService;
    private readonly usersService;
    constructor(authenticationService: AuthenticationService, usersService: UsersService);
    register(registrationData: RegisterDto): Promise<import("../users/users.entity").Users>;
    logIn(request: RequestWithUser): Promise<import("../users/users.entity").Users>;
    logOut(request: RequestWithUser): Promise<void>;
    update(id: string, body: any): Promise<import("../users/users.entity").Users>;
    authenticate(request: RequestWithUser): import("../users/users.entity").Users;
    refresh(request: RequestWithUser): import("../users/users.entity").Users;
}
