import { UsersService } from "./users.service";
import { CreateUsersDto } from "./dto/create-users.dto";
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(): Promise<import("./users.entity").Users[]>;
    findOne(id: number): Promise<import("./users.entity").Users>;
    create(CreateUsersDto: CreateUsersDto): Promise<import("./users.entity").Users>;
    update(id: string, body: any): Promise<import("./users.entity").Users>;
    remove(id: number): Promise<import("./users.entity").Users>;
}
