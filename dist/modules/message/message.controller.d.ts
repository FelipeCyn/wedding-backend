import { CreateMessageDto } from "./dto/create-message.dto";
import { MessageService } from "./message.service";
export declare class MessageController {
    private readonly messageService;
    constructor(messageService: MessageService);
    findAll(): Promise<import("./message.entity").Message[]>;
    findOne(id: number): Promise<import("./message.entity").Message>;
    create(CreateMessageDto: CreateMessageDto): Promise<import("./message.entity").Message>;
    update(id: string, body: any): Promise<import("./message.entity").Message>;
    remove(id: number): Promise<import("./message.entity").Message>;
}
