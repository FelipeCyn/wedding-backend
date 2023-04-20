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
exports.GroupService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const group_entity_1 = require("./group.entity");
let GroupService = class GroupService {
    constructor(groupRepository) {
        this.groupRepository = groupRepository;
    }
    findAll() {
        return this.groupRepository.find();
    }
    async findOne(id) {
        const message = await this.groupRepository.findOne(id);
        if (!message) {
            throw new common_1.NotFoundException(`message #${id} not found`);
        }
        return message;
    }
    create(createGroupDto) {
        const message = this.groupRepository.create(createGroupDto);
        return this.groupRepository.save(message);
    }
    async update(id, updateGroupDto) {
        const message = await this.groupRepository.preload(Object.assign({ id: +id }, updateGroupDto));
        if (!message) {
            throw new common_1.NotFoundException(`Message #${id} not found`);
        }
        return this.groupRepository.save(message);
    }
    async remove(id) {
        const message = await this.findOne(id);
        if (!message) {
            throw new common_1.NotFoundException(`message #${id} not found`);
        }
        return this.groupRepository.remove(message);
    }
    async getById(id) {
        const message = await this.groupRepository.findOne({ id });
        if (message) {
            return message;
        }
        throw new common_1.NotFoundException("message with id email does not exist");
    }
};
GroupService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(group_entity_1.Group)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], GroupService);
exports.GroupService = GroupService;
//# sourceMappingURL=group.service.js.map