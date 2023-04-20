"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealOptionController = void 0;
const common_1 = require("@nestjs/common");
const create_mealOption_dto_1 = require("./dto/create-mealOption.dto");
const mealOption_service_1 = require("./mealOption.service");
let MealOptionController = class MealOptionController {
    constructor(mealtOptionService) {
        this.mealtOptionService = mealtOptionService;
    }
    findAll() {
        return this.mealtOptionService.findAll();
    }
    findOne(id) {
        return this.mealtOptionService.findOne(id);
    }
    create(CreateMealOptionDto) {
        return this.mealtOptionService.create(CreateMealOptionDto);
    }
    update(id, body) {
        return this.mealtOptionService.update(id, body);
    }
    remove(id) {
        return this.mealtOptionService.remove(id);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MealOptionController.prototype, "findAll", null);
__decorate([
    common_1.Get(":id"),
    __param(0, common_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], MealOptionController.prototype, "findOne", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_mealOption_dto_1.CreateMealOptionDto]),
    __metadata("design:returntype", void 0)
], MealOptionController.prototype, "create", null);
__decorate([
    common_1.Patch(":id"),
    __param(0, common_1.Param("id")),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], MealOptionController.prototype, "update", null);
__decorate([
    common_1.Delete(":id"),
    __param(0, common_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], MealOptionController.prototype, "remove", null);
MealOptionController = __decorate([
    common_1.Controller("mealOption"),
    __metadata("design:paramtypes", [mealOption_service_1.MealtOptionService])
], MealOptionController);
exports.MealOptionController = MealOptionController;
//# sourceMappingURL=mealOption.controller.js.map