import { CreateGroupDto } from "./dto/create-group.dto";
import { GroupService } from "./group.service";
export declare class GroupController {
    private readonly groupService;
    constructor(groupService: GroupService);
    findAll(): Promise<import("./group.entity").Group[]>;
    findOne(id: number): Promise<import("./group.entity").Group>;
    create(CreateGroupDto: CreateGroupDto): Promise<import("./group.entity").Group>;
    update(id: string, body: any): Promise<import("./group.entity").Group>;
    remove(id: number): Promise<import("./group.entity").Group>;
}
