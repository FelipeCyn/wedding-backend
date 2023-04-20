"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMessageGroupDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_messageGroup_dto_1 = require("./create-messageGroup.dto");
class UpdateMessageGroupDto extends mapped_types_1.PartialType(create_messageGroup_dto_1.CreateMessageGroupDto) {
}
exports.UpdateMessageGroupDto = UpdateMessageGroupDto;
//# sourceMappingURL=update-messageGroup.dto.js.map