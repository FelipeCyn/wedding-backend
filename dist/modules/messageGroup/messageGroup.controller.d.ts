import { CreateMessageGroupDto } from "./dto/create-messageGroup.dto";
import { MessageGroupService } from "./messageGroup.service";
export declare class MessageGroupController {
    private readonly messageGroupService;
    constructor(messageGroupService: MessageGroupService);
    findAll(): Promise<import("./messageGroup.entity").MessageGroup[]>;
    findOne(id: number): Promise<import("./messageGroup.entity").MessageGroup>;
    create(CreateMessageGroupDto: CreateMessageGroupDto): Promise<import("./messageGroup.entity").MessageGroup>;
    update(id: string, body: any): Promise<import("./messageGroup.entity").MessageGroup>;
    remove(id: number): Promise<import("./messageGroup.entity").MessageGroup>;
}
