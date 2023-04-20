import { Repository } from "typeorm";
import { CreateWeddingDto } from "./dto/create-wedding.dto";
import { UpdateWeddingDto } from "./dto/update-wedding.dto";
import { Wedding } from "./wedding.entity";
export declare class WeddingService {
    private readonly weddingRepository;
    constructor(weddingRepository: Repository<Wedding>);
    findAll(): Promise<Wedding[]>;
    findOne(id: number): Promise<Wedding>;
    create(createWeddingDto: CreateWeddingDto): Promise<Wedding>;
    update(id: string, UpdateWeddingDto: UpdateWeddingDto): Promise<Wedding>;
    remove(id: number): Promise<Wedding>;
    getById(id: number): Promise<Wedding>;
}
