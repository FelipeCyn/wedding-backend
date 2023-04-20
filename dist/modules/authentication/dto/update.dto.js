"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const register_dto_1 = require("./register.dto");
class UpdateDto extends mapped_types_1.PartialType(register_dto_1.default) {
}
exports.UpdateDto = UpdateDto;
//# sourceMappingURL=update.dto.js.map