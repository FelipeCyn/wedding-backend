"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMealOptionDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_mealOption_dto_1 = require("./create-mealOption.dto");
class UpdateMealOptionDto extends mapped_types_1.PartialType(create_mealOption_dto_1.CreateMealOptionDto) {
}
exports.UpdateMealOptionDto = UpdateMealOptionDto;
//# sourceMappingURL=update-mealOption.dto.js.map