import { CreateGuestDto } from "./dto/create-guest.dto";
import { GuestService } from "./guest.service";
export declare class GuestController {
    private readonly guestService;
    constructor(guestService: GuestService);
    findAll(): Promise<import("./guest.entity").Guest[]>;
    findOne(id: number): Promise<import("./guest.entity").Guest>;
    create(CreateGuestDto: CreateGuestDto): Promise<import("./guest.entity").Guest>;
    update(id: string, body: any): Promise<import("./guest.entity").Guest>;
    remove(id: number): Promise<import("./guest.entity").Guest>;
}
