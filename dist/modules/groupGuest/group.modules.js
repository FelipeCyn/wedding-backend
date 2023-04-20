"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupGuestModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const groupGuest_controller_1 = require("./groupGuest.controller");
const groupGuest_entity_1 = require("./groupGuest.entity");
const groupGuest_service_1 = require("./groupGuest.service");
let GroupGuestModule = class GroupGuestModule {
};
GroupGuestModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([groupGuest_entity_1.GroupGuest])],
        controllers: [groupGuest_controller_1.GroupGuestController],
        providers: [groupGuest_service_1.GroupGuestService],
        exports: [groupGuest_service_1.GroupGuestService],
    })
], GroupGuestModule);
exports.GroupGuestModule = GroupGuestModule;
//# sourceMappingURL=group.modules.js.map