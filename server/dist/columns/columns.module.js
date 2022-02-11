"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColumnsModule = void 0;
const columns_service_1 = require("./columns.service");
const column_entity_1 = require("./column.entity");
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const columns_controller_1 = require("./columns.controller");
let ColumnsModule = class ColumnsModule {
};
ColumnsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([column_entity_1.ColumnEntity])
        ],
        providers: [columns_service_1.ColumnsService],
        controllers: [columns_controller_1.ColumnsController],
    })
], ColumnsModule);
exports.ColumnsModule = ColumnsModule;
//# sourceMappingURL=columns.module.js.map