"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateGroupGuestDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_groupGuest_dto_1 = require("./create-groupGuest.dto");
class UpdateGroupGuestDto extends mapped_types_1.PartialType(create_groupGuest_dto_1.CreateGroupGuestDto) {
}
exports.UpdateGroupGuestDto = UpdateGroupGuestDto;
//# sourceMappingURL=update-group.dto.js.map