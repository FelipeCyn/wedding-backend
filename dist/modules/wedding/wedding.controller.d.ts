import { CreateWeddingDto } from "./dto/create-wedding.dto";
import { WeddingService } from "./wedding.service";
export declare class WeddingController {
    private readonly weddingService;
    constructor(weddingService: WeddingService);
    findAll(): Promise<import("./wedding.entity").Wedding[]>;
    findOne(id: number): Promise<import("./wedding.entity").Wedding>;
    create(CreateWeddingDto: CreateWeddingDto): Promise<import("./wedding.entity").Wedding>;
    update(id: string, body: any): Promise<import("./wedding.entity").Wedding>;
    remove(id: number): Promise<import("./wedding.entity").Wedding>;
}
