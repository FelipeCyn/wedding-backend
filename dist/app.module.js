"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const users_module_1 = require("./modules/users/users.module");
const config_1 = require("@nestjs/config");
const Joi = require("@hapi/joi");
const database_module_1 = require("./modules/database/database.module");
const authentication_module_1 = require("./modules/authentication/authentication.module");
const message_modules_1 = require("./modules/message/message.modules");
const guest_modules_1 = require("./modules/guest/guest.modules");
const wedding_modules_1 = require("./modules/wedding/wedding.modules");
const message_modules_2 = require("./modules/mealOption/message.modules");
const group_modules_1 = require("./modules/group/group.modules");
const group_modules_2 = require("./modules/groupGuest/group.modules");
const messageGroup_modules_1 = require("./modules/messageGroup/messageGroup.modules");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            database_module_1.DatabaseModule,
            config_1.ConfigModule.forRoot({
                validationSchema: Joi.object({
                    POSTGRES_HOST: Joi.string().required(),
                    POSTGRES_PORT: Joi.number().required(),
                    POSTGRES_USER: Joi.string().required(),
                    POSTGRES_PASSWORD: Joi.string().required(),
                    POSTGRES_DB: Joi.string().required(),
                    PORT: Joi.number(),
                    JWT_SECRET: Joi.string().required(),
                    JWT_EXPIRATION_TIME: Joi.string().required(),
                    JWT_REFRESH_TOKEN_SECRET: Joi.string().required(),
                    JWT_REFRESH_TOKEN_EXPIRATION_TIME: Joi.string().required(),
                }),
            }),
            authentication_module_1.AuthenticationModule,
            users_module_1.UsersModule,
            message_modules_1.MessageModule,
            guest_modules_1.GuestModule,
            wedding_modules_1.WeddingModule,
            message_modules_2.MealOptionModule,
            group_modules_1.GroupModule,
            group_modules_2.GroupGuestModule,
            messageGroup_modules_1.MessageGroupModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map