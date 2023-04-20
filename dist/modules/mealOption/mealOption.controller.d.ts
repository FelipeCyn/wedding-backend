import { CreateMealOptionDto } from "./dto/create-mealOption.dto";
import { MealtOptionService } from "./mealOption.service";
export declare class MealOptionController {
    private readonly mealtOptionService;
    constructor(mealtOptionService: MealtOptionService);
    findAll(): Promise<import("./mealOption.entity").MealOption[]>;
    findOne(id: number): Promise<import("./mealOption.entity").MealOption>;
    create(CreateMealOptionDto: CreateMealOptionDto): Promise<import("./mealOption.entity").MealOption>;
    update(id: string, body: any): Promise<import("./mealOption.entity").MealOption>;
    remove(id: number): Promise<import("./mealOption.entity").MealOption>;
}
