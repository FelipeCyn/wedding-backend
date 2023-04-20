import { Repository } from "typeorm";
import { Guest } from "./guest.entity";
import { CreateGuestDto } from "./dto/create-guest.dto";
import { UpdateGuestDto } from "./dto/update-guest.dto";
export declare class GuestService {
    private readonly guestRepository;
    constructor(guestRepository: Repository<Guest>);
    findAll(): Promise<Guest[]>;
    findOne(id: number): Promise<Guest>;
    create(createMessagesDto: CreateGuestDto): Promise<Guest>;
    update(id: string, UpdateMessageDto: UpdateGuestDto): Promise<Guest>;
    remove(id: number): Promise<Guest>;
    getById(id: number): Promise<Guest>;
}
