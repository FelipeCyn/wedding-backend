import { Users } from './users.entity';
import { CreateUsersDto } from './dto/create-users.dto';
import { UpdateUsersDto } from './dto/update-users.dto';
import { Repository } from 'typeorm';
export declare class UsersService {
    private readonly usersRepository;
    constructor(usersRepository: Repository<Users>);
    findAll(): Promise<Users[]>;
    findOne(id: number): Promise<Users>;
    create(createUsersDto: CreateUsersDto): Promise<Users>;
    update(id: string, updateUsersDto: UpdateUsersDto): Promise<Users>;
    remove(id: number): Promise<Users>;
    getByEmail(email: string): Promise<Users>;
    getById(id: number): Promise<Users>;
    getUserIfRefreshTokenMatches(refreshToken: string, userId: number): Promise<Users>;
    setCurrentRefreshToken(refreshToken: string, userId: number): Promise<void>;
    removeRefreshToken(userId: number): Promise<import("typeorm").UpdateResult>;
}
