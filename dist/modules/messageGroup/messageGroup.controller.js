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
exports.MessageGroupController = void 0;
const common_1 = require("@nestjs/common");
const create_messageGroup_dto_1 = require("./dto/create-messageGroup.dto");
const messageGroup_service_1 = require("./messageGroup.service");
let MessageGroupController = class MessageGroupController {
    constructor(messageGroupService) {
        this.messageGroupService = messageGroupService;
    }
    findAll() {
        return this.messageGroupService.findAll();
    }
    findOne(id) {
        return this.messageGroupService.findOne(id);
    }
    create(CreateMessageGroupDto) {
        return this.messageGroupService.create(CreateMessageGroupDto);
    }
    update(id, body) {
        return this.messageGroupService.update(id, body);
    }
    remove(id) {
        return this.messageGroupService.remove(id);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MessageGroupController.prototype, "findAll", null);
__decorate([
    common_1.Get(":id"),
    __param(0, common_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], MessageGroupController.prototype, "findOne", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_messageGroup_dto_1.CreateMessageGroupDto]),
    __metadata("design:returntype", void 0)
], MessageGroupController.prototype, "create", null);
__decorate([
    common_1.Patch(":id"),
    __param(0, common_1.Param("id")),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], MessageGroupController.prototype, "update", null);
__decorate([
    common_1.Delete(":id"),
    __param(0, common_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], MessageGroupController.prototype, "remove", null);
MessageGroupController = __decorate([
    common_1.Controller("message-group"),
    __metadata("design:paramtypes", [messageGroup_service_1.MessageGroupService])
], MessageGroupController);
exports.MessageGroupController = MessageGroupController;
//# sourceMappingURL=messageGroup.controller.js.map