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
exports.GuestService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const guest_entity_1 = require("./guest.entity");
let GuestService = class GuestService {
    constructor(guestRepository) {
        this.guestRepository = guestRepository;
    }
    findAll() {
        return this.guestRepository.find();
    }
    async findOne(id) {
        const message = await this.guestRepository.findOne(id);
        if (!message) {
            throw new common_1.NotFoundException(`message #${id} not found`);
        }
        return message;
    }
    create(createMessagesDto) {
        const message = this.guestRepository.create(createMessagesDto);
        return this.guestRepository.save(message);
    }
    async update(id, UpdateMessageDto) {
        const message = await this.guestRepository.preload(Object.assign({ id: +id }, UpdateMessageDto));
        if (!message) {
            throw new common_1.NotFoundException(`Message #${id} not found`);
        }
        return this.guestRepository.save(message);
    }
    async remove(id) {
        const message = await this.findOne(id);
        if (!message) {
            throw new common_1.NotFoundException(`message #${id} not found`);
        }
        return this.guestRepository.remove(message);
    }
    async getById(id) {
        const message = await this.guestRepository.findOne({ id });
        if (message) {
            return message;
        }
        throw new common_1.NotFoundException("message with id email does not exist");
    }
};
GuestService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(guest_entity_1.Guest)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], GuestService);
exports.GuestService = GuestService;
//# sourceMappingURL=guest.service.js.map