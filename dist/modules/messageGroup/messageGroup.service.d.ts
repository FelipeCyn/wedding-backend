import { Repository } from "typeorm";
import { MessageGroup } from "./messageGroup.entity";
import { CreateMessageGroupDto } from "./dto/create-messageGroup.dto";
import { UpdateMessageGroupDto } from "./dto/update-messageGroup.dto";
export declare class MessageGroupService {
    private readonly messageGroupRepository;
    constructor(messageGroupRepository: Repository<MessageGroup>);
    findAll(): Promise<MessageGroup[]>;
    findOne(id: number): Promise<MessageGroup>;
    create(createMessageGroupDto: CreateMessageGroupDto): Promise<MessageGroup>;
    update(id: string, updateMessageGroupDto: UpdateMessageGroupDto): Promise<MessageGroup>;
    remove(id: number): Promise<MessageGroup>;
    getById(id: number): Promise<MessageGroup>;
}
