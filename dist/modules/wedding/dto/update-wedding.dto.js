"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateWeddingDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_wedding_dto_1 = require("./create-wedding.dto");
class UpdateWeddingDto extends mapped_types_1.PartialType(create_wedding_dto_1.CreateWeddingDto) {
}
exports.UpdateWeddingDto = UpdateWeddingDto;
//# sourceMappingURL=update-wedding.dto.js.map