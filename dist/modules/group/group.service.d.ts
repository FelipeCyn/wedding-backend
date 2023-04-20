import { Repository } from "typeorm";
import { CreateGroupDto } from "./dto/create-group.dto";
import { UpdateGroupDto } from "./dto/update-group.dto";
import { Group } from "./group.entity";
export declare class GroupService {
    private readonly groupRepository;
    constructor(groupRepository: Repository<Group>);
    findAll(): Promise<Group[]>;
    findOne(id: number): Promise<Group>;
    create(createGroupDto: CreateGroupDto): Promise<Group>;
    update(id: string, updateGroupDto: UpdateGroupDto): Promise<Group>;
    remove(id: number): Promise<Group>;
    getById(id: number): Promise<Group>;
}
