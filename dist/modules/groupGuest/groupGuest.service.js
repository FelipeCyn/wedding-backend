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
exports.GroupGuestService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const groupGuest_entity_1 = require("./groupGuest.entity");
let GroupGuestService = class GroupGuestService {
    constructor(groupGuestRepository) {
        this.groupGuestRepository = groupGuestRepository;
    }
    findAll() {
        return this.groupGuestRepository.find();
    }
    async findOne(id) {
        const message = await this.groupGuestRepository.findOne(id);
        if (!message) {
            throw new common_1.NotFoundException(`message #${id} not found`);
        }
        return message;
    }
    create(createGroupGuestDto) {
        const message = this.groupGuestRepository.create(createGroupGuestDto);
        return this.groupGuestRepository.save(message);
    }
    async update(id, updateGroupGuestDto) {
        const message = await this.groupGuestRepository.preload(Object.assign({ id: +id }, updateGroupGuestDto));
        if (!message) {
            throw new common_1.NotFoundException(`Message #${id} not found`);
        }
        return this.groupGuestRepository.save(message);
    }
    async remove(id) {
        const message = await this.findOne(id);
        if (!message) {
            throw new common_1.NotFoundException(`message #${id} not found`);
        }
        return this.groupGuestRepository.remove(message);
    }
    async getById(id) {
        const message = await this.groupGuestRepository.findOne({ id });
        if (message) {
            return message;
        }
        throw new common_1.NotFoundException("message with id email does not exist");
    }
};
GroupGuestService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(groupGuest_entity_1.GroupGuest)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], GroupGuestService);
exports.GroupGuestService = GroupGuestService;
//# sourceMappingURL=groupGuest.service.js.map