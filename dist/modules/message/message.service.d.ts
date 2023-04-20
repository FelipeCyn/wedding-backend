import { Repository } from "typeorm";
import { Message } from "./message.entity";
import { CreateMessageDto } from "./dto/create-message.dto";
import { UpdateMessageDto } from "./dto/update-message.dto";
export declare class MessageService {
    private readonly messageRepository;
    constructor(messageRepository: Repository<Message>);
    findAll(): Promise<Message[]>;
    findOne(id: number): Promise<Message>;
    create(createmessagesDto: CreateMessageDto): Promise<Message>;
    update(id: string, UpdateMessageDto: UpdateMessageDto): Promise<Message>;
    remove(id: number): Promise<Message>;
    getById(id: number): Promise<Message>;
}
