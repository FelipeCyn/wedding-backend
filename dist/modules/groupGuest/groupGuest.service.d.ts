import { Repository } from "typeorm";
import { CreateGroupGuestDto } from "./dto/create-groupGuest.dto";
import { UpdateGroupGuestDto } from "./dto/update-group.dto";
import { GroupGuest } from "./groupGuest.entity";
export declare class GroupGuestService {
    private readonly groupGuestRepository;
    constructor(groupGuestRepository: Repository<GroupGuest>);
    findAll(): Promise<GroupGuest[]>;
    findOne(id: number): Promise<GroupGuest>;
    create(createGroupGuestDto: CreateGroupGuestDto): Promise<GroupGuest>;
    update(id: string, updateGroupGuestDto: UpdateGroupGuestDto): Promise<GroupGuest>;
    remove(id: number): Promise<GroupGuest>;
    getById(id: number): Promise<GroupGuest>;
}
