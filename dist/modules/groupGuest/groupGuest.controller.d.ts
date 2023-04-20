import { CreateGroupGuestDto } from "./dto/create-groupGuest.dto";
import { GroupGuestService } from "./groupGuest.service";
export declare class GroupGuestController {
    private readonly groupGuestService;
    constructor(groupGuestService: GroupGuestService);
    findAll(): Promise<import("./groupGuest.entity").GroupGuest[]>;
    findOne(id: number): Promise<import("./groupGuest.entity").GroupGuest>;
    create(CreateGroupGuestDto: CreateGroupGuestDto): Promise<import("./groupGuest.entity").GroupGuest>;
    update(id: string, body: any): Promise<import("./groupGuest.entity").GroupGuest>;
    remove(id: number): Promise<import("./groupGuest.entity").GroupGuest>;
}
