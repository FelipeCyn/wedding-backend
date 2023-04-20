import { Repository } from "typeorm";
import { MealOption } from "./mealOption.entity";
import { CreateMealOptionDto } from "./dto/create-mealOption.dto";
import { UpdateMealOptionDto } from "./dto/update-mealOption.dto";
export declare class MealtOptionService {
    private readonly mealOptionRepository;
    constructor(mealOptionRepository: Repository<MealOption>);
    findAll(): Promise<MealOption[]>;
    findOne(id: number): Promise<MealOption>;
    create(createMealOptionDto: CreateMealOptionDto): Promise<MealOption>;
    update(id: string, UpdateMealOptionDto: UpdateMealOptionDto): Promise<MealOption>;
    remove(id: number): Promise<MealOption>;
    getById(id: number): Promise<MealOption>;
}
