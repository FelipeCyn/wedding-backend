"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealOptionModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const mealOption_controller_1 = require("./mealOption.controller");
const mealOption_entity_1 = require("./mealOption.entity");
const mealOption_service_1 = require("./mealOption.service");
let MealOptionModule = class MealOptionModule {
};
MealOptionModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([mealOption_entity_1.MealOption])],
        controllers: [mealOption_controller_1.MealOptionController],
        providers: [mealOption_service_1.MealtOptionService],
        exports: [mealOption_service_1.MealtOptionService],
    })
], MealOptionModule);
exports.MealOptionModule = MealOptionModule;
//# sourceMappingURL=message.modules.js.map