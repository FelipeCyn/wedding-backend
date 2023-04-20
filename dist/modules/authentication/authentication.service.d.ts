import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import RegisterDto from './dto/register.dto';
import { UpdateDto } from './dto/update.dto';
import { Authentication } from './authentication.entity';
import { Repository } from 'typeorm';
export declare class AuthenticationService {
    private readonly usersService;
    private readonly jwtService;
    private readonly configService;
    private readonly usersRepository;
    constructor(usersService: UsersService, jwtService: JwtService, configService: ConfigService, usersRepository: Repository<Authentication>);
    register(registrationData: RegisterDto): Promise<import("../users/users.entity").Users>;
    private verifyPassword;
    getAuthenticatedUser(email: string, plainTextPassword: string): Promise<import("../users/users.entity").Users>;
    getCookieWithJwtToken(userId: number): string;
    getCookiesForLogOut(): string[];
    update(id: string, updateUsersDto: UpdateDto): Promise<Authentication>;
    getCookieWithJwtRefreshToken(userId: number): {
        cookie: string;
        token: string;
    };
}
