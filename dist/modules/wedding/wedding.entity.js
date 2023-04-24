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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wedding = void 0;
const typeorm_1 = require("typeorm");
let Wedding = class Wedding {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Wedding.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], Wedding.prototype, "date", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], Wedding.prototype, "time", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Wedding.prototype, "address", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], Wedding.prototype, "mealResponses", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Wedding.prototype, "userId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], Wedding.prototype, "rsvps", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], Wedding.prototype, "trial", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Wedding.prototype, "status", void 0);
Wedding = __decorate([
    typeorm_1.Entity()
], Wedding);
exports.Wedding = Wedding;
//# sourceMappingURL=wedding.entity.js.map